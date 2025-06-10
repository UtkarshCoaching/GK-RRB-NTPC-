// Define the questions array globally or ensure it's loaded before other scripts
const questions = [
  {
    "question": "এপিগ্রাফি (Epigraphy) বলতে কী বোঝায়?",
    "options": [
      "(a) মুদ্রা অধ্যয়ন",
      "(b) কঙ্কাল অধ্যয়ন",
      "(c) শিলালিপি অধ্যয়ন",
      "(d) মানচিত্র অধ্যয়ন"
    ],
    "answer": "(c)",
    "explanation": "Numismatics - মুদ্রা অধ্যয়ন। Osteology - কঙ্কালের অধ্যয়ন। Cartography - মানচিত্র অধ্যয়ন।"
  },
  {
    "question": "কালিদাসের নীচের কোন কাজটি শিব ও দেবী পার্বতীর পুত্র কার্তিকেয়ের জন্মের প্রেক্ষাপটের উপর ভিত্তি করে তৈরি?",
    "options": [
      "(a) মেঘদূত",
      "(b) রঘুবংসা",
      "(c) কুমারসম্ভব",
      "(d) ঋতুসমার"
    ],
    "answer": "(c)",
    "explanation": "কুমারসম্ভবম কাব্যের মূল বিষয়বস্তু তারকাসুর (হিন্দু পুরাণে একজন শক্তিশালী অসুর) বধের নিমিত্ত শিব ও পার্বতীর পুত্ররূপে কার্তিকেয়ের (যুদ্ধের ঈশ্বরের জন্ম) জন্মবিবরণ। কুমারসম্ভবম কাব্যের মূল কাহিনিটি রামায়ণ, মহাভারত, মৎস্যপুরাণ, ব্রহ্মাপুরাণ, সৌরপুরাণ, কালিকাপুরাণ ও শিবপুরাণ থেকে গৃহীত।"
  },
  {
    "question": "সংস্কৃত ব্যাকরণের বিকাশ শুরু হয় পাণিনির সাথে, তাঁর _____ গ্রন্থের মাধ্যমে।",
    "options": [
      "(a) অষ্টাধ্যায়ী",
      "(b) ললিতবিস্তার",
      "(c) মহাবাস্তু",
      "(d) বুদ্ধচরিত"
    ],
    "answer": "(a)",
    "explanation": "অষ্টাধ্যায়ী গ্রন্থটি ভারতীয় ব্যাকরণবিদ পাণিনির দ্বারা 6ষ্ঠ খ্রিস্টপূর্ব থেকে ১ম শতাব্দীতে লেখা হয়েছিল। ললিতবিস্তার- বৌদ্ধ পাঠ যা গৌতম বুদ্ধের জীবন বর্ণনা করে এবং শিক্ষা ও দার্শনিক আলোচনা অন্তর্ভুক্ত করে। মহাবাস্তু- গৌতম বুদ্ধের পূর্ববর্তী জীবনের গল্প এবং জীবনীমূলক বিবরণ রয়েছে। বুদ্ধচরিত- গৌতম বুদ্ধের জীবনের উপর সংস্কৃত মহাকাব্য।"
  },
  {
    "question": "নীচের কোন শাখাগুলি 'Temporal synthesis' ধারণাটি ব্যাখ্যা করার চেষ্টা করে?",
    "options": [
      "(a) ভূরূপবিদ্যা",
      "(b) নৃতত্ত্ব",
      "(c) ইতিহাস",
      "(d) দর্শন"
    ],
    "answer": "(c)",
    "explanation": ""
  },
  {
    "question": "মাধবাচার্য (দ্বাদশ শতক) 'মাধব নিদান' লিখেছিলেন যাতে রোগ নির্ণয়ের (নিদান) উপর ______ অধ্যায় রয়েছে।",
    "options": [
      "(a) 96",
      "(b) 60",
      "(c) 69",
      "(d) 90"
    ],
    "answer": "(c)",
    "explanation": ""
  },
  {
    "question": "_____ গুণাঢ্যর পৈশাচি ভাষায় লেখা।",
    "options": [
      "(a) মৃচ্ছকটিক",
      "(b) পঞ্চতন্ত্র",
      "(c) বৃহৎকথা",
      "(d) কথাসারিত সাগর"
    ],
    "answer": "(c)",
    "explanation": "বৃহৎকথা মানে 'গল্পের মহাসাগর'। সংস্কৃত গল্পসাহিত্যের ইতিহাসে সর্বাপ্রেক্ষা প্রাচীন ও বৃহত্তম গল্পগ্রন্থ হল গুণাঢ্য রচিত' বৃহৎকথা (Brihat katha)। পৈশাচী প্রাকৃত ভাষায় রচিত এই মহান গ্রন্থটিতে এক লক্ষ শ্লোক বর্তমান।"
  },
  {
    "question": "ব্রাহ্মী ও খরোষ্ঠী লিপির পাঠোদ্ধার করেন যা পূর্বে শিলালিপির জন্য ব্যবহৃত হত।",
    "options": [
      "(a) জেমস প্রিন্সেপ",
      "(b) হুইসার",
      "(c) কানিংহাম",
      "(d) মার্শাল"
    ],
    "answer": "(a)",
    "explanation": "জেমস প্রিন্সেপ 1838 সালে ব্রাহ্মী ও খরোষ্ঠী লিপির পাঠোদ্ধার করেন। আলেকজান্ডার কানিংহাম 1861 সালে আর্কিওলজিক্যাল সার্ভে অফ ইন্ডিয়া প্রতিষ্ঠা করেন। জন মার্শাল 1919 সালে সাঁচীতে (মধ্যপ্রদেশ) একটি প্রত্নতাত্ত্বিক যাদুঘর প্রতিষ্ঠা করেন।"
  },
  {
    "question": "নীচের কোনটি ভারতের প্রাচীনতম মুদ্রা ছিল?",
    "options": [
      "(a) তামার মুদ্রা",
      "(b) ছাপাঙ্কিত মুদ্রা",
      "(c) সীসার মুদ্রা",
      "(d) সোনার মুদ্রা"
    ],
    "answer": "(b)",
    "explanation": "ছাপাঙ্কিত মুদ্রা (Punch Marked Coins) হচ্ছে ভারতের এক প্রকার প্রাচীন মুদ্রা, যা খ্রীস্টপূর্ব ষষ্ঠ এবং দ্বিতীয় শতাব্দীর মধ্য সময়কার। এগুলো অসমতল আকারের ছিলো। এই মুদ্রাগুলি সাধারণত রূপা বা তামা দিয়ে তৈরি।"
  },
  {
    "question": "প্রাচীন ভারতীয় মহাকাব্য মহাভারতের (বেদব্যাস দ্বারা লিখিত) আঠারোটি অধ্যায়ের মধ্যে ষষ্ঠ অধ্যায় কোনটি যেটির মধ্যে ভগবত গীতা অন্তর্ভুক্ত রয়েছে?",
    "options": [
      "(a) ভীষ্মপ্রভা",
      "(b) বিরাট প্রভা",
      "(c) সভা প্রভা",
      "(d) আদি প্রভা"
    ],
    "answer": "(a)",
    "explanation": "মহাভারতের ষষ্ঠ অধ্যায় ভীষ্মপ্রভাতে ভগবত গীতা অন্তর্ভুক্ত, যেটিতে 4টি ভাগ ও 122টি অধ্যায় রয়েছে।"
  },
  {
    "question": "সংস্কৃত মহাকাব্য মহাভারতের লেখক কে?",
    "options": [
      "(a) মহর্ষি বেদব্যাস",
      "(b) মহর্ষি বাল্মিকি",
      "(c) শ্রীকৃষ্ণ",
      "(d) শ্রী সুকদেব জী"
    ],
    "answer": "(a)",
    "explanation": "সংস্কৃত মহাকাব্য মহাভারত কৃষ্ণ দ্বৈপায়ন (মহর্ষি বেদব্যাস) দ্বারা রচিত। এটিতে এক লক্ষ শ্লোক এবং দুই লক্ষ স্বতন্ত্র পংক্তি রয়েছে।"
  },
  {
    "question": "নিম্নোক্ত কোন ঐতিহাসিক গ্রন্থটি পঞ্চমবেদ নামে পরিচিত?",
    "options": [
      "(a) শিবপুরাণ",
      "(b) রামায়ণ",
      "(c) ভগবত গীতা",
      "(d) মহাভারত"
    ],
    "answer": "(d)",
    "explanation": "মহাভারত রচনা করেন কৃষ্ণদ্বৈপায়ন বেদব্যাস; সংস্কৃত ভাষায়।"
  },
  {
    "question": "মৃচ্ছকটিকম-এর রচয়িতা কে?",
    "options": [
      "(a) শ্রীহর্ষ",
      "(b) কালিদাস",
      "(c) চাণক্য",
      "(d) শূদ্রক"
    ],
    "answer": "(d)",
    "explanation": "শূদ্রক রচিত মৃচ্ছকটিকম একটি প্রাচীন সংস্কৃত গ্রন্থ যা থেকে আমরা গুপ্ত যুগের সাংস্কৃতিক দিক সম্পর্কে ধারণা পাই।"
  },
  {
    "question": "আর্যভট্টের লেখা 'আর্যভটিয়া' (Aryabhatiya) বইটি কোন ভাষায় রচনা করেন?",
    "options": [
      "(a) তেলেগু",
      "(b) তামিল",
      "(c) হিন্দু",
      "(d) সংস্কৃত"
    ],
    "answer": "(d)",
    "explanation": "499 খ্রিঃ আর্যভট্ট 'আর্যভটিয়া' নামে একটি জ্যোতির্বিদ্যা শাস্ত্রের বই লেখেন। তিনি সূর্যের সাপেক্ষে পৃথিবী নিজের অক্ষের চারদিকে ঘোরে সেই সম্পর্কে ধারণা প্রদান করেন।"
  },
  {
    "question": "প্রাচীন সংস্কৃত ব্যাকরণ গ্রন্থ অষ্টাধ্যায়ী এর লেখক কে?",
    "options": [
      "(a) সুশ্রুত",
      "(b) জয়দেব",
      "(c) পাণিনি",
      "(d) সুরদাস"
    ],
    "answer": "(c)",
    "explanation": "অষ্টাধ্যায়ী হল একটি প্রাচীন সাংস্কৃতিক গ্রন্থ যা খ্রীঃ পূর্ব ষষ্ঠ থেকে সপ্তম শতাব্দীর মধ্যে রচিত হয়। গ্রন্থটিতে 4000টি সূত্র রয়েছে। (ধ্বনিতত্ত্ব এবং ব্যাকরণ বিজ্ঞান যা বৈদিক ধর্মের সময় বিকশিত হয়েছে)।"
  },
  {
    "question": "পাণিনি হলেন একজন বিখ্যাত সংস্কৃত ______।",
    "options": [
      "(a) কবি",
      "(b) ঔপন্যাসিক",
      "(c) ব্যাকরণবিদ",
      "(d) লেখক"
    ],
    "answer": "(c)",
    "explanation": "ষষ্ঠ-সপ্তম শতাব্দীতে পাণিনির উত্থান ঘটে। তিনি ছিলেন একজন পন্ডিত যিনি যুক্তিবিদ, ব্যাকরণবিদ, এবং ভাষাতত্ত্ববিদ। তার রচিত সংস্কৃত গ্রন্থ অষ্টাধ্যয়ী সংস্কৃত ব্যাকরণের সম্পদ।"
  },
  {
    "question": "সুশ্রুত সংহিতার মূল বিষয় বস্তু কী ছিল?",
    "options": [
      "(a) জ্যোতিষশাস্ত্র",
      "(b) চিকিৎসা ও অস্ত্রোপাচার",
      "(c) গণিতশাস্ত্র",
      "(d) পুরানশাস্ত্র"
    ],
    "answer": "(b)",
    "explanation": "সুশ্রুত সংহিতা মূলত চিকিৎসা ও অস্ত্রোপাচার সংক্রান্ত গ্রন্থ। সুশ্রুতকে ভারতীয় অস্ত্রোপচারের জনক বলা হয়। তিনি গুপ্তযুগের একজন অন্যতম শ্রেষ্ঠ চিকিৎসক।"
  },
  {
    "question": "সুশ্রুত পরিচিত ছিলেন হিসাবে।",
    "options": [
      "(a) ভারতীয় ঔষধের জনক",
      "(b) ভারতীয় অস্ত্রোপচারের জনক",
      "(c) ভারতীয় বাস্তুশাস্ত্রের জনক",
      "(d) ভারতীয় প্রত্নোদ্ভিদবিদ্যা জনক"
    ],
    "answer": "(b)",
    "explanation": ""
  },
  {
    "question": "মহাভারতের প্রকৃত নাম হল ______।",
    "options": [
      "(a) ভূগুসংহিতা",
      "(b) সুশ্রুত সংহিতা",
      "(c) জয় সংহিতা",
      "(d) শিব সংহিতা"
    ],
    "answer": "(c)",
    "explanation": "মহর্ষি বেদব্যাস মহাভারত রচনা করেন যার আসল নাম জয় সংহিতা।"
  },
  {
    "question": "কে 'দশকুমার চরিত' বা 'দশ রাজপুত্রের গল্প' লেখেন?",
    "options": [
      "(a) রাম বিহারী দ্বিবেদী",
      "(b) দণ্ডীন",
      "(c) ভর্তৃহরি",
      "(d) বুদ্ধাস্বামীন"
    ],
    "answer": "(b)",
    "explanation": "'দশকুমার চরিত' একটি সংস্কৃত গদ্য, এতে দশ রাজকুমারের কাহিনী বর্ণিত রয়েছে।"
  },
  {
    "question": "গীতগোবিন্দ কে লেখেন?",
    "options": [
      "(a) জয়দেব",
      "(b) মীরাবাঈ",
      "(c) রাসখান",
      "(d) সুরদাস"
    ],
    "answer": "(a)",
    "explanation": "বারো শতকে জয়দেব গীতগোবিন্দ রচনা করেন। জয়দেব ছিলেন লক্ষণ সেনের শ্রেষ্ঠ সভাকবি। এটিতে রাধা ও কৃষ্ণের প্রেম কাহিনী বর্ণিত রয়েছে।"
  },
  {
    "question": "'বুদ্ধচরিত' মহাকাব্যটি কে রচনা করেন?",
    "options": [
      "(a) গৌতমবুদ্ধ",
      "(b) নাগার্জুন",
      "(c) হেমচন্দ্র",
      "(d) অশ্বঘোষ"
    ],
    "answer": "(d)",
    "explanation": "বুদ্ধচরিত একটি সংস্কৃত পদ্য যা গৌতম বুদ্ধের জীবনের ওপর ভিত্তি করে বৌদ্ধ দার্শনিক ও লেখক অশ্বঘোষ দ্বারা রচিত। এটিতে বুদ্ধের জীবন থেকে মৃত্যু 28টি অধ্যায়ে বর্ণিত হয়েছে।"
  },
  {
    "question": "কালিদাস রচিত 'অভিজ্ঞানশকুন্তলম্' নাট্যে শকুন্তলার পুত্রের নাম কি ছিল?",
    "options": [
      "(a) ভরত",
      "(b) বিক্রম",
      "(c) প্রদ্দুমন",
      "(d) অনিরুদ্ধ"
    ],
    "answer": "(a)",
    "explanation": ""
  },
  {
    "question": "ইন্ডিকা গ্রন্থের রচয়িতা কে?",
    "options": [
      "(a) চাণক্য",
      "(b) মেগাস্থিনিস",
      "(c) সেলুকাস",
      "(d) দাড়াউস"
    ],
    "answer": "(b)",
    "explanation": "গ্রিক দূত তথা কূটনীতিবিদ মেগাস্থিনিস ছিলেন সেলুকাসের দূত। তিনি চন্দ্রগুপ্ত মৌর্যর দরবারে এসেছিলেন।"
  },
  {
    "question": "তামিল কবি কাম্বোন নিম্নোক্ত কোন গ্রন্থটি তামিলে অনুবাদ করেন?",
    "options": [
      "(a) মহাভারত",
      "(b) রামায়ণ",
      "(c) ঋগ্বেদ",
      "(d) ভগবত গীতা"
    ],
    "answer": "(b)",
    "explanation": "তামিল কবি কাম্বোন রামায়ণের তামিল অনুবাদ করেন যেটি কাম্বারামায়ণ নামে পরিচিত।"
  },
  {
    "question": "সঙ্গম যুগের মহাকাব্য শিল্পাদিকরম ও মনিমেখালাই কোন ভাষায় রচিত?",
    "options": [
      "(a) পালি",
      "(b) পৈশাচী",
      "(c) সংস্কৃত",
      "(d) তামিল"
    ],
    "answer": "(d)",
    "explanation": "শিল্পাদিকরম ও মনিমেখালাই সঙ্গম যুগের দুটি মহাকাব্য যা তামিল ভাষায় রচিত। শিল্পাদিকরমকে তামিল সাহিত্যের প্রথম মহাকাব্য হিসাবে গণ্য করা হয়।"
  },
  {
    "question": "ন্যায় দর্শনের 'ন্যায় সুত্ত' টি কার দ্বারা রচিত?",
    "options": [
      "(a) অক্ষপদ গৌতম",
      "(b) চাণক্য",
      "(c) কালিদাস",
      "(d) রবি কীর্তি"
    ],
    "answer": "(a)",
    "explanation": "দর্শন শাস্ত্রের ছটি অংশ রচনা করেন ছয় জন দার্শনিক। ন্যায় -গৌতম, বৈশেষিক- ঋষি কনাদ, সাংখ্য কপিল (প্রাচীনতম), পূর্বমীমাংসা - জামিনী/জৈমিনী, যোগ- পতঞ্জলি, উত্তর মীমাংসা বেদ ব্যাস।"
  },
  {
    "question": "চরক সংহিতা চিকিৎসাশাস্ত্রের কোন শাখা সম্পর্কিত?",
    "options": [
      "(a) এলোপ্যাথি",
      "(b) আয়ুর্বেদ",
      "(c) হোমিওপ্যাথি",
      "(d) ইউনানী"
    ],
    "answer": "(b)",
    "explanation": "চরক সংহিতা আয়ুর্বেদ সম্বন্ধীয়, এটি সংস্কৃত ভাষায় রচিত।"
  },
  {
    "question": "রাজতরঙ্গনী থেকে আমরা কোন রাজ্যের সম্পর্কে জানতে পারি?",
    "options": [
      "(a) রাষ্ট্রকূট",
      "(b) কাশ্মীর",
      "(c) বিহার",
      "(d) ওড়িশা"
    ],
    "answer": "(b)",
    "explanation": "কলহন রচিত রাজতরঙ্গিনী থেকে আমরা কাশ্মীরের ধারাবাহিক ইতিহাস জানতে পারি। রাজতরঙ্গিনী অনুযায়ী কাশ্মীর শহরটির প্রতিষ্ঠা করেন সম্রাট অশোক।"
  },
  {
    "question": "নিম্নোক্ত কোন গ্রন্থটি কলহন রচনা করেন?",
    "options": [
      "(a) হর্ষচরিত",
      "(b) রাজতরঙ্গিনী",
      "(c) মুদ্রারাক্ষস",
      "(d) বিক্রম উর্বষী"
    ],
    "answer": "(b)",
    "explanation": ""
  },
  {
    "question": "'মনুস্মৃতি' গ্রন্থটি কোন ভাষায় রচিত?",
    "options": [
      "(a) তামিল",
      "(b) হিন্দি",
      "(c) সংস্কৃত",
      "(d) বাংলা"
    ],
    "answer": "(c)",
    "explanation": "মনুস্মৃতি হলো একটি স্মৃতি গ্রন্থ। শাস্ত্রে অনেকগুলো মনুর উল্লেখ পাওয়া যায়। এটি মোট 12টি প্রকরণে বিভক্ত এবং 2683 টি শ্লোক বর্তমান।"
  },
  {
    "question": "নিম্নোক্ত কোনটি সংস্কৃত ভাষায় রচিত নয়?",
    "options": [
      "(a) তীরুকুরাল",
      "(b) রত্নাবলী",
      "(c) রাজতরangini",
      "(d) মেঘদুত"
    ],
    "answer": "(a)",
    "explanation": "বই: তীরুক্কুরাল, লেখক: তীরুভাল্লুভাব, ভাষা: তামিল। রত্নাবলী: হর্ষবর্ধন, সংস্কৃত। রাজতরঙ্গিনী: কলহন, সংস্কৃত। মেঘদূত: কালিদাস, সংস্কৃত।"
  },
  {
    "question": "নিম্নোক্ত কে একজন ভারতীয় গণিতজ্ঞ ছিলেন?",
    "options": [
      "(a) ভরত",
      "(b) বান",
      "(c) ভাস্কর",
      "(d) ভবভূতি"
    ],
    "answer": "(c)",
    "explanation": "সপ্তম শতকের একজন অন্যতম গণিতজ্ঞ ছিলেন ভাস্কর।"
  },
  {
    "question": "নীচের কোনটি একটি মধ্যযুগীয় গ্রন্থ যেটি গণিত সম্পর্কিত?",
    "options": [
      "(a) বাস্তুশাস্ত্র",
      "(b) লীলাবতী",
      "(c) পঞ্চদশী",
      "(d) রূপমতী"
    ],
    "answer": "(b)",
    "explanation": "লীলাবতী একটি মধ্যযুগীয় গণিত শাস্ত্রের গ্রন্থ, এটি দ্বিতীয় ভাস্করাচার্য দ্বারা লিখিত।"
  },
  {
    "question": "প্লিনি তাঁর বিখ্যাত গ্রন্থ 'Natural History' কোন ভাষায় লেখেন?",
    "options": [
      "(a) গ্রীক",
      "(b) ল্যাটিন",
      "(c) ফ্রেঞ্চ",
      "(d) ইংরেজী"
    ],
    "answer": "(b)",
    "explanation": ""
  },
  {
    "question": "মনুস্মৃতি ইংরেজি ভাষায় কে অনুবাদ করেন?",
    "options": [
      "(a) এইচ জী ওয়েলস",
      "(b) জর্জ বুলার",
      "(c) রাল্ফ গ্রিফ",
      "(d) এইচ এইচ উইলসন"
    ],
    "answer": "(b)",
    "explanation": "মনুস্মৃতি সর্ব প্রথম উইনিয়াম জোন্স (1794) ইংরেজিতে অনুবাদ করে। পরে বার্নেল (1884), বুলার (1886) এবং ডোঙ্গিগর (1991) সালে ইংরেজিতে অনুবাদ করে।"
  }
];

