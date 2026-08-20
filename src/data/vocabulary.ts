import { JLPTLevel } from './kanji';

export interface Vocabulary {
  word: string;
  reading: string;
  meaning: string;
  jlptLevel: JLPTLevel;
  sentence?: string;
  sentenceReading?: string;
  sentenceMeaning?: string;
}

export const vocabularyData: Vocabulary[] = [
  {
    word: "学校",
    reading: "がっこう",
    meaning: "school",
    jlptLevel: "N5",
    sentence: "学校へ行きます。",
    sentenceReading: "がっこうへいきます。",
    sentenceMeaning: "I go to school."
  },
  {
    word: "学生",
    reading: "がくせい",
    meaning: "student",
    jlptLevel: "N5",
    sentence: "私は学生です。",
    sentenceReading: "わたしはがくせいです。",
    sentenceMeaning: "I am a student."
  },
  {
    word: "勉強",
    reading: "べんきょう",
    meaning: "study",
    jlptLevel: "N4",
    sentence: "日本語を勉強します。",
    sentenceReading: "にほんごをべんきょうします。",
    sentenceMeaning: "I study Japanese."
  },
  {
    word: "関係",
    reading: "かんけい",
    meaning: "relationship",
    jlptLevel: "N3",
    sentence: "彼とはいい関係です。",
    sentenceReading: "かれとはいいかんけいです。",
    sentenceMeaning: "I have a good relationship with him."
  },
  {
    word: "複雑",
    reading: "ふくざつ",
    meaning: "complex, complicated",
    jlptLevel: "N2",
    sentence: "複雑な問題ですね。",
    sentenceReading: "ふくざつなもんだいですね。",
    sentenceMeaning: "It's a complex problem, isn't it?"
  }
];
