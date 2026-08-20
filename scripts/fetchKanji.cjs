const fs = require('fs');
const https = require('https');

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          console.error("Failed to parse JSON", e);
          resolve(null);
        }
      });
    }).on('error', reject);
  });
}

async function delay(ms) {
  return new Promise(res => setTimeout(res, ms));
}

async function main() {
  console.log('Fetching JLPT lists from kanjiapi.dev...');
  
  const levels = [
    { id: 'N5', endpoint: 'jlpt-5' },
    { id: 'N4', endpoint: 'jlpt-4' },
    { id: 'N3', endpoint: 'jlpt-3' },
    { id: 'N2', endpoint: 'jlpt-2' }
  ];

  let allKanji = [];
  
  for (const { id, endpoint } of levels) {
    console.log(`Fetching list for ${id}...`);
    const charList = await fetchJson(`https://kanjiapi.dev/v1/kanji/${endpoint}`);
    console.log(`Found ${charList.length} kanji for ${id}`);
    
    // Batch processing to speed up while avoiding too much rate limiting
    const batchSize = 20;
    for (let i = 0; i < charList.length; i += batchSize) {
      const batch = charList.slice(i, i + batchSize);
      
      const promises = batch.map(async (k) => {
        const details = await fetchJson(`https://kanjiapi.dev/v1/kanji/${encodeURIComponent(k)}`);
        if (details && !details.error) {
          return {
            kanji: k,
            meanings: details.meanings.slice(0, 3),
            onyomi: details.on_readings || [],
            kunyomi: details.kun_readings || [],
            level: id,
            vocabulary: []
          };
        }
        return null;
      });
      
      const results = await Promise.all(promises);
      allKanji.push(...results.filter(Boolean));
      
      console.log(`Processed ${Math.min(i + batchSize, charList.length)} / ${charList.length} for ${id}`);
      await delay(100); // 100ms delay between batches
    }
  }

  console.log(`Writing ${allKanji.length} kanjis to file...`);

  let output = `export type JLPTLevel = 'N5' | 'N4' | 'N3' | 'N2';

export interface Kanji {
  kanji: string;
  meanings: string[];
  onyomi: string[];
  kunyomi: string[];
  level: JLPTLevel;
  vocabulary: { word: string; reading: string; meaning: string }[];
}

export const validKanjiData: Kanji[] = ` + JSON.stringify(allKanji, null, 2) + `;\n`;

  fs.writeFileSync('src/data/kanji.ts', output);
  console.log('Done!');
}

main().catch(console.error);