const questionNumberElement = document.querySelector('.question-number');
const questionTextElement = document.querySelector('.question-text');
const optionsAreaElement = document.querySelector('.options-area');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const submitButton = document.querySelector('.submit-button');
const clearResponseButton = document.querySelector('.clear-response-button');
const markForReviewButton = document.querySelector('.mark-for-review-button'); // New element
const resultAreaElement = document.querySelector('.result-area');
const scoreElement = document.getElementById('score');
const correctCountElement = document.getElementById('correct-count');
const wrongCountElement = document.getElementById('wrong-count');
const unattemptedCountElement = document.getElementById('unattempted-count');
const timeElement = document.getElementById('time');
const reviewContainer = document.getElementById('review-questions');
const questionGridContainer = document.querySelector('.question-grid');

let currentQuestionIndex = 0;
let userAnswers = new Array(questions.length).fill(null);
let markedForReview = new Array(questions.length).fill(false); // New array for review status
let timeLeft = 35 * 60; // 35 minutes in seconds
let timerInterval;
let totalScore = 0;

// Utility function to shuffle an array (Fisher-Yates)
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}

function updateTimer() {
  timeElement.textContent = formatTime(timeLeft);
  if (timeLeft <= 0) {
    clearInterval(timerInterval);
    showResult();
  } else {
    timeLeft--;
  }
}

