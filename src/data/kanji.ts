export type JLPTLevel = 'N5' | 'N4' | 'N3' | 'N2';

export interface Kanji {
  kanji: string;
  meanings: string[];
  onyomi: string[];
  kunyomi: string[];
  level: JLPTLevel;
  vocabulary: { word: string; reading: string; meaning: string }[];
}

export const validKanjiData: Kanji[] = [
  {
    "kanji": "一",
    "meanings": [
      "one",
      "one radical (no.1)"
    ],
    "onyomi": [
      "イチ",
      "イツ"
    ],
    "kunyomi": [
      "ひと-",
      "ひと.つ"
    ],
    "level": "N5",
    "vocabulary": []
  },
  {
    "kanji": "七",
    "meanings": [
      "seven"
    ],
    "onyomi": [
      "シチ"
    ],
    "kunyomi": [
      "なな",
      "なな.つ",
      "なの"
    ],
    "level": "N5",
    "vocabulary": []
  },
  {
    "kanji": "万",
    "meanings": [
      "ten thousand",
      "10,000"
    ],
    "onyomi": [
      "マン",
      "バン"
    ],
    "kunyomi": [
      "よろず"
    ],
    "level": "N5",
    "vocabulary": []
  },
  {
    "kanji": "三",
    "meanings": [
      "three"
    ],
    "onyomi": [
      "サン",
      "ゾウ"
    ],
    "kunyomi": [
      "み",
      "み.つ",
      "みっ.つ"
    ],
    "level": "N5",
    "vocabulary": []
  },
  {
    "kanji": "上",
    "meanings": [
      "above",
      "up"
    ],
    "onyomi": [
      "ジョウ",
      "ショウ",
      "シャン"
    ],
    "kunyomi": [
      "うえ",
      "-うえ",
      "うわ-",
      "かみ",
      "あ.げる",
      "-あ.げる",
      "あ.がる",
      "-あ.がる",
      "あ.がり",
      "-あ.がり",
      "のぼ.る",
      "のぼ.り",
      "のぼ.せる",
      "のぼ.す",
      "たてまつ.る"
    ],
    "level": "N5",
    "vocabulary": []
  },
  {
    "kanji": "下",
    "meanings": [
      "below",
      "down",
      "descend"
    ],
    "onyomi": [
      "カ",
      "ゲ"
    ],
    "kunyomi": [
      "した",
      "しも",
      "もと",
      "さ.げる",
      "さ.がる",
      "くだ.る",
      "くだ.り",
      "くだ.す",
      "-くだ.す",
      "くだ.さる",
      "お.ろす",
      "お.りる"
    ],
    "level": "N5",
    "vocabulary": []
  },
  {
    "kanji": "中",
    "meanings": [
      "in",
      "inside",
      "middle"
    ],
    "onyomi": [
      "チュウ"
    ],
    "kunyomi": [
      "なか",
      "うち",
      "あた.る"
    ],
    "level": "N5",
    "vocabulary": []
  },
  {
    "kanji": "九",
    "meanings": [
      "nine"
    ],
    "onyomi": [
      "キュウ",
      "ク"
    ],
    "kunyomi": [
      "ここの",
      "ここの.つ"
    ],
    "level": "N5",
    "vocabulary": []
  },
  {
    "kanji": "二",
    "meanings": [
      "two",
      "two radical (no. 7)"
    ],
    "onyomi": [
      "ニ",
      "ジ"
    ],
    "kunyomi": [
      "ふた",
      "ふた.つ",
      "ふたたび"
    ],
    "level": "N5",
    "vocabulary": []
  },
  {
    "kanji": "五",
    "meanings": [
      "five"
    ],
    "onyomi": [
      "ゴ"
    ],
    "kunyomi": [
      "いつ",
      "いつ.つ"
    ],
    "level": "N5",
    "vocabulary": []
  },
  {
    "kanji": "人",
    "meanings": [
      "person"
    ],
    "onyomi": [
      "ジン",
      "ニン"
    ],
    "kunyomi": [
      "ひと",
      "-り",
      "-と"
    ],
    "level": "N5",
    "vocabulary": []
  },
  {
    "kanji": "今",
    "meanings": [
      "now"
    ],
    "onyomi": [
      "コン",
      "キン"
    ],
    "kunyomi": [
      "いま"
    ],
    "level": "N5",
    "vocabulary": []
  },
  {
    "kanji": "休",
    "meanings": [
      "rest",
      "day off",
      "retire"
    ],
    "onyomi": [
      "キュウ"
    ],
    "kunyomi": [
      "やす.む",
      "やす.まる",
      "やす.める"
    ],
    "level": "N5",
    "vocabulary": []
  },
  {
    "kanji": "何",
    "meanings": [
      "what"
    ],
    "onyomi": [
      "カ"
    ],
    "kunyomi": [
      "なに",
      "なん",
      "なに-",
      "なん-"
    ],
    "level": "N5",
    "vocabulary": []
  },
  {
    "kanji": "先",
    "meanings": [
      "before",
      "ahead",
      "previous"
    ],
    "onyomi": [
      "セン"
    ],
    "kunyomi": [
      "さき",
      "ま.ず"
    ],
    "level": "N5",
    "vocabulary": []
  },
  {
    "kanji": "入",
    "meanings": [
      "enter",
      "insert"
    ],
    "onyomi": [
      "ニュウ",
      "ジュ"
    ],
    "kunyomi": [
      "い.る",
      "-い.る",
      "-い.り",
      "い.れる",
      "-い.れ",
      "はい.る"
    ],
    "level": "N5",
    "vocabulary": []
  },
  {
    "kanji": "八",
    "meanings": [
      "eight",
      "eight radical (no. 12)"
    ],
    "onyomi": [
      "ハチ",
      "ハツ"
    ],
    "kunyomi": [
      "や",
      "や.つ",
      "やっ.つ",
      "よう"
    ],
    "level": "N5",
    "vocabulary": []
  },
  {
    "kanji": "六",
    "meanings": [
      "six"
    ],
    "onyomi": [
      "ロク",
      "リク"
    ],
    "kunyomi": [
      "む",
      "む.つ",
      "むっ.つ",
      "むい"
    ],
    "level": "N5",
    "vocabulary": []
  },
  {
    "kanji": "円",
    "meanings": [
      "circle",
      "yen",
      "round"
    ],
    "onyomi": [
      "エン"
    ],
    "kunyomi": [
      "まる.い",
      "まる",
      "まど",
      "まど.か",
      "まろ.やか"
    ],
    "level": "N5",
    "vocabulary": []
  },
  {
    "kanji": "出",
    "meanings": [
      "exit",
      "leave",
      "go out"
    ],
    "onyomi": [
      "シュツ",
      "スイ"
    ],
    "kunyomi": [
      "で.る",
      "-で",
      "だ.す",
      "-だ.す",
      "い.でる",
      "い.だす"
    ],
    "level": "N5",
    "vocabulary": []
  },
  {
    "kanji": "前",
    "meanings": [
      "in front",
      "before"
    ],
    "onyomi": [
      "ゼン"
    ],
    "kunyomi": [
      "まえ",
      "-まえ"
    ],
    "level": "N5",
    "vocabulary": []
  },
  {
    "kanji": "北",
    "meanings": [
      "north"
    ],
    "onyomi": [
      "ホク"
    ],
    "kunyomi": [
      "きた"
    ],
    "level": "N5",
    "vocabulary": []
  },
  {
    "kanji": "十",
    "meanings": [
      "ten"
    ],
    "onyomi": [
      "ジュウ",
      "ジッ",
      "ジュッ"
    ],
    "kunyomi": [
      "とお",
      "と",
      "そ"
    ],
    "level": "N5",
    "vocabulary": []
  },
  {
    "kanji": "千",
    "meanings": [
      "thousand"
    ],
    "onyomi": [
      "セン"
    ],
    "kunyomi": [
      "ち"
    ],
    "level": "N5",
    "vocabulary": []
  },
  {
    "kanji": "午",
    "meanings": [
      "noon",
      "sign of the horse",
      "11AM-1PM"
    ],
    "onyomi": [
      "ゴ"
    ],
    "kunyomi": [
      "うま"
    ],
    "level": "N5",
    "vocabulary": []
  },
  {
    "kanji": "半",
    "meanings": [
      "half",
      "middle",
      "odd number"
    ],
    "onyomi": [
      "ハン"
    ],
    "kunyomi": [
      "なか.ば"
    ],
    "level": "N5",
    "vocabulary": []
  },
  {
    "kanji": "南",
    "meanings": [
      "south"
    ],
    "onyomi": [
      "ナン",
      "ナ"
    ],
    "kunyomi": [
      "みなみ"
    ],
    "level": "N5",
    "vocabulary": []
  },
  {
    "kanji": "友",
    "meanings": [
      "friend"
    ],
    "onyomi": [
      "ユウ"
    ],
    "kunyomi": [
      "とも"
    ],
    "level": "N5",
    "vocabulary": []
  },
  {
    "kanji": "右",
    "meanings": [
      "right"
    ],
    "onyomi": [
      "ウ",
      "ユウ"
    ],
    "kunyomi": [
      "みぎ"
    ],
    "level": "N5",
    "vocabulary": []
  },
  {
    "kanji": "名",
    "meanings": [
      "name",
      "noted",
      "distinguished"
    ],
    "onyomi": [
      "メイ",
      "ミョウ"
    ],
    "kunyomi": [
      "な",
      "-な"
    ],
    "level": "N5",
    "vocabulary": []
  },
  {
    "kanji": "四",
    "meanings": [
      "four"
    ],
    "onyomi": [
      "シ"
    ],
    "kunyomi": [
      "よ",
      "よ.つ",
      "よっ.つ",
      "よん"
    ],
    "level": "N5",
    "vocabulary": []
  },
  {
    "kanji": "国",
    "meanings": [
      "country"
    ],
    "onyomi": [
      "コク"
    ],
    "kunyomi": [
      "くに"
    ],
    "level": "N5",
    "vocabulary": []
  },
  {
    "kanji": "土",
    "meanings": [
      "soil",
      "earth",
      "ground"
    ],
    "onyomi": [
      "ド",
      "ト"
    ],
    "kunyomi": [
      "つち"
    ],
    "level": "N5",
    "vocabulary": []
  },
  {
    "kanji": "外",
    "meanings": [
      "outside"
    ],
    "onyomi": [
      "ガイ",
      "ゲ"
    ],
    "kunyomi": [
      "そと",
      "ほか",
      "はず.す",
      "はず.れる",
      "と-"
    ],
    "level": "N5",
    "vocabulary": []
  },
  {
    "kanji": "大",
    "meanings": [
      "large",
      "big"
    ],
    "onyomi": [
      "ダイ",
      "タイ"
    ],
    "kunyomi": [
      "おお-",
      "おお.きい",
      "-おお.いに"
    ],
    "level": "N5",
    "vocabulary": []
  },
  {
    "kanji": "天",
    "meanings": [
      "heavens",
      "sky",
      "imperial"
    ],
    "onyomi": [
      "テン"
    ],
    "kunyomi": [
      "あまつ",
      "あめ",
      "あま-"
    ],
    "level": "N5",
    "vocabulary": []
  },
  {
    "kanji": "女",
    "meanings": [
      "woman",
      "female"
    ],
    "onyomi": [
      "ジョ",
      "ニョ",
      "ニョウ"
    ],
    "kunyomi": [
      "おんな",
      "め"
    ],
    "level": "N5",
    "vocabulary": []
  },
  {
    "kanji": "子",
    "meanings": [
      "child",
      "sign of the rat",
      "11PM-1AM"
    ],
    "onyomi": [
      "シ",
      "ス",
      "ツ"
    ],
    "kunyomi": [
      "こ",
      "-こ",
      "ね"
    ],
    "level": "N5",
    "vocabulary": []
  },
  {
    "kanji": "学",
    "meanings": [
      "study",
      "learning",
      "science"
    ],
    "onyomi": [
      "ガク"
    ],
    "kunyomi": [
      "まな.ぶ"
    ],
    "level": "N5",
    "vocabulary": []
  },
  {
    "kanji": "小",
    "meanings": [
      "little",
      "small"
    ],
    "onyomi": [
      "ショウ"
    ],
    "kunyomi": [
      "ちい.さい",
      "こ-",
      "お-",
      "さ-"
    ],
    "level": "N5",
    "vocabulary": []
  },
  {
    "kanji": "山",
    "meanings": [
      "mountain"
    ],
    "onyomi": [
      "サン",
      "セン"
    ],
    "kunyomi": [
      "やま"
    ],
    "level": "N5",
    "vocabulary": []
  },
  {
    "kanji": "川",
    "meanings": [
      "stream",
      "river",
      "river or three-stroke river radical (no. 47)"
    ],
    "onyomi": [
      "セン"
    ],
    "kunyomi": [
      "かわ"
    ],
    "level": "N5",
    "vocabulary": []
  },
  {
    "kanji": "左",
    "meanings": [
      "left"
    ],
    "onyomi": [
      "サ",
      "シャ"
    ],
    "kunyomi": [
      "ひだり"
    ],
    "level": "N5",
    "vocabulary": []
  },
  {
    "kanji": "年",
    "meanings": [
      "year",
      "counter for years"
    ],
    "onyomi": [
      "ネン"
    ],
    "kunyomi": [
      "とし"
    ],
    "level": "N5",
    "vocabulary": []
  },
  {
    "kanji": "後",
    "meanings": [
      "behind",
      "back",
      "later"
    ],
    "onyomi": [
      "ゴ",
      "コウ"
    ],
    "kunyomi": [
      "のち",
      "うし.ろ",
      "うしろ",
      "あと",
      "おく.れる"
    ],
    "level": "N5",
    "vocabulary": []
  },
  {
    "kanji": "日",
    "meanings": [
      "day",
      "sun",
      "Japan"
    ],
    "onyomi": [
      "ニチ",
      "ジツ"
    ],
    "kunyomi": [
      "ひ",
      "-び",
      "-か"
    ],
    "level": "N5",
    "vocabulary": []
  },
  {
    "kanji": "時",
    "meanings": [
      "time",
      "hour"
    ],
    "onyomi": [
      "ジ"
    ],
    "kunyomi": [
      "とき",
      "-どき"
    ],
    "level": "N5",
    "vocabulary": []
  },
  {
    "kanji": "書",
    "meanings": [
      "write"
    ],
    "onyomi": [
      "ショ"
    ],
    "kunyomi": [
      "か.く",
      "-が.き",
      "-がき"
    ],
    "level": "N5",
    "vocabulary": []
  },
  {
    "kanji": "月",
    "meanings": [
      "month",
      "moon"
    ],
    "onyomi": [
      "ゲツ",
      "ガツ"
    ],
    "kunyomi": [
      "つき"
    ],
    "level": "N5",
    "vocabulary": []
  },
  {
    "kanji": "木",
    "meanings": [
      "tree",
      "wood"
    ],
    "onyomi": [
      "ボク",
      "モク"
    ],
    "kunyomi": [
      "き",
      "こ-"
    ],
    "level": "N5",
    "vocabulary": []
  },
  {
    "kanji": "本",
    "meanings": [
      "book",
      "present",
      "main"
    ],
    "onyomi": [
      "ホン"
    ],
    "kunyomi": [
      "もと"
    ],
    "level": "N5",
    "vocabulary": []
  },
  {
    "kanji": "来",
    "meanings": [
      "come",
      "due",
      "next"
    ],
    "onyomi": [
      "ライ",
      "タイ"
    ],
    "kunyomi": [
      "く.る",
      "きた.る",
      "きた.す",
      "き.たす",
      "き.たる",
      "き",
      "こ"
    ],
    "level": "N5",
    "vocabulary": []
  },
  {
    "kanji": "東",
    "meanings": [
      "east"
    ],
    "onyomi": [
      "トウ"
    ],
    "kunyomi": [
      "ひがし"
    ],
    "level": "N5",
    "vocabulary": []
  },
  {
    "kanji": "校",
    "meanings": [
      "exam",
      "school",
      "printing"
    ],
    "onyomi": [
      "コウ",
      "キョウ"
    ],
    "kunyomi": [],
    "level": "N5",
    "vocabulary": []
  },
  {
    "kanji": "母",
    "meanings": [
      "mother"
    ],
    "onyomi": [
      "ボ"
    ],
    "kunyomi": [
      "はは",
      "も"
    ],
    "level": "N5",
    "vocabulary": []
  },
  {
    "kanji": "毎",
    "meanings": [
      "every"
    ],
    "onyomi": [
      "マイ"
    ],
    "kunyomi": [
      "ごと",
      "-ごと.に"
    ],
    "level": "N5",
    "vocabulary": []
  },
  {
    "kanji": "気",
    "meanings": [
      "spirit",
      "mind",
      "air"
    ],
    "onyomi": [
      "キ",
      "ケ"
    ],
    "kunyomi": [
      "いき",
      "き"
    ],
    "level": "N5",
    "vocabulary": []
  },
  {
    "kanji": "水",
    "meanings": [
      "water"
    ],
    "onyomi": [
      "スイ"
    ],
    "kunyomi": [
      "みず",
      "みず-"
    ],
    "level": "N5",
    "vocabulary": []
  },
  {
    "kanji": "火",
    "meanings": [
      "fire"
    ],
    "onyomi": [
      "カ"
    ],
    "kunyomi": [
      "ひ",
      "-び",
      "ほ-"
    ],
    "level": "N5",
    "vocabulary": []
  },
  {
    "kanji": "父",
    "meanings": [
      "father"
    ],
    "onyomi": [
      "フ"
    ],
    "kunyomi": [
      "ちち"
    ],
    "level": "N5",
    "vocabulary": []
  },
  {
    "kanji": "生",
    "meanings": [
      "life",
      "genuine",
      "birth"
    ],
    "onyomi": [
      "セイ",
      "ショウ"
    ],
    "kunyomi": [
      "い.きる",
      "い.かす",
      "い.ける",
      "う.まれる",
      "うま.れる",
      "う.まれ",
      "うまれ",
      "う.む",
      "お.う",
      "は.える",
      "は.やす",
      "き",
      "なま",
      "なま-",
      "な.る",
      "な.す",
      "む.す",
      "-う"
    ],
    "level": "N5",
    "vocabulary": []
  },
  {
    "kanji": "男",
    "meanings": [
      "male"
    ],
    "onyomi": [
      "ダン",
      "ナン"
    ],
    "kunyomi": [
      "おとこ",
      "お"
    ],
    "level": "N5",
    "vocabulary": []
  },
  {
    "kanji": "白",
    "meanings": [
      "white"
    ],
    "onyomi": [
      "ハク",
      "ビャク"
    ],
    "kunyomi": [
      "しろ",
      "しら-",
      "しろ.い"
    ],
    "level": "N5",
    "vocabulary": []
  },
  {
    "kanji": "百",
    "meanings": [
      "hundred"
    ],
    "onyomi": [
      "ヒャク",
      "ビャク"
    ],
    "kunyomi": [
      "もも"
    ],
    "level": "N5",
    "vocabulary": []
  },
  {
    "kanji": "聞",
    "meanings": [
      "hear",
      "ask",
      "listen"
    ],
    "onyomi": [
      "ブン",
      "モン"
    ],
    "kunyomi": [
      "き.く",
      "き.こえる"
    ],
    "level": "N5",
    "vocabulary": []
  },
  {
    "kanji": "行",
    "meanings": [
      "going",
      "journey",
      "carry out"
    ],
    "onyomi": [
      "コウ",
      "ギョウ",
      "アン"
    ],
    "kunyomi": [
      "い.く",
      "ゆ.く",
      "-ゆ.き",
      "-ゆき",
      "-い.き",
      "-いき",
      "おこな.う",
      "おこ.なう"
    ],
    "level": "N5",
    "vocabulary": []
  },
  {
    "kanji": "西",
    "meanings": [
      "west",
      "Spain"
    ],
    "onyomi": [
      "セイ",
      "サイ",
      "ス"
    ],
    "kunyomi": [
      "にし"
    ],
    "level": "N5",
    "vocabulary": []
  },
  {
    "kanji": "見",
    "meanings": [
      "see",
      "hopes",
      "chances"
    ],
    "onyomi": [
      "ケン"
    ],
    "kunyomi": [
      "み.る",
      "み.える",
      "み.せる"
    ],
    "level": "N5",
    "vocabulary": []
  },
  {
    "kanji": "話",
    "meanings": [
      "tale",
      "talk"
    ],
    "onyomi": [
      "ワ"
    ],
    "kunyomi": [
      "はな.す",
      "はなし"
    ],
    "level": "N5",
    "vocabulary": []
  },
  {
    "kanji": "語",
    "meanings": [
      "word",
      "speech",
      "language"
    ],
    "onyomi": [
      "ゴ"
    ],
    "kunyomi": [
      "かた.る",
      "かた.らう"
    ],
    "level": "N5",
    "vocabulary": []
  },
  {
    "kanji": "読",
    "meanings": [
      "read"
    ],
    "onyomi": [
      "ドク",
      "トク",
      "トウ"
    ],
    "kunyomi": [
      "よ.む",
      "-よ.み"
    ],
    "level": "N5",
    "vocabulary": []
  },
  {
    "kanji": "車",
    "meanings": [
      "car"
    ],
    "onyomi": [
      "シャ"
    ],
    "kunyomi": [
      "くるま"
    ],
    "level": "N5",
    "vocabulary": []
  },
  {
    "kanji": "金",
    "meanings": [
      "gold"
    ],
    "onyomi": [
      "キン",
      "コン",
      "ゴン"
    ],
    "kunyomi": [
      "かね",
      "かな-",
      "-がね"
    ],
    "level": "N5",
    "vocabulary": []
  },
  {
    "kanji": "長",
    "meanings": [
      "long",
      "leader",
      "superior"
    ],
    "onyomi": [
      "チョウ"
    ],
    "kunyomi": [
      "なが.い",
      "おさ"
    ],
    "level": "N5",
    "vocabulary": []
  },
  {
    "kanji": "間",
    "meanings": [
      "interval",
      "space"
    ],
    "onyomi": [
      "カン",
      "ケン"
    ],
    "kunyomi": [
      "あいだ",
      "ま",
      "あい"
    ],
    "level": "N5",
    "vocabulary": []
  },
  {
    "kanji": "雨",
    "meanings": [
      "rain"
    ],
    "onyomi": [
      "ウ"
    ],
    "kunyomi": [
      "あめ",
      "あま-",
      "-さめ"
    ],
    "level": "N5",
    "vocabulary": []
  },
  {
    "kanji": "電",
    "meanings": [
      "electricity"
    ],
    "onyomi": [
      "デン"
    ],
    "kunyomi": [],
    "level": "N5",
    "vocabulary": []
  },
  {
    "kanji": "食",
    "meanings": [
      "eat",
      "food"
    ],
    "onyomi": [
      "ショク",
      "ジキ"
    ],
    "kunyomi": [
      "く.う",
      "く.らう",
      "た.べる",
      "は.む"
    ],
    "level": "N5",
    "vocabulary": []
  },
  {
    "kanji": "高",
    "meanings": [
      "tall",
      "high",
      "expensive"
    ],
    "onyomi": [
      "コウ"
    ],
    "kunyomi": [
      "たか.い",
      "たか",
      "-だか",
      "たか.まる",
      "たか.める"
    ],
    "level": "N5",
    "vocabulary": []
  },
  {
    "kanji": "不",
    "meanings": [
      "negative",
      "non-",
      "bad"
    ],
    "onyomi": [
      "フ",
      "ブ"
    ],
    "kunyomi": [],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "世",
    "meanings": [
      "generation",
      "world",
      "society"
    ],
    "onyomi": [
      "セイ",
      "セ",
      "ソウ"
    ],
    "kunyomi": [
      "よ"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "主",
    "meanings": [
      "lord",
      "chief",
      "master"
    ],
    "onyomi": [
      "シュ",
      "ス",
      "シュウ"
    ],
    "kunyomi": [
      "ぬし",
      "おも",
      "あるじ"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "事",
    "meanings": [
      "matter",
      "thing",
      "fact"
    ],
    "onyomi": [
      "ジ",
      "ズ"
    ],
    "kunyomi": [
      "こと",
      "つか.う",
      "つか.える"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "京",
    "meanings": [
      "capital",
      "10**16"
    ],
    "onyomi": [
      "キョウ",
      "ケイ",
      "キン"
    ],
    "kunyomi": [
      "みやこ"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "仕",
    "meanings": [
      "attend",
      "doing",
      "official"
    ],
    "onyomi": [
      "シ",
      "ジ"
    ],
    "kunyomi": [
      "つか.える"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "代",
    "meanings": [
      "substitute",
      "change",
      "convert"
    ],
    "onyomi": [
      "ダイ",
      "タイ"
    ],
    "kunyomi": [
      "か.わる",
      "かわ.る",
      "かわ.り",
      "か.わり",
      "-がわ.り",
      "-が.わり",
      "か.える",
      "よ",
      "しろ"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "以",
    "meanings": [
      "by means of",
      "because",
      "in view of"
    ],
    "onyomi": [
      "イ"
    ],
    "kunyomi": [
      "もっ.て"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "会",
    "meanings": [
      "meeting",
      "meet",
      "party"
    ],
    "onyomi": [
      "カイ",
      "エ"
    ],
    "kunyomi": [
      "あ.う",
      "あ.わせる",
      "あつ.まる"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "住",
    "meanings": [
      "dwell",
      "reside",
      "live"
    ],
    "onyomi": [
      "ジュウ",
      "ヂュウ",
      "チュウ"
    ],
    "kunyomi": [
      "す.む",
      "す.まう",
      "-ず.まい"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "体",
    "meanings": [
      "body",
      "substance",
      "object"
    ],
    "onyomi": [
      "タイ",
      "テイ"
    ],
    "kunyomi": [
      "からだ",
      "かたち"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "作",
    "meanings": [
      "make",
      "production",
      "prepare"
    ],
    "onyomi": [
      "サク",
      "サ"
    ],
    "kunyomi": [
      "つく.る",
      "つく.り",
      "-づく.り"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "使",
    "meanings": [
      "use",
      "send on a mission",
      "order"
    ],
    "onyomi": [
      "シ"
    ],
    "kunyomi": [
      "つか.う",
      "つか.い",
      "-つか.い",
      "-づか.い"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "借",
    "meanings": [
      "borrow",
      "rent"
    ],
    "onyomi": [
      "シャク"
    ],
    "kunyomi": [
      "か.りる"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "元",
    "meanings": [
      "beginning",
      "former time",
      "origin"
    ],
    "onyomi": [
      "ゲン",
      "ガン"
    ],
    "kunyomi": [
      "もと"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "兄",
    "meanings": [
      "elder brother",
      "big brother"
    ],
    "onyomi": [
      "ケイ",
      "キョウ"
    ],
    "kunyomi": [
      "あに"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "公",
    "meanings": [
      "public",
      "prince",
      "official"
    ],
    "onyomi": [
      "コウ",
      "ク"
    ],
    "kunyomi": [
      "おおやけ"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "写",
    "meanings": [
      "copy",
      "be photographed",
      "describe"
    ],
    "onyomi": [
      "シャ",
      "ジャ"
    ],
    "kunyomi": [
      "うつ.す",
      "うつ.る",
      "うつ-",
      "うつ.し"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "冬",
    "meanings": [
      "winter"
    ],
    "onyomi": [
      "トウ"
    ],
    "kunyomi": [
      "ふゆ"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "切",
    "meanings": [
      "cut",
      "cutoff",
      "be sharp"
    ],
    "onyomi": [
      "セツ",
      "サイ"
    ],
    "kunyomi": [
      "き.る",
      "-き.る",
      "き.り",
      "-き.り",
      "-ぎ.り",
      "き.れる",
      "-き.れる",
      "き.れ",
      "-き.れ",
      "-ぎ.れ"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "別",
    "meanings": [
      "separate",
      "branch off",
      "diverge"
    ],
    "onyomi": [
      "ベツ"
    ],
    "kunyomi": [
      "わか.れる",
      "わ.ける"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "力",
    "meanings": [
      "power",
      "strength",
      "strong"
    ],
    "onyomi": [
      "リョク",
      "リキ",
      "リイ"
    ],
    "kunyomi": [
      "ちから"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "勉",
    "meanings": [
      "exertion",
      "endeavour",
      "encourage"
    ],
    "onyomi": [
      "ベン"
    ],
    "kunyomi": [
      "つと.める"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "動",
    "meanings": [
      "move",
      "motion",
      "change"
    ],
    "onyomi": [
      "ドウ"
    ],
    "kunyomi": [
      "うご.く",
      "うご.かす"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "医",
    "meanings": [
      "doctor",
      "medicine"
    ],
    "onyomi": [
      "イ"
    ],
    "kunyomi": [
      "い.やす",
      "い.する",
      "くすし"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "去",
    "meanings": [
      "gone",
      "past",
      "quit"
    ],
    "onyomi": [
      "キョ",
      "コ"
    ],
    "kunyomi": [
      "さ.る",
      "-さ.る"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "口",
    "meanings": [
      "mouth"
    ],
    "onyomi": [
      "コウ",
      "ク"
    ],
    "kunyomi": [
      "くち"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "古",
    "meanings": [
      "old"
    ],
    "onyomi": [
      "コ"
    ],
    "kunyomi": [
      "ふる.い",
      "ふる-",
      "-ふる.す"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "台",
    "meanings": [
      "pedestal",
      "a stand",
      "counter for machines and vehicles"
    ],
    "onyomi": [
      "ダイ",
      "タイ"
    ],
    "kunyomi": [
      "うてな",
      "われ",
      "つかさ"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "同",
    "meanings": [
      "same",
      "agree",
      "equal"
    ],
    "onyomi": [
      "ドウ"
    ],
    "kunyomi": [
      "おな.じ"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "味",
    "meanings": [
      "flavor",
      "taste"
    ],
    "onyomi": [
      "ミ"
    ],
    "kunyomi": [
      "あじ",
      "あじ.わう"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "品",
    "meanings": [
      "goods",
      "refinement",
      "dignity"
    ],
    "onyomi": [
      "ヒン",
      "ホン"
    ],
    "kunyomi": [
      "しな"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "員",
    "meanings": [
      "employee",
      "member",
      "number"
    ],
    "onyomi": [
      "イン"
    ],
    "kunyomi": [],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "問",
    "meanings": [
      "question",
      "ask",
      "problem"
    ],
    "onyomi": [
      "モン"
    ],
    "kunyomi": [
      "と.う",
      "と.い",
      "とん"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "図",
    "meanings": [
      "map",
      "drawing",
      "plan"
    ],
    "onyomi": [
      "ズ",
      "ト"
    ],
    "kunyomi": [
      "え",
      "はか.る"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "地",
    "meanings": [
      "ground",
      "earth"
    ],
    "onyomi": [
      "チ",
      "ジ"
    ],
    "kunyomi": [],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "堂",
    "meanings": [
      "public chamber",
      "hall"
    ],
    "onyomi": [
      "ドウ"
    ],
    "kunyomi": [],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "場",
    "meanings": [
      "location",
      "place"
    ],
    "onyomi": [
      "ジョウ",
      "チョウ"
    ],
    "kunyomi": [
      "ば"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "売",
    "meanings": [
      "sell"
    ],
    "onyomi": [
      "バイ"
    ],
    "kunyomi": [
      "う.る",
      "う.れる"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "夏",
    "meanings": [
      "summer"
    ],
    "onyomi": [
      "カ",
      "ガ",
      "ゲ"
    ],
    "kunyomi": [
      "なつ"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "夕",
    "meanings": [
      "evening"
    ],
    "onyomi": [
      "セキ"
    ],
    "kunyomi": [
      "ゆう"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "多",
    "meanings": [
      "many",
      "frequent",
      "much"
    ],
    "onyomi": [
      "タ"
    ],
    "kunyomi": [
      "おお.い",
      "まさ.に",
      "まさ.る"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "夜",
    "meanings": [
      "night",
      "evening"
    ],
    "onyomi": [
      "ヤ"
    ],
    "kunyomi": [
      "よ",
      "よる"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "妹",
    "meanings": [
      "younger sister"
    ],
    "onyomi": [
      "マイ"
    ],
    "kunyomi": [
      "いもうと"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "姉",
    "meanings": [
      "elder sister"
    ],
    "onyomi": [
      "シ"
    ],
    "kunyomi": [
      "あね",
      "はは"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "始",
    "meanings": [
      "commence",
      "begin"
    ],
    "onyomi": [
      "シ"
    ],
    "kunyomi": [
      "はじ.める",
      "-はじ.める",
      "はじ.まる"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "字",
    "meanings": [
      "character",
      "letter",
      "word"
    ],
    "onyomi": [
      "ジ"
    ],
    "kunyomi": [
      "あざ",
      "あざな",
      "-な"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "安",
    "meanings": [
      "relax",
      "cheap",
      "low"
    ],
    "onyomi": [
      "アン"
    ],
    "kunyomi": [
      "やす.い",
      "やす.まる",
      "やす",
      "やす.らか"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "室",
    "meanings": [
      "room",
      "apartment",
      "chamber"
    ],
    "onyomi": [
      "シツ"
    ],
    "kunyomi": [
      "むろ"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "家",
    "meanings": [
      "house",
      "home",
      "family"
    ],
    "onyomi": [
      "カ",
      "ケ"
    ],
    "kunyomi": [
      "いえ",
      "や",
      "うち"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "少",
    "meanings": [
      "few",
      "little"
    ],
    "onyomi": [
      "ショウ"
    ],
    "kunyomi": [
      "すく.ない",
      "すこ.し"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "屋",
    "meanings": [
      "roof",
      "house",
      "shop"
    ],
    "onyomi": [
      "オク"
    ],
    "kunyomi": [
      "や"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "工",
    "meanings": [
      "craft",
      "construction",
      "katakana e radical (no. 48)"
    ],
    "onyomi": [
      "コウ",
      "ク",
      "グ"
    ],
    "kunyomi": [],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "帰",
    "meanings": [
      "homecoming",
      "arrive at",
      "lead to"
    ],
    "onyomi": [
      "キ"
    ],
    "kunyomi": [
      "かえ.る",
      "かえ.す",
      "おく.る",
      "とつ.ぐ"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "広",
    "meanings": [
      "wide",
      "broad",
      "spacious"
    ],
    "onyomi": [
      "コウ"
    ],
    "kunyomi": [
      "ひろ.い",
      "ひろ.まる",
      "ひろ.める",
      "ひろ.がる",
      "ひろ.げる"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "店",
    "meanings": [
      "store",
      "shop"
    ],
    "onyomi": [
      "テン"
    ],
    "kunyomi": [
      "みせ",
      "たな"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "度",
    "meanings": [
      "degrees",
      "occurrence",
      "time"
    ],
    "onyomi": [
      "ド",
      "ト",
      "タク"
    ],
    "kunyomi": [
      "たび",
      "-た.い"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "建",
    "meanings": [
      "build"
    ],
    "onyomi": [
      "ケン",
      "コン"
    ],
    "kunyomi": [
      "た.てる",
      "た.て",
      "-だ.て",
      "た.つ"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "弟",
    "meanings": [
      "younger brother",
      "faithful service to elders"
    ],
    "onyomi": [
      "テイ",
      "ダイ",
      "デ"
    ],
    "kunyomi": [
      "おとうと"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "強",
    "meanings": [
      "strong"
    ],
    "onyomi": [
      "キョウ",
      "ゴウ"
    ],
    "kunyomi": [
      "つよ.い",
      "つよ.まる",
      "つよ.める",
      "し.いる",
      "こわ.い"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "待",
    "meanings": [
      "wait",
      "depend on"
    ],
    "onyomi": [
      "タイ"
    ],
    "kunyomi": [
      "ま.つ",
      "-ま.ち"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "心",
    "meanings": [
      "heart",
      "mind",
      "spirit"
    ],
    "onyomi": [
      "シン"
    ],
    "kunyomi": [
      "こころ",
      "-ごころ"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "思",
    "meanings": [
      "think"
    ],
    "onyomi": [
      "シ"
    ],
    "kunyomi": [
      "おも.う",
      "おもえら.く",
      "おぼ.す"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "急",
    "meanings": [
      "hurry",
      "emergency",
      "sudden"
    ],
    "onyomi": [
      "キュウ"
    ],
    "kunyomi": [
      "いそ.ぐ",
      "いそ.ぎ",
      "せ.く"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "悪",
    "meanings": [
      "bad",
      "vice",
      "rascal"
    ],
    "onyomi": [
      "アク",
      "オ"
    ],
    "kunyomi": [
      "わる.い",
      "わる-",
      "あ.し",
      "にく.い",
      "-にく.い",
      "ああ",
      "いずくに",
      "いずくんぞ",
      "にく.む"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "意",
    "meanings": [
      "idea",
      "mind",
      "heart"
    ],
    "onyomi": [
      "イ"
    ],
    "kunyomi": [],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "手",
    "meanings": [
      "hand"
    ],
    "onyomi": [
      "シュ",
      "ズ"
    ],
    "kunyomi": [
      "て",
      "て-",
      "-て",
      "た-"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "持",
    "meanings": [
      "hold",
      "have"
    ],
    "onyomi": [
      "ジ"
    ],
    "kunyomi": [
      "も.つ",
      "-も.ち",
      "も.てる"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "教",
    "meanings": [
      "teach",
      "faith",
      "doctrine"
    ],
    "onyomi": [
      "キョウ"
    ],
    "kunyomi": [
      "おし.える",
      "おそ.わる"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "文",
    "meanings": [
      "sentence",
      "literature",
      "style"
    ],
    "onyomi": [
      "ブン",
      "モン"
    ],
    "kunyomi": [
      "ふみ",
      "あや"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "料",
    "meanings": [
      "fee",
      "materials"
    ],
    "onyomi": [
      "リョウ"
    ],
    "kunyomi": [],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "新",
    "meanings": [
      "new"
    ],
    "onyomi": [
      "シン"
    ],
    "kunyomi": [
      "あたら.しい",
      "あら.た",
      "あら-",
      "にい-"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "方",
    "meanings": [
      "direction",
      "person",
      "alternative"
    ],
    "onyomi": [
      "ホウ"
    ],
    "kunyomi": [
      "かた",
      "-かた",
      "-がた"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "旅",
    "meanings": [
      "trip",
      "travel"
    ],
    "onyomi": [
      "リョ"
    ],
    "kunyomi": [
      "たび"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "族",
    "meanings": [
      "tribe",
      "family"
    ],
    "onyomi": [
      "ゾク"
    ],
    "kunyomi": [],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "早",
    "meanings": [
      "early",
      "fast"
    ],
    "onyomi": [
      "ソウ",
      "サッ"
    ],
    "kunyomi": [
      "はや.い",
      "はや",
      "はや-",
      "はや.まる",
      "はや.める",
      "さ-"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "明",
    "meanings": [
      "bright",
      "light"
    ],
    "onyomi": [
      "メイ",
      "ミョウ",
      "ミン"
    ],
    "kunyomi": [
      "あ.かり",
      "あか.るい",
      "あか.るむ",
      "あか.らむ",
      "あき.らか",
      "あ.ける",
      "-あ.け",
      "あ.く",
      "あ.くる",
      "あ.かす"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "映",
    "meanings": [
      "reflect",
      "reflection",
      "projection"
    ],
    "onyomi": [
      "エイ"
    ],
    "kunyomi": [
      "うつ.る",
      "うつ.す",
      "は.える",
      "-ば.え"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "春",
    "meanings": [
      "springtime",
      "spring (season)"
    ],
    "onyomi": [
      "シュン"
    ],
    "kunyomi": [
      "はる"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "昼",
    "meanings": [
      "daytime",
      "noon"
    ],
    "onyomi": [
      "チュウ"
    ],
    "kunyomi": [
      "ひる"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "曜",
    "meanings": [
      "weekday"
    ],
    "onyomi": [
      "ヨウ"
    ],
    "kunyomi": [],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "有",
    "meanings": [
      "possess",
      "have",
      "exist"
    ],
    "onyomi": [
      "ユウ",
      "ウ"
    ],
    "kunyomi": [
      "あ.る"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "服",
    "meanings": [
      "clothing",
      "admit",
      "obey"
    ],
    "onyomi": [
      "フク"
    ],
    "kunyomi": [],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "朝",
    "meanings": [
      "morning",
      "dynasty",
      "regime"
    ],
    "onyomi": [
      "チョウ"
    ],
    "kunyomi": [
      "あさ"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "業",
    "meanings": [
      "business",
      "vocation",
      "arts"
    ],
    "onyomi": [
      "ギョウ",
      "ゴウ"
    ],
    "kunyomi": [
      "わざ"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "楽",
    "meanings": [
      "music",
      "comfort",
      "ease"
    ],
    "onyomi": [
      "ガク",
      "ラク",
      "ゴウ"
    ],
    "kunyomi": [
      "たの.しい",
      "たの.しむ",
      "この.む"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "歌",
    "meanings": [
      "song",
      "sing"
    ],
    "onyomi": [
      "カ"
    ],
    "kunyomi": [
      "うた",
      "うた.う"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "止",
    "meanings": [
      "stop",
      "halt"
    ],
    "onyomi": [
      "シ"
    ],
    "kunyomi": [
      "と.まる",
      "-ど.まり",
      "と.める",
      "-と.める",
      "-ど.め",
      "とど.める",
      "とど.め",
      "とど.まる",
      "や.める",
      "や.む",
      "-や.む",
      "よ.す",
      "-さ.す",
      "-さ.し"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "正",
    "meanings": [
      "correct",
      "justice",
      "righteous"
    ],
    "onyomi": [
      "セイ",
      "ショウ"
    ],
    "kunyomi": [
      "ただ.しい",
      "ただ.す",
      "まさ",
      "まさ.に"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "歩",
    "meanings": [
      "walk",
      "counter for steps"
    ],
    "onyomi": [
      "ホ",
      "ブ",
      "フ"
    ],
    "kunyomi": [
      "ある.く",
      "あゆ.む"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "死",
    "meanings": [
      "death",
      "die"
    ],
    "onyomi": [
      "シ"
    ],
    "kunyomi": [
      "し.ぬ",
      "し.に-"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "注",
    "meanings": [
      "pour",
      "irrigate",
      "shed (tears)"
    ],
    "onyomi": [
      "チュウ"
    ],
    "kunyomi": [
      "そそ.ぐ",
      "さ.す",
      "つ.ぐ"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "洋",
    "meanings": [
      "ocean",
      "sea",
      "foreign"
    ],
    "onyomi": [
      "ヨウ"
    ],
    "kunyomi": [],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "海",
    "meanings": [
      "sea",
      "ocean"
    ],
    "onyomi": [
      "カイ"
    ],
    "kunyomi": [
      "うみ"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "漢",
    "meanings": [
      "Sino-",
      "China"
    ],
    "onyomi": [
      "カン"
    ],
    "kunyomi": [],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "牛",
    "meanings": [
      "cow"
    ],
    "onyomi": [
      "ギュウ"
    ],
    "kunyomi": [
      "うし"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "物",
    "meanings": [
      "thing",
      "object",
      "matter"
    ],
    "onyomi": [
      "ブツ",
      "モツ"
    ],
    "kunyomi": [
      "もの",
      "もの-"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "特",
    "meanings": [
      "special"
    ],
    "onyomi": [
      "トク"
    ],
    "kunyomi": [],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "犬",
    "meanings": [
      "dog"
    ],
    "onyomi": [
      "ケン"
    ],
    "kunyomi": [
      "いぬ",
      "いぬ-"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "理",
    "meanings": [
      "logic",
      "arrangement",
      "reason"
    ],
    "onyomi": [
      "リ"
    ],
    "kunyomi": [
      "ことわり"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "用",
    "meanings": [
      "utilize",
      "business",
      "service"
    ],
    "onyomi": [
      "ヨウ"
    ],
    "kunyomi": [
      "もち.いる"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "田",
    "meanings": [
      "rice field",
      "rice paddy"
    ],
    "onyomi": [
      "デン"
    ],
    "kunyomi": [
      "た"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "町",
    "meanings": [
      "town",
      "village",
      "block"
    ],
    "onyomi": [
      "チョウ"
    ],
    "kunyomi": [
      "まち"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "画",
    "meanings": [
      "brush-stroke",
      "picture"
    ],
    "onyomi": [
      "ガ",
      "カク",
      "エ",
      "カイ"
    ],
    "kunyomi": [
      "えが.く",
      "かく.する",
      "かぎ.る",
      "はかりごと",
      "はか.る"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "界",
    "meanings": [
      "world",
      "boundary"
    ],
    "onyomi": [
      "カイ"
    ],
    "kunyomi": [],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "病",
    "meanings": [
      "ill",
      "sick"
    ],
    "onyomi": [
      "ビョウ",
      "ヘイ"
    ],
    "kunyomi": [
      "や.む",
      "-や.み",
      "やまい"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "発",
    "meanings": [
      "departure",
      "discharge",
      "publish"
    ],
    "onyomi": [
      "ハツ",
      "ホツ"
    ],
    "kunyomi": [
      "た.つ",
      "あば.く",
      "おこ.る",
      "つか.わす",
      "はな.つ"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "目",
    "meanings": [
      "eye",
      "class",
      "look"
    ],
    "onyomi": [
      "モク",
      "ボク"
    ],
    "kunyomi": [
      "め",
      "-め",
      "ま-"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "真",
    "meanings": [
      "true",
      "reality",
      "Buddhist sect"
    ],
    "onyomi": [
      "シン"
    ],
    "kunyomi": [
      "ま",
      "ま-",
      "まこと"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "着",
    "meanings": [
      "don",
      "arrive",
      "wear"
    ],
    "onyomi": [
      "チャク",
      "ジャク"
    ],
    "kunyomi": [
      "き.る",
      "き.せる",
      "つ.く",
      "つ.ける"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "知",
    "meanings": [
      "know",
      "wisdom"
    ],
    "onyomi": [
      "チ"
    ],
    "kunyomi": [
      "し.る",
      "し.らせる"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "研",
    "meanings": [
      "polish",
      "study of",
      "sharpen"
    ],
    "onyomi": [
      "ケン"
    ],
    "kunyomi": [
      "と.ぐ"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "社",
    "meanings": [
      "company",
      "firm",
      "office"
    ],
    "onyomi": [
      "シャ"
    ],
    "kunyomi": [
      "やしろ"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "私",
    "meanings": [
      "private",
      "I",
      "me"
    ],
    "onyomi": [
      "シ"
    ],
    "kunyomi": [
      "わたくし",
      "わたし"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "秋",
    "meanings": [
      "autumn"
    ],
    "onyomi": [
      "シュウ"
    ],
    "kunyomi": [
      "あき",
      "とき"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "究",
    "meanings": [
      "research",
      "study"
    ],
    "onyomi": [
      "キュウ",
      "ク"
    ],
    "kunyomi": [
      "きわ.める"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "空",
    "meanings": [
      "empty",
      "sky",
      "void"
    ],
    "onyomi": [
      "クウ"
    ],
    "kunyomi": [
      "そら",
      "あ.く",
      "あ.き",
      "あ.ける",
      "から",
      "す.く",
      "す.かす",
      "むな.しい"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "立",
    "meanings": [
      "stand up",
      "rise",
      "set up"
    ],
    "onyomi": [
      "リツ",
      "リュウ",
      "リットル"
    ],
    "kunyomi": [
      "た.つ",
      "-た.つ",
      "た.ち-",
      "た.てる",
      "-た.てる",
      "た.て-",
      "たて-",
      "-た.て",
      "-だ.て",
      "-だ.てる"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "答",
    "meanings": [
      "solution",
      "answer"
    ],
    "onyomi": [
      "トウ"
    ],
    "kunyomi": [
      "こた.える",
      "こた.え"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "紙",
    "meanings": [
      "paper"
    ],
    "onyomi": [
      "シ"
    ],
    "kunyomi": [
      "かみ"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "終",
    "meanings": [
      "end",
      "finish"
    ],
    "onyomi": [
      "シュウ"
    ],
    "kunyomi": [
      "お.わる",
      "-お.わる",
      "おわ.る",
      "お.える",
      "つい",
      "つい.に"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "習",
    "meanings": [
      "learn"
    ],
    "onyomi": [
      "シュウ",
      "ジュ"
    ],
    "kunyomi": [
      "なら.う",
      "なら.い"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "考",
    "meanings": [
      "consider",
      "think over"
    ],
    "onyomi": [
      "コウ"
    ],
    "kunyomi": [
      "かんが.える",
      "かんが.え"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "者",
    "meanings": [
      "someone",
      "person"
    ],
    "onyomi": [
      "シャ"
    ],
    "kunyomi": [
      "もの"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "肉",
    "meanings": [
      "meat"
    ],
    "onyomi": [
      "ニク"
    ],
    "kunyomi": [
      "しし"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "自",
    "meanings": [
      "oneself"
    ],
    "onyomi": [
      "ジ",
      "シ"
    ],
    "kunyomi": [
      "みずか.ら",
      "おの.ずから",
      "おの.ずと"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "色",
    "meanings": [
      "color"
    ],
    "onyomi": [
      "ショク",
      "シキ"
    ],
    "kunyomi": [
      "いろ"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "花",
    "meanings": [
      "flower"
    ],
    "onyomi": [
      "カ",
      "ケ"
    ],
    "kunyomi": [
      "はな"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "英",
    "meanings": [
      "England",
      "English",
      "hero"
    ],
    "onyomi": [
      "エイ"
    ],
    "kunyomi": [
      "はなぶさ"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "茶",
    "meanings": [
      "tea"
    ],
    "onyomi": [
      "チャ",
      "サ"
    ],
    "kunyomi": [],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "親",
    "meanings": [
      "parent",
      "intimacy",
      "relative"
    ],
    "onyomi": [
      "シン"
    ],
    "kunyomi": [
      "おや",
      "おや-",
      "した.しい",
      "した.しむ"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "言",
    "meanings": [
      "say",
      "word"
    ],
    "onyomi": [
      "ゲン",
      "ゴン"
    ],
    "kunyomi": [
      "い.う",
      "こと"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "計",
    "meanings": [
      "plot",
      "plan",
      "scheme"
    ],
    "onyomi": [
      "ケイ"
    ],
    "kunyomi": [
      "はか.る",
      "はか.らう"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "試",
    "meanings": [
      "test",
      "try",
      "attempt"
    ],
    "onyomi": [
      "シ"
    ],
    "kunyomi": [
      "こころ.みる",
      "ため.す"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "買",
    "meanings": [
      "buy"
    ],
    "onyomi": [
      "バイ"
    ],
    "kunyomi": [
      "か.う"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "貸",
    "meanings": [
      "lend"
    ],
    "onyomi": [
      "タイ"
    ],
    "kunyomi": [
      "か.す",
      "か.し-",
      "かし-"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "質",
    "meanings": [
      "substance",
      "quality",
      "matter"
    ],
    "onyomi": [
      "シツ",
      "シチ",
      "チ"
    ],
    "kunyomi": [
      "たち",
      "ただ.す",
      "もと",
      "わりふ"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "赤",
    "meanings": [
      "red"
    ],
    "onyomi": [
      "セキ",
      "シャク"
    ],
    "kunyomi": [
      "あか",
      "あか-",
      "あか.い",
      "あか.らむ",
      "あか.らめる"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "走",
    "meanings": [
      "run"
    ],
    "onyomi": [
      "ソウ"
    ],
    "kunyomi": [
      "はし.る"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "起",
    "meanings": [
      "rouse",
      "wake up",
      "get up"
    ],
    "onyomi": [
      "キ"
    ],
    "kunyomi": [
      "お.きる",
      "お.こる",
      "お.こす",
      "おこ.す",
      "た.つ"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "足",
    "meanings": [
      "leg",
      "foot",
      "be sufficient"
    ],
    "onyomi": [
      "ソク"
    ],
    "kunyomi": [
      "あし",
      "た.りる",
      "た.る",
      "た.す"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "転",
    "meanings": [
      "revolve",
      "turn around",
      "change"
    ],
    "onyomi": [
      "テン"
    ],
    "kunyomi": [
      "ころ.がる",
      "ころ.げる",
      "ころ.がす",
      "ころ.ぶ",
      "まろ.ぶ",
      "うたた",
      "うつ.る",
      "くる.めく"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "近",
    "meanings": [
      "near",
      "early",
      "akin"
    ],
    "onyomi": [
      "キン",
      "コン"
    ],
    "kunyomi": [
      "ちか.い"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "送",
    "meanings": [
      "escort",
      "send"
    ],
    "onyomi": [
      "ソウ"
    ],
    "kunyomi": [
      "おく.る"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "通",
    "meanings": [
      "traffic",
      "pass through",
      "avenue"
    ],
    "onyomi": [
      "ツウ",
      "ツ"
    ],
    "kunyomi": [
      "とお.る",
      "とお.り",
      "-とお.り",
      "-どお.り",
      "とお.す",
      "とお.し",
      "-どお.し",
      "かよ.う"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "週",
    "meanings": [
      "week"
    ],
    "onyomi": [
      "シュウ"
    ],
    "kunyomi": [],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "運",
    "meanings": [
      "carry",
      "luck",
      "destiny"
    ],
    "onyomi": [
      "ウン"
    ],
    "kunyomi": [
      "はこ.ぶ"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "道",
    "meanings": [
      "road-way",
      "street",
      "district"
    ],
    "onyomi": [
      "ドウ",
      "トウ"
    ],
    "kunyomi": [
      "みち",
      "いう"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "重",
    "meanings": [
      "heavy",
      "important",
      "esteem"
    ],
    "onyomi": [
      "ジュウ",
      "チョウ"
    ],
    "kunyomi": [
      "え",
      "おも.い",
      "おも.り",
      "おも.なう",
      "かさ.ねる",
      "かさ.なる",
      "おも"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "野",
    "meanings": [
      "plains",
      "field",
      "rustic"
    ],
    "onyomi": [
      "ヤ",
      "ショ"
    ],
    "kunyomi": [
      "の",
      "の-"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "銀",
    "meanings": [
      "silver"
    ],
    "onyomi": [
      "ギン"
    ],
    "kunyomi": [
      "しろがね"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "開",
    "meanings": [
      "open",
      "unfold",
      "unseal"
    ],
    "onyomi": [
      "カイ"
    ],
    "kunyomi": [
      "ひら.く",
      "ひら.き",
      "-びら.き",
      "ひら.ける",
      "あ.く",
      "あ.ける"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "院",
    "meanings": [
      "Inst.",
      "institution",
      "temple"
    ],
    "onyomi": [
      "イン"
    ],
    "kunyomi": [],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "集",
    "meanings": [
      "gather",
      "meet",
      "congregate"
    ],
    "onyomi": [
      "シュウ"
    ],
    "kunyomi": [
      "あつ.まる",
      "あつ.める",
      "つど.う"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "青",
    "meanings": [
      "blue",
      "green"
    ],
    "onyomi": [
      "セイ",
      "ショウ"
    ],
    "kunyomi": [
      "あお",
      "あお-",
      "あお.い"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "音",
    "meanings": [
      "sound",
      "noise"
    ],
    "onyomi": [
      "オン",
      "イン",
      "-ノン"
    ],
    "kunyomi": [
      "おと",
      "ね"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "題",
    "meanings": [
      "topic",
      "subject"
    ],
    "onyomi": [
      "ダイ"
    ],
    "kunyomi": [],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "風",
    "meanings": [
      "wind",
      "air",
      "style"
    ],
    "onyomi": [
      "フウ",
      "フ"
    ],
    "kunyomi": [
      "かぜ",
      "かざ-"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "飯",
    "meanings": [
      "meal",
      "boiled rice"
    ],
    "onyomi": [
      "ハン"
    ],
    "kunyomi": [
      "めし"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "飲",
    "meanings": [
      "drink",
      "smoke",
      "take"
    ],
    "onyomi": [
      "イン",
      "オン"
    ],
    "kunyomi": [
      "の.む",
      "-の.み"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "館",
    "meanings": [
      "building",
      "mansion",
      "large building"
    ],
    "onyomi": [
      "カン"
    ],
    "kunyomi": [
      "やかた",
      "たて"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "駅",
    "meanings": [
      "station"
    ],
    "onyomi": [
      "エキ"
    ],
    "kunyomi": [],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "験",
    "meanings": [
      "verification",
      "effect",
      "testing"
    ],
    "onyomi": [
      "ケン",
      "ゲン"
    ],
    "kunyomi": [
      "あかし",
      "しるし",
      "ため.す",
      "ためし"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "魚",
    "meanings": [
      "fish"
    ],
    "onyomi": [
      "ギョ"
    ],
    "kunyomi": [
      "うお",
      "さかな",
      "-ざかな"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "鳥",
    "meanings": [
      "bird",
      "chicken"
    ],
    "onyomi": [
      "チョウ"
    ],
    "kunyomi": [
      "とり"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "黒",
    "meanings": [
      "black"
    ],
    "onyomi": [
      "コク"
    ],
    "kunyomi": [
      "くろ",
      "くろ.ずむ",
      "くろ.い"
    ],
    "level": "N4",
    "vocabulary": []
  },
  {
    "kanji": "与",
    "meanings": [
      "bestow",
      "participate in",
      "give"
    ],
    "onyomi": [
      "ヨ"
    ],
    "kunyomi": [
      "あた.える",
      "あずか.る",
      "くみ.する",
      "ともに"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "両",
    "meanings": [
      "both",
      "old Japanese coin",
      "counter for carriages (e.g., in a train)"
    ],
    "onyomi": [
      "リョウ"
    ],
    "kunyomi": [
      "てる",
      "ふたつ"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "乗",
    "meanings": [
      "ride",
      "power",
      "multiplication"
    ],
    "onyomi": [
      "ジョウ",
      "ショウ"
    ],
    "kunyomi": [
      "の.る",
      "-の.り",
      "の.せる"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "予",
    "meanings": [
      "beforehand",
      "previous",
      "myself"
    ],
    "onyomi": [
      "ヨ",
      "シャ"
    ],
    "kunyomi": [
      "あらかじ.め"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "争",
    "meanings": [
      "contend",
      "dispute",
      "argue"
    ],
    "onyomi": [
      "ソウ"
    ],
    "kunyomi": [
      "あらそ.う",
      "いか.でか"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "互",
    "meanings": [
      "mutually",
      "reciprocally",
      "together"
    ],
    "onyomi": [
      "ゴ"
    ],
    "kunyomi": [
      "たが.い",
      "かたみ.に"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "亡",
    "meanings": [
      "deceased",
      "the late",
      "dying"
    ],
    "onyomi": [
      "ボウ",
      "モウ"
    ],
    "kunyomi": [
      "な.い",
      "な.き-",
      "ほろ.びる",
      "ほろ.ぶ",
      "ほろ.ぼす"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "交",
    "meanings": [
      "mingle",
      "mixing",
      "association"
    ],
    "onyomi": [
      "コウ"
    ],
    "kunyomi": [
      "まじ.わる",
      "まじ.える",
      "ま.じる",
      "まじ.る",
      "ま.ざる",
      "ま.ぜる",
      "-か.う",
      "か.わす",
      "かわ.す",
      "こもごも"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "他",
    "meanings": [
      "other",
      "another",
      "the others"
    ],
    "onyomi": [
      "タ"
    ],
    "kunyomi": [
      "ほか"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "付",
    "meanings": [
      "adhere",
      "attach",
      "refer to"
    ],
    "onyomi": [
      "フ"
    ],
    "kunyomi": [
      "つ.ける",
      "-つ.ける",
      "-づ.ける",
      "つ.け",
      "つ.け-",
      "-つ.け",
      "-づ.け",
      "-づけ",
      "つ.く",
      "-づ.く",
      "つ.き",
      "-つ.き",
      "-つき",
      "-づ.き",
      "-づき"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "件",
    "meanings": [
      "affair",
      "case",
      "matter"
    ],
    "onyomi": [
      "ケン"
    ],
    "kunyomi": [
      "くだん"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "任",
    "meanings": [
      "responsibility",
      "duty",
      "term"
    ],
    "onyomi": [
      "ニン"
    ],
    "kunyomi": [
      "まか.せる",
      "まか.す"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "伝",
    "meanings": [
      "transmit",
      "go along",
      "walk along"
    ],
    "onyomi": [
      "デン",
      "テン"
    ],
    "kunyomi": [
      "つた.わる",
      "つた.える",
      "つた.う",
      "つだ.う",
      "-づた.い",
      "つて"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "似",
    "meanings": [
      "becoming",
      "resemble",
      "counterfeit"
    ],
    "onyomi": [
      "ジ"
    ],
    "kunyomi": [
      "に.る",
      "ひ.る"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "位",
    "meanings": [
      "rank",
      "grade",
      "throne"
    ],
    "onyomi": [
      "イ"
    ],
    "kunyomi": [
      "くらい",
      "ぐらい"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "余",
    "meanings": [
      "too much",
      "myself",
      "surplus"
    ],
    "onyomi": [
      "ヨ"
    ],
    "kunyomi": [
      "あま.る",
      "あま.り",
      "あま.す",
      "あんま.り"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "例",
    "meanings": [
      "example",
      "custom",
      "usage"
    ],
    "onyomi": [
      "レイ"
    ],
    "kunyomi": [
      "たと.える"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "供",
    "meanings": [
      "submit",
      "offer",
      "present"
    ],
    "onyomi": [
      "キョウ",
      "ク",
      "クウ",
      "グ"
    ],
    "kunyomi": [
      "そな.える",
      "とも",
      "-ども"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "便",
    "meanings": [
      "convenience",
      "facility",
      "excrement"
    ],
    "onyomi": [
      "ベン",
      "ビン"
    ],
    "kunyomi": [
      "たよ.り"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "係",
    "meanings": [
      "person in charge",
      "connection",
      "duty"
    ],
    "onyomi": [
      "ケイ"
    ],
    "kunyomi": [
      "かか.る",
      "かかり",
      "-がかり",
      "かか.わる"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "信",
    "meanings": [
      "faith",
      "truth",
      "fidelity"
    ],
    "onyomi": [
      "シン"
    ],
    "kunyomi": [],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "倒",
    "meanings": [
      "overthrow",
      "fall",
      "collapse"
    ],
    "onyomi": [
      "トウ"
    ],
    "kunyomi": [
      "たお.れる",
      "-だお.れ",
      "たお.す",
      "さかさま",
      "さかさ",
      "さかしま"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "候",
    "meanings": [
      "climate",
      "season",
      "weather"
    ],
    "onyomi": [
      "コウ"
    ],
    "kunyomi": [
      "そうろう"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "値",
    "meanings": [
      "price",
      "cost",
      "value"
    ],
    "onyomi": [
      "チ"
    ],
    "kunyomi": [
      "ね",
      "あたい"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "偉",
    "meanings": [
      "admirable",
      "greatness",
      "remarkable"
    ],
    "onyomi": [
      "イ"
    ],
    "kunyomi": [
      "えら.い"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "側",
    "meanings": [
      "side",
      "lean",
      "oppose"
    ],
    "onyomi": [
      "ソク"
    ],
    "kunyomi": [
      "かわ",
      "がわ",
      "そば"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "偶",
    "meanings": [
      "accidentally",
      "even number",
      "couple"
    ],
    "onyomi": [
      "グウ"
    ],
    "kunyomi": [
      "たま"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "備",
    "meanings": [
      "equip",
      "provision",
      "preparation"
    ],
    "onyomi": [
      "ビ"
    ],
    "kunyomi": [
      "そな.える",
      "そな.わる",
      "つぶさ.に"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "働",
    "meanings": [
      "work",
      "(kokuji)"
    ],
    "onyomi": [
      "ドウ"
    ],
    "kunyomi": [
      "はたら.く"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "優",
    "meanings": [
      "tenderness",
      "excel",
      "surpass"
    ],
    "onyomi": [
      "ユウ",
      "ウ"
    ],
    "kunyomi": [
      "やさ.しい",
      "すぐ.れる",
      "まさ.る"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "光",
    "meanings": [
      "ray",
      "light"
    ],
    "onyomi": [
      "コウ"
    ],
    "kunyomi": [
      "ひか.る",
      "ひかり"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "全",
    "meanings": [
      "whole",
      "entire",
      "all"
    ],
    "onyomi": [
      "ゼン"
    ],
    "kunyomi": [
      "まった.く",
      "すべ.て"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "共",
    "meanings": [
      "together",
      "both",
      "neither"
    ],
    "onyomi": [
      "キョウ"
    ],
    "kunyomi": [
      "とも",
      "とも.に",
      "-ども"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "具",
    "meanings": [
      "tool",
      "utensil",
      "means"
    ],
    "onyomi": [
      "グ"
    ],
    "kunyomi": [
      "そな.える",
      "つぶさ.に"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "内",
    "meanings": [
      "inside",
      "within",
      "between"
    ],
    "onyomi": [
      "ナイ",
      "ダイ"
    ],
    "kunyomi": [
      "うち"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "冷",
    "meanings": [
      "cool",
      "cold (beer, person)",
      "chill"
    ],
    "onyomi": [
      "レイ"
    ],
    "kunyomi": [
      "つめ.たい",
      "ひ.える",
      "ひ.や",
      "ひ.ややか",
      "ひ.やす",
      "ひ.やかす",
      "さ.める",
      "さ.ます"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "処",
    "meanings": [
      "dispose",
      "manage",
      "deal with"
    ],
    "onyomi": [
      "ショ"
    ],
    "kunyomi": [
      "ところ",
      "-こ",
      "お.る"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "列",
    "meanings": [
      "file",
      "row",
      "rank"
    ],
    "onyomi": [
      "レツ",
      "レ"
    ],
    "kunyomi": [],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "初",
    "meanings": [
      "first time",
      "beginning"
    ],
    "onyomi": [
      "ショ"
    ],
    "kunyomi": [
      "はじ.め",
      "はじ.めて",
      "はつ",
      "はつ-",
      "うい-",
      "-そ.める",
      "-ぞ.め"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "判",
    "meanings": [
      "judgement",
      "judgment",
      "signature"
    ],
    "onyomi": [
      "ハン",
      "バン"
    ],
    "kunyomi": [
      "わか.る"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "利",
    "meanings": [
      "profit",
      "advantage",
      "benefit"
    ],
    "onyomi": [
      "リ"
    ],
    "kunyomi": [
      "き.く"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "到",
    "meanings": [
      "arrival",
      "proceed",
      "reach"
    ],
    "onyomi": [
      "トウ"
    ],
    "kunyomi": [
      "いた.る"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "制",
    "meanings": [
      "system",
      "law",
      "rule"
    ],
    "onyomi": [
      "セイ"
    ],
    "kunyomi": [],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "刻",
    "meanings": [
      "engrave",
      "cut fine",
      "chop"
    ],
    "onyomi": [
      "コク"
    ],
    "kunyomi": [
      "きざ.む",
      "きざ.み"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "割",
    "meanings": [
      "proportion",
      "comparatively",
      "divide"
    ],
    "onyomi": [
      "カツ"
    ],
    "kunyomi": [
      "わ.る",
      "わり",
      "わ.り",
      "わ.れる",
      "さ.く"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "加",
    "meanings": [
      "add",
      "addition",
      "increase"
    ],
    "onyomi": [
      "カ"
    ],
    "kunyomi": [
      "くわ.える",
      "くわ.わる"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "助",
    "meanings": [
      "help",
      "rescue",
      "assist"
    ],
    "onyomi": [
      "ジョ"
    ],
    "kunyomi": [
      "たす.ける",
      "たす.かる",
      "す.ける",
      "すけ"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "努",
    "meanings": [
      "toil",
      "diligent",
      "as much as possible"
    ],
    "onyomi": [
      "ド"
    ],
    "kunyomi": [
      "つと.める"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "労",
    "meanings": [
      "labor",
      "thank for",
      "reward for"
    ],
    "onyomi": [
      "ロウ"
    ],
    "kunyomi": [
      "ろう.する",
      "いたわ.る",
      "いた.ずき",
      "ねぎら",
      "つか.れる",
      "ねぎら.う"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "務",
    "meanings": [
      "task",
      "duties"
    ],
    "onyomi": [
      "ム"
    ],
    "kunyomi": [
      "つと.める"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "勝",
    "meanings": [
      "victory",
      "win",
      "prevail"
    ],
    "onyomi": [
      "ショウ"
    ],
    "kunyomi": [
      "か.つ",
      "-が.ち",
      "まさ.る",
      "すぐ.れる",
      "かつ"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "勤",
    "meanings": [
      "diligence",
      "become employed",
      "serve"
    ],
    "onyomi": [
      "キン",
      "ゴン"
    ],
    "kunyomi": [
      "つと.める",
      "-づと.め",
      "つと.まる",
      "いそ.しむ"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "化",
    "meanings": [
      "change",
      "take the form of",
      "influence"
    ],
    "onyomi": [
      "カ",
      "ケ"
    ],
    "kunyomi": [
      "ば.ける",
      "ば.かす",
      "ふ.ける",
      "け.する"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "単",
    "meanings": [
      "simple",
      "one",
      "single"
    ],
    "onyomi": [
      "タン"
    ],
    "kunyomi": [
      "ひとえ"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "危",
    "meanings": [
      "dangerous",
      "fear",
      "uneasy"
    ],
    "onyomi": [
      "キ"
    ],
    "kunyomi": [
      "あぶ.ない",
      "あや.うい",
      "あや.ぶむ"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "原",
    "meanings": [
      "meadow",
      "original",
      "primitive"
    ],
    "onyomi": [
      "ゲン"
    ],
    "kunyomi": [
      "はら"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "参",
    "meanings": [
      "nonplussed",
      "three (in documents)",
      "going"
    ],
    "onyomi": [
      "サン",
      "シン"
    ],
    "kunyomi": [
      "まい.る",
      "まい-",
      "まじわる",
      "みつ"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "反",
    "meanings": [
      "anti-"
    ],
    "onyomi": [
      "ハン",
      "ホン",
      "タン",
      "ホ"
    ],
    "kunyomi": [
      "そ.る",
      "そ.らす",
      "かえ.す",
      "かえ.る",
      "-かえ.る"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "収",
    "meanings": [
      "income",
      "obtain",
      "reap"
    ],
    "onyomi": [
      "シュウ"
    ],
    "kunyomi": [
      "おさ.める",
      "おさ.まる"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "取",
    "meanings": [
      "take",
      "fetch",
      "take up"
    ],
    "onyomi": [
      "シュ"
    ],
    "kunyomi": [
      "と.る",
      "と.り",
      "と.り-",
      "とり",
      "-ど.り"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "受",
    "meanings": [
      "accept",
      "undergo",
      "answer (phone)"
    ],
    "onyomi": [
      "ジュ"
    ],
    "kunyomi": [
      "う.ける",
      "-う.け",
      "う.かる"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "号",
    "meanings": [
      "nickname",
      "number",
      "item"
    ],
    "onyomi": [
      "ゴウ"
    ],
    "kunyomi": [
      "さけ.ぶ",
      "よびな"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "合",
    "meanings": [
      "fit",
      "suit",
      "join"
    ],
    "onyomi": [
      "ゴウ",
      "ガッ",
      "カッ"
    ],
    "kunyomi": [
      "あ.う",
      "-あ.う",
      "あ.い",
      "あい-",
      "-あ.い",
      "-あい",
      "あ.わす",
      "あ.わせる",
      "-あ.わせる"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "向",
    "meanings": [
      "yonder",
      "facing",
      "beyond"
    ],
    "onyomi": [
      "コウ"
    ],
    "kunyomi": [
      "む.く",
      "む.い",
      "-む.き",
      "む.ける",
      "-む.け",
      "む.かう",
      "む.かい",
      "む.こう",
      "む.こう-",
      "むこ",
      "むか.い"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "君",
    "meanings": [
      "mister",
      "you",
      "ruler"
    ],
    "onyomi": [
      "クン"
    ],
    "kunyomi": [
      "きみ",
      "-ぎみ"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "否",
    "meanings": [
      "negate",
      "no",
      "noes"
    ],
    "onyomi": [
      "ヒ"
    ],
    "kunyomi": [
      "いな",
      "いや"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "吸",
    "meanings": [
      "suck",
      "imbibe",
      "inhale"
    ],
    "onyomi": [
      "キュウ"
    ],
    "kunyomi": [
      "す.う"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "吹",
    "meanings": [
      "blow",
      "breathe",
      "puff"
    ],
    "onyomi": [
      "スイ"
    ],
    "kunyomi": [
      "ふ.く"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "告",
    "meanings": [
      "revelation",
      "tell",
      "inform"
    ],
    "onyomi": [
      "コク"
    ],
    "kunyomi": [
      "つ.げる"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "呼",
    "meanings": [
      "call",
      "call out to",
      "invite"
    ],
    "onyomi": [
      "コ"
    ],
    "kunyomi": [
      "よ.ぶ"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "命",
    "meanings": [
      "fate",
      "command",
      "decree"
    ],
    "onyomi": [
      "メイ",
      "ミョウ"
    ],
    "kunyomi": [
      "いのち"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "和",
    "meanings": [
      "harmony",
      "Japanese style",
      "peace"
    ],
    "onyomi": [
      "ワ",
      "オ",
      "カ"
    ],
    "kunyomi": [
      "やわ.らぐ",
      "やわ.らげる",
      "なご.む",
      "なご.やか",
      "あ.える"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "商",
    "meanings": [
      "make a deal",
      "selling",
      "dealing in"
    ],
    "onyomi": [
      "ショウ"
    ],
    "kunyomi": [
      "あきな.う"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "喜",
    "meanings": [
      "rejoice",
      "take pleasure in"
    ],
    "onyomi": [
      "キ"
    ],
    "kunyomi": [
      "よろこ.ぶ",
      "よろこ.ばす"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "回",
    "meanings": [
      "-times",
      "round",
      "game"
    ],
    "onyomi": [
      "カイ",
      "エ"
    ],
    "kunyomi": [
      "まわ.る",
      "-まわ.る",
      "-まわ.り",
      "まわ.す",
      "-まわ.す",
      "まわ.し-",
      "-まわ.し",
      "もとお.る",
      "か.える"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "因",
    "meanings": [
      "cause",
      "factor",
      "be associated with"
    ],
    "onyomi": [
      "イン"
    ],
    "kunyomi": [
      "よ.る",
      "ちな.む"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "困",
    "meanings": [
      "quandary",
      "become distressed",
      "annoyed"
    ],
    "onyomi": [
      "コン"
    ],
    "kunyomi": [
      "こま.る"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "園",
    "meanings": [
      "park",
      "garden",
      "yard"
    ],
    "onyomi": [
      "エン"
    ],
    "kunyomi": [
      "その"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "在",
    "meanings": [
      "exist",
      "outskirts",
      "suburbs"
    ],
    "onyomi": [
      "ザイ"
    ],
    "kunyomi": [
      "あ.る"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "報",
    "meanings": [
      "report",
      "news",
      "reward"
    ],
    "onyomi": [
      "ホウ"
    ],
    "kunyomi": [
      "むく.いる"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "増",
    "meanings": [
      "increase",
      "add",
      "augment"
    ],
    "onyomi": [
      "ゾウ"
    ],
    "kunyomi": [
      "ま.す",
      "ま.し",
      "ふ.える",
      "ふ.やす"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "声",
    "meanings": [
      "voice"
    ],
    "onyomi": [
      "セイ",
      "ショウ"
    ],
    "kunyomi": [
      "こえ",
      "こわ-"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "変",
    "meanings": [
      "unusual",
      "change",
      "strange"
    ],
    "onyomi": [
      "ヘン"
    ],
    "kunyomi": [
      "か.わる",
      "か.わり",
      "か.える"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "夢",
    "meanings": [
      "dream",
      "vision",
      "illusion"
    ],
    "onyomi": [
      "ム",
      "ボウ"
    ],
    "kunyomi": [
      "ゆめ",
      "ゆめ.みる",
      "くら.い"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "太",
    "meanings": [
      "plump",
      "thick",
      "big around"
    ],
    "onyomi": [
      "タイ",
      "タ"
    ],
    "kunyomi": [
      "ふと.い",
      "ふと.る"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "夫",
    "meanings": [
      "husband",
      "man"
    ],
    "onyomi": [
      "フ",
      "フウ",
      "ブ"
    ],
    "kunyomi": [
      "おっと",
      "それ"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "失",
    "meanings": [
      "lose",
      "error",
      "fault"
    ],
    "onyomi": [
      "シツ"
    ],
    "kunyomi": [
      "うしな.う",
      "う.せる"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "好",
    "meanings": [
      "fond",
      "pleasing",
      "like something"
    ],
    "onyomi": [
      "コウ"
    ],
    "kunyomi": [
      "この.む",
      "す.く",
      "よ.い",
      "い.い"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "妻",
    "meanings": [
      "wife",
      "spouse"
    ],
    "onyomi": [
      "サイ"
    ],
    "kunyomi": [
      "つま"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "娘",
    "meanings": [
      "daughter",
      "girl"
    ],
    "onyomi": [
      "ジョウ"
    ],
    "kunyomi": [
      "むすめ",
      "こ"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "婚",
    "meanings": [
      "marriage"
    ],
    "onyomi": [
      "コン"
    ],
    "kunyomi": [],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "婦",
    "meanings": [
      "lady",
      "woman",
      "wife"
    ],
    "onyomi": [
      "フ"
    ],
    "kunyomi": [
      "よめ"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "存",
    "meanings": [
      "exist",
      "suppose",
      "be aware of"
    ],
    "onyomi": [
      "ソン",
      "ゾン"
    ],
    "kunyomi": [
      "ながら.える",
      "あ.る",
      "たも.つ",
      "と.う"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "宅",
    "meanings": [
      "home",
      "house",
      "residence"
    ],
    "onyomi": [
      "タク"
    ],
    "kunyomi": [],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "守",
    "meanings": [
      "guard",
      "protect",
      "defend"
    ],
    "onyomi": [
      "シュ",
      "ス"
    ],
    "kunyomi": [
      "まも.る",
      "まも.り",
      "もり",
      "-もり",
      "かみ"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "完",
    "meanings": [
      "perfect",
      "completion",
      "end"
    ],
    "onyomi": [
      "カン"
    ],
    "kunyomi": [],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "官",
    "meanings": [
      "bureaucrat",
      "the government",
      "organ"
    ],
    "onyomi": [
      "カン"
    ],
    "kunyomi": [],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "定",
    "meanings": [
      "determine",
      "fix",
      "establish"
    ],
    "onyomi": [
      "テイ",
      "ジョウ"
    ],
    "kunyomi": [
      "さだ.める",
      "さだ.まる",
      "さだ.か"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "実",
    "meanings": [
      "reality",
      "truth",
      "seed"
    ],
    "onyomi": [
      "ジツ",
      "シツ"
    ],
    "kunyomi": [
      "み",
      "みの.る",
      "まこと",
      "みの",
      "みち.る"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "客",
    "meanings": [
      "guest",
      "visitor",
      "customer"
    ],
    "onyomi": [
      "キャク",
      "カク"
    ],
    "kunyomi": [],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "害",
    "meanings": [
      "harm",
      "injury"
    ],
    "onyomi": [
      "ガイ"
    ],
    "kunyomi": [],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "容",
    "meanings": [
      "contain",
      "form",
      "looks"
    ],
    "onyomi": [
      "ヨウ"
    ],
    "kunyomi": [
      "い.れる"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "宿",
    "meanings": [
      "inn",
      "lodging",
      "relay station"
    ],
    "onyomi": [
      "シュク"
    ],
    "kunyomi": [
      "やど",
      "やど.る",
      "やど.す"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "寄",
    "meanings": [
      "draw near",
      "stop in",
      "bring near"
    ],
    "onyomi": [
      "キ"
    ],
    "kunyomi": [
      "よ.る",
      "-よ.り",
      "よ.せる"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "富",
    "meanings": [
      "wealth",
      "enrich",
      "abundant"
    ],
    "onyomi": [
      "フ",
      "フウ"
    ],
    "kunyomi": [
      "と.む",
      "とみ"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "寒",
    "meanings": [
      "cold"
    ],
    "onyomi": [
      "カン"
    ],
    "kunyomi": [
      "さむ.い"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "寝",
    "meanings": [
      "lie down",
      "sleep",
      "rest"
    ],
    "onyomi": [
      "シン"
    ],
    "kunyomi": [
      "ね.る",
      "ね.かす",
      "い.ぬ",
      "みたまや",
      "や.める"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "察",
    "meanings": [
      "guess",
      "presume",
      "surmise"
    ],
    "onyomi": [
      "サツ"
    ],
    "kunyomi": [],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "対",
    "meanings": [
      "vis-a-vis",
      "opposite",
      "even"
    ],
    "onyomi": [
      "タイ",
      "ツイ"
    ],
    "kunyomi": [
      "あいて",
      "こた.える",
      "そろ.い",
      "つれあ.い",
      "なら.ぶ",
      "むか.う"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "局",
    "meanings": [
      "bureau",
      "board",
      "office"
    ],
    "onyomi": [
      "キョク"
    ],
    "kunyomi": [
      "つぼね"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "居",
    "meanings": [
      "reside",
      "to be",
      "exist"
    ],
    "onyomi": [
      "キョ",
      "コ"
    ],
    "kunyomi": [
      "い.る",
      "-い",
      "お.る"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "差",
    "meanings": [
      "distinction",
      "difference",
      "variation"
    ],
    "onyomi": [
      "サ"
    ],
    "kunyomi": [
      "さ.す",
      "さ.し"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "市",
    "meanings": [
      "market",
      "city",
      "town"
    ],
    "onyomi": [
      "シ"
    ],
    "kunyomi": [
      "いち"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "師",
    "meanings": [
      "expert",
      "teacher",
      "master"
    ],
    "onyomi": [
      "シ"
    ],
    "kunyomi": [
      "いくさ"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "席",
    "meanings": [
      "seat",
      "mat",
      "occasion"
    ],
    "onyomi": [
      "セキ"
    ],
    "kunyomi": [
      "むしろ"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "常",
    "meanings": [
      "usual",
      "ordinary",
      "normal"
    ],
    "onyomi": [
      "ジョウ"
    ],
    "kunyomi": [
      "つね",
      "とこ-"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "平",
    "meanings": [
      "even",
      "flat",
      "peace"
    ],
    "onyomi": [
      "ヘイ",
      "ビョウ",
      "ヒョウ"
    ],
    "kunyomi": [
      "たい.ら",
      "たい.らげる",
      "ひら"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "幸",
    "meanings": [
      "happiness",
      "blessing",
      "fortune"
    ],
    "onyomi": [
      "コウ"
    ],
    "kunyomi": [
      "さいわ.い",
      "さち",
      "しあわ.せ"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "幾",
    "meanings": [
      "how many",
      "how much",
      "how far"
    ],
    "onyomi": [
      "キ"
    ],
    "kunyomi": [
      "いく-",
      "いく.つ",
      "いく.ら"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "座",
    "meanings": [
      "squat",
      "seat",
      "cushion"
    ],
    "onyomi": [
      "ザ"
    ],
    "kunyomi": [
      "すわ.る"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "庭",
    "meanings": [
      "courtyard",
      "garden",
      "yard"
    ],
    "onyomi": [
      "テイ"
    ],
    "kunyomi": [
      "にわ"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "式",
    "meanings": [
      "style",
      "ceremony",
      "rite"
    ],
    "onyomi": [
      "シキ"
    ],
    "kunyomi": [],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "引",
    "meanings": [
      "pull",
      "tug",
      "jerk"
    ],
    "onyomi": [
      "イン"
    ],
    "kunyomi": [
      "ひ.く",
      "ひ.ける"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "当",
    "meanings": [
      "hit",
      "right",
      "appropriate"
    ],
    "onyomi": [
      "トウ"
    ],
    "kunyomi": [
      "あ.たる",
      "あ.たり",
      "あ.てる",
      "あ.て",
      "まさ.に",
      "まさ.にべし"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "形",
    "meanings": [
      "shape",
      "form",
      "style"
    ],
    "onyomi": [
      "ケイ",
      "ギョウ"
    ],
    "kunyomi": [
      "かた",
      "-がた",
      "かたち",
      "なり"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "役",
    "meanings": [
      "duty",
      "war",
      "campaign"
    ],
    "onyomi": [
      "ヤク",
      "エキ"
    ],
    "kunyomi": [],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "彼",
    "meanings": [
      "he",
      "that",
      "the"
    ],
    "onyomi": [
      "ヒ"
    ],
    "kunyomi": [
      "かれ",
      "かの",
      "か.の"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "徒",
    "meanings": [
      "on foot",
      "junior",
      "emptiness"
    ],
    "onyomi": [
      "ト"
    ],
    "kunyomi": [
      "いたずら",
      "あだ"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "得",
    "meanings": [
      "gain",
      "get",
      "find"
    ],
    "onyomi": [
      "トク"
    ],
    "kunyomi": [
      "え.る",
      "う.る"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "御",
    "meanings": [
      "honorable",
      "manipulate",
      "govern"
    ],
    "onyomi": [
      "ギョ",
      "ゴ"
    ],
    "kunyomi": [
      "おん-",
      "お-",
      "み-"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "必",
    "meanings": [
      "invariably",
      "certain",
      "inevitable"
    ],
    "onyomi": [
      "ヒツ"
    ],
    "kunyomi": [
      "かなら.ず"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "忘",
    "meanings": [
      "forget"
    ],
    "onyomi": [
      "ボウ"
    ],
    "kunyomi": [
      "わす.れる"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "忙",
    "meanings": [
      "busy",
      "occupied",
      "restless"
    ],
    "onyomi": [
      "ボウ",
      "モウ"
    ],
    "kunyomi": [
      "いそが.しい",
      "せわ.しい",
      "おそ.れる",
      "うれえるさま"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "念",
    "meanings": [
      "wish",
      "sense",
      "idea"
    ],
    "onyomi": [
      "ネン"
    ],
    "kunyomi": [],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "怒",
    "meanings": [
      "angry",
      "be offended"
    ],
    "onyomi": [
      "ド",
      "ヌ"
    ],
    "kunyomi": [
      "いか.る",
      "おこ.る"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "怖",
    "meanings": [
      "dreadful",
      "be frightened",
      "fearful"
    ],
    "onyomi": [
      "フ",
      "ホ"
    ],
    "kunyomi": [
      "こわ.い",
      "こわ.がる",
      "お.じる",
      "おそ.れる"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "性",
    "meanings": [
      "sex",
      "gender",
      "nature"
    ],
    "onyomi": [
      "セイ",
      "ショウ"
    ],
    "kunyomi": [
      "さが"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "恐",
    "meanings": [
      "fear",
      "dread",
      "awe"
    ],
    "onyomi": [
      "キョウ"
    ],
    "kunyomi": [
      "おそ.れる",
      "おそ.る",
      "おそ.ろしい",
      "こわ.い",
      "こわ.がる"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "恥",
    "meanings": [
      "shame",
      "dishonor"
    ],
    "onyomi": [
      "チ"
    ],
    "kunyomi": [
      "は.じる",
      "はじ",
      "は.じらう",
      "は.ずかしい"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "息",
    "meanings": [
      "breath",
      "respiration",
      "son"
    ],
    "onyomi": [
      "ソク"
    ],
    "kunyomi": [
      "いき"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "悲",
    "meanings": [
      "grieve",
      "sad",
      "deplore"
    ],
    "onyomi": [
      "ヒ"
    ],
    "kunyomi": [
      "かな.しい",
      "かな.しむ"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "情",
    "meanings": [
      "feelings",
      "emotion",
      "passion"
    ],
    "onyomi": [
      "ジョウ",
      "セイ"
    ],
    "kunyomi": [
      "なさ.け"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "想",
    "meanings": [
      "idea",
      "thought",
      "conception"
    ],
    "onyomi": [
      "ソウ",
      "ソ"
    ],
    "kunyomi": [
      "おも.う"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "愛",
    "meanings": [
      "love",
      "affection",
      "favourite"
    ],
    "onyomi": [
      "アイ"
    ],
    "kunyomi": [
      "いと.しい",
      "かな.しい",
      "め.でる",
      "お.しむ",
      "まな"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "感",
    "meanings": [
      "emotion",
      "feeling",
      "sensation"
    ],
    "onyomi": [
      "カン"
    ],
    "kunyomi": [],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "慣",
    "meanings": [
      "accustomed",
      "get used to",
      "become experienced"
    ],
    "onyomi": [
      "カン"
    ],
    "kunyomi": [
      "な.れる",
      "な.らす"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "成",
    "meanings": [
      "turn into",
      "become",
      "get"
    ],
    "onyomi": [
      "セイ",
      "ジョウ"
    ],
    "kunyomi": [
      "な.る",
      "な.す",
      "-な.す"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "戦",
    "meanings": [
      "war",
      "battle",
      "match"
    ],
    "onyomi": [
      "セン"
    ],
    "kunyomi": [
      "いくさ",
      "たたか.う",
      "おのの.く",
      "そよ.ぐ",
      "わなな.く"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "戻",
    "meanings": [
      "re-",
      "return",
      "revert"
    ],
    "onyomi": [
      "レイ"
    ],
    "kunyomi": [
      "もど.す",
      "もど.る"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "所",
    "meanings": [
      "place",
      "extent"
    ],
    "onyomi": [
      "ショ"
    ],
    "kunyomi": [
      "ところ",
      "-ところ",
      "どころ",
      "とこ"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "才",
    "meanings": [
      "genius",
      "years old",
      "cubic shaku"
    ],
    "onyomi": [
      "サイ"
    ],
    "kunyomi": [],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "打",
    "meanings": [
      "strike",
      "hit",
      "knock"
    ],
    "onyomi": [
      "ダ",
      "ダース"
    ],
    "kunyomi": [
      "う.つ",
      "う.ち-",
      "ぶ.つ"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "払",
    "meanings": [
      "pay",
      "clear out",
      "prune"
    ],
    "onyomi": [
      "フツ",
      "ヒツ",
      "ホツ"
    ],
    "kunyomi": [
      "はら.う",
      "-はら.い",
      "-ばら.い"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "投",
    "meanings": [
      "throw",
      "discard",
      "abandon"
    ],
    "onyomi": [
      "トウ"
    ],
    "kunyomi": [
      "な.げる",
      "-な.げ"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "折",
    "meanings": [
      "fold",
      "break",
      "fracture"
    ],
    "onyomi": [
      "セツ",
      "シャク"
    ],
    "kunyomi": [
      "お.る",
      "おり",
      "お.り",
      "-お.り",
      "お.れる"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "抜",
    "meanings": [
      "slip out",
      "extract",
      "pull out"
    ],
    "onyomi": [
      "バツ",
      "ハツ",
      "ハイ"
    ],
    "kunyomi": [
      "ぬ.く",
      "-ぬ.く",
      "ぬ.き",
      "ぬ.ける",
      "ぬ.かす",
      "ぬ.かる"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "抱",
    "meanings": [
      "embrace",
      "hug",
      "hold in arms"
    ],
    "onyomi": [
      "ホウ"
    ],
    "kunyomi": [
      "だ.く",
      "いだ.く",
      "かか.える"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "押",
    "meanings": [
      "push",
      "stop",
      "check"
    ],
    "onyomi": [
      "オウ"
    ],
    "kunyomi": [
      "お.す",
      "お.し-",
      "お.っ-",
      "お.さえる",
      "おさ.える"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "招",
    "meanings": [
      "beckon",
      "invite",
      "summon"
    ],
    "onyomi": [
      "ショウ"
    ],
    "kunyomi": [
      "まね.く"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "指",
    "meanings": [
      "finger",
      "point to",
      "indicate"
    ],
    "onyomi": [
      "シ"
    ],
    "kunyomi": [
      "ゆび",
      "さ.す",
      "-さ.し"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "捕",
    "meanings": [
      "catch",
      "capture"
    ],
    "onyomi": [
      "ホ"
    ],
    "kunyomi": [
      "と.らえる",
      "と.らわれる",
      "と.る",
      "とら.える",
      "とら.われる",
      "つか.まえる",
      "つか.まる"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "掛",
    "meanings": [
      "hang",
      "suspend",
      "depend"
    ],
    "onyomi": [
      "カイ",
      "ケイ"
    ],
    "kunyomi": [
      "か.ける",
      "-か.ける",
      "か.け",
      "-か.け",
      "-が.け",
      "か.かる",
      "-か.かる",
      "-が.かる",
      "か.かり",
      "-が.かり",
      "かかり",
      "-がかり"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "探",
    "meanings": [
      "grope",
      "search",
      "look for"
    ],
    "onyomi": [
      "タン"
    ],
    "kunyomi": [
      "さぐ.る",
      "さが.す"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "支",
    "meanings": [
      "branch",
      "support",
      "sustain"
    ],
    "onyomi": [
      "シ"
    ],
    "kunyomi": [
      "ささ.える",
      "つか.える",
      "か.う"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "放",
    "meanings": [
      "set free",
      "release",
      "fire"
    ],
    "onyomi": [
      "ホウ"
    ],
    "kunyomi": [
      "はな.す",
      "-っぱな.し",
      "はな.つ",
      "はな.れる",
      "こ.く",
      "ほう.る"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "政",
    "meanings": [
      "politics",
      "government"
    ],
    "onyomi": [
      "セイ",
      "ショウ"
    ],
    "kunyomi": [
      "まつりごと",
      "まん"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "敗",
    "meanings": [
      "failure",
      "defeat",
      "reversal"
    ],
    "onyomi": [
      "ハイ"
    ],
    "kunyomi": [
      "やぶ.れる"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "散",
    "meanings": [
      "scatter",
      "disperse",
      "spend"
    ],
    "onyomi": [
      "サン"
    ],
    "kunyomi": [
      "ち.る",
      "ち.らす",
      "-ち.らす",
      "ち.らかす",
      "ち.らかる",
      "ち.らばる",
      "ばら",
      "ばら.ける"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "数",
    "meanings": [
      "number",
      "strength",
      "fate"
    ],
    "onyomi": [
      "スウ",
      "ス",
      "サク",
      "ソク",
      "シュ"
    ],
    "kunyomi": [
      "かず",
      "かぞ.える",
      "しばしば",
      "せ.める",
      "わずらわ.しい"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "断",
    "meanings": [
      "severance",
      "decline",
      "refuse"
    ],
    "onyomi": [
      "ダン"
    ],
    "kunyomi": [
      "た.つ",
      "ことわ.る",
      "さだ.める"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "易",
    "meanings": [
      "easy",
      "ready to",
      "simple"
    ],
    "onyomi": [
      "エキ",
      "イ"
    ],
    "kunyomi": [
      "やさ.しい",
      "やす.い"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "昔",
    "meanings": [
      "once upon a time",
      "antiquity",
      "old times"
    ],
    "onyomi": [
      "セキ",
      "シャク"
    ],
    "kunyomi": [
      "むかし"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "昨",
    "meanings": [
      "yesterday",
      "previous"
    ],
    "onyomi": [
      "サク"
    ],
    "kunyomi": [],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "晩",
    "meanings": [
      "nightfall",
      "night"
    ],
    "onyomi": [
      "バン"
    ],
    "kunyomi": [],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "景",
    "meanings": [
      "scenery",
      "view"
    ],
    "onyomi": [
      "ケイ"
    ],
    "kunyomi": [],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "晴",
    "meanings": [
      "clear up"
    ],
    "onyomi": [
      "セイ"
    ],
    "kunyomi": [
      "は.れる",
      "は.れ",
      "は.れ-",
      "-ば.れ",
      "は.らす"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "暗",
    "meanings": [
      "darkness",
      "disappear",
      "shade"
    ],
    "onyomi": [
      "アン"
    ],
    "kunyomi": [
      "くら.い",
      "くら.む",
      "くれ.る"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "暮",
    "meanings": [
      "evening",
      "twilight",
      "season's end"
    ],
    "onyomi": [
      "ボ"
    ],
    "kunyomi": [
      "く.れる",
      "く.らす"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "曲",
    "meanings": [
      "bend",
      "music",
      "melody"
    ],
    "onyomi": [
      "キョク"
    ],
    "kunyomi": [
      "ま.がる",
      "ま.げる",
      "くま"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "更",
    "meanings": [
      "grow late",
      "night watch",
      "sit up late"
    ],
    "onyomi": [
      "コウ"
    ],
    "kunyomi": [
      "さら",
      "さら.に",
      "ふ.ける",
      "ふ.かす"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "最",
    "meanings": [
      "utmost",
      "most",
      "extreme"
    ],
    "onyomi": [
      "サイ",
      "シュ"
    ],
    "kunyomi": [
      "もっと.も",
      "つま"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "望",
    "meanings": [
      "ambition",
      "full moon",
      "hope"
    ],
    "onyomi": [
      "ボウ",
      "モウ"
    ],
    "kunyomi": [
      "のぞ.む",
      "もち"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "期",
    "meanings": [
      "period",
      "time",
      "date"
    ],
    "onyomi": [
      "キ",
      "ゴ"
    ],
    "kunyomi": [],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "未",
    "meanings": [
      "un-",
      "not yet",
      "hitherto"
    ],
    "onyomi": [
      "ミ",
      "ビ"
    ],
    "kunyomi": [
      "いま.だ",
      "ま.だ",
      "ひつじ"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "末",
    "meanings": [
      "end",
      "close",
      "tip"
    ],
    "onyomi": [
      "マツ",
      "バツ"
    ],
    "kunyomi": [
      "すえ",
      "うら",
      "うれ"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "束",
    "meanings": [
      "bundle",
      "sheaf",
      "ream"
    ],
    "onyomi": [
      "ソク"
    ],
    "kunyomi": [
      "たば",
      "たば.ねる",
      "つか",
      "つか.ねる"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "杯",
    "meanings": [
      "counter for cupfuls",
      "wine glass",
      "glass"
    ],
    "onyomi": [
      "ハイ"
    ],
    "kunyomi": [
      "さかずき"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "果",
    "meanings": [
      "fruit",
      "reward",
      "carry out"
    ],
    "onyomi": [
      "カ"
    ],
    "kunyomi": [
      "は.たす",
      "はた.す",
      "-は.たす",
      "は.てる",
      "-は.てる",
      "は.て"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "格",
    "meanings": [
      "status",
      "rank",
      "capacity"
    ],
    "onyomi": [
      "カク",
      "コウ",
      "キャク",
      "ゴウ"
    ],
    "kunyomi": [],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "構",
    "meanings": [
      "posture",
      "stance",
      "appearance"
    ],
    "onyomi": [
      "コウ"
    ],
    "kunyomi": [
      "かま.える",
      "かま.う"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "様",
    "meanings": [
      "Esq.",
      "way",
      "manner"
    ],
    "onyomi": [
      "ヨウ",
      "ショウ"
    ],
    "kunyomi": [
      "さま",
      "さん"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "権",
    "meanings": [
      "authority",
      "power",
      "rights"
    ],
    "onyomi": [
      "ケン",
      "ゴン"
    ],
    "kunyomi": [
      "おもり",
      "かり",
      "はか.る"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "横",
    "meanings": [
      "sideways",
      "side",
      "horizontal"
    ],
    "onyomi": [
      "オウ"
    ],
    "kunyomi": [
      "よこ"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "機",
    "meanings": [
      "loom",
      "mechanism",
      "machine"
    ],
    "onyomi": [
      "キ"
    ],
    "kunyomi": [
      "はた"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "欠",
    "meanings": [
      "lack",
      "gap",
      "fail"
    ],
    "onyomi": [
      "ケツ",
      "ケン"
    ],
    "kunyomi": [
      "か.ける",
      "か.く"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "次",
    "meanings": [
      "next",
      "order",
      "sequence"
    ],
    "onyomi": [
      "ジ",
      "シ"
    ],
    "kunyomi": [
      "つ.ぐ",
      "つぎ"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "欲",
    "meanings": [
      "longing",
      "covetousness",
      "greed"
    ],
    "onyomi": [
      "ヨク"
    ],
    "kunyomi": [
      "ほっ.する",
      "ほ.しい"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "歯",
    "meanings": [
      "tooth",
      "cog"
    ],
    "onyomi": [
      "シ"
    ],
    "kunyomi": [
      "よわい",
      "は",
      "よわ.い",
      "よわい.する"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "歳",
    "meanings": [
      "year-end",
      "age",
      "occasion"
    ],
    "onyomi": [
      "サイ",
      "セイ"
    ],
    "kunyomi": [
      "とし",
      "とせ",
      "よわい"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "残",
    "meanings": [
      "remainder",
      "leftover",
      "balance"
    ],
    "onyomi": [
      "ザン",
      "サン"
    ],
    "kunyomi": [
      "のこ.る",
      "のこ.す",
      "そこな.う",
      "のこ.り"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "段",
    "meanings": [
      "grade",
      "steps",
      "stairs"
    ],
    "onyomi": [
      "ダン",
      "タン"
    ],
    "kunyomi": [],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "殺",
    "meanings": [
      "kill",
      "murder",
      "butcher"
    ],
    "onyomi": [
      "サツ",
      "サイ",
      "セツ"
    ],
    "kunyomi": [
      "ころ.す",
      "-ごろ.し",
      "そ.ぐ",
      "あや.める"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "民",
    "meanings": [
      "people",
      "nation",
      "subjects"
    ],
    "onyomi": [
      "ミン"
    ],
    "kunyomi": [
      "たみ"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "求",
    "meanings": [
      "request",
      "want",
      "wish for"
    ],
    "onyomi": [
      "キュウ",
      "グ"
    ],
    "kunyomi": [
      "もと.める"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "決",
    "meanings": [
      "decide",
      "fix",
      "agree upon"
    ],
    "onyomi": [
      "ケツ"
    ],
    "kunyomi": [
      "き.める",
      "-ぎ.め",
      "き.まる",
      "さ.く"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "治",
    "meanings": [
      "reign",
      "be at peace",
      "calm down"
    ],
    "onyomi": [
      "ジ",
      "チ"
    ],
    "kunyomi": [
      "おさ.める",
      "おさ.まる",
      "なお.る",
      "なお.す"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "法",
    "meanings": [
      "method",
      "law",
      "rule"
    ],
    "onyomi": [
      "ホウ",
      "ハッ",
      "ホッ",
      "フラン"
    ],
    "kunyomi": [
      "のり"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "泳",
    "meanings": [
      "swim"
    ],
    "onyomi": [
      "エイ"
    ],
    "kunyomi": [
      "およ.ぐ"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "洗",
    "meanings": [
      "wash",
      "inquire into",
      "probe"
    ],
    "onyomi": [
      "セン"
    ],
    "kunyomi": [
      "あら.う"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "活",
    "meanings": [
      "lively",
      "resuscitation",
      "being helped"
    ],
    "onyomi": [
      "カツ"
    ],
    "kunyomi": [
      "い.きる",
      "い.かす",
      "い.ける"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "流",
    "meanings": [
      "current",
      "a sink",
      "flow"
    ],
    "onyomi": [
      "リュウ",
      "ル"
    ],
    "kunyomi": [
      "なが.れる",
      "なが.れ",
      "なが.す",
      "-なが.す"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "浮",
    "meanings": [
      "floating",
      "float",
      "rise to surface"
    ],
    "onyomi": [
      "フ"
    ],
    "kunyomi": [
      "う.く",
      "う.かれる",
      "う.かぶ",
      "う.かべる"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "消",
    "meanings": [
      "extinguish",
      "blow out",
      "turn off"
    ],
    "onyomi": [
      "ショウ"
    ],
    "kunyomi": [
      "き.える",
      "け.す"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "深",
    "meanings": [
      "deep",
      "heighten",
      "intensify"
    ],
    "onyomi": [
      "シン"
    ],
    "kunyomi": [
      "ふか.い",
      "-ぶか.い",
      "ふか.まる",
      "ふか.める",
      "み-"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "済",
    "meanings": [
      "settle (debt, etc.)",
      "relieve (burden)",
      "finish"
    ],
    "onyomi": [
      "サイ",
      "セイ"
    ],
    "kunyomi": [
      "す.む",
      "-ず.み",
      "-ずみ",
      "す.まない",
      "す.ます",
      "-す.ます",
      "すく.う",
      "な.す",
      "わたし",
      "わた.る"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "渡",
    "meanings": [
      "transit",
      "ford",
      "ferry"
    ],
    "onyomi": [
      "ト"
    ],
    "kunyomi": [
      "わた.る",
      "-わた.る",
      "わた.す"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "港",
    "meanings": [
      "harbor"
    ],
    "onyomi": [
      "コウ"
    ],
    "kunyomi": [
      "みなと"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "満",
    "meanings": [
      "full",
      "fullness",
      "enough"
    ],
    "onyomi": [
      "マン",
      "バン"
    ],
    "kunyomi": [
      "み.ちる",
      "み.つ",
      "み.たす"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "演",
    "meanings": [
      "performance",
      "act",
      "play"
    ],
    "onyomi": [
      "エン"
    ],
    "kunyomi": [],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "点",
    "meanings": [
      "spot",
      "point",
      "mark"
    ],
    "onyomi": [
      "テン"
    ],
    "kunyomi": [
      "つ.ける",
      "つ.く",
      "た.てる",
      "さ.す",
      "とぼ.す",
      "とも.す",
      "ぼち"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "然",
    "meanings": [
      "sort of thing",
      "so",
      "if so"
    ],
    "onyomi": [
      "ゼン",
      "ネン"
    ],
    "kunyomi": [
      "しか",
      "しか.り",
      "しか.し",
      "さ"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "煙",
    "meanings": [
      "smoke"
    ],
    "onyomi": [
      "エン"
    ],
    "kunyomi": [
      "けむ.る",
      "けむり",
      "けむ.い"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "熱",
    "meanings": [
      "heat",
      "temperature",
      "fever"
    ],
    "onyomi": [
      "ネツ"
    ],
    "kunyomi": [
      "あつ.い"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "犯",
    "meanings": [
      "crime",
      "sin",
      "offense"
    ],
    "onyomi": [
      "ハン",
      "ボン"
    ],
    "kunyomi": [
      "おか.す"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "状",
    "meanings": [
      "status quo",
      "conditions",
      "circumstances"
    ],
    "onyomi": [
      "ジョウ"
    ],
    "kunyomi": [],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "猫",
    "meanings": [
      "cat"
    ],
    "onyomi": [
      "ビョウ"
    ],
    "kunyomi": [
      "ねこ"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "王",
    "meanings": [
      "king",
      "rule",
      "magnate"
    ],
    "onyomi": [
      "オウ",
      "-ノウ"
    ],
    "kunyomi": [],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "現",
    "meanings": [
      "present",
      "existing",
      "actual"
    ],
    "onyomi": [
      "ゲン"
    ],
    "kunyomi": [
      "あらわ.れる",
      "あらわ.す",
      "うつつ",
      "うつ.つ"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "球",
    "meanings": [
      "ball",
      "sphere"
    ],
    "onyomi": [
      "キュウ"
    ],
    "kunyomi": [
      "たま"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "産",
    "meanings": [
      "products",
      "bear",
      "give birth"
    ],
    "onyomi": [
      "サン"
    ],
    "kunyomi": [
      "う.む",
      "う.まれる",
      "うぶ-",
      "む.す"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "由",
    "meanings": [
      "wherefore",
      "a reason"
    ],
    "onyomi": [
      "ユ",
      "ユウ",
      "ユイ"
    ],
    "kunyomi": [
      "よし",
      "よ.る"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "申",
    "meanings": [
      "have the honor to",
      "sign of the monkey",
      "3-5PM"
    ],
    "onyomi": [
      "シン"
    ],
    "kunyomi": [
      "もう.す",
      "もう.し-",
      "さる"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "留",
    "meanings": [
      "detain",
      "fasten",
      "halt"
    ],
    "onyomi": [
      "リュウ",
      "ル"
    ],
    "kunyomi": [
      "と.める",
      "と.まる",
      "とど.める",
      "とど.まる",
      "るうぶる"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "番",
    "meanings": [
      "turn",
      "number in a series"
    ],
    "onyomi": [
      "バン"
    ],
    "kunyomi": [
      "つが.い"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "疑",
    "meanings": [
      "doubt",
      "distrust",
      "be suspicious"
    ],
    "onyomi": [
      "ギ"
    ],
    "kunyomi": [
      "うたが.う"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "疲",
    "meanings": [
      "exhausted",
      "tire",
      "weary"
    ],
    "onyomi": [
      "ヒ"
    ],
    "kunyomi": [
      "つか.れる",
      "-づか.れ",
      "つか.らす"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "痛",
    "meanings": [
      "pain",
      "hurt",
      "damage"
    ],
    "onyomi": [
      "ツウ"
    ],
    "kunyomi": [
      "いた.い",
      "いた.む",
      "いた.ましい",
      "いた.める"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "登",
    "meanings": [
      "ascend",
      "climb up"
    ],
    "onyomi": [
      "トウ",
      "ト",
      "ドウ",
      "ショウ",
      "チョウ"
    ],
    "kunyomi": [
      "のぼ.る",
      "あ.がる"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "皆",
    "meanings": [
      "all",
      "everything"
    ],
    "onyomi": [
      "カイ"
    ],
    "kunyomi": [
      "みな",
      "みんな"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "盗",
    "meanings": [
      "steal",
      "rob",
      "pilfer"
    ],
    "onyomi": [
      "トウ"
    ],
    "kunyomi": [
      "ぬす.む",
      "ぬす.み"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "直",
    "meanings": [
      "straightaway",
      "honesty",
      "frankness"
    ],
    "onyomi": [
      "チョク",
      "ジキ",
      "ジカ"
    ],
    "kunyomi": [
      "ただ.ちに",
      "なお.す",
      "-なお.す",
      "なお.る",
      "なお.き",
      "す.ぐ"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "相",
    "meanings": [
      "inter-",
      "mutual",
      "together"
    ],
    "onyomi": [
      "ソウ",
      "ショウ"
    ],
    "kunyomi": [
      "あい-"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "眠",
    "meanings": [
      "sleep",
      "die",
      "sleepy"
    ],
    "onyomi": [
      "ミン"
    ],
    "kunyomi": [
      "ねむ.る",
      "ねむ.い"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "石",
    "meanings": [
      "stone"
    ],
    "onyomi": [
      "セキ",
      "シャク",
      "コク"
    ],
    "kunyomi": [
      "いし"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "破",
    "meanings": [
      "rend",
      "rip",
      "tear"
    ],
    "onyomi": [
      "ハ"
    ],
    "kunyomi": [
      "やぶ.る",
      "やぶ.れる",
      "わ.れる"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "確",
    "meanings": [
      "assurance",
      "firm",
      "tight"
    ],
    "onyomi": [
      "カク",
      "コウ"
    ],
    "kunyomi": [
      "たし.か",
      "たし.かめる"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "示",
    "meanings": [
      "show",
      "indicate",
      "point out"
    ],
    "onyomi": [
      "ジ",
      "シ"
    ],
    "kunyomi": [
      "しめ.す"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "礼",
    "meanings": [
      "salute",
      "bow",
      "ceremony"
    ],
    "onyomi": [
      "レイ",
      "ライ"
    ],
    "kunyomi": [],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "祖",
    "meanings": [
      "ancestor",
      "pioneer",
      "founder"
    ],
    "onyomi": [
      "ソ"
    ],
    "kunyomi": [],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "神",
    "meanings": [
      "gods",
      "mind",
      "soul"
    ],
    "onyomi": [
      "シン",
      "ジン"
    ],
    "kunyomi": [
      "かみ",
      "かん-",
      "こう-"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "福",
    "meanings": [
      "blessing",
      "fortune",
      "luck"
    ],
    "onyomi": [
      "フク"
    ],
    "kunyomi": [],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "科",
    "meanings": [
      "department",
      "course",
      "section"
    ],
    "onyomi": [
      "カ"
    ],
    "kunyomi": [],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "程",
    "meanings": [
      "extent",
      "degree",
      "law"
    ],
    "onyomi": [
      "テイ"
    ],
    "kunyomi": [
      "ほど",
      "-ほど"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "種",
    "meanings": [
      "species",
      "kind",
      "class"
    ],
    "onyomi": [
      "シュ"
    ],
    "kunyomi": [
      "たね",
      "-ぐさ"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "積",
    "meanings": [
      "volume",
      "product (x*y)",
      "acreage"
    ],
    "onyomi": [
      "セキ"
    ],
    "kunyomi": [
      "つ.む",
      "-づ.み",
      "つ.もる",
      "つ.もり"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "突",
    "meanings": [
      "stab",
      "protruding",
      "thrust"
    ],
    "onyomi": [
      "トツ",
      "カ"
    ],
    "kunyomi": [
      "つ.く"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "窓",
    "meanings": [
      "window",
      "pane"
    ],
    "onyomi": [
      "ソウ",
      "ス"
    ],
    "kunyomi": [
      "まど",
      "てんまど",
      "けむだし"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "笑",
    "meanings": [
      "laugh"
    ],
    "onyomi": [
      "ショウ"
    ],
    "kunyomi": [
      "わら.う",
      "え.む"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "等",
    "meanings": [
      "etc.",
      "and so forth",
      "class (first)"
    ],
    "onyomi": [
      "トウ"
    ],
    "kunyomi": [
      "ひと.しい",
      "など",
      "-ら"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "箱",
    "meanings": [
      "box",
      "chest",
      "case"
    ],
    "onyomi": [
      "ソウ"
    ],
    "kunyomi": [
      "はこ"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "米",
    "meanings": [
      "rice",
      "USA",
      "metre"
    ],
    "onyomi": [
      "ベイ",
      "マイ",
      "メエトル"
    ],
    "kunyomi": [
      "こめ",
      "よね"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "精",
    "meanings": [
      "refined",
      "ghost",
      "fairy"
    ],
    "onyomi": [
      "セイ",
      "ショウ"
    ],
    "kunyomi": [
      "しら.げる",
      "くわ.しい"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "約",
    "meanings": [
      "promise",
      "approximately",
      "shrink"
    ],
    "onyomi": [
      "ヤク"
    ],
    "kunyomi": [
      "つづ.まる",
      "つづ.める",
      "つづま.やか"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "組",
    "meanings": [
      "association",
      "braid",
      "plait"
    ],
    "onyomi": [
      "ソ"
    ],
    "kunyomi": [
      "く.む",
      "くみ",
      "-ぐみ"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "経",
    "meanings": [
      "sutra",
      "longitude",
      "pass thru"
    ],
    "onyomi": [
      "ケイ",
      "キョウ",
      "キン"
    ],
    "kunyomi": [
      "へ.る",
      "た.つ",
      "たていと",
      "はか.る",
      "のり"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "給",
    "meanings": [
      "salary",
      "wage",
      "gift"
    ],
    "onyomi": [
      "キュウ"
    ],
    "kunyomi": [
      "たま.う",
      "たも.う",
      "-たま.え"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "絵",
    "meanings": [
      "picture",
      "drawing",
      "painting"
    ],
    "onyomi": [
      "カイ",
      "エ"
    ],
    "kunyomi": [],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "絶",
    "meanings": [
      "discontinue",
      "sever",
      "cut off"
    ],
    "onyomi": [
      "ゼツ"
    ],
    "kunyomi": [
      "た.える",
      "た.やす",
      "た.つ"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "続",
    "meanings": [
      "continue",
      "series",
      "sequel"
    ],
    "onyomi": [
      "ゾク",
      "ショク",
      "コウ",
      "キョウ"
    ],
    "kunyomi": [
      "つづ.く",
      "つづ.ける",
      "つぐ.ない"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "緒",
    "meanings": [
      "thong",
      "beginning",
      "inception"
    ],
    "onyomi": [
      "ショ",
      "チョ"
    ],
    "kunyomi": [
      "お",
      "いとぐち"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "罪",
    "meanings": [
      "guilt",
      "sin",
      "crime"
    ],
    "onyomi": [
      "ザイ"
    ],
    "kunyomi": [
      "つみ"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "置",
    "meanings": [
      "placement",
      "put",
      "set"
    ],
    "onyomi": [
      "チ"
    ],
    "kunyomi": [
      "お.く",
      "-お.き"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "美",
    "meanings": [
      "beauty",
      "beautiful"
    ],
    "onyomi": [
      "ビ",
      "ミ"
    ],
    "kunyomi": [
      "うつく.しい"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "老",
    "meanings": [
      "old man",
      "old age",
      "grow old"
    ],
    "onyomi": [
      "ロウ"
    ],
    "kunyomi": [
      "お.いる",
      "ふ.ける"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "耳",
    "meanings": [
      "ear"
    ],
    "onyomi": [
      "ジ"
    ],
    "kunyomi": [
      "みみ"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "職",
    "meanings": [
      "post",
      "employment",
      "work"
    ],
    "onyomi": [
      "ショク",
      "ソク"
    ],
    "kunyomi": [],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "育",
    "meanings": [
      "bring up",
      "grow up",
      "raise"
    ],
    "onyomi": [
      "イク"
    ],
    "kunyomi": [
      "そだ.つ",
      "そだ.ち",
      "そだ.てる",
      "はぐく.む"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "背",
    "meanings": [
      "stature",
      "height",
      "back"
    ],
    "onyomi": [
      "ハイ"
    ],
    "kunyomi": [
      "せ",
      "せい",
      "そむ.く",
      "そむ.ける"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "能",
    "meanings": [
      "ability",
      "talent",
      "skill"
    ],
    "onyomi": [
      "ノウ"
    ],
    "kunyomi": [
      "よ.く",
      "あた.う"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "腹",
    "meanings": [
      "abdomen",
      "belly",
      "stomach"
    ],
    "onyomi": [
      "フク"
    ],
    "kunyomi": [
      "はら"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "舞",
    "meanings": [
      "dance",
      "flit",
      "circle"
    ],
    "onyomi": [
      "ブ"
    ],
    "kunyomi": [
      "ま.う",
      "-ま.う",
      "まい"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "船",
    "meanings": [
      "ship",
      "boat"
    ],
    "onyomi": [
      "セン"
    ],
    "kunyomi": [
      "ふね",
      "ふな-"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "良",
    "meanings": [
      "good",
      "pleasing",
      "skilled"
    ],
    "onyomi": [
      "リョウ"
    ],
    "kunyomi": [
      "よ.い",
      "-よ.い",
      "い.い",
      "-い.い"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "若",
    "meanings": [
      "young",
      "if",
      "perhaps"
    ],
    "onyomi": [
      "ジャク",
      "ニャク",
      "ニャ"
    ],
    "kunyomi": [
      "わか.い",
      "わか-",
      "も.しくわ",
      "も.し",
      "も.しくは",
      "ごと.し"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "苦",
    "meanings": [
      "suffering",
      "trial",
      "worry"
    ],
    "onyomi": [
      "ク"
    ],
    "kunyomi": [
      "くる.しい",
      "-ぐる.しい",
      "くる.しむ",
      "くる.しめる",
      "にが.い",
      "にが.る"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "草",
    "meanings": [
      "grass",
      "weeds",
      "herbs"
    ],
    "onyomi": [
      "ソウ"
    ],
    "kunyomi": [
      "くさ",
      "くさ-",
      "-ぐさ"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "落",
    "meanings": [
      "fall",
      "drop",
      "come down"
    ],
    "onyomi": [
      "ラク"
    ],
    "kunyomi": [
      "お.ちる",
      "お.ち",
      "お.とす"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "葉",
    "meanings": [
      "leaf",
      "plane",
      "lobe"
    ],
    "onyomi": [
      "ヨウ"
    ],
    "kunyomi": [
      "は"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "薬",
    "meanings": [
      "medicine",
      "chemical",
      "enamel"
    ],
    "onyomi": [
      "ヤク"
    ],
    "kunyomi": [
      "くすり"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "術",
    "meanings": [
      "art",
      "technique",
      "skill"
    ],
    "onyomi": [
      "ジュツ"
    ],
    "kunyomi": [
      "すべ"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "表",
    "meanings": [
      "surface",
      "table",
      "chart"
    ],
    "onyomi": [
      "ヒョウ"
    ],
    "kunyomi": [
      "おもて",
      "-おもて",
      "あらわ.す",
      "あらわ.れる",
      "あら.わす"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "要",
    "meanings": [
      "need",
      "main point",
      "essence"
    ],
    "onyomi": [
      "ヨウ"
    ],
    "kunyomi": [
      "い.る",
      "かなめ"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "規",
    "meanings": [
      "standard",
      "measure"
    ],
    "onyomi": [
      "キ"
    ],
    "kunyomi": [],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "覚",
    "meanings": [
      "memorize",
      "learn",
      "remember"
    ],
    "onyomi": [
      "カク"
    ],
    "kunyomi": [
      "おぼ.える",
      "さ.ます",
      "さ.める",
      "さと.る"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "観",
    "meanings": [
      "outlook",
      "look",
      "appearance"
    ],
    "onyomi": [
      "カン"
    ],
    "kunyomi": [
      "み.る",
      "しめ.す"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "解",
    "meanings": [
      "unravel",
      "notes",
      "key"
    ],
    "onyomi": [
      "カイ",
      "ゲ"
    ],
    "kunyomi": [
      "と.く",
      "と.かす",
      "と.ける",
      "ほど.く",
      "ほぐ.す",
      "わか.る",
      "さと.る"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "記",
    "meanings": [
      "scribe",
      "account",
      "narrative"
    ],
    "onyomi": [
      "キ"
    ],
    "kunyomi": [
      "しる.す"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "訪",
    "meanings": [
      "call on",
      "visit",
      "look up"
    ],
    "onyomi": [
      "ホウ"
    ],
    "kunyomi": [
      "おとず.れる",
      "たず.ねる",
      "と.う"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "許",
    "meanings": [
      "permit",
      "approve"
    ],
    "onyomi": [
      "キョ"
    ],
    "kunyomi": [
      "ゆる.す",
      "もと"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "認",
    "meanings": [
      "acknowledge",
      "witness",
      "discern"
    ],
    "onyomi": [
      "ニン"
    ],
    "kunyomi": [
      "みと.める",
      "したた.める"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "誤",
    "meanings": [
      "mistake",
      "err",
      "do wrong"
    ],
    "onyomi": [
      "ゴ"
    ],
    "kunyomi": [
      "あやま.る",
      "-あやま.る"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "説",
    "meanings": [
      "opinion",
      "theory",
      "explanation"
    ],
    "onyomi": [
      "セツ",
      "ゼイ"
    ],
    "kunyomi": [
      "と.く"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "調",
    "meanings": [
      "tune",
      "tone",
      "meter"
    ],
    "onyomi": [
      "チョウ"
    ],
    "kunyomi": [
      "しら.べる",
      "しら.べ",
      "ととの.う",
      "ととの.える"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "談",
    "meanings": [
      "discuss",
      "talk"
    ],
    "onyomi": [
      "ダン"
    ],
    "kunyomi": [],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "論",
    "meanings": [
      "argument",
      "discourse"
    ],
    "onyomi": [
      "ロン"
    ],
    "kunyomi": [
      "あげつら.う"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "識",
    "meanings": [
      "discriminating",
      "know",
      "write"
    ],
    "onyomi": [
      "シキ"
    ],
    "kunyomi": [
      "し.る",
      "しる.す"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "警",
    "meanings": [
      "admonish",
      "commandment"
    ],
    "onyomi": [
      "ケイ"
    ],
    "kunyomi": [
      "いまし.める"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "議",
    "meanings": [
      "deliberation",
      "consultation",
      "debate"
    ],
    "onyomi": [
      "ギ"
    ],
    "kunyomi": [],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "負",
    "meanings": [
      "defeat",
      "negative",
      "-"
    ],
    "onyomi": [
      "フ"
    ],
    "kunyomi": [
      "ま.ける",
      "ま.かす",
      "お.う"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "財",
    "meanings": [
      "property",
      "money",
      "wealth"
    ],
    "onyomi": [
      "ザイ",
      "サイ",
      "ゾク"
    ],
    "kunyomi": [
      "たから"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "貧",
    "meanings": [
      "poverty",
      "poor"
    ],
    "onyomi": [
      "ヒン",
      "ビン"
    ],
    "kunyomi": [
      "まず.しい"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "責",
    "meanings": [
      "blame",
      "condemn",
      "censure"
    ],
    "onyomi": [
      "セキ"
    ],
    "kunyomi": [
      "せ.める"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "費",
    "meanings": [
      "expense",
      "cost",
      "spend"
    ],
    "onyomi": [
      "ヒ"
    ],
    "kunyomi": [
      "つい.やす",
      "つい.える"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "資",
    "meanings": [
      "assets",
      "resources",
      "capital"
    ],
    "onyomi": [
      "シ"
    ],
    "kunyomi": [],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "賛",
    "meanings": [
      "approve",
      "praise",
      "title or inscription on picture"
    ],
    "onyomi": [
      "サン"
    ],
    "kunyomi": [
      "たす.ける",
      "たた.える"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "越",
    "meanings": [
      "surpass",
      "cross over",
      "move to"
    ],
    "onyomi": [
      "エツ",
      "オツ"
    ],
    "kunyomi": [
      "こ.す",
      "-こ.す",
      "-ご.し",
      "こ.える",
      "-ご.え"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "路",
    "meanings": [
      "path",
      "route",
      "road"
    ],
    "onyomi": [
      "ロ",
      "ル"
    ],
    "kunyomi": [
      "-じ",
      "みち"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "辞",
    "meanings": [
      "resign",
      "word",
      "term"
    ],
    "onyomi": [
      "ジ"
    ],
    "kunyomi": [
      "や.める",
      "いな.む"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "込",
    "meanings": [
      "crowded",
      "mixture",
      "in bulk"
    ],
    "onyomi": [],
    "kunyomi": [
      "-こ.む",
      "こ.む",
      "こ.み",
      "-こ.み",
      "こ.める"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "迎",
    "meanings": [
      "welcome",
      "meet",
      "greet"
    ],
    "onyomi": [
      "ゲイ"
    ],
    "kunyomi": [
      "むか.える"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "返",
    "meanings": [
      "return",
      "answer",
      "fade"
    ],
    "onyomi": [
      "ヘン"
    ],
    "kunyomi": [
      "かえ.す",
      "-かえ.す",
      "かえ.る",
      "-かえ.る"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "迷",
    "meanings": [
      "astray",
      "be perplexed",
      "in doubt"
    ],
    "onyomi": [
      "メイ"
    ],
    "kunyomi": [
      "まよ.う"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "追",
    "meanings": [
      "chase",
      "drive away",
      "follow"
    ],
    "onyomi": [
      "ツイ"
    ],
    "kunyomi": [
      "お.う"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "退",
    "meanings": [
      "retreat",
      "withdraw",
      "retire"
    ],
    "onyomi": [
      "タイ"
    ],
    "kunyomi": [
      "しりぞ.く",
      "しりぞ.ける",
      "ひ.く",
      "の.く",
      "の.ける",
      "ど.く"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "逃",
    "meanings": [
      "escape",
      "flee",
      "shirk"
    ],
    "onyomi": [
      "トウ"
    ],
    "kunyomi": [
      "に.げる",
      "に.がす",
      "のが.す",
      "のが.れる"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "途",
    "meanings": [
      "route",
      "way",
      "road"
    ],
    "onyomi": [
      "ト"
    ],
    "kunyomi": [
      "みち"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "速",
    "meanings": [
      "quick",
      "fast"
    ],
    "onyomi": [
      "ソク"
    ],
    "kunyomi": [
      "はや.い",
      "はや-",
      "はや.める",
      "すみ.やか"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "連",
    "meanings": [
      "take along",
      "lead",
      "join"
    ],
    "onyomi": [
      "レン"
    ],
    "kunyomi": [
      "つら.なる",
      "つら.ねる",
      "つ.れる",
      "-づ.れ"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "進",
    "meanings": [
      "advance",
      "proceed",
      "progress"
    ],
    "onyomi": [
      "シン"
    ],
    "kunyomi": [
      "すす.む",
      "すす.める"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "遅",
    "meanings": [
      "slow",
      "late",
      "back"
    ],
    "onyomi": [
      "チ"
    ],
    "kunyomi": [
      "おく.れる",
      "おく.らす",
      "おそ.い"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "遊",
    "meanings": [
      "play"
    ],
    "onyomi": [
      "ユウ",
      "ユ"
    ],
    "kunyomi": [
      "あそ.ぶ",
      "あそ.ばす"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "過",
    "meanings": [
      "overdo",
      "exceed",
      "go beyond"
    ],
    "onyomi": [
      "カ"
    ],
    "kunyomi": [
      "す.ぎる",
      "す.ごす",
      "あやま.ち",
      "あやま.つ",
      "よぎ.る",
      "よ.ぎる"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "達",
    "meanings": [
      "accomplished",
      "reach",
      "arrive"
    ],
    "onyomi": [
      "タツ",
      "ダ"
    ],
    "kunyomi": [
      "-たち"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "違",
    "meanings": [
      "difference",
      "differ"
    ],
    "onyomi": [
      "イ"
    ],
    "kunyomi": [
      "ちが.う",
      "ちが.い",
      "ちが.える",
      "-ちが.える",
      "たが.う",
      "たが.える"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "遠",
    "meanings": [
      "distant",
      "far"
    ],
    "onyomi": [
      "エン",
      "オン"
    ],
    "kunyomi": [
      "とお.い"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "適",
    "meanings": [
      "suitable",
      "occasional",
      "rare"
    ],
    "onyomi": [
      "テキ"
    ],
    "kunyomi": [
      "かな.う"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "選",
    "meanings": [
      "elect",
      "select",
      "choose"
    ],
    "onyomi": [
      "セン"
    ],
    "kunyomi": [
      "えら.ぶ",
      "え.る",
      "よ.る"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "部",
    "meanings": [
      "section",
      "bureau",
      "dept"
    ],
    "onyomi": [
      "ブ"
    ],
    "kunyomi": [
      "-べ"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "都",
    "meanings": [
      "metropolis",
      "capital",
      "all"
    ],
    "onyomi": [
      "ト",
      "ツ"
    ],
    "kunyomi": [
      "みやこ"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "配",
    "meanings": [
      "distribute",
      "spouse",
      "exile"
    ],
    "onyomi": [
      "ハイ"
    ],
    "kunyomi": [
      "くば.る"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "酒",
    "meanings": [
      "sake",
      "alcohol"
    ],
    "onyomi": [
      "シュ"
    ],
    "kunyomi": [
      "さけ",
      "さか-"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "閉",
    "meanings": [
      "closed",
      "shut"
    ],
    "onyomi": [
      "ヘイ"
    ],
    "kunyomi": [
      "と.じる",
      "と.ざす",
      "し.める",
      "し.まる",
      "た.てる"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "関",
    "meanings": [
      "connection",
      "barrier",
      "gateway"
    ],
    "onyomi": [
      "カン"
    ],
    "kunyomi": [
      "せき",
      "-ぜき",
      "かか.わる",
      "からくり",
      "かんぬき"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "降",
    "meanings": [
      "descend",
      "precipitate",
      "fall"
    ],
    "onyomi": [
      "コウ",
      "ゴ"
    ],
    "kunyomi": [
      "お.りる",
      "お.ろす",
      "ふ.る",
      "ふ.り",
      "くだ.る",
      "くだ.す"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "限",
    "meanings": [
      "limit",
      "restrict",
      "to best of ability"
    ],
    "onyomi": [
      "ゲン"
    ],
    "kunyomi": [
      "かぎ.る",
      "かぎ.り",
      "-かぎ.り"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "除",
    "meanings": [
      "exclude",
      "division (x/3)",
      "remove"
    ],
    "onyomi": [
      "ジョ",
      "ジ"
    ],
    "kunyomi": [
      "のぞ.く",
      "-よ.け"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "険",
    "meanings": [
      "precipitous",
      "inaccessible place",
      "impregnable position"
    ],
    "onyomi": [
      "ケン"
    ],
    "kunyomi": [
      "けわ.しい"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "陽",
    "meanings": [
      "sunshine",
      "yang principle",
      "positive"
    ],
    "onyomi": [
      "ヨウ"
    ],
    "kunyomi": [
      "ひ"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "際",
    "meanings": [
      "occasion",
      "side",
      "edge"
    ],
    "onyomi": [
      "サイ"
    ],
    "kunyomi": [
      "きわ",
      "-ぎわ"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "雑",
    "meanings": [
      "miscellaneous"
    ],
    "onyomi": [
      "ザツ",
      "ゾウ"
    ],
    "kunyomi": [
      "まじ.える",
      "まじ.る"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "難",
    "meanings": [
      "difficult",
      "impossible",
      "trouble"
    ],
    "onyomi": [
      "ナン"
    ],
    "kunyomi": [
      "かた.い",
      "-がた.い",
      "むずか.しい",
      "むづか.しい",
      "むつか.しい",
      "-にく.い"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "雪",
    "meanings": [
      "snow"
    ],
    "onyomi": [
      "セツ"
    ],
    "kunyomi": [
      "ゆき"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "静",
    "meanings": [
      "quiet"
    ],
    "onyomi": [
      "セイ",
      "ジョウ"
    ],
    "kunyomi": [
      "しず-",
      "しず.か",
      "しず.まる",
      "しず.める"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "非",
    "meanings": [
      "un-",
      "mistake",
      "negative"
    ],
    "onyomi": [
      "ヒ"
    ],
    "kunyomi": [
      "あら.ず"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "面",
    "meanings": [
      "mask",
      "face",
      "features"
    ],
    "onyomi": [
      "メン",
      "ベン"
    ],
    "kunyomi": [
      "おも",
      "おもて",
      "つら"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "靴",
    "meanings": [
      "shoes"
    ],
    "onyomi": [
      "カ"
    ],
    "kunyomi": [
      "くつ"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "頂",
    "meanings": [
      "place on the head",
      "receive",
      "top of head"
    ],
    "onyomi": [
      "チョウ"
    ],
    "kunyomi": [
      "いただ.く",
      "いただき"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "頭",
    "meanings": [
      "head",
      "counter for large animals"
    ],
    "onyomi": [
      "トウ",
      "ズ",
      "ト"
    ],
    "kunyomi": [
      "あたま",
      "かしら",
      "-がしら",
      "かぶり"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "頼",
    "meanings": [
      "trust",
      "request"
    ],
    "onyomi": [
      "ライ"
    ],
    "kunyomi": [
      "たの.む",
      "たの.もしい",
      "たよ.る"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "顔",
    "meanings": [
      "face",
      "expression"
    ],
    "onyomi": [
      "ガン"
    ],
    "kunyomi": [
      "かお"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "願",
    "meanings": [
      "petition",
      "request",
      "vow"
    ],
    "onyomi": [
      "ガン"
    ],
    "kunyomi": [
      "ねが.う",
      "-ねがい"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "類",
    "meanings": [
      "sort",
      "kind",
      "variety"
    ],
    "onyomi": [
      "ルイ"
    ],
    "kunyomi": [
      "たぐ.い"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "飛",
    "meanings": [
      "fly",
      "skip (pages)",
      "scatter"
    ],
    "onyomi": [
      "ヒ"
    ],
    "kunyomi": [
      "と.ぶ",
      "と.ばす",
      "-と.ばす"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "首",
    "meanings": [
      "neck",
      "counter for songs and poems"
    ],
    "onyomi": [
      "シュ"
    ],
    "kunyomi": [
      "くび"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "馬",
    "meanings": [
      "horse"
    ],
    "onyomi": [
      "バ",
      "メ",
      "マ",
      "ボ",
      "モ"
    ],
    "kunyomi": [
      "うま",
      "ま"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "髪",
    "meanings": [
      "hair of the head"
    ],
    "onyomi": [
      "ハツ"
    ],
    "kunyomi": [
      "かみ"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "鳴",
    "meanings": [
      "chirp",
      "cry",
      "bark"
    ],
    "onyomi": [
      "メイ"
    ],
    "kunyomi": [
      "な.く",
      "な.る",
      "な.らす"
    ],
    "level": "N3",
    "vocabulary": []
  },
  {
    "kanji": "並",
    "meanings": [
      "row",
      "and",
      "besides"
    ],
    "onyomi": [
      "ヘイ",
      "ホウ"
    ],
    "kunyomi": [
      "な.み",
      "なみ",
      "なら.べる",
      "なら.ぶ",
      "なら.びに"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "丸",
    "meanings": [
      "round",
      "full (month)",
      "perfection"
    ],
    "onyomi": [
      "ガン"
    ],
    "kunyomi": [
      "まる",
      "まる.める",
      "まる.い"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "久",
    "meanings": [
      "long time",
      "old story"
    ],
    "onyomi": [
      "キュウ",
      "ク"
    ],
    "kunyomi": [
      "ひさ.しい"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "乱",
    "meanings": [
      "riot",
      "war",
      "disorder"
    ],
    "onyomi": [
      "ラン",
      "ロン"
    ],
    "kunyomi": [
      "みだ.れる",
      "みだ.る",
      "みだ.す",
      "みだ",
      "おさ.める",
      "わた.る"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "乳",
    "meanings": [
      "milk",
      "breasts"
    ],
    "onyomi": [
      "ニュウ"
    ],
    "kunyomi": [
      "ちち",
      "ち"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "乾",
    "meanings": [
      "drought",
      "dry",
      "desiccate"
    ],
    "onyomi": [
      "カン",
      "ケン"
    ],
    "kunyomi": [
      "かわ.く",
      "かわ.かす",
      "ほ.す",
      "ひ.る",
      "いぬい"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "了",
    "meanings": [
      "complete",
      "finish"
    ],
    "onyomi": [
      "リョウ"
    ],
    "kunyomi": [],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "介",
    "meanings": [
      "jammed in",
      "shellfish",
      "mediate"
    ],
    "onyomi": [
      "カイ"
    ],
    "kunyomi": [],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "仏",
    "meanings": [
      "Buddha",
      "the dead",
      "France"
    ],
    "onyomi": [
      "ブツ",
      "フツ"
    ],
    "kunyomi": [
      "ほとけ"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "令",
    "meanings": [
      "orders",
      "laws",
      "command"
    ],
    "onyomi": [
      "レイ"
    ],
    "kunyomi": [],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "仲",
    "meanings": [
      "go-between",
      "relationship"
    ],
    "onyomi": [
      "チュウ"
    ],
    "kunyomi": [
      "なか"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "伸",
    "meanings": [
      "expand",
      "stretch",
      "extend"
    ],
    "onyomi": [
      "シン"
    ],
    "kunyomi": [
      "の.びる",
      "の.ばす",
      "の.べる",
      "の.す"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "伺",
    "meanings": [
      "pay respects",
      "visit",
      "ask"
    ],
    "onyomi": [
      "シ"
    ],
    "kunyomi": [
      "うかが.う"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "低",
    "meanings": [
      "lower",
      "short",
      "humble"
    ],
    "onyomi": [
      "テイ"
    ],
    "kunyomi": [
      "ひく.い",
      "ひく.める",
      "ひく.まる"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "依",
    "meanings": [
      "reliant",
      "depend on",
      "consequently"
    ],
    "onyomi": [
      "イ",
      "エ"
    ],
    "kunyomi": [
      "よ.る"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "個",
    "meanings": [
      "individual",
      "counter for articles"
    ],
    "onyomi": [
      "コ",
      "カ"
    ],
    "kunyomi": [],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "倍",
    "meanings": [
      "double",
      "twice",
      "times"
    ],
    "onyomi": [
      "バイ"
    ],
    "kunyomi": [],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "停",
    "meanings": [
      "halt",
      "stopping"
    ],
    "onyomi": [
      "テイ"
    ],
    "kunyomi": [
      "と.める",
      "と.まる"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "傾",
    "meanings": [
      "lean",
      "incline",
      "tilt"
    ],
    "onyomi": [
      "ケイ"
    ],
    "kunyomi": [
      "かたむ.く",
      "かたむ.ける",
      "かたぶ.く",
      "かた.げる",
      "かし.げる"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "像",
    "meanings": [
      "statue",
      "picture",
      "image"
    ],
    "onyomi": [
      "ゾウ"
    ],
    "kunyomi": [],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "億",
    "meanings": [
      "hundred million",
      "10**8"
    ],
    "onyomi": [
      "オク"
    ],
    "kunyomi": [],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "兆",
    "meanings": [
      "portent",
      "10**12",
      "trillion"
    ],
    "onyomi": [
      "チョウ"
    ],
    "kunyomi": [
      "きざ.す",
      "きざ.し"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "児",
    "meanings": [
      "newborn babe",
      "child",
      "young of animals"
    ],
    "onyomi": [
      "ジ",
      "ニ",
      "ゲイ"
    ],
    "kunyomi": [
      "こ",
      "-こ",
      "-っこ"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "党",
    "meanings": [
      "party",
      "faction",
      "clique"
    ],
    "onyomi": [
      "トウ"
    ],
    "kunyomi": [
      "なかま",
      "むら"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "兵",
    "meanings": [
      "soldier",
      "private",
      "troops"
    ],
    "onyomi": [
      "ヘイ",
      "ヒョウ"
    ],
    "kunyomi": [
      "つわもの"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "冊",
    "meanings": [
      "tome",
      "counter for books",
      "volume"
    ],
    "onyomi": [
      "サツ",
      "サク"
    ],
    "kunyomi": [
      "ふみ"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "再",
    "meanings": [
      "again",
      "twice",
      "second time"
    ],
    "onyomi": [
      "サイ",
      "サ"
    ],
    "kunyomi": [
      "ふたた.び"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "凍",
    "meanings": [
      "frozen",
      "congeal",
      "refrigerate"
    ],
    "onyomi": [
      "トウ"
    ],
    "kunyomi": [
      "こお.る",
      "こご.える",
      "こご.る",
      "い.てる",
      "し.みる"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "刊",
    "meanings": [
      "publish",
      "carve",
      "engrave"
    ],
    "onyomi": [
      "カン"
    ],
    "kunyomi": [],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "刷",
    "meanings": [
      "printing",
      "print",
      "brush"
    ],
    "onyomi": [
      "サツ"
    ],
    "kunyomi": [
      "す.る",
      "-ず.り",
      "-ずり",
      "は.く"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "券",
    "meanings": [
      "ticket"
    ],
    "onyomi": [
      "ケン"
    ],
    "kunyomi": [],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "刺",
    "meanings": [
      "thorn",
      "pierce",
      "stab"
    ],
    "onyomi": [
      "シ"
    ],
    "kunyomi": [
      "さ.す",
      "さ.さる",
      "さ.し",
      "さし",
      "とげ"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "則",
    "meanings": [
      "rule",
      "law",
      "follow"
    ],
    "onyomi": [
      "ソク"
    ],
    "kunyomi": [
      "のっと.る",
      "のり",
      "すなわち"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "副",
    "meanings": [
      "vice-",
      "assistant",
      "aide"
    ],
    "onyomi": [
      "フク"
    ],
    "kunyomi": [],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "劇",
    "meanings": [
      "drama",
      "play"
    ],
    "onyomi": [
      "ゲキ"
    ],
    "kunyomi": [],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "効",
    "meanings": [
      "merit",
      "efficacy",
      "efficiency"
    ],
    "onyomi": [
      "コウ"
    ],
    "kunyomi": [
      "き.く",
      "ききめ",
      "なら.う"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "勇",
    "meanings": [
      "courage",
      "cheer up",
      "be in high spirits"
    ],
    "onyomi": [
      "ユウ"
    ],
    "kunyomi": [
      "いさ.む"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "募",
    "meanings": [
      "recruit",
      "campaign",
      "gather (contributions)"
    ],
    "onyomi": [
      "ボ"
    ],
    "kunyomi": [
      "つの.る"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "勢",
    "meanings": [
      "forces",
      "energy",
      "military strength"
    ],
    "onyomi": [
      "セイ",
      "ゼイ"
    ],
    "kunyomi": [
      "いきお.い",
      "はずみ"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "包",
    "meanings": [
      "wrap",
      "pack up",
      "cover"
    ],
    "onyomi": [
      "ホウ"
    ],
    "kunyomi": [
      "つつ.む",
      "くる.む"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "匹",
    "meanings": [
      "equal",
      "head",
      "counter for small animals"
    ],
    "onyomi": [
      "ヒツ"
    ],
    "kunyomi": [
      "ひき"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "区",
    "meanings": [
      "ward",
      "district"
    ],
    "onyomi": [
      "ク",
      "オウ",
      "コウ"
    ],
    "kunyomi": [],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "卒",
    "meanings": [
      "graduate",
      "soldier",
      "private"
    ],
    "onyomi": [
      "ソツ",
      "シュツ"
    ],
    "kunyomi": [
      "そっ.する",
      "お.える",
      "お.わる",
      "ついに",
      "にわか"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "協",
    "meanings": [
      "co-",
      "cooperation"
    ],
    "onyomi": [
      "キョウ"
    ],
    "kunyomi": [],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "占",
    "meanings": [
      "fortune-telling",
      "divining",
      "forecasting"
    ],
    "onyomi": [
      "セン"
    ],
    "kunyomi": [
      "し.める",
      "うらな.う"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "印",
    "meanings": [
      "stamp",
      "seal",
      "mark"
    ],
    "onyomi": [
      "イン"
    ],
    "kunyomi": [
      "しるし",
      "-じるし",
      "しる.す"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "卵",
    "meanings": [
      "egg",
      "ovum",
      "spawn"
    ],
    "onyomi": [
      "ラン"
    ],
    "kunyomi": [
      "たまご"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "厚",
    "meanings": [
      "thick",
      "heavy",
      "rich"
    ],
    "onyomi": [
      "コウ"
    ],
    "kunyomi": [
      "あつ.い",
      "あか"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "双",
    "meanings": [
      "pair",
      "set",
      "comparison"
    ],
    "onyomi": [
      "ソウ"
    ],
    "kunyomi": [
      "ふた",
      "たぐい",
      "ならぶ",
      "ふたつ"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "叫",
    "meanings": [
      "shout",
      "exclaim",
      "yell"
    ],
    "onyomi": [
      "キョウ"
    ],
    "kunyomi": [
      "さけ.ぶ"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "召",
    "meanings": [
      "seduce",
      "call",
      "send for"
    ],
    "onyomi": [
      "ショウ"
    ],
    "kunyomi": [
      "め.す"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "史",
    "meanings": [
      "history",
      "chronicle"
    ],
    "onyomi": [
      "シ"
    ],
    "kunyomi": [],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "各",
    "meanings": [
      "each",
      "every",
      "either"
    ],
    "onyomi": [
      "カク"
    ],
    "kunyomi": [
      "おのおの"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "含",
    "meanings": [
      "contain",
      "include",
      "hold in the mouth"
    ],
    "onyomi": [
      "ガン"
    ],
    "kunyomi": [
      "ふく.む",
      "ふく.める"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "周",
    "meanings": [
      "circumference",
      "circuit",
      "lap"
    ],
    "onyomi": [
      "シュウ"
    ],
    "kunyomi": [
      "まわ.り"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "咲",
    "meanings": [
      "blossom",
      "bloom"
    ],
    "onyomi": [
      "ショウ"
    ],
    "kunyomi": [
      "さ.く",
      "-ざき"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "喫",
    "meanings": [
      "consume",
      "eat",
      "drink"
    ],
    "onyomi": [
      "キツ"
    ],
    "kunyomi": [
      "の.む"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "営",
    "meanings": [
      "camp",
      "perform",
      "build"
    ],
    "onyomi": [
      "エイ"
    ],
    "kunyomi": [
      "いとな.む",
      "いとな.み"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "団",
    "meanings": [
      "group",
      "association"
    ],
    "onyomi": [
      "ダン",
      "トン"
    ],
    "kunyomi": [
      "かたまり",
      "まる.い"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "囲",
    "meanings": [
      "surround",
      "besiege",
      "store"
    ],
    "onyomi": [
      "イ"
    ],
    "kunyomi": [
      "かこ.む",
      "かこ.う",
      "かこ.い"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "固",
    "meanings": [
      "harden",
      "set",
      "clot"
    ],
    "onyomi": [
      "コ"
    ],
    "kunyomi": [
      "かた.める",
      "かた.まる",
      "かた.まり",
      "かた.い"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "圧",
    "meanings": [
      "pressure",
      "push",
      "overwhelm"
    ],
    "onyomi": [
      "アツ",
      "エン",
      "オウ"
    ],
    "kunyomi": [
      "お.す",
      "へ.す",
      "おさ.える",
      "お.さえる"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "坂",
    "meanings": [
      "slope",
      "incline",
      "hill"
    ],
    "onyomi": [
      "ハン"
    ],
    "kunyomi": [
      "さか"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "均",
    "meanings": [
      "level",
      "average"
    ],
    "onyomi": [
      "キン"
    ],
    "kunyomi": [
      "なら.す"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "型",
    "meanings": [
      "mould",
      "type",
      "model"
    ],
    "onyomi": [
      "ケイ"
    ],
    "kunyomi": [
      "かた",
      "-がた"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "埋",
    "meanings": [
      "bury",
      "be filled up",
      "embedded"
    ],
    "onyomi": [
      "マイ"
    ],
    "kunyomi": [
      "う.める",
      "う.まる",
      "う.もれる",
      "うず.める",
      "うず.まる",
      "い.ける"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "城",
    "meanings": [
      "castle"
    ],
    "onyomi": [
      "ジョウ",
      "セイ"
    ],
    "kunyomi": [
      "しろ"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "域",
    "meanings": [
      "range",
      "region",
      "limits"
    ],
    "onyomi": [
      "イキ"
    ],
    "kunyomi": [],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "塔",
    "meanings": [
      "pagoda",
      "tower",
      "steeple"
    ],
    "onyomi": [
      "トウ"
    ],
    "kunyomi": [],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "塗",
    "meanings": [
      "paint",
      "plaster",
      "daub"
    ],
    "onyomi": [
      "ト"
    ],
    "kunyomi": [
      "ぬ.る",
      "ぬ.り",
      "まみ.れる"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "塩",
    "meanings": [
      "salt"
    ],
    "onyomi": [
      "エン"
    ],
    "kunyomi": [
      "しお"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "境",
    "meanings": [
      "boundary",
      "border",
      "region"
    ],
    "onyomi": [
      "キョウ",
      "ケイ"
    ],
    "kunyomi": [
      "さかい"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "央",
    "meanings": [
      "center",
      "middle"
    ],
    "onyomi": [
      "オウ"
    ],
    "kunyomi": [],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "奥",
    "meanings": [
      "heart",
      "interior"
    ],
    "onyomi": [
      "オウ"
    ],
    "kunyomi": [
      "おく",
      "おく.まる",
      "くま"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "姓",
    "meanings": [
      "surname"
    ],
    "onyomi": [
      "セイ",
      "ショウ"
    ],
    "kunyomi": [],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "委",
    "meanings": [
      "committee",
      "entrust to",
      "leave to"
    ],
    "onyomi": [
      "イ"
    ],
    "kunyomi": [
      "ゆだ.ねる"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "季",
    "meanings": [
      "seasons"
    ],
    "onyomi": [
      "キ"
    ],
    "kunyomi": [],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "孫",
    "meanings": [
      "grandchild",
      "descendants"
    ],
    "onyomi": [
      "ソン"
    ],
    "kunyomi": [
      "まご"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "宇",
    "meanings": [
      "eaves",
      "roof",
      "house"
    ],
    "onyomi": [
      "ウ"
    ],
    "kunyomi": [],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "宝",
    "meanings": [
      "treasure",
      "wealth",
      "valuables"
    ],
    "onyomi": [
      "ホウ"
    ],
    "kunyomi": [
      "たから"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "寺",
    "meanings": [
      "Buddhist temple"
    ],
    "onyomi": [
      "ジ"
    ],
    "kunyomi": [
      "てら"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "封",
    "meanings": [
      "seal",
      "closing"
    ],
    "onyomi": [
      "フウ",
      "ホウ"
    ],
    "kunyomi": [],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "専",
    "meanings": [
      "specialty",
      "exclusive",
      "mainly"
    ],
    "onyomi": [
      "セン"
    ],
    "kunyomi": [
      "もっぱ.ら"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "将",
    "meanings": [
      "leader",
      "commander",
      "general"
    ],
    "onyomi": [
      "ショウ",
      "ソウ"
    ],
    "kunyomi": [
      "まさ.に",
      "はた",
      "まさ",
      "ひきい.る",
      "もって"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "尊",
    "meanings": [
      "revered",
      "valuable",
      "precious"
    ],
    "onyomi": [
      "ソン"
    ],
    "kunyomi": [
      "たっと.い",
      "とうと.い",
      "たっと.ぶ",
      "とうと.ぶ"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "導",
    "meanings": [
      "guidance",
      "leading",
      "conduct"
    ],
    "onyomi": [
      "ドウ"
    ],
    "kunyomi": [
      "みちび.く"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "届",
    "meanings": [
      "deliver",
      "reach",
      "arrive"
    ],
    "onyomi": [
      "カイ"
    ],
    "kunyomi": [
      "とど.ける",
      "-とど.け",
      "とど.く"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "層",
    "meanings": [
      "stratum",
      "social class",
      "layer"
    ],
    "onyomi": [
      "ソウ"
    ],
    "kunyomi": [],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "岩",
    "meanings": [
      "boulder",
      "rock",
      "cliff"
    ],
    "onyomi": [
      "ガン"
    ],
    "kunyomi": [
      "いわ"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "岸",
    "meanings": [
      "beach"
    ],
    "onyomi": [
      "ガン"
    ],
    "kunyomi": [
      "きし"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "島",
    "meanings": [
      "island"
    ],
    "onyomi": [
      "トウ"
    ],
    "kunyomi": [
      "しま"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "州",
    "meanings": [
      "state",
      "province"
    ],
    "onyomi": [
      "シュウ",
      "ス"
    ],
    "kunyomi": [
      "す"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "巨",
    "meanings": [
      "gigantic",
      "big",
      "large"
    ],
    "onyomi": [
      "キョ"
    ],
    "kunyomi": [],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "巻",
    "meanings": [
      "scroll",
      "volume",
      "book"
    ],
    "onyomi": [
      "カン",
      "ケン"
    ],
    "kunyomi": [
      "ま.く",
      "まき",
      "ま.き"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "布",
    "meanings": [
      "linen",
      "cloth",
      "spread"
    ],
    "onyomi": [
      "フ",
      "ホ"
    ],
    "kunyomi": [
      "ぬの",
      "し.く",
      "きれ"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "希",
    "meanings": [
      "hope",
      "beg",
      "request"
    ],
    "onyomi": [
      "キ",
      "ケ"
    ],
    "kunyomi": [
      "まれ",
      "こいねが.う"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "帯",
    "meanings": [
      "sash",
      "belt",
      "obi"
    ],
    "onyomi": [
      "タイ"
    ],
    "kunyomi": [
      "お.びる",
      "おび"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "帽",
    "meanings": [
      "cap",
      "headgear"
    ],
    "onyomi": [
      "ボウ",
      "モウ"
    ],
    "kunyomi": [
      "ずきん",
      "おお.う"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "幅",
    "meanings": [
      "hanging scroll",
      "width"
    ],
    "onyomi": [
      "フク"
    ],
    "kunyomi": [
      "はば"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "干",
    "meanings": [
      "dry",
      "parch",
      "ebb"
    ],
    "onyomi": [
      "カン"
    ],
    "kunyomi": [
      "ほ.す",
      "ほ.し-",
      "-ぼ.し",
      "ひ.る"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "幼",
    "meanings": [
      "infancy",
      "childhood"
    ],
    "onyomi": [
      "ヨウ"
    ],
    "kunyomi": [
      "おさな.い"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "庁",
    "meanings": [
      "government office"
    ],
    "onyomi": [
      "チョウ",
      "テイ"
    ],
    "kunyomi": [
      "やくしょ"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "床",
    "meanings": [
      "bed",
      "counter for beds",
      "floor"
    ],
    "onyomi": [
      "ショウ"
    ],
    "kunyomi": [
      "とこ",
      "ゆか"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "底",
    "meanings": [
      "bottom",
      "sole",
      "depth"
    ],
    "onyomi": [
      "テイ"
    ],
    "kunyomi": [
      "そこ"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "府",
    "meanings": [
      "borough",
      "urban prefecture",
      "govt office"
    ],
    "onyomi": [
      "フ"
    ],
    "kunyomi": [],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "庫",
    "meanings": [
      "warehouse",
      "storehouse"
    ],
    "onyomi": [
      "コ",
      "ク"
    ],
    "kunyomi": [
      "くら"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "延",
    "meanings": [
      "prolong",
      "stretching"
    ],
    "onyomi": [
      "エン"
    ],
    "kunyomi": [
      "の.びる",
      "の.べる",
      "の.べ",
      "の.ばす"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "弱",
    "meanings": [
      "weak",
      "frail"
    ],
    "onyomi": [
      "ジャク"
    ],
    "kunyomi": [
      "よわ.い",
      "よわ.る",
      "よわ.まる",
      "よわ.める"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "律",
    "meanings": [
      "rhythm",
      "law",
      "regulation"
    ],
    "onyomi": [
      "リツ",
      "リチ",
      "レツ"
    ],
    "kunyomi": [],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "復",
    "meanings": [
      "restore",
      "return to",
      "revert"
    ],
    "onyomi": [
      "フク"
    ],
    "kunyomi": [
      "また"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "快",
    "meanings": [
      "cheerful",
      "pleasant",
      "agreeable"
    ],
    "onyomi": [
      "カイ"
    ],
    "kunyomi": [
      "こころよ.い"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "恋",
    "meanings": [
      "romance",
      "in love",
      "yearn for"
    ],
    "onyomi": [
      "レン"
    ],
    "kunyomi": [
      "こ.う",
      "こい",
      "こい.しい"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "患",
    "meanings": [
      "afflicted",
      "disease",
      "suffer from"
    ],
    "onyomi": [
      "カン"
    ],
    "kunyomi": [
      "わずら.う"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "悩",
    "meanings": [
      "trouble",
      "worry",
      "in pain"
    ],
    "onyomi": [
      "ノウ"
    ],
    "kunyomi": [
      "なや.む",
      "なや.ます",
      "なや.ましい",
      "なやみ"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "憎",
    "meanings": [
      "hate",
      "detest"
    ],
    "onyomi": [
      "ゾウ"
    ],
    "kunyomi": [
      "にく.む",
      "にく.い",
      "にく.らしい",
      "にく.しみ"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "戸",
    "meanings": [
      "door",
      "counter for houses",
      "door radical (no. 63)"
    ],
    "onyomi": [
      "コ"
    ],
    "kunyomi": [
      "と"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "承",
    "meanings": [
      "acquiesce",
      "hear",
      "listen to"
    ],
    "onyomi": [
      "ショウ",
      "ジョウ"
    ],
    "kunyomi": [
      "うけたまわ.る",
      "う.ける"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "技",
    "meanings": [
      "skill",
      "art",
      "craft"
    ],
    "onyomi": [
      "ギ"
    ],
    "kunyomi": [
      "わざ"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "担",
    "meanings": [
      "shouldering",
      "carry",
      "raise"
    ],
    "onyomi": [
      "タン"
    ],
    "kunyomi": [
      "かつ.ぐ",
      "にな.う"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "拝",
    "meanings": [
      "worship",
      "adore",
      "pray to"
    ],
    "onyomi": [
      "ハイ"
    ],
    "kunyomi": [
      "おが.む",
      "おろが.む"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "拾",
    "meanings": [
      "pick up",
      "gather",
      "find"
    ],
    "onyomi": [
      "シュウ",
      "ジュウ"
    ],
    "kunyomi": [
      "ひろ.う"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "挟",
    "meanings": [
      "pinch",
      "between"
    ],
    "onyomi": [
      "キョウ",
      "ショウ"
    ],
    "kunyomi": [
      "はさ.む",
      "はさ.まる",
      "わきばさ.む",
      "さしはさ.む"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "捜",
    "meanings": [
      "search",
      "look for",
      "locate"
    ],
    "onyomi": [
      "ソウ",
      "シュ",
      "シュウ"
    ],
    "kunyomi": [
      "さが.す"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "捨",
    "meanings": [
      "discard",
      "throw away",
      "abandon"
    ],
    "onyomi": [
      "シャ"
    ],
    "kunyomi": [
      "す.てる"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "掃",
    "meanings": [
      "sweep",
      "brush"
    ],
    "onyomi": [
      "ソウ",
      "シュ"
    ],
    "kunyomi": [
      "は.く"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "掘",
    "meanings": [
      "dig",
      "delve",
      "excavate"
    ],
    "onyomi": [
      "クツ"
    ],
    "kunyomi": [
      "ほ.る"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "採",
    "meanings": [
      "pick",
      "take",
      "fetch"
    ],
    "onyomi": [
      "サイ"
    ],
    "kunyomi": [
      "と.る"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "接",
    "meanings": [
      "touch",
      "contact",
      "adjoin"
    ],
    "onyomi": [
      "セツ",
      "ショウ"
    ],
    "kunyomi": [
      "つ.ぐ"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "換",
    "meanings": [
      "interchange",
      "period",
      "change"
    ],
    "onyomi": [
      "カン"
    ],
    "kunyomi": [
      "か.える",
      "-か.える",
      "か.わる"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "損",
    "meanings": [
      "damage",
      "loss",
      "disadvantage"
    ],
    "onyomi": [
      "ソン"
    ],
    "kunyomi": [
      "そこ.なう",
      "そこな.う",
      "-そこ.なう",
      "そこ.ねる",
      "-そこ.ねる"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "改",
    "meanings": [
      "reformation",
      "change",
      "modify"
    ],
    "onyomi": [
      "カイ"
    ],
    "kunyomi": [
      "あらた.める",
      "あらた.まる"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "敬",
    "meanings": [
      "awe",
      "respect",
      "honor"
    ],
    "onyomi": [
      "ケイ",
      "キョウ"
    ],
    "kunyomi": [
      "うやま.う"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "旧",
    "meanings": [
      "old times",
      "old things",
      "old friend"
    ],
    "onyomi": [
      "キュウ"
    ],
    "kunyomi": [
      "ふる.い",
      "もと"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "昇",
    "meanings": [
      "rise up"
    ],
    "onyomi": [
      "ショウ"
    ],
    "kunyomi": [
      "のぼ.る"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "星",
    "meanings": [
      "star",
      "spot",
      "dot"
    ],
    "onyomi": [
      "セイ",
      "ショウ"
    ],
    "kunyomi": [
      "ほし",
      "-ぼし"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "普",
    "meanings": [
      "universal",
      "wide(ly)",
      "generally"
    ],
    "onyomi": [
      "フ"
    ],
    "kunyomi": [
      "あまね.く",
      "あまねし"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "暴",
    "meanings": [
      "outburst",
      "rave",
      "fret"
    ],
    "onyomi": [
      "ボウ",
      "バク"
    ],
    "kunyomi": [
      "あば.く",
      "あば.れる"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "曇",
    "meanings": [
      "cloudy weather",
      "cloud up"
    ],
    "onyomi": [
      "ドン"
    ],
    "kunyomi": [
      "くも.る"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "替",
    "meanings": [
      "exchange",
      "spare",
      "substitute"
    ],
    "onyomi": [
      "タイ"
    ],
    "kunyomi": [
      "か.える",
      "か.え-",
      "か.わる"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "札",
    "meanings": [
      "tag",
      "paper money",
      "counter for bonds"
    ],
    "onyomi": [
      "サツ"
    ],
    "kunyomi": [
      "ふだ"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "机",
    "meanings": [
      "desk",
      "table"
    ],
    "onyomi": [
      "キ"
    ],
    "kunyomi": [
      "つくえ"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "材",
    "meanings": [
      "lumber",
      "log",
      "timber"
    ],
    "onyomi": [
      "ザイ"
    ],
    "kunyomi": [],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "村",
    "meanings": [
      "village",
      "town"
    ],
    "onyomi": [
      "ソン"
    ],
    "kunyomi": [
      "むら"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "板",
    "meanings": [
      "plank",
      "board",
      "plate"
    ],
    "onyomi": [
      "ハン",
      "バン"
    ],
    "kunyomi": [
      "いた"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "林",
    "meanings": [
      "grove",
      "forest"
    ],
    "onyomi": [
      "リン"
    ],
    "kunyomi": [
      "はやし"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "枚",
    "meanings": [
      "sheet of...",
      "counter for flat thin objects or sheets"
    ],
    "onyomi": [
      "マイ",
      "バイ"
    ],
    "kunyomi": [],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "枝",
    "meanings": [
      "bough",
      "branch",
      "twig"
    ],
    "onyomi": [
      "シ"
    ],
    "kunyomi": [
      "えだ"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "枯",
    "meanings": [
      "wither",
      "die",
      "dry up"
    ],
    "onyomi": [
      "コ"
    ],
    "kunyomi": [
      "か.れる",
      "か.らす"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "柔",
    "meanings": [
      "tender",
      "weakness",
      "gentleness"
    ],
    "onyomi": [
      "ジュウ",
      "ニュウ"
    ],
    "kunyomi": [
      "やわ.らか",
      "やわ.らかい",
      "やわ",
      "やわ.ら"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "柱",
    "meanings": [
      "pillar",
      "post",
      "cylinder"
    ],
    "onyomi": [
      "チュウ"
    ],
    "kunyomi": [
      "はしら"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "査",
    "meanings": [
      "investigate"
    ],
    "onyomi": [
      "サ"
    ],
    "kunyomi": [],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "栄",
    "meanings": [
      "flourish",
      "prosperity",
      "honor"
    ],
    "onyomi": [
      "エイ",
      "ヨウ"
    ],
    "kunyomi": [
      "さか.える",
      "は.え",
      "-ば.え",
      "は.える",
      "え"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "根",
    "meanings": [
      "root",
      "radical",
      "head (pimple)"
    ],
    "onyomi": [
      "コン"
    ],
    "kunyomi": [
      "ね",
      "-ね"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "械",
    "meanings": [
      "contraption",
      "fetter",
      "machine"
    ],
    "onyomi": [
      "カイ"
    ],
    "kunyomi": [
      "かせ"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "棒",
    "meanings": [
      "rod",
      "stick",
      "cane"
    ],
    "onyomi": [
      "ボウ"
    ],
    "kunyomi": [],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "森",
    "meanings": [
      "forest",
      "woods"
    ],
    "onyomi": [
      "シン"
    ],
    "kunyomi": [
      "もり"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "植",
    "meanings": [
      "plant"
    ],
    "onyomi": [
      "ショク"
    ],
    "kunyomi": [
      "う.える",
      "う.わる"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "極",
    "meanings": [
      "extreme",
      "pole",
      "extremely"
    ],
    "onyomi": [
      "キョク",
      "ゴク"
    ],
    "kunyomi": [
      "きわ.める",
      "きわ.まる",
      "きわ.まり",
      "きわ.み",
      "き.める",
      "-ぎ.め",
      "き.まる"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "橋",
    "meanings": [
      "bridge"
    ],
    "onyomi": [
      "キョウ"
    ],
    "kunyomi": [
      "はし"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "欧",
    "meanings": [
      "Europe"
    ],
    "onyomi": [
      "オウ"
    ],
    "kunyomi": [
      "うた.う",
      "は.く"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "武",
    "meanings": [
      "warrior",
      "military",
      "chivalry"
    ],
    "onyomi": [
      "ブ",
      "ム"
    ],
    "kunyomi": [
      "たけ",
      "たけ.し"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "歴",
    "meanings": [
      "curriculum",
      "continuation",
      "passage of time"
    ],
    "onyomi": [
      "レキ",
      "レッキ"
    ],
    "kunyomi": [],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "殿",
    "meanings": [
      "Mr.",
      "hall",
      "mansion"
    ],
    "onyomi": [
      "デン",
      "テン"
    ],
    "kunyomi": [
      "との",
      "-どの"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "毒",
    "meanings": [
      "poison",
      "virus",
      "venom"
    ],
    "onyomi": [
      "ドク"
    ],
    "kunyomi": [],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "比",
    "meanings": [
      "compare",
      "race",
      "ratio"
    ],
    "onyomi": [
      "ヒ"
    ],
    "kunyomi": [
      "くら.べる"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "毛",
    "meanings": [
      "fur",
      "hair",
      "feather"
    ],
    "onyomi": [
      "モウ"
    ],
    "kunyomi": [
      "け"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "氷",
    "meanings": [
      "icicle",
      "ice",
      "hail"
    ],
    "onyomi": [
      "ヒョウ"
    ],
    "kunyomi": [
      "こおり",
      "ひ",
      "こお.る"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "永",
    "meanings": [
      "eternity",
      "long",
      "lengthy"
    ],
    "onyomi": [
      "エイ"
    ],
    "kunyomi": [
      "なが.い"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "汗",
    "meanings": [
      "sweat",
      "perspire"
    ],
    "onyomi": [
      "カン"
    ],
    "kunyomi": [
      "あせ"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "汚",
    "meanings": [
      "dirty",
      "pollute",
      "disgrace"
    ],
    "onyomi": [
      "オ"
    ],
    "kunyomi": [
      "けが.す",
      "けが.れる",
      "けが.らわしい",
      "よご.す",
      "よご.れる",
      "きたな.い"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "池",
    "meanings": [
      "pond",
      "cistern",
      "pool"
    ],
    "onyomi": [
      "チ"
    ],
    "kunyomi": [
      "いけ"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "沈",
    "meanings": [
      "sink",
      "be submerged",
      "subside"
    ],
    "onyomi": [
      "チン",
      "ジン"
    ],
    "kunyomi": [
      "しず.む",
      "しず.める"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "河",
    "meanings": [
      "river"
    ],
    "onyomi": [
      "カ"
    ],
    "kunyomi": [
      "かわ"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "沸",
    "meanings": [
      "seethe",
      "boil",
      "ferment"
    ],
    "onyomi": [
      "フツ"
    ],
    "kunyomi": [
      "わ.く",
      "わ.かす"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "油",
    "meanings": [
      "oil",
      "fat"
    ],
    "onyomi": [
      "ユ",
      "ユウ"
    ],
    "kunyomi": [
      "あぶら"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "況",
    "meanings": [
      "condition",
      "situation"
    ],
    "onyomi": [
      "キョウ"
    ],
    "kunyomi": [
      "まし.て",
      "いわ.んや",
      "おもむき"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "泉",
    "meanings": [
      "spring",
      "fountain"
    ],
    "onyomi": [
      "セン"
    ],
    "kunyomi": [
      "いずみ"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "泊",
    "meanings": [
      "overnight stay",
      "put up at",
      "ride at anchor"
    ],
    "onyomi": [
      "ハク"
    ],
    "kunyomi": [
      "と.まる",
      "と.める"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "波",
    "meanings": [
      "waves",
      "billows",
      "Poland"
    ],
    "onyomi": [
      "ハ"
    ],
    "kunyomi": [
      "なみ"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "泥",
    "meanings": [
      "mud",
      "mire",
      "adhere to"
    ],
    "onyomi": [
      "デイ",
      "ナイ",
      "デ",
      "ニ"
    ],
    "kunyomi": [
      "どろ",
      "なず.む"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "浅",
    "meanings": [
      "shallow",
      "superficial",
      "frivolous"
    ],
    "onyomi": [
      "セン"
    ],
    "kunyomi": [
      "あさ.い"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "浴",
    "meanings": [
      "bathe",
      "be favored with",
      "bask in"
    ],
    "onyomi": [
      "ヨク"
    ],
    "kunyomi": [
      "あ.びる",
      "あ.びせる"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "涙",
    "meanings": [
      "tears",
      "sympathy"
    ],
    "onyomi": [
      "ルイ",
      "レイ"
    ],
    "kunyomi": [
      "なみだ"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "液",
    "meanings": [
      "fluid",
      "liquid",
      "juice"
    ],
    "onyomi": [
      "エキ"
    ],
    "kunyomi": [],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "涼",
    "meanings": [
      "refreshing",
      "nice and cool"
    ],
    "onyomi": [
      "リョウ"
    ],
    "kunyomi": [
      "すず.しい",
      "すず.む",
      "すず.やか",
      "うす.い",
      "ひや.す",
      "まことに"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "混",
    "meanings": [
      "mix",
      "blend",
      "confuse"
    ],
    "onyomi": [
      "コン"
    ],
    "kunyomi": [
      "ま.じる",
      "-ま.じり",
      "ま.ざる",
      "ま.ぜる",
      "こ.む"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "清",
    "meanings": [
      "pure",
      "purify",
      "cleanse"
    ],
    "onyomi": [
      "セイ",
      "ショウ",
      "シン"
    ],
    "kunyomi": [
      "きよ.い",
      "きよ.まる",
      "きよ.める"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "減",
    "meanings": [
      "dwindle",
      "decrease",
      "reduce"
    ],
    "onyomi": [
      "ゲン"
    ],
    "kunyomi": [
      "へ.る",
      "へ.らす"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "温",
    "meanings": [
      "warm"
    ],
    "onyomi": [
      "オン"
    ],
    "kunyomi": [
      "あたた.か",
      "あたた.かい",
      "あたた.まる",
      "あたた.める",
      "ぬく"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "測",
    "meanings": [
      "fathom",
      "plan",
      "scheme"
    ],
    "onyomi": [
      "ソク"
    ],
    "kunyomi": [
      "はか.る"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "湖",
    "meanings": [
      "lake"
    ],
    "onyomi": [
      "コ"
    ],
    "kunyomi": [
      "みずうみ"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "湯",
    "meanings": [
      "hot water",
      "bath",
      "hot spring"
    ],
    "onyomi": [
      "トウ"
    ],
    "kunyomi": [
      "ゆ"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "湾",
    "meanings": [
      "gulf",
      "bay",
      "inlet"
    ],
    "onyomi": [
      "ワン"
    ],
    "kunyomi": [
      "いりえ"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "湿",
    "meanings": [
      "damp",
      "wet",
      "moist"
    ],
    "onyomi": [
      "シツ",
      "シュウ"
    ],
    "kunyomi": [
      "しめ.る",
      "しめ.す",
      "うるお.う",
      "うるお.す"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "準",
    "meanings": [
      "semi-",
      "correspond to",
      "proportionate to"
    ],
    "onyomi": [
      "ジュン"
    ],
    "kunyomi": [
      "じゅん.じる",
      "じゅん.ずる",
      "なぞら.える",
      "のり",
      "ひと.しい",
      "みずもり"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "溶",
    "meanings": [
      "melt",
      "dissolve",
      "thaw"
    ],
    "onyomi": [
      "ヨウ"
    ],
    "kunyomi": [
      "と.ける",
      "と.かす",
      "と.く"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "滴",
    "meanings": [
      "drip",
      "drop"
    ],
    "onyomi": [
      "テキ"
    ],
    "kunyomi": [
      "しずく",
      "したた.る"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "漁",
    "meanings": [
      "fishing",
      "fishery"
    ],
    "onyomi": [
      "ギョ",
      "リョウ"
    ],
    "kunyomi": [
      "あさ.る"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "濃",
    "meanings": [
      "concentrated",
      "thick",
      "dark"
    ],
    "onyomi": [
      "ノウ"
    ],
    "kunyomi": [
      "こ.い"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "濯",
    "meanings": [
      "laundry",
      "wash",
      "pour on"
    ],
    "onyomi": [
      "タク"
    ],
    "kunyomi": [
      "すす.ぐ",
      "ゆす.ぐ"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "灯",
    "meanings": [
      "lamp",
      "a light",
      "light"
    ],
    "onyomi": [
      "トウ"
    ],
    "kunyomi": [
      "ひ",
      "ほ-",
      "ともしび",
      "とも.す",
      "あかり"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "灰",
    "meanings": [
      "ashes",
      "puckery juice",
      "cremate"
    ],
    "onyomi": [
      "カイ"
    ],
    "kunyomi": [
      "はい"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "炭",
    "meanings": [
      "charcoal",
      "coal"
    ],
    "onyomi": [
      "タン"
    ],
    "kunyomi": [
      "すみ"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "焼",
    "meanings": [
      "bake",
      "burning"
    ],
    "onyomi": [
      "ショウ"
    ],
    "kunyomi": [
      "や.く",
      "や.き",
      "や.き-",
      "-や.き",
      "や.ける"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "照",
    "meanings": [
      "illuminate",
      "shine",
      "compare"
    ],
    "onyomi": [
      "ショウ"
    ],
    "kunyomi": [
      "て.る",
      "て.らす",
      "て.れる"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "燃",
    "meanings": [
      "burn",
      "blaze",
      "glow"
    ],
    "onyomi": [
      "ネン"
    ],
    "kunyomi": [
      "も.える",
      "も.やす",
      "も.す"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "燥",
    "meanings": [
      "parch",
      "dry up"
    ],
    "onyomi": [
      "ソウ"
    ],
    "kunyomi": [
      "はしゃ.ぐ"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "爆",
    "meanings": [
      "bomb",
      "burst open",
      "pop"
    ],
    "onyomi": [
      "バク"
    ],
    "kunyomi": [
      "は.ぜる"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "片",
    "meanings": [
      "one-sided",
      "leaf",
      "sheet"
    ],
    "onyomi": [
      "ヘン"
    ],
    "kunyomi": [
      "かた-",
      "かた"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "版",
    "meanings": [
      "printing block",
      "printing plate",
      "edition"
    ],
    "onyomi": [
      "ハン"
    ],
    "kunyomi": [],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "玉",
    "meanings": [
      "jewel",
      "ball"
    ],
    "onyomi": [
      "ギョク"
    ],
    "kunyomi": [
      "たま",
      "たま-",
      "-だま"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "珍",
    "meanings": [
      "rare",
      "curious",
      "strange"
    ],
    "onyomi": [
      "チン"
    ],
    "kunyomi": [
      "めずら.しい",
      "たから"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "瓶",
    "meanings": [
      "bottle",
      "vial",
      "jar"
    ],
    "onyomi": [
      "ビン",
      "ヘイ"
    ],
    "kunyomi": [
      "かめ"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "甘",
    "meanings": [
      "sweet",
      "coax",
      "pamper"
    ],
    "onyomi": [
      "カン"
    ],
    "kunyomi": [
      "あま.い",
      "あま.える",
      "あま.やかす",
      "うま.い"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "畜",
    "meanings": [
      "livestock",
      "domestic fowl and animals"
    ],
    "onyomi": [
      "チク"
    ],
    "kunyomi": [],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "略",
    "meanings": [
      "abbreviation",
      "omission",
      "outline"
    ],
    "onyomi": [
      "リャク"
    ],
    "kunyomi": [
      "ほぼ",
      "はぶ.く",
      "おか.す",
      "おさ.める",
      "はかりごと",
      "はか.る"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "畳",
    "meanings": [
      "tatami mat",
      "counter for tatami mats",
      "fold"
    ],
    "onyomi": [
      "ジョウ",
      "チョウ"
    ],
    "kunyomi": [
      "たた.む",
      "たたみ",
      "かさ.なる"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "療",
    "meanings": [
      "heal",
      "cure"
    ],
    "onyomi": [
      "リョウ"
    ],
    "kunyomi": [],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "皮",
    "meanings": [
      "pelt",
      "skin",
      "hide"
    ],
    "onyomi": [
      "ヒ"
    ],
    "kunyomi": [
      "かわ"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "皿",
    "meanings": [
      "dish",
      "a helping",
      "plate"
    ],
    "onyomi": [
      "ベイ"
    ],
    "kunyomi": [
      "さら"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "省",
    "meanings": [
      "government ministry",
      "conserve",
      "omit"
    ],
    "onyomi": [
      "セイ",
      "ショウ"
    ],
    "kunyomi": [
      "かえり.みる",
      "はぶ.く"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "県",
    "meanings": [
      "prefecture"
    ],
    "onyomi": [
      "ケン"
    ],
    "kunyomi": [
      "か.ける"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "短",
    "meanings": [
      "short",
      "brevity",
      "fault"
    ],
    "onyomi": [
      "タン"
    ],
    "kunyomi": [
      "みじか.い"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "砂",
    "meanings": [
      "sand"
    ],
    "onyomi": [
      "サ",
      "シャ"
    ],
    "kunyomi": [
      "すな"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "硬",
    "meanings": [
      "stiff",
      "hard"
    ],
    "onyomi": [
      "コウ"
    ],
    "kunyomi": [
      "かた.い"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "磨",
    "meanings": [
      "grind",
      "polish",
      "scour"
    ],
    "onyomi": [
      "マ"
    ],
    "kunyomi": [
      "みが.く",
      "す.る"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "祈",
    "meanings": [
      "pray",
      "wish"
    ],
    "onyomi": [
      "キ"
    ],
    "kunyomi": [
      "いの.る"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "祝",
    "meanings": [
      "celebrate",
      "congratulate"
    ],
    "onyomi": [
      "シュク",
      "シュウ"
    ],
    "kunyomi": [
      "いわ.う"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "祭",
    "meanings": [
      "ritual",
      "offer prayers",
      "celebrate"
    ],
    "onyomi": [
      "サイ"
    ],
    "kunyomi": [
      "まつ.る",
      "まつ.り",
      "まつり"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "禁",
    "meanings": [
      "prohibition",
      "ban",
      "forbid"
    ],
    "onyomi": [
      "キン"
    ],
    "kunyomi": [],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "秒",
    "meanings": [
      "second (1/60 minute)"
    ],
    "onyomi": [
      "ビョウ"
    ],
    "kunyomi": [],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "移",
    "meanings": [
      "shift",
      "move",
      "change"
    ],
    "onyomi": [
      "イ"
    ],
    "kunyomi": [
      "うつ.る",
      "うつ.す"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "税",
    "meanings": [
      "tax",
      "duty"
    ],
    "onyomi": [
      "ゼイ"
    ],
    "kunyomi": [],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "章",
    "meanings": [
      "badge",
      "chapter",
      "composition"
    ],
    "onyomi": [
      "ショウ"
    ],
    "kunyomi": [],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "童",
    "meanings": [
      "juvenile",
      "child"
    ],
    "onyomi": [
      "ドウ"
    ],
    "kunyomi": [
      "わらべ"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "競",
    "meanings": [
      "emulate",
      "compete with",
      "bid"
    ],
    "onyomi": [
      "キョウ",
      "ケイ"
    ],
    "kunyomi": [
      "きそ.う",
      "せ.る",
      "くら.べる"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "竹",
    "meanings": [
      "bamboo"
    ],
    "onyomi": [
      "チク"
    ],
    "kunyomi": [
      "たけ"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "符",
    "meanings": [
      "token",
      "sign",
      "mark"
    ],
    "onyomi": [
      "フ"
    ],
    "kunyomi": [],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "筆",
    "meanings": [
      "writing brush",
      "writing",
      "painting brush"
    ],
    "onyomi": [
      "ヒツ"
    ],
    "kunyomi": [
      "ふで"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "筒",
    "meanings": [
      "cylinder",
      "pipe",
      "tube"
    ],
    "onyomi": [
      "トウ"
    ],
    "kunyomi": [
      "つつ"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "算",
    "meanings": [
      "calculate",
      "divining",
      "number"
    ],
    "onyomi": [
      "サン"
    ],
    "kunyomi": [
      "そろ"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "管",
    "meanings": [
      "pipe",
      "tube",
      "wind instrument"
    ],
    "onyomi": [
      "カン"
    ],
    "kunyomi": [
      "くだ"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "築",
    "meanings": [
      "fabricate",
      "build",
      "construct"
    ],
    "onyomi": [
      "チク"
    ],
    "kunyomi": [
      "きず.く"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "簡",
    "meanings": [
      "simplicity",
      "brevity"
    ],
    "onyomi": [
      "カン",
      "ケン"
    ],
    "kunyomi": [
      "えら.ぶ",
      "ふだ"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "籍",
    "meanings": [
      "enroll",
      "domiciliary register",
      "membership"
    ],
    "onyomi": [
      "セキ"
    ],
    "kunyomi": [],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "粉",
    "meanings": [
      "flour",
      "powder",
      "dust"
    ],
    "onyomi": [
      "フン"
    ],
    "kunyomi": [
      "デシメートル",
      "こ",
      "こな"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "粒",
    "meanings": [
      "grains",
      "drop",
      "counter for tiny particles"
    ],
    "onyomi": [
      "リュウ"
    ],
    "kunyomi": [
      "つぶ"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "糸",
    "meanings": [
      "thread"
    ],
    "onyomi": [
      "シ"
    ],
    "kunyomi": [
      "いと"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "紅",
    "meanings": [
      "crimson",
      "deep red"
    ],
    "onyomi": [
      "コウ",
      "ク"
    ],
    "kunyomi": [
      "べに",
      "くれない",
      "あか.い"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "純",
    "meanings": [
      "genuine",
      "purity",
      "innocence"
    ],
    "onyomi": [
      "ジュン"
    ],
    "kunyomi": [],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "細",
    "meanings": [
      "dainty",
      "get thin",
      "taper"
    ],
    "onyomi": [
      "サイ"
    ],
    "kunyomi": [
      "ほそ.い",
      "ほそ.る",
      "こま.か",
      "こま.かい"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "紹",
    "meanings": [
      "introduce",
      "inherit",
      "help"
    ],
    "onyomi": [
      "ショウ"
    ],
    "kunyomi": [],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "絡",
    "meanings": [
      "entwine",
      "coil around",
      "get caught in"
    ],
    "onyomi": [
      "ラク"
    ],
    "kunyomi": [
      "から.む",
      "から.まる"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "綿",
    "meanings": [
      "cotton"
    ],
    "onyomi": [
      "メン"
    ],
    "kunyomi": [
      "わた"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "総",
    "meanings": [
      "general",
      "whole",
      "all"
    ],
    "onyomi": [
      "ソウ"
    ],
    "kunyomi": [
      "す.べて",
      "すべ.て",
      "ふさ"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "緑",
    "meanings": [
      "green"
    ],
    "onyomi": [
      "リョク",
      "ロク"
    ],
    "kunyomi": [
      "みどり"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "線",
    "meanings": [
      "line",
      "track"
    ],
    "onyomi": [
      "セン"
    ],
    "kunyomi": [
      "すじ"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "編",
    "meanings": [
      "compilation",
      "knit",
      "plait"
    ],
    "onyomi": [
      "ヘン"
    ],
    "kunyomi": [
      "あ.む",
      "-あ.み"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "練",
    "meanings": [
      "practice",
      "gloss",
      "train"
    ],
    "onyomi": [
      "レン"
    ],
    "kunyomi": [
      "ね.る",
      "ね.り"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "績",
    "meanings": [
      "exploits",
      "achievements",
      "unreeling cocoons"
    ],
    "onyomi": [
      "セキ"
    ],
    "kunyomi": [],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "缶",
    "meanings": [
      "tin can",
      "container",
      "jar radical (no. 121)"
    ],
    "onyomi": [
      "カン"
    ],
    "kunyomi": [
      "かま"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "署",
    "meanings": [
      "signature",
      "govt office",
      "police station"
    ],
    "onyomi": [
      "ショ"
    ],
    "kunyomi": [],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "群",
    "meanings": [
      "flock",
      "group",
      "crowd"
    ],
    "onyomi": [
      "グン"
    ],
    "kunyomi": [
      "む.れる",
      "む.れ",
      "むら",
      "むら.がる"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "羽",
    "meanings": [
      "feathers",
      "counter for birds, rabbits"
    ],
    "onyomi": [
      "ウ"
    ],
    "kunyomi": [
      "は",
      "わ",
      "はね"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "翌",
    "meanings": [
      "the following",
      "next"
    ],
    "onyomi": [
      "ヨク"
    ],
    "kunyomi": [],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "耕",
    "meanings": [
      "till",
      "plow",
      "cultivate"
    ],
    "onyomi": [
      "コウ"
    ],
    "kunyomi": [
      "たがや.す"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "肌",
    "meanings": [
      "texture",
      "skin",
      "body"
    ],
    "onyomi": [
      "キ"
    ],
    "kunyomi": [
      "はだ"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "肩",
    "meanings": [
      "shoulder"
    ],
    "onyomi": [
      "ケン"
    ],
    "kunyomi": [
      "かた"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "肯",
    "meanings": [
      "agreement",
      "consent",
      "comply with"
    ],
    "onyomi": [
      "コウ"
    ],
    "kunyomi": [
      "がえんじ.る"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "胃",
    "meanings": [
      "stomach",
      "paunch",
      "crop"
    ],
    "onyomi": [
      "イ"
    ],
    "kunyomi": [],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "胸",
    "meanings": [
      "bosom",
      "breast",
      "chest"
    ],
    "onyomi": [
      "キョウ"
    ],
    "kunyomi": [
      "むね",
      "むな-"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "脂",
    "meanings": [
      "fat",
      "grease",
      "tallow"
    ],
    "onyomi": [
      "シ"
    ],
    "kunyomi": [
      "あぶら"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "脳",
    "meanings": [
      "brain",
      "memory"
    ],
    "onyomi": [
      "ノウ",
      "ドウ"
    ],
    "kunyomi": [
      "のうずる"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "腕",
    "meanings": [
      "arm",
      "ability",
      "talent"
    ],
    "onyomi": [
      "ワン"
    ],
    "kunyomi": [
      "うで"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "腰",
    "meanings": [
      "loins",
      "hips",
      "waist"
    ],
    "onyomi": [
      "ヨウ"
    ],
    "kunyomi": [
      "こし"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "膚",
    "meanings": [
      "skin",
      "body",
      "grain"
    ],
    "onyomi": [
      "フ"
    ],
    "kunyomi": [
      "はだ"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "臓",
    "meanings": [
      "entrails",
      "viscera",
      "bowels"
    ],
    "onyomi": [
      "ゾウ"
    ],
    "kunyomi": [
      "はらわた"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "臣",
    "meanings": [
      "retainer",
      "subject"
    ],
    "onyomi": [
      "シン",
      "ジン"
    ],
    "kunyomi": [],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "舟",
    "meanings": [
      "boat",
      "ship"
    ],
    "onyomi": [
      "シュウ"
    ],
    "kunyomi": [
      "ふね",
      "ふな-",
      "-ぶね"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "航",
    "meanings": [
      "navigate",
      "sail",
      "cruise"
    ],
    "onyomi": [
      "コウ"
    ],
    "kunyomi": [],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "般",
    "meanings": [
      "carrier",
      "carry",
      "all"
    ],
    "onyomi": [
      "ハン"
    ],
    "kunyomi": [],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "芸",
    "meanings": [
      "technique",
      "art",
      "craft"
    ],
    "onyomi": [
      "ゲイ",
      "ウン"
    ],
    "kunyomi": [
      "う.える",
      "のり",
      "わざ"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "荒",
    "meanings": [
      "laid waste",
      "rough",
      "rude"
    ],
    "onyomi": [
      "コウ"
    ],
    "kunyomi": [
      "あ.らす",
      "あ.れる",
      "あら.い",
      "すさ.ぶ",
      "すさ.む",
      "あ.らし"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "荷",
    "meanings": [
      "baggage",
      "shoulder-pole load",
      "bear (a burden)"
    ],
    "onyomi": [
      "カ"
    ],
    "kunyomi": [
      "に"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "菓",
    "meanings": [
      "candy",
      "cakes",
      "fruit"
    ],
    "onyomi": [
      "カ"
    ],
    "kunyomi": [],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "菜",
    "meanings": [
      "vegetable",
      "side dish",
      "greens"
    ],
    "onyomi": [
      "サイ"
    ],
    "kunyomi": [
      "な"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "著",
    "meanings": [
      "renowned",
      "publish",
      "write"
    ],
    "onyomi": [
      "チョ",
      "チャク"
    ],
    "kunyomi": [
      "あらわ.す",
      "いちじる.しい"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "蒸",
    "meanings": [
      "steam",
      "heat",
      "sultry"
    ],
    "onyomi": [
      "ジョウ",
      "セイ"
    ],
    "kunyomi": [
      "む.す",
      "む.れる",
      "む.らす"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "蔵",
    "meanings": [
      "storehouse",
      "hide",
      "own"
    ],
    "onyomi": [
      "ゾウ",
      "ソウ"
    ],
    "kunyomi": [
      "くら",
      "おさ.める",
      "かく.れる"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "薄",
    "meanings": [
      "dilute",
      "thin",
      "weak (tea)"
    ],
    "onyomi": [
      "ハク"
    ],
    "kunyomi": [
      "うす.い",
      "うす-",
      "-うす",
      "うす.める",
      "うす.まる",
      "うす.らぐ",
      "うす.ら-",
      "うす.れる",
      "すすき"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "虫",
    "meanings": [
      "insect",
      "bug",
      "temper"
    ],
    "onyomi": [
      "チュウ",
      "キ"
    ],
    "kunyomi": [
      "むし"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "血",
    "meanings": [
      "blood"
    ],
    "onyomi": [
      "ケツ"
    ],
    "kunyomi": [
      "ち"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "衣",
    "meanings": [
      "garment",
      "clothes",
      "dressing"
    ],
    "onyomi": [
      "イ",
      "エ"
    ],
    "kunyomi": [
      "ころも",
      "きぬ",
      "-ぎ"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "袋",
    "meanings": [
      "sack",
      "bag",
      "pouch"
    ],
    "onyomi": [
      "タイ",
      "ダイ"
    ],
    "kunyomi": [
      "ふくろ"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "被",
    "meanings": [
      "incur",
      "cover",
      "veil"
    ],
    "onyomi": [
      "ヒ"
    ],
    "kunyomi": [
      "こうむ.る",
      "おお.う",
      "かぶ.る",
      "かぶ.せる"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "装",
    "meanings": [
      "attire",
      "dress",
      "pretend"
    ],
    "onyomi": [
      "ソウ",
      "ショウ"
    ],
    "kunyomi": [
      "よそお.う",
      "よそお.い"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "裏",
    "meanings": [
      "back",
      "amidst",
      "in"
    ],
    "onyomi": [
      "リ"
    ],
    "kunyomi": [
      "うら"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "補",
    "meanings": [
      "supplement",
      "supply",
      "make good"
    ],
    "onyomi": [
      "ホ"
    ],
    "kunyomi": [
      "おぎな.う"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "複",
    "meanings": [
      "duplicate",
      "double",
      "compound"
    ],
    "onyomi": [
      "フク"
    ],
    "kunyomi": [],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "角",
    "meanings": [
      "angle",
      "corner",
      "square"
    ],
    "onyomi": [
      "カク"
    ],
    "kunyomi": [
      "かど",
      "つの"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "触",
    "meanings": [
      "contact",
      "touch",
      "feel"
    ],
    "onyomi": [
      "ショク"
    ],
    "kunyomi": [
      "ふ.れる",
      "さわ.る",
      "さわ"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "訓",
    "meanings": [
      "instruction",
      "Japanese character reading",
      "explanation"
    ],
    "onyomi": [
      "クン",
      "キン"
    ],
    "kunyomi": [
      "おし.える",
      "よ.む",
      "くん.ずる"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "設",
    "meanings": [
      "establishment",
      "provision",
      "prepare"
    ],
    "onyomi": [
      "セツ"
    ],
    "kunyomi": [
      "もう.ける"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "詞",
    "meanings": [
      "part of speech",
      "words",
      "poetry"
    ],
    "onyomi": [
      "シ"
    ],
    "kunyomi": [
      "ことば"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "詰",
    "meanings": [
      "packed",
      "close",
      "pressed"
    ],
    "onyomi": [
      "キツ",
      "キチ"
    ],
    "kunyomi": [
      "つ.める",
      "つ.め",
      "-づ.め",
      "つ.まる",
      "つ.む"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "誌",
    "meanings": [
      "document",
      "records"
    ],
    "onyomi": [
      "シ"
    ],
    "kunyomi": [],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "課",
    "meanings": [
      "chapter",
      "lesson",
      "section"
    ],
    "onyomi": [
      "カ"
    ],
    "kunyomi": [],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "諸",
    "meanings": [
      "various",
      "many",
      "several"
    ],
    "onyomi": [
      "ショ"
    ],
    "kunyomi": [
      "もろ"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "講",
    "meanings": [
      "lecture",
      "club",
      "association"
    ],
    "onyomi": [
      "コウ"
    ],
    "kunyomi": [],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "谷",
    "meanings": [
      "valley"
    ],
    "onyomi": [
      "コク"
    ],
    "kunyomi": [
      "たに",
      "きわ.まる"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "豊",
    "meanings": [
      "bountiful",
      "excellent",
      "rich"
    ],
    "onyomi": [
      "ホウ",
      "ブ"
    ],
    "kunyomi": [
      "ゆた.か",
      "とよ"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "象",
    "meanings": [
      "elephant",
      "pattern after",
      "imitate"
    ],
    "onyomi": [
      "ショウ",
      "ゾウ"
    ],
    "kunyomi": [
      "かたど.る"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "貝",
    "meanings": [
      "shellfish"
    ],
    "onyomi": [
      "バイ"
    ],
    "kunyomi": [
      "かい"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "貨",
    "meanings": [
      "freight",
      "goods",
      "property"
    ],
    "onyomi": [
      "カ"
    ],
    "kunyomi": [
      "たから"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "販",
    "meanings": [
      "marketing",
      "sell",
      "trade"
    ],
    "onyomi": [
      "ハン"
    ],
    "kunyomi": [],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "貯",
    "meanings": [
      "savings",
      "store",
      "lay in"
    ],
    "onyomi": [
      "チョ"
    ],
    "kunyomi": [
      "た.める",
      "たくわ.える"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "貿",
    "meanings": [
      "trade",
      "exchange"
    ],
    "onyomi": [
      "ボウ"
    ],
    "kunyomi": [],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "賞",
    "meanings": [
      "prize",
      "reward",
      "praise"
    ],
    "onyomi": [
      "ショウ"
    ],
    "kunyomi": [
      "ほ.める"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "賢",
    "meanings": [
      "intelligent",
      "wise",
      "wisdom"
    ],
    "onyomi": [
      "ケン"
    ],
    "kunyomi": [
      "かしこ.い"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "贈",
    "meanings": [
      "presents",
      "send",
      "give to"
    ],
    "onyomi": [
      "ゾウ",
      "ソウ"
    ],
    "kunyomi": [
      "おく.る"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "超",
    "meanings": [
      "transcend",
      "super-",
      "ultra-"
    ],
    "onyomi": [
      "チョウ"
    ],
    "kunyomi": [
      "こ.える",
      "こ.す"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "跡",
    "meanings": [
      "tracks",
      "mark",
      "print"
    ],
    "onyomi": [
      "セキ"
    ],
    "kunyomi": [
      "あと"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "踊",
    "meanings": [
      "jump",
      "dance",
      "leap"
    ],
    "onyomi": [
      "ヨウ"
    ],
    "kunyomi": [
      "おど.る"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "軍",
    "meanings": [
      "army",
      "force",
      "troops"
    ],
    "onyomi": [
      "グン"
    ],
    "kunyomi": [
      "いくさ"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "軒",
    "meanings": [
      "flats",
      "counter for houses",
      "eaves"
    ],
    "onyomi": [
      "ケン"
    ],
    "kunyomi": [
      "のき"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "軟",
    "meanings": [
      "soft"
    ],
    "onyomi": [
      "ナン"
    ],
    "kunyomi": [
      "やわ.らか",
      "やわ.らかい"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "軽",
    "meanings": [
      "lightly",
      "trifling",
      "unimportant"
    ],
    "onyomi": [
      "ケイ",
      "キョウ",
      "キン"
    ],
    "kunyomi": [
      "かる.い",
      "かろ.やか",
      "かろ.んじる"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "輪",
    "meanings": [
      "wheel",
      "ring",
      "circle"
    ],
    "onyomi": [
      "リン"
    ],
    "kunyomi": [
      "わ"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "輸",
    "meanings": [
      "transport",
      "send",
      "be inferior"
    ],
    "onyomi": [
      "ユ",
      "シュ"
    ],
    "kunyomi": [],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "辛",
    "meanings": [
      "spicy",
      "bitter",
      "hot"
    ],
    "onyomi": [
      "シン"
    ],
    "kunyomi": [
      "から.い",
      "つら.い",
      "-づら.い",
      "かのと"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "農",
    "meanings": [
      "agriculture",
      "farmers"
    ],
    "onyomi": [
      "ノウ"
    ],
    "kunyomi": [],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "辺",
    "meanings": [
      "environs",
      "boundary",
      "border"
    ],
    "onyomi": [
      "ヘン"
    ],
    "kunyomi": [
      "あた.り",
      "ほと.り",
      "-べ"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "述",
    "meanings": [
      "mention",
      "state",
      "speak"
    ],
    "onyomi": [
      "ジュツ"
    ],
    "kunyomi": [
      "の.べる"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "逆",
    "meanings": [
      "inverted",
      "reverse",
      "opposite"
    ],
    "onyomi": [
      "ギャク",
      "ゲキ"
    ],
    "kunyomi": [
      "さか",
      "さか.さ",
      "さか.らう"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "造",
    "meanings": [
      "create",
      "make",
      "structure"
    ],
    "onyomi": [
      "ゾウ"
    ],
    "kunyomi": [
      "つく.る",
      "つく.り",
      "-づく.り"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "郊",
    "meanings": [
      "outskirts",
      "suburbs",
      "rural area"
    ],
    "onyomi": [
      "コウ"
    ],
    "kunyomi": [],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "郵",
    "meanings": [
      "mail",
      "stagecoach stop"
    ],
    "onyomi": [
      "ユウ"
    ],
    "kunyomi": [],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "量",
    "meanings": [
      "quantity",
      "measure",
      "weight"
    ],
    "onyomi": [
      "リョウ"
    ],
    "kunyomi": [
      "はか.る"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "針",
    "meanings": [
      "needle",
      "pin",
      "staple"
    ],
    "onyomi": [
      "シン"
    ],
    "kunyomi": [
      "はり"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "鈍",
    "meanings": [
      "dull",
      "slow",
      "foolish"
    ],
    "onyomi": [
      "ドン"
    ],
    "kunyomi": [
      "にぶ.い",
      "にぶ.る",
      "にぶ-",
      "なま.る",
      "なまく.ら"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "鉄",
    "meanings": [
      "iron"
    ],
    "onyomi": [
      "テツ"
    ],
    "kunyomi": [
      "くろがね"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "鉱",
    "meanings": [
      "mineral",
      "ore"
    ],
    "onyomi": [
      "コウ"
    ],
    "kunyomi": [
      "あらがね"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "銅",
    "meanings": [
      "copper"
    ],
    "onyomi": [
      "ドウ"
    ],
    "kunyomi": [
      "あかがね"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "鋭",
    "meanings": [
      "pointed",
      "sharpness",
      "edge"
    ],
    "onyomi": [
      "エイ"
    ],
    "kunyomi": [
      "するど.い"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "録",
    "meanings": [
      "record"
    ],
    "onyomi": [
      "ロク"
    ],
    "kunyomi": [
      "しる.す",
      "と.る"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "門",
    "meanings": [
      "gate",
      "counter for cannons"
    ],
    "onyomi": [
      "モン"
    ],
    "kunyomi": [
      "かど",
      "と"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "防",
    "meanings": [
      "ward off",
      "defend",
      "protect"
    ],
    "onyomi": [
      "ボウ"
    ],
    "kunyomi": [
      "ふせ.ぐ"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "陸",
    "meanings": [
      "land",
      "six"
    ],
    "onyomi": [
      "リク",
      "ロク"
    ],
    "kunyomi": [
      "おか"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "隅",
    "meanings": [
      "corner",
      "nook"
    ],
    "onyomi": [
      "グウ"
    ],
    "kunyomi": [
      "すみ"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "階",
    "meanings": [
      "storey",
      "stair",
      "counter for storeys of a building"
    ],
    "onyomi": [
      "カイ"
    ],
    "kunyomi": [
      "きざはし"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "隻",
    "meanings": [
      "vessels",
      "counter for ships",
      "fish"
    ],
    "onyomi": [
      "セキ"
    ],
    "kunyomi": [],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "雇",
    "meanings": [
      "employ",
      "hire"
    ],
    "onyomi": [
      "コ"
    ],
    "kunyomi": [
      "やと.う"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "雲",
    "meanings": [
      "cloud"
    ],
    "onyomi": [
      "ウン"
    ],
    "kunyomi": [
      "くも",
      "-ぐも"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "零",
    "meanings": [
      "zero",
      "spill",
      "overflow"
    ],
    "onyomi": [
      "レイ"
    ],
    "kunyomi": [
      "ぜろ",
      "こぼ.す",
      "こぼ.れる"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "震",
    "meanings": [
      "quake",
      "shake",
      "tremble"
    ],
    "onyomi": [
      "シン"
    ],
    "kunyomi": [
      "ふる.う",
      "ふる.える",
      "ふる.わせる",
      "ふる.わす"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "革",
    "meanings": [
      "leather",
      "skin",
      "reform"
    ],
    "onyomi": [
      "カク"
    ],
    "kunyomi": [
      "かわ"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "順",
    "meanings": [
      "obey",
      "order",
      "turn"
    ],
    "onyomi": [
      "ジュン"
    ],
    "kunyomi": [],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "預",
    "meanings": [
      "deposit",
      "custody",
      "leave with"
    ],
    "onyomi": [
      "ヨ"
    ],
    "kunyomi": [
      "あず.ける",
      "あず.かる"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "領",
    "meanings": [
      "jurisdiction",
      "dominion",
      "territory"
    ],
    "onyomi": [
      "リョウ"
    ],
    "kunyomi": [
      "えり"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "額",
    "meanings": [
      "forehead",
      "tablet",
      "plaque"
    ],
    "onyomi": [
      "ガク"
    ],
    "kunyomi": [
      "ひたい"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "香",
    "meanings": [
      "incense",
      "smell",
      "perfume"
    ],
    "onyomi": [
      "コウ",
      "キョウ"
    ],
    "kunyomi": [
      "か",
      "かお.り",
      "かお.る"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "駐",
    "meanings": [
      "stop-over",
      "reside in",
      "resident"
    ],
    "onyomi": [
      "チュウ"
    ],
    "kunyomi": [],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "骨",
    "meanings": [
      "skeleton",
      "bone",
      "remains"
    ],
    "onyomi": [
      "コツ"
    ],
    "kunyomi": [
      "ほね"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "麦",
    "meanings": [
      "barley",
      "wheat"
    ],
    "onyomi": [
      "バク"
    ],
    "kunyomi": [
      "むぎ"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "黄",
    "meanings": [
      "yellow"
    ],
    "onyomi": [
      "コウ",
      "オウ"
    ],
    "kunyomi": [
      "き",
      "こ-"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "鼻",
    "meanings": [
      "nose",
      "snout"
    ],
    "onyomi": [
      "ビ"
    ],
    "kunyomi": [
      "はな"
    ],
    "level": "N2",
    "vocabulary": []
  },
  {
    "kanji": "齢",
    "meanings": [
      "age"
    ],
    "onyomi": [
      "レイ"
    ],
    "kunyomi": [
      "よわい",
      "とし"
    ],
    "level": "N2",
    "vocabulary": []
  }
];