function startTimer() {
  timerInterval = setInterval(updateTimer, 1000);
}

function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionNumberElement.textContent = `প্রশ্ন ${currentQuestionIndex + 1}`;
  questionTextElement.textContent = currentQuestion.question;

  // Shuffle options
  const shuffledOptions = [...currentQuestion.options];
  shuffleArray(shuffledOptions);


  optionsAreaElement.innerHTML = '';
  shuffledOptions.forEach(option => {
    const button = document.createElement('button');
    button.classList.add('option');
    button.textContent = option;
    button.addEventListener('click', (event) => selectAnswer(event, option));
    optionsAreaElement.appendChild(button);

    if (userAnswers[currentQuestionIndex] === option) {
      button.classList.add('selected');
    }
  });

  prevButton.disabled = currentQuestionIndex === 0;
  nextButton.disabled = currentQuestionIndex === questions.length - 1;

  // Update mark for review button state
  if (markedForReview[currentQuestionIndex]) {
    markForReviewButton.classList.add('marked');
    markForReviewButton.textContent = 'Unmark Review';
  } else {
    markForReviewButton.classList.remove('marked');
    markForReviewButton.textContent = 'Mark for Review';
  }

  updateReviewButtons();
}

function selectAnswer(event, answer) {
  userAnswers[currentQuestionIndex] = answer;
  // Marked for review should remain even after answering.
  // This line is intentionally commented out to allow for "answered and marked for review" state.
  // markedForReview[currentQuestionIndex] = false;
  const options = document.querySelectorAll('.option');
  options.forEach(option => option.classList.remove('selected'));
  event.target.classList.add('selected');
  updateReviewButtons(); // শুধু রিভিউ বাটনগুলো আপডেট করুন
}

function nextQuestion() {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    loadQuestion();
  }
}

function prevQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    loadQuestion();
  }
}

function clearResponse() {
    userAnswers[currentQuestionIndex] = null;
    markedForReview[currentQuestionIndex] = false; // Also clear review mark
    loadQuestion();
}

function toggleMarkForReview() {
    markedForReview[currentQuestionIndex] = !markedForReview[currentQuestionIndex];
    if (currentQuestionIndex < questions.length - 1) { // শেষ প্রশ্ন না হলে পরের প্রশ্নে যাও
        nextQuestion();
    } else { // শেষ প্রশ্ন হলে শুধু বর্তমান প্রশ্নটি রিফ্রেশ করো (মার্ক স্টেটাস দেখানোর জন্য)
        loadQuestion();
    }
}

function submitTest() {
  clearInterval(timerInterval);
  showResult();
}

function showResult() {
  document.querySelector('.header').style.display = 'none';
  document.querySelector('.question-area').style.display = 'none';
  document.querySelector('.options-area').style.display = 'none';
  document.querySelector('.navigation-area').style.display = 'none';
  document.querySelector('.review-area').style.display = 'none';
  resultAreaElement.style.display = 'block';

  let correctCount = 0;
  let wrongCount = 0;
  let unattemptedCount = 0;
  totalScore = 0;

  questions.forEach((question, index) => {
    const correctAnswerText = question.options.find(opt => opt.startsWith(question.answer));

    if (userAnswers[index] === correctAnswerText) {
      correctCount++;
      totalScore++;
    } else if (userAnswers[index] !== null) {
      wrongCount++;
      totalScore -= 0.33;
    } else {
        unattemptedCount++;
    }
  });

  totalScore = Math.max(0, totalScore);

  scoreElement.textContent = totalScore.toFixed(2);
  correctCountElement.textContent = correctCount;
  wrongCountElement.textContent = wrongCount;
  unattemptedCountElement.textContent = unattemptedCount;

  displayReview();
}

function updateReviewButtons() {
    const currentReviewButtons = questionGridContainer.querySelectorAll('.grid-button');

    Array.from(currentReviewButtons).forEach((button, index) => {
        // Remove all previous status classes
        button.classList.remove('answered', 'unanswered', 'current-question', 'marked-for-review');

        // Set 'current-question' class
        if (index === currentQuestionIndex) {
            button.classList.add('current-question');
        }

        // Set status classes based on user's action
        if (userAnswers[index] !== null) { // If answered
            button.classList.add('answered');
            if (markedForReview[index]) {
                button.classList.add('marked-for-review'); // If answered AND marked
            }
        } else if (markedForReview[index]) { // If only marked for review (not answered)
            button.classList.add('marked-for-review');
        } else { // If neither answered nor marked for review
            button.classList.add('unanswered');
        }
    });
}


function displayReview() {
  reviewContainer.style.display = 'flex';
  reviewContainer.style.flexDirection = 'column';
  reviewContainer.style.alignItems = 'flex-start';
  reviewContainer.style.gap = '20px';
  reviewContainer.innerHTML = '';

  questions.forEach((question, index) => {
    const div = document.createElement('div');
    div.classList.add('review-item');
    div.style.width = '100%';
    let userAnswerText = userAnswers[index] || 'No Answer';
    let correctAnswerText = question.options.find(opt => opt.startsWith(question.answer)) || 'N/A';

    let statusText = '';
    let userAnswerClass = '';

    // Determine the status and apply appropriate classes/text for the review summary
    if (userAnswers[index] === correctAnswerText) {
        userAnswerClass = 'correct-text';
        div.classList.add('correct-answer-review');
        statusText = ' (Correct Answer)';
    } else if (userAnswers[index] !== null) {
        userAnswerClass = 'wrong-text';
        div.classList.add('wrong-answer-review');
        statusText = ' (Wrong Answer)';
    } else if (markedForReview[index]) {
        // This case is for questions marked for review but not answered
        div.classList.add('marked-for-review-review');
        statusText = ' (Marked for Review - Unanswered)'; // Clarify in summary
    } else {
        div.classList.add('unanswered-review');
        statusText = ' (Unanswered)';
    }

    // If answered and marked for review, append the star icon in the summary
    if (userAnswers[index] !== null && markedForReview[index]) {
        statusText += ' <span style="color: red;">*</span>'; // Add red star to status text
    }


    div.innerHTML = `
      <p class="review-question"><b>প্রশ্ন ${index + 1}: ${question.question}</b><span class="status-text">${statusText}</span></p>
      <p class="review-user-answer">Your Answer: <span class="${userAnswerClass}">${userAnswerText}</span></p>
      <p class="review-correct-answer">Correct Answer: <span class="correct-text">${correctAnswerText}</span></p>
      ${question.explanation ? `<p class="review-explanation">Explanation: ${question.explanation}</p>` : ''}
    `;

    reviewContainer.appendChild(div);
  });
}

// Initial calls
document.addEventListener('DOMContentLoaded', () => {
    for (let i = 0; i < questions.length; i++) {
        const button = document.createElement('button');
        button.classList.add('grid-button');
        button.textContent = i + 1;
        button.addEventListener('click', () => {
            currentQuestionIndex = i;
            loadQuestion();
        });
        questionGridContainer.appendChild(button);
    }
    
    loadQuestion();
    startTimer();

    nextButton.addEventListener('click', nextQuestion);
    prevButton.addEventListener('click', prevQuestion);
    clearResponseButton.addEventListener('click', clearResponse);
    markForReviewButton.addEventListener('click', toggleMarkForReview); // New event listener
    submitButton.addEventListener('click', submitTest);

    updateReviewButtons();
});