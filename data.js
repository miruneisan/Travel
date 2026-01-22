// 診断データ構造
// 新しい地域編を追加する場合は、このオブジェクトに新しいキーを追加してください

const quizData = {
    "世界編": {
        questions: [
            {
                question: "旅行で最も重視することは？",
                options: [
                    { text: "歴史と文化を感じたい", scores: { paris: 2, london: 2, rome: 3, istanbul: 2, barcelona: 1 } },
                    { text: "最先端の都市体験", scores: { dubai: 3, tokyo: 3, newyork: 2, singapore: 3 } },
                    { text: "リラックスとエンターテイメント", scores: { bangkok: 2, dubai: 1, barcelona: 2, singapore: 1 } }
                ]
            },
            {
                question: "好きな気候は？",
                options: [
                    { text: "温暖で過ごしやすい", scores: { paris: 2, barcelona: 3, rome: 2, singapore: 1 } },
                    { text: "四季がはっきりしている", scores: { tokyo: 3, newyork: 2, london: 2, paris: 1 } },
                    { text: "暑くても大丈夫", scores: { dubai: 3, bangkok: 3, singapore: 2, istanbul: 1 } }
                ]
            },
            {
                question: "食事で楽しみたいのは？",
                options: [
                    { text: "本格的な伝統料理", scores: { paris: 3, rome: 3, bangkok: 2, istanbul: 2 } },
                    { text: "多国籍で多様な料理", scores: { newyork: 3, singapore: 3, london: 2, dubai: 2 } },
                    { text: "洗練されたグルメ体験", scores: { tokyo: 3, paris: 2, barcelona: 2 } }
                ]
            },
            {
                question: "観光スタイルは？",
                options: [
                    { text: "美術館や博物館巡り", scores: { paris: 3, london: 3, newyork: 2, rome: 2 } },
                    { text: "街歩きとショッピング", scores: { tokyo: 2, dubai: 3, singapore: 2, barcelona: 2 } },
                    { text: "寺院や遺跡探訪", scores: { rome: 3, istanbul: 3, bangkok: 3, barcelona: 1 } }
                ]
            },
            {
                question: "予算のイメージは？",
                options: [
                    { text: "贅沢に楽しみたい", scores: { dubai: 3, paris: 2, tokyo: 2, singapore: 2 } },
                    { text: "コスパ重視", scores: { bangkok: 3, istanbul: 2, barcelona: 2 } },
                    { text: "標準的な予算", scores: { london: 2, newyork: 2, rome: 2, tokyo: 1 } }
                ]
            },
            {
                question: "旅の雰囲気は？",
                options: [
                    { text: "ロマンチックな雰囲気", scores: { paris: 3, barcelona: 3, rome: 2, istanbul: 1 } },
                    { text: "エネルギッシュで活気がある", scores: { newyork: 3, tokyo: 2, bangkok: 2, dubai: 2 } },
                    { text: "エキゾチックで神秘的", scores: { istanbul: 3, dubai: 2, bangkok: 2, singapore: 1 } }
                ]
            },
            {
                question: "言語の不安は？",
                options: [
                    { text: "日本語が通じると安心", scores: { tokyo: 3 } },
                    { text: "英語が通じれば大丈夫", scores: { london: 3, newyork: 3, singapore: 3, dubai: 2 } },
                    { text: "言葉が通じなくても冒険したい", scores: { paris: 2, rome: 2, barcelona: 2, istanbul: 2, bangkok: 2 } }
                ]
            }
        ],
        destinations: {
            paris: {
                name: "パリ",
                country: "フランス",
                image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80",
                description: "芸術と文化の都パリは、あなたにぴったりの旅行先です。エッフェル塔、ルーヴル美術館、シャンゼリゼ通りなど、世界的に有名な観光スポットが満載。美食の街としても知られ、本格的なフランス料理やカフェ文化を楽しめます。ロマンチックな雰囲気と洗練された街並みが、特別な旅の思い出を作ってくれるでしょう。",
                links: [
                    { text: "パリ観光局公式サイト", url: "https://www.parisinfo.com/" },
                    { text: "ルーヴル美術館", url: "https://www.louvre.fr/" },
                    { text: "エッフェル塔公式サイト", url: "https://www.toureiffel.paris/" }
                ]
            },
            dubai: {
                name: "ドバイ",
                country: "アラブ首長国連邦",
                image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
                description: "未来都市ドバイは、あなたの冒険心を満たす最高の目的地です。世界一高いビル「ブルジュ・ハリファ」、豪華なショッピングモール、砂漠のサファリなど、ここでしか体験できないアトラクションが盛りだくさん。最先端の建築と伝統的なアラブ文化が融合した、エキゾチックで贅沢な旅を楽しめます。",
                links: [
                    { text: "ドバイ観光局", url: "https://www.visitdubai.com/" },
                    { text: "ブルジュ・ハリファ", url: "https://www.burjkhalifa.ae/" },
                    { text: "ドバイモール", url: "https://thedubaimall.com/" }
                ]
            },
            london: {
                name: "ロンドン",
                country: "イギリス",
                image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80",
                description: "伝統と革新が共存するロンドンは、あなたにぴったりの都市です。大英博物館、バッキンガム宮殿、ビッグベンなど、歴史的な名所が数多くあります。多文化が融合した国際都市で、世界中の料理やエンターテイメントを楽しめます。英語圏なので、コミュニケーションも比較的スムーズです。",
                links: [
                    { text: "ロンドン観光局", url: "https://www.visitlondon.com/" },
                    { text: "大英博物館", url: "https://www.britishmuseum.org/" },
                    { text: "ロンドン交通局", url: "https://tfl.gov.uk/" }
                ]
            },
            bangkok: {
                name: "バンコク",
                country: "タイ",
                image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800&q=80",
                description: "エキゾチックで活気あふれるバンコクは、あなたの旅を刺激的なものにしてくれます。黄金に輝く寺院、賑やかな市場、本格的なタイ料理、そして親切な人々があなたを迎えてくれます。コストパフォーマンスも良く、マッサージやスパでリラックスしたり、ナイトマーケットでショッピングを楽しんだりできます。",
                links: [
                    { text: "タイ国政府観光庁", url: "https://www.tourismthailand.org/" },
                    { text: "ワット・プラケオ（王宮）", url: "https://www.royalgrandpalace.th/" },
                    { text: "バンコク観光情報", url: "https://www.bangkok.com/" }
                ]
            },
            tokyo: {
                name: "東京",
                country: "日本",
                image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80",
                description: "伝統と最先端が融合する東京は、あなたに最適な旅行先です。浅草の寺院から渋谷のスクランブル交差点まで、多様な魅力が詰まっています。世界最高レベルのグルメ、清潔で安全な環境、そして効率的な交通システムが、快適な旅を約束します。四季折々の美しさも楽しめます。",
                links: [
                    { text: "東京観光公式サイト GO TOKYO", url: "https://www.gotokyo.org/" },
                    { text: "東京メトロ", url: "https://www.tokyometro.jp/" },
                    { text: "浅草寺", url: "https://www.senso-ji.jp/" }
                ]
            },
            newyork: {
                name: "ニューヨーク",
                country: "アメリカ合衆国",
                image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80",
                description: "眠らない街ニューヨークは、あなたのエネルギーにぴったりの都市です。自由の女神、タイムズスクエア、セントラルパーク、ブロードウェイなど、世界的に有名なスポットが満載。多様な文化が交差する国際都市で、世界中の料理やアート、エンターテイメントを楽しめます。常に何かが起こっている刺激的な街です。",
                links: [
                    { text: "NYC観光局", url: "https://www.nycgo.com/" },
                    { text: "メトロポリタン美術館", url: "https://www.metmuseum.org/" },
                    { text: "ブロードウェイ公式サイト", url: "https://www.broadway.com/" }
                ]
            },
            rome: {
                name: "ローマ",
                country: "イタリア",
                image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=80",
                description: "永遠の都ローマは、歴史好きなあなたにぴったりの旅行先です。コロッセオ、トレビの泉、バチカン市国など、2000年以上の歴史を持つ遺跡や建築物が街中に点在しています。本場のイタリア料理やジェラートも絶品。古代ローマの栄華を感じながら、ロマンチックな街歩きを楽しめます。",
                links: [
                    { text: "ローマ観光局", url: "https://www.turismoroma.it/" },
                    { text: "コロッセオ公式サイト", url: "https://www.colosseo.it/" },
                    { text: "バチカン美術館", url: "https://www.museivaticani.va/" }
                ]
            },
            singapore: {
                name: "シンガポール",
                country: "シンガポール",
                image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&q=80",
                description: "近未来的なシンガポールは、効率的で快適な旅を求めるあなたに最適です。マリーナベイサンズ、ガーデンズ・バイ・ザ・ベイなど、革新的な建築が魅力。多民族国家ならではの多様な料理文化も楽しめます。清潔で安全、英語も通じるため、初めての海外旅行にもおすすめです。",
                links: [
                    { text: "シンガポール政府観光局", url: "https://www.visitsingapore.com/" },
                    { text: "マリーナベイサンズ", url: "https://www.marinabaysands.com/" },
                    { text: "ガーデンズ・バイ・ザ・ベイ", url: "https://www.gardensbythebay.com.sg/" }
                ]
            },
            istanbul: {
                name: "イスタンブール",
                country: "トルコ",
                image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&q=80",
                description: "東洋と西洋が交差するイスタンブールは、エキゾチックな体験を求めるあなたにぴったりです。ブルーモスク、アヤソフィア、グランドバザールなど、歴史的な建造物と活気ある市場が魅力。トルコ料理も絶品で、ボスポラス海峡の美しい景色も楽しめます。神秘的で魅力的な文化に触れられます。",
                links: [
                    { text: "イスタンブール観光局", url: "https://www.istanbul.com/" },
                    { text: "アヤソフィア", url: "https://ayasofyamuzesi.gov.tr/" },
                    { text: "トプカプ宮殿", url: "https://www.topkapisarayi.gov.tr/" }
                ]
            },
            barcelona: {
                name: "バルセロナ",
                country: "スペイン",
                image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&q=80",
                description: "芸術と情熱の街バルセロナは、あなたにぴったりの旅行先です。ガウディの建築作品、美しい地中海のビーチ、活気あるランブラス通りなど、見どころ満載。本場のタパスやパエリアも楽しめます。温暖な気候とフレンドリーな人々が、リラックスした休暇を約束してくれます。",
                links: [
                    { text: "バルセロナ観光局", url: "https://www.barcelonaturisme.com/" },
                    { text: "サグラダ・ファミリア", url: "https://sagradafamilia.org/" },
                    { text: "グエル公園", url: "https://www.parkguell.cat/" }
                ]
            }
        }
    },
    
    "東南アジア編": {
        questions: [
            {
                question: "旅行で最も重視することは？",
                options: [
                    { text: "ビーチリゾートでリラックス", scores: { bali: 3, cebu: 3, phuket: 2 } },
                    { text: "都市観光とショッピング", scores: { bangkok: 2, singapore: 3, kualalumpur: 2, jakarta: 1 } },
                    { text: "文化と歴史を体験", scores: { hanoi: 3, phnompenh: 3, bangkok: 2, hochiminh: 1 } }
                ]
            },
            {
                question: "予算のイメージは？",
                options: [
                    { text: "できるだけ安く抑えたい", scores: { phnompenh: 3, hanoi: 2, manila: 2, hochiminh: 2 } },
                    { text: "標準的な予算", scores: { bangkok: 2, kualalumpur: 2, jakarta: 2, cebu: 1 } },
                    { text: "快適さ重視で予算は気にしない", scores: { singapore: 3, bali: 2, bangkok: 1 } }
                ]
            },
            {
                question: "食事で楽しみたいのは？",
                options: [
                    { text: "屋台やローカルフード", scores: { bangkok: 3, hanoi: 3, hochiminh: 2, phnompenh: 2 } },
                    { text: "多国籍で洗練された料理", scores: { singapore: 3, kualalumpur: 2, jakarta: 1 } },
                    { text: "シーフードとトロピカル料理", scores: { bali: 3, cebu: 3, manila: 2 } }
                ]
            },
            {
                question: "滞在スタイルは？",
                options: [
                    { text: "ビーチやプールでのんびり", scores: { bali: 3, cebu: 3, phuket: 2 } },
                    { text: "街歩きと観光スポット巡り", scores: { bangkok: 3, singapore: 2, hanoi: 2, hochiminh: 2 } },
                    { text: "遺跡や寺院を訪れたい", scores: { phnompenh: 3, hanoi: 2, bangkok: 1 } }
                ]
            },
            {
                question: "求める雰囲気は？",
                options: [
                    { text: "清潔で整備された環境", scores: { singapore: 3, kualalumpur: 2, bangkok: 1 } },
                    { text: "活気があってエネルギッシュ", scores: { bangkok: 3, hochiminh: 3, manila: 2, jakarta: 2 } },
                    { text: "のどかでゆったりした雰囲気", scores: { bali: 3, cebu: 2, phnompenh: 2, hanoi: 1 } }
                ]
            },
            {
                question: "アクティビティの好みは？",
                options: [
                    { text: "マリンスポーツやダイビング", scores: { cebu: 3, bali: 2, manila: 1 } },
                    { text: "ショッピングとナイトライフ", scores: { bangkok: 3, singapore: 2, kualalumpur: 2, hochiminh: 1 } },
                    { text: "自然散策や文化体験", scores: { bali: 2, hanoi: 3, phnompenh: 2 } }
                ]
            },
            {
                question: "言語やコミュニケーションは？",
                options: [
                    { text: "英語が広く通じると安心", scores: { singapore: 3, manila: 3, cebu: 2, kualalumpur: 1 } },
                    { text: "片言でも現地の言葉を使いたい", scores: { bangkok: 2, hanoi: 2, hochiminh: 2, bali: 1 } },
                    { text: "言葉が通じなくても冒険したい", scores: { phnompenh: 2, jakarta: 2, hanoi: 1 } }
                ]
            }
        ],
        destinations: {
            bangkok: {
                name: "バンコク",
                country: "タイ",
                image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800&q=80",
                description: "東南アジアを代表する大都市バンコクは、あなたにぴったりの旅行先です。黄金に輝く寺院、活気ある市場、本格的なタイ料理、そして充実したナイトライフが魅力。マッサージやスパでリラックスしたり、ショッピングモールで買い物を楽しんだり、屋台で絶品グルメを味わったりと、多彩な楽しみ方ができます。コストパフォーマンスも抜群です。",
                links: [
                    { text: "タイ国政府観光庁", url: "https://www.tourismthailand.org/" },
                    { text: "ワット・プラケオ（王宮）", url: "https://www.royalgrandpalace.th/" },
                    { text: "バンコク観光情報", url: "https://www.bangkok.com/" }
                ]
            },
            singapore: {
                name: "シンガポール",
                country: "シンガポール",
                image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&q=80",
                description: "近未来的で洗練されたシンガポールは、快適な旅を求めるあなたに最適です。マリーナベイサンズ、ガーデンズ・バイ・ザ・ベイなど、革新的な建築が魅力。多民族国家ならではの多様な料理文化も楽しめます。清潔で安全、英語も広く通じるため、初めての東南アジア旅行にもおすすめ。効率的な交通システムで移動も快適です。",
                links: [
                    { text: "シンガポール政府観光局", url: "https://www.visitsingapore.com/" },
                    { text: "マリーナベイサンズ", url: "https://www.marinabaysands.com/" },
                    { text: "ガーデンズ・バイ・ザ・ベイ", url: "https://www.gardensbythebay.com.sg/" }
                ]
            },
            kualalumpur: {
                name: "クアラルンプール",
                country: "マレーシア",
                image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800&q=80",
                description: "多文化が融合するクアラルンプールは、あなたにぴったりの都市です。ペトロナスツインタワーをはじめとする近代的な建築と、伝統的なモスクや寺院が共存しています。マレー、中華、インド料理など多様なグルメが楽しめ、ショッピングモールも充実。比較的リーズナブルな価格で、快適な都市体験ができます。",
                links: [
                    { text: "マレーシア観光局", url: "https://www.tourism.gov.my/" },
                    { text: "ペトロナスツインタワー", url: "https://www.petronastwintowers.com.my/" },
                    { text: "クアラルンプール観光情報", url: "https://www.visitkl.gov.my/" }
                ]
            },
            hochiminh: {
                name: "ホーチミン",
                country: "ベトナム",
                image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800&q=80",
                description: "活気あふれるホーチミンは、エネルギッシュな旅を求めるあなたに最適です。フランス統治時代の美しい建築物、賑やかな市場、そして美味しいベトナム料理が魅力。バイクが行き交う街並みは圧巻で、ローカルな雰囲気を存分に味わえます。物価も安く、マッサージやカフェ巡りも気軽に楽しめます。",
                links: [
                    { text: "ベトナム国家観光局", url: "https://vietnam.travel/" },
                    { text: "統一会堂", url: "https://www.dinhdoclap.gov.vn/" },
                    { text: "ホーチミン観光情報", url: "https://www.saigontourist.net/" }
                ]
            },
            hanoi: {
                name: "ハノイ",
                country: "ベトナム",
                image: "https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=800&q=80",
                description: "歴史と文化が息づくハノイは、あなたにぴったりの旅行先です。旧市街の趣ある街並み、美しい湖、そして1000年以上の歴史を持つ寺院や遺跡が魅力。本場のフォーやバインミーなど、ベトナム料理の真髄を味わえます。ホーチミンよりも落ち着いた雰囲気で、ゆったりと文化体験を楽しめます。",
                links: [
                    { text: "ハノイ観光局", url: "https://www.hanoitourism.gov.vn/" },
                    { text: "ホアンキエム湖周辺情報", url: "https://vietnam.travel/places-to-go/northern-vietnam/hanoi" },
                    { text: "ベトナム国家観光局", url: "https://vietnam.travel/" }
                ]
            },
            bali: {
                name: "バリ",
                country: "インドネシア",
                image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
                description: "神々の島バリは、リラックスと癒しを求めるあなたに最適です。美しいビーチ、緑豊かな棚田、神秘的な寺院が魅力。ヨガやスパ、サーフィンなど、心身ともにリフレッシュできるアクティビティが充実しています。バリニーズマッサージや伝統舞踊など、独特の文化体験も楽しめます。リゾートホテルも充実しています。",
                links: [
                    { text: "バリ観光局", url: "https://www.balitourismboard.org/" },
                    { text: "インドネシア観光省", url: "https://www.indonesia.travel/" },
                    { text: "ウブド観光情報", url: "https://www.ubud.id/" }
                ]
            },
            jakarta: {
                name: "ジャカルタ",
                country: "インドネシア",
                image: "https://images.unsplash.com/photo-1555899434-94d1eb5d0e78?w=800&q=80",
                description: "インドネシアの首都ジャカルタは、ダイナミックな都市体験を求めるあなたにぴったりです。近代的な高層ビルと伝統的な市場が共存する活気ある街。多様なインドネシア料理を楽しめ、ショッピングモールも充実しています。まだ観光地化されていない部分も多く、よりローカルな東南アジアの雰囲気を味わえます。",
                links: [
                    { text: "ジャカルタ観光局", url: "https://jakarta-tourism.go.id/" },
                    { text: "インドネシア観光省", url: "https://www.indonesia.travel/" },
                    { text: "国立博物館", url: "https://www.museumnasional.or.id/" }
                ]
            },
            manila: {
                name: "マニラ",
                country: "フィリピン",
                image: "https://images.unsplash.com/photo-1580559367918-4ee2e9f7a321?w=800&q=80",
                description: "フィリピンの首都マニラは、エネルギッシュで多様な体験を求めるあなたに最適です。スペイン統治時代の歴史的建造物、近代的なショッピングモール、そして活気あるナイトライフが魅力。英語が広く通じるため、コミュニケーションも安心。フィリピン料理やシーフードも絶品で、フレンドリーな人々があなたを迎えてくれます。",
                links: [
                    { text: "フィリピン観光省", url: "https://www.tourism.gov.ph/" },
                    { text: "イントラムロス（旧市街）", url: "https://www.intramuros.gov.ph/" },
                    { text: "マニラ観光情報", url: "https://www.manila.gov.ph/" }
                ]
            },
            cebu: {
                name: "セブ",
                country: "フィリピン",
                image: "https://images.unsplash.com/photo-1621277224630-81d9af65e40e?w=800&q=80",
                description: "ビーチリゾートの楽園セブは、マリンアクティビティを楽しみたいあなたにぴったりです。透明度の高い海でのダイビングやシュノーケリング、アイランドホッピングなど、海を満喫できます。歴史的な観光スポットもあり、ビーチリゾートと観光の両方を楽しめます。英語が通じ、フレンドリーな雰囲気も魅力です。",
                links: [
                    { text: "セブ観光局", url: "https://www.cebu.gov.ph/" },
                    { text: "フィリピン観光省", url: "https://www.tourism.gov.ph/" },
                    { text: "マクタン島リゾート情報", url: "https://www.mactanisland.com/" }
                ]
            },
            phnompenh: {
                name: "プノンペン",
                country: "カンボジア",
                image: "https://images.unsplash.com/photo-1583429602688-28d937b8c93e?w=800&q=80",
                description: "カンボジアの首都プノンペンは、歴史と文化を深く体験したいあなたに最適です。王宮や銀寺など美しい建築物、そして重い歴史を伝える博物館があります。メコン川沿いの風景も美しく、物価も安いため長期滞在にも向いています。アンコールワットへの玄関口としても便利で、カンボジアの魅力を存分に味わえます。",
                links: [
                    { text: "カンボジア観光省", url: "https://www.tourismcambodia.com/" },
                    { text: "王宮とシルバーパゴダ", url: "https://www.tourismcambodia.com/attractions/royal-palace/" },
                    { text: "プノンペン観光情報", url: "https://www.phnompenh.gov.kh/" }
                ]
            }
        }
    },
    
    "ヨーロッパ編": {
        questions: [
            {
                question: "旅行で最も重視することは？",
                options: [
                    { text: "芸術と美術館巡り", scores: { paris: 3, florence: 3, vienna: 2, amsterdam: 2 } },
                    { text: "歴史的建造物と遺跡", scores: { rome: 3, prague: 2, venice: 2, barcelona: 1 } },
                    { text: "街歩きとカフェ文化", scores: { paris: 2, amsterdam: 2, vienna: 2, prague: 2 } }
                ]
            },
            {
                question: "好きな雰囲気は？",
                options: [
                    { text: "ロマンチックで優雅", scores: { paris: 3, venice: 3, florence: 2, vienna: 2 } },
                    { text: "活気があって国際的", scores: { london: 3, barcelona: 2, amsterdam: 2, munich: 1 } },
                    { text: "クラシックで落ち着いた", scores: { prague: 3, vienna: 3, florence: 2, rome: 1 } }
                ]
            },
            {
                question: "食事で楽しみたいのは？",
                options: [
                    { text: "本格的なイタリア料理", scores: { rome: 3, venice: 3, florence: 3 } },
                    { text: "洗練されたフランス料理", scores: { paris: 3, london: 1 } },
                    { text: "多様な国際料理", scores: { london: 3, amsterdam: 2, barcelona: 2, munich: 1 } }
                ]
            },
            {
                question: "観光スタイルは？",
                options: [
                    { text: "美術館やギャラリー中心", scores: { paris: 3, amsterdam: 3, florence: 2, vienna: 2 } },
                    { text: "建築物や教会巡り", scores: { barcelona: 3, prague: 3, rome: 2, venice: 2 } },
                    { text: "街歩きとショッピング", scores: { london: 3, paris: 2, munich: 2, amsterdam: 1 } }
                ]
            },
            {
                question: "予算のイメージは？",
                options: [
                    { text: "できるだけ抑えたい", scores: { prague: 3, barcelona: 2, munich: 1 } },
                    { text: "標準的な予算", scores: { rome: 2, florence: 2, venice: 2, vienna: 2 } },
                    { text: "贅沢に楽しみたい", scores: { paris: 3, london: 2, amsterdam: 2 } }
                ]
            },
            {
                question: "移動手段の好みは？",
                options: [
                    { text: "徒歩で街を散策したい", scores: { venice: 3, florence: 3, prague: 2, amsterdam: 1 } },
                    { text: "地下鉄やバスで効率的に", scores: { london: 3, paris: 2, barcelona: 2, munich: 2 } },
                    { text: "自転車で回りたい", scores: { amsterdam: 3, munich: 2, barcelona: 1 } }
                ]
            },
            {
                question: "求める体験は？",
                options: [
                    { text: "音楽やオペラ鑑賞", scores: { vienna: 3, prague: 2, london: 2, paris: 1 } },
                    { text: "建築家の作品巡り", scores: { barcelona: 3, prague: 2, amsterdam: 2, florence: 1 } },
                    { text: "古代ローマの歴史体験", scores: { rome: 3, venice: 2, florence: 2 } }
                ]
            }
        ],
        destinations: {
            paris: {
                name: "パリ",
                country: "フランス",
                image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80",
                description: "芸術と文化の都パリは、あなたにぴったりの旅行先です。エッフェル塔、ルーヴル美術館、シャンゼリゼ通りなど、世界的に有名な観光スポットが満載。美食の街としても知られ、本格的なフランス料理やカフェ文化を楽しめます。ロマンチックな雰囲気と洗練された街並みが、特別な旅の思い出を作ってくれるでしょう。セーヌ川沿いの散歩も格別です。",
                links: [
                    { text: "パリ観光局公式サイト", url: "https://www.parisinfo.com/" },
                    { text: "ルーヴル美術館", url: "https://www.louvre.fr/" },
                    { text: "エッフェル塔公式サイト", url: "https://www.toureiffel.paris/" }
                ]
            },
            london: {
                name: "ロンドン",
                country: "イギリス",
                image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80",
                description: "伝統と革新が共存するロンドンは、あなたにぴったりの都市です。大英博物館、バッキンガム宮殿、ビッグベンなど、歴史的な名所が数多くあります。多文化が融合した国際都市で、世界中の料理やエンターテイメントを楽しめます。ウエストエンドのミュージカル、アフタヌーンティー、パブ文化など、イギリスならではの体験も充実しています。",
                links: [
                    { text: "ロンドン観光局", url: "https://www.visitlondon.com/" },
                    { text: "大英博物館", url: "https://www.britishmuseum.org/" },
                    { text: "ロンドン交通局", url: "https://tfl.gov.uk/" }
                ]
            },
            rome: {
                name: "ローマ",
                country: "イタリア",
                image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=80",
                description: "永遠の都ローマは、歴史好きなあなたにぴったりの旅行先です。コロッセオ、トレビの泉、バチカン市国など、2000年以上の歴史を持つ遺跡や建築物が街中に点在しています。本場のイタリア料理やジェラートも絶品。古代ローマの栄華を感じながら、ロマンチックな街歩きを楽しめます。まさに街全体が博物館のような魅力があります。",
                links: [
                    { text: "ローマ観光局", url: "https://www.turismoroma.it/" },
                    { text: "コロッセオ公式サイト", url: "https://www.colosseo.it/" },
                    { text: "バチカン美術館", url: "https://www.museivaticani.va/" }
                ]
            },
            barcelona: {
                name: "バルセロナ",
                country: "スペイン",
                image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&q=80",
                description: "芸術と情熱の街バルセロナは、あなたにぴったりの旅行先です。ガウディの建築作品、美しい地中海のビーチ、活気あるランブラス通りなど、見どころ満載。サグラダ・ファミリアやグエル公園など、独創的な建築に圧倒されます。本場のタパスやパエリアも楽しめ、温暖な気候とフレンドリーな人々が、リラックスした休暇を約束してくれます。",
                links: [
                    { text: "バルセロナ観光局", url: "https://www.barcelonaturisme.com/" },
                    { text: "サグラダ・ファミリア", url: "https://sagradafamilia.org/" },
                    { text: "グエル公園", url: "https://www.parkguell.cat/" }
                ]
            },
            amsterdam: {
                name: "アムステルダム",
                country: "オランダ",
                image: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=800&q=80",
                description: "運河の街アムステルダムは、自由で開放的な雰囲気を求めるあなたに最適です。美しい運河沿いの街並み、世界的に有名な美術館、自転車文化が魅力。ゴッホ美術館やアンネ・フランクの家など、文化的な見どころも豊富です。カフェ文化も発達しており、のんびりと街歩きを楽しめます。コンパクトな街なので、徒歩や自転車で回りやすいのも魅力です。",
                links: [
                    { text: "アムステルダム観光局", url: "https://www.iamsterdam.com/" },
                    { text: "ゴッホ美術館", url: "https://www.vangoghmuseum.nl/" },
                    { text: "アンネ・フランクの家", url: "https://www.annefrank.org/" }
                ]
            },
            venice: {
                name: "ベネチア",
                country: "イタリア",
                image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&q=80",
                description: "水の都ベネチアは、ロマンチックな旅を求めるあなたにぴったりです。運河を巡るゴンドラ、サン・マルコ広場、美しい橋の数々が、まるで絵画のような景色を作り出しています。車が走らない独特の街並みは、他では味わえない特別な体験。ベネチアングラスやカーニバルマスクなど、伝統工芸も魅力的です。迷路のような路地を散策するのも楽しみの一つです。",
                links: [
                    { text: "ベネチア観光局", url: "https://www.veneziaunica.it/" },
                    { text: "サン・マルコ寺院", url: "https://www.basilicasanmarco.it/" },
                    { text: "ドゥカーレ宮殿", url: "https://palazzoducale.visitmuve.it/" }
                ]
            },
            prague: {
                name: "プラハ",
                country: "チェコ",
                image: "https://images.unsplash.com/photo-1541849546-216549ae216d?w=800&q=80",
                description: "百塔の街プラハは、おとぎ話のような雰囲気を求めるあなたに最適です。プラハ城、カレル橋、旧市街広場など、中世の面影を残す美しい建築物が魅力。ヨーロッパの中でも比較的物価が安く、コストパフォーマンスに優れています。ビールの本場としても有名で、伝統的なチェコ料理とともに楽しめます。クラシック音楽の演奏会も頻繁に開催されています。",
                links: [
                    { text: "プラハ観光局", url: "https://www.prague.eu/" },
                    { text: "プラハ城", url: "https://www.hrad.cz/" },
                    { text: "チェコ観光局", url: "https://www.visitczechrepublic.com/" }
                ]
            },
            vienna: {
                name: "ウィーン",
                country: "オーストリア",
                image: "https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=800&q=80",
                description: "音楽の都ウィーンは、クラシックな優雅さを求めるあなたにぴったりです。シェーンブルン宮殿、ウィーン国立歌劇場、美術史美術館など、ハプスブルク帝国の栄華を感じられます。モーツァルトやベートーヴェンゆかりの地で、本場のクラシック音楽を楽しめます。カフェ文化も発達しており、ザッハトルテとウィンナーコーヒーは必食です。",
                links: [
                    { text: "ウィーン観光局", url: "https://www.wien.info/" },
                    { text: "シェーンブルン宮殿", url: "https://www.schoenbrunn.at/" },
                    { text: "ウィーン国立歌劇場", url: "https://www.wiener-staatsoper.at/" }
                ]
            },
            florence: {
                name: "フィレンツェ",
                country: "イタリア",
                image: "https://images.unsplash.com/photo-1541960071727-c531398e7494?w=800&q=80",
                description: "ルネサンスの都フィレンツェは、芸術を愛するあなたに最適です。ウフィツィ美術館、ドゥオーモ、ミケランジェロのダビデ像など、世界的な芸術作品が街中に溢れています。コンパクトな街なので徒歩で回りやすく、美しい街並みを散策しながら芸術に触れられます。トスカーナ料理やワインも絶品で、美食の旅も楽しめます。",
                links: [
                    { text: "フィレンツェ観光局", url: "https://www.feelflorence.it/" },
                    { text: "ウフィツィ美術館", url: "https://www.uffizi.it/" },
                    { text: "アカデミア美術館", url: "https://www.galleriaaccademiafirenze.it/" }
                ]
            },
            munich: {
                name: "ミュンヘン",
                country: "ドイツ",
                image: "https://images.unsplash.com/photo-1595867818082-083862f3d630?w=800&q=80",
                description: "バイエルンの州都ミュンヘンは、伝統と現代が調和した街を求めるあなたにぴったりです。マリエン広場、ノイシュヴァンシュタイン城への玄関口、そして世界最大のビール祭りオクトーバーフェストで有名。ビアホールで本場のドイツビールとソーセージを楽しめます。美術館や宮殿も充実しており、文化的な体験も豊富です。",
                links: [
                    { text: "ミュンヘン観光局", url: "https://www.muenchen.de/" },
                    { text: "ノイシュヴァンシュタイン城", url: "https://www.neuschwanstein.de/" },
                    { text: "ドイツ博物館", url: "https://www.deutsches-museum.de/" }
                ]
            }
        }
    },
    
    "北欧編": {
        questions: [
            {
                question: "旅行で最も重視することは？",
                options: [
                    { text: "自然とアウトドア体験", scores: { reykjavik: 3, bergen: 3, tromso: 2, oslo: 1 } },
                    { text: "デザインと建築", scores: { copenhagen: 3, stockholm: 2, helsinki: 2, aarhus: 1 } },
                    { text: "文化と歴史探訪", scores: { stockholm: 2, oslo: 2, turku: 2, copenhagen: 1 } }
                ]
            },
            {
                question: "求める体験は？",
                options: [
                    { text: "オーロラや氷河を見たい", scores: { reykjavik: 3, tromso: 3, bergen: 1 } },
                    { text: "北欧デザインとショッピング", scores: { copenhagen: 3, stockholm: 3, helsinki: 2, malmo: 1 } },
                    { text: "フィヨルドや自然景観", scores: { bergen: 3, oslo: 2, reykjavik: 2, tromso: 1 } }
                ]
            },
            {
                question: "好きな雰囲気は？",
                options: [
                    { text: "洗練された都会的", scores: { copenhagen: 3, stockholm: 3, helsinki: 2, oslo: 2 } },
                    { text: "のどかで自然豊か", scores: { bergen: 3, reykjavik: 2, aarhus: 2, turku: 1 } },
                    { text: "コンパクトで歩きやすい", scores: { malmo: 3, aarhus: 2, turku: 2, tromso: 1 } }
                ]
            },
            {
                question: "食事で楽しみたいのは？",
                options: [
                    { text: "新北欧料理（モダン）", scores: { copenhagen: 3, stockholm: 2, oslo: 2 } },
                    { text: "伝統的な北欧料理", scores: { helsinki: 2, bergen: 2, turku: 2, tromso: 1 } },
                    { text: "シーフード中心", scores: { bergen: 3, reykjavik: 3, stockholm: 1, oslo: 1 } }
                ]
            },
            {
                question: "予算のイメージは？",
                options: [
                    { text: "できるだけ抑えたい", scores: { malmo: 2, aarhus: 2, turku: 2, tromso: 1 } },
                    { text: "標準的な予算", scores: { helsinki: 2, stockholm: 2, oslo: 2, copenhagen: 1 } },
                    { text: "贅沢に楽しみたい", scores: { copenhagen: 3, reykjavik: 2, stockholm: 2, bergen: 1 } }
                ]
            },
            {
                question: "訪れたい季節は？",
                options: [
                    { text: "夏の白夜を体験したい", scores: { reykjavik: 3, tromso: 3, stockholm: 2, helsinki: 1 } },
                    { text: "冬のオーロラや雪景色", scores: { tromso: 3, reykjavik: 3, bergen: 1 } },
                    { text: "春秋の過ごしやすい時期", scores: { copenhagen: 2, stockholm: 2, oslo: 2, aarhus: 2 } }
                ]
            },
            {
                question: "アクティビティの好みは？",
                options: [
                    { text: "美術館や博物館巡り", scores: { stockholm: 3, copenhagen: 3, oslo: 2, helsinki: 2 } },
                    { text: "ハイキングや自然散策", scores: { bergen: 3, oslo: 2, reykjavik: 2, tromso: 2 } },
                    { text: "サウナやスパでリラックス", scores: { helsinki: 3, stockholm: 2, reykjavik: 1, turku: 1 } }
                ]
            }
        ],
        destinations: {
            copenhagen: {
                name: "コペンハーゲン",
                country: "デンマーク",
                image: "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=800&q=80",
                description: "デンマークの首都コペンハーゲンは、洗練された北欧デザインを求めるあなたにぴったりです。カラフルなニューハウン、人魚姫の像、チボリ公園など、魅力的なスポットが満載。世界的に有名な新北欧料理のレストランも多く、美食の街としても知られています。自転車文化が発達しており、サイクリングで街を巡るのも楽しみの一つ。ヒュッゲ（心地よさ）の文化を体験できます。",
                links: [
                    { text: "コペンハーゲン観光局", url: "https://www.visitcopenhagen.com/" },
                    { text: "チボリ公園", url: "https://www.tivoli.dk/" },
                    { text: "デンマーク国立博物館", url: "https://en.natmus.dk/" }
                ]
            },
            stockholm: {
                name: "ストックホルム",
                country: "スウェーデン",
                image: "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?w=800&q=80",
                description: "水の都ストックホルムは、美しい景観と文化を求めるあなたに最適です。14の島々からなる街は、美しい建築物と水辺の景色が魅力。ガムラスタン（旧市街）の石畳の路地、ヴァーサ号博物館、王宮など見どころ豊富。北欧デザインのショップも充実しており、IKEAやH&Mの本国でもあります。カフェ文化も発達しており、フィーカ（コーヒーブレイク）を楽しめます。",
                links: [
                    { text: "ストックホルム観光局", url: "https://www.visitstockholm.com/" },
                    { text: "ヴァーサ号博物館", url: "https://www.vasamuseet.se/" },
                    { text: "スウェーデン王宮", url: "https://www.kungligaslotten.se/" }
                ]
            },
            helsinki: {
                name: "ヘルシンキ",
                country: "フィンランド",
                image: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=800&q=80",
                description: "フィンランドの首都ヘルシンキは、モダンと自然が調和した街を求めるあなたにぴったりです。白亜のヘルシンキ大聖堂、デザイン地区、サウナ文化が魅力。フィンランドはサウナ発祥の地で、本場のサウナ体験は必須です。マリメッコやイッタラなど、フィンランドデザインのショッピングも楽しめます。バルト海に面した美しい港町で、シーフードも絶品です。",
                links: [
                    { text: "ヘルシンキ観光局", url: "https://www.myhelsinki.fi/" },
                    { text: "スオメンリンナ要塞", url: "https://www.suomenlinna.fi/" },
                    { text: "デザイン博物館", url: "https://www.designmuseum.fi/" }
                ]
            },
            oslo: {
                name: "オスロ",
                country: "ノルウェー",
                image: "https://images.unsplash.com/photo-1560698935-7d4b3f5d5b7d?w=800&q=80",
                description: "ノルウェーの首都オスロは、自然と都市が融合した街を求めるあなたに最適です。ヴィーゲラン彫刻公園、オスロオペラハウス、ヴァイキング船博物館など、文化的な見どころが豊富。街の周りは森と海に囲まれており、都市にいながら自然を満喫できます。フィヨルド観光の拠点としても便利。ノルウェーサーモンをはじめとする新鮮なシーフードも楽しめます。",
                links: [
                    { text: "オスロ観光局", url: "https://www.visitoslo.com/" },
                    { text: "ヴィーゲラン彫刻公園", url: "https://www.vigeland.museum.no/" },
                    { text: "ヴァイキング船博物館", url: "https://www.khm.uio.no/english/visit-us/viking-ship-museum/" }
                ]
            },
            reykjavik: {
                name: "レイキャビク",
                country: "アイスランド",
                image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=800&q=80",
                description: "アイスランドの首都レイキャビクは、大自然と冒険を求めるあなたにぴったりです。オーロラ、氷河、温泉、火山など、ここでしか体験できない自然現象が満載。ブルーラグーンでの温泉体験、ゴールデンサークルツアー、ホエールウォッチングなど、アクティビティも豊富。世界最北の首都ならではの独特な文化と、カラフルな街並みも魅力的です。",
                links: [
                    { text: "アイスランド観光局", url: "https://www.visiticeland.com/" },
                    { text: "ブルーラグーン", url: "https://www.bluelagoon.com/" },
                    { text: "レイキャビク観光情報", url: "https://visitreykjavik.is/" }
                ]
            },
            bergen: {
                name: "ベルゲン",
                country: "ノルウェー",
                image: "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=800&q=80",
                description: "フィヨルドの玄関口ベルゲンは、自然の絶景を求めるあなたに最適です。カラフルな木造建築が並ぶブリッゲン地区は世界遺産に登録されており、ハンザ同盟時代の面影を残しています。周辺には美しいフィヨルドが広がり、フロイエン山からの眺望は圧巻。新鮮なシーフードが楽しめる魚市場も人気。雨が多い街ですが、それが独特の雰囲気を作り出しています。",
                links: [
                    { text: "ベルゲン観光局", url: "https://www.visitbergen.com/" },
                    { text: "ブリッゲン博物館", url: "https://www.bymuseet.no/" },
                    { text: "フロイエン山ケーブルカー", url: "https://www.floyen.no/" }
                ]
            },
            malmo: {
                name: "マルメ",
                country: "スウェーデン",
                image: "https://images.unsplash.com/photo-1564585083-347a44ed4d5f?w=800&q=80",
                description: "スウェーデン第三の都市マルメは、コンパクトで過ごしやすい街を求めるあなたにぴったりです。デンマークのコペンハーゲンとは橋で繋がっており、2カ国を気軽に行き来できます。ターニング・トルソという螺旋状の高層ビルが象徴的。多文化が共存する国際的な雰囲気で、カフェやレストランも充実。物価も北欧の中では比較的リーズナブルです。",
                links: [
                    { text: "マルメ観光局", url: "https://www.malmotown.com/" },
                    { text: "マルメ城", url: "https://malmo.se/malmohus" },
                    { text: "スウェーデン観光局", url: "https://visitsweden.com/" }
                ]
            },
            aarhus: {
                name: "オーフス",
                country: "デンマーク",
                image: "https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=800&q=80",
                description: "デンマーク第二の都市オーフスは、文化と自然のバランスを求めるあなたに最適です。ARoS美術館の虹色のパノラマは必見。デン・ガムレ・ビュ（旧市街博物館）では、昔のデンマークの街並みを体験できます。学生が多く活気があり、カフェやレストランも充実。コペンハーゲンより落ち着いた雰囲気で、物価も少し安めです。ビーチも近く、夏は海水浴も楽しめます。",
                links: [
                    { text: "オーフス観光局", url: "https://www.visitaarhus.com/" },
                    { text: "ARoS美術館", url: "https://www.aros.dk/" },
                    { text: "デン・ガムレ・ビュ", url: "https://www.dengamleby.dk/" }
                ]
            },
            turku: {
                name: "トゥルク",
                country: "フィンランド",
                image: "https://images.unsplash.com/photo-1564586797957-7f315e1f8c2f?w=800&q=80",
                description: "フィンランド最古の都市トゥルクは、歴史と文化を求めるあなたにぴったりです。トゥルク城や大聖堂など、中世の面影を残す建築物が魅力。アウラ川沿いには多くのレストランボートが並び、夏は特に賑わいます。ヘルシンキよりも落ち着いた雰囲気で、フィンランドの伝統文化をゆっくり体験できます。群島への玄関口でもあり、島巡りも楽しめます。",
                links: [
                    { text: "トゥルク観光局", url: "https://www.visitturku.fi/" },
                    { text: "トゥルク城", url: "https://www.turku.fi/turunlinna" },
                    { text: "トゥルク大聖堂", url: "https://www.turunseurakunnat.fi/tuomiokirkko" }
                ]
            },
            tromso: {
                name: "トロンハイム",
                country: "ノルウェー",
                image: "https://images.unsplash.com/photo-1579033461380-adb47c3eb938?w=800&q=80",
                description: "ノルウェー第三の都市トロンハイムは、歴史と学生の活気が融合した街を求めるあなたに最適です。ニーダロス大聖堂は北欧最大の中世建築物で圧巻。カラフルな木造倉庫が並ぶニーデルヴァ川沿いの景色も美しい。ノルウェー工科大学があり、若者が多く活気があります。オーロラ観測やフィヨルド観光の拠点としても便利。新鮮なシーフードも楽しめます。",
                links: [
                    { text: "トロンハイム観光局", url: "https://www.visittrondheim.no/" },
                    { text: "ニーダロス大聖堂", url: "https://www.nidarosdomen.no/" },
                    { text: "ノルウェー観光局", url: "https://www.visitnorway.com/" }
                ]
            }
        }
    },
    
    "東欧編": {
        questions: [
            {
                question: "旅行で最も重視することは？",
                options: [
                    { text: "歴史的建造物と古城", scores: { prague: 3, krakow: 3, budapest: 2, bratislava: 1 } },
                    { text: "中世の街並み散策", scores: { tallinn: 3, vilnius: 2, riga: 2, prague: 2 } },
                    { text: "温泉とスパでリラックス", scores: { budapest: 3, sofia: 2, bucharest: 1 } }
                ]
            },
            {
                question: "予算のイメージは？",
                options: [
                    { text: "できるだけ安く抑えたい", scores: { sofia: 3, bucharest: 3, warsaw: 2, krakow: 2 } },
                    { text: "標準的な予算", scores: { prague: 2, budapest: 2, bratislava: 2, riga: 2 } },
                    { text: "快適さ重視", scores: { tallinn: 2, prague: 2, budapest: 1 } }
                ]
            },
            {
                question: "食事で楽しみたいのは？",
                options: [
                    { text: "ボリューム満点の肉料理", scores: { prague: 3, budapest: 3, krakow: 2, warsaw: 2 } },
                    { text: "伝統的な東欧料理", scores: { krakow: 2, bucharest: 2, sofia: 2, vilnius: 2 } },
                    { text: "モダンで洗練された料理", scores: { tallinn: 3, riga: 2, prague: 1, budapest: 1 } }
                ]
            },
            {
                question: "求める雰囲気は？",
                options: [
                    { text: "おとぎ話のような街並み", scores: { prague: 3, tallinn: 3, bratislava: 2, vilnius: 1 } },
                    { text: "活気があって賑やか", scores: { budapest: 3, warsaw: 3, bucharest: 2, prague: 1 } },
                    { text: "静かで落ち着いた", scores: { riga: 3, vilnius: 2, bratislava: 2, sofia: 1 } }
                ]
            },
            {
                question: "観光スタイルは？",
                options: [
                    { text: "城や宮殿巡り", scores: { prague: 3, budapest: 3, krakow: 2, warsaw: 2 } },
                    { text: "旧市街の散策", scores: { tallinn: 3, riga: 3, vilnius: 2, bratislava: 2 } },
                    { text: "博物館や美術館", scores: { warsaw: 2, budapest: 2, bucharest: 2, sofia: 1 } }
                ]
            },
            {
                question: "アクティビティの好みは？",
                options: [
                    { text: "温泉やスパ体験", scores: { budapest: 3, sofia: 2, bucharest: 1 } },
                    { text: "ビール醸造所巡り", scores: { prague: 3, krakow: 2, warsaw: 1 } },
                    { text: "自然散策とハイキング", scores: { bratislava: 2, sofia: 2, tallinn: 1, riga: 1 } }
                ]
            },
            {
                question: "訪れたい時期は？",
                options: [
                    { text: "夏の過ごしやすい時期", scores: { tallinn: 2, riga: 2, vilnius: 2, prague: 1 } },
                    { text: "クリスマスマーケットの時期", scores: { prague: 3, budapest: 3, krakow: 2, bratislava: 2 } },
                    { text: "春秋の落ち着いた時期", scores: { warsaw: 2, bucharest: 2, sofia: 2 } }
                ]
            }
        ],
        destinations: {
            prague: {
                name: "プラハ",
                country: "チェコ",
                image: "https://images.unsplash.com/photo-1541849546-216549ae216d?w=800&q=80",
                description: "百塔の街プラハは、おとぎ話のような雰囲気を求めるあなたに最適です。プラハ城、カレル橋、旧市街広場など、中世の面影を残す美しい建築物が魅力。ヨーロッパの中でも比較的物価が安く、コストパフォーマンスに優れています。ビールの本場としても有名で、伝統的なチェコ料理とともに楽しめます。クラシック音楽の演奏会も頻繁に開催され、文化的な体験も豊富です。",
                links: [
                    { text: "プラハ観光局", url: "https://www.prague.eu/" },
                    { text: "プラハ城", url: "https://www.hrad.cz/" },
                    { text: "チェコ観光局", url: "https://www.visitczechrepublic.com/" }
                ]
            },
            budapest: {
                name: "ブダペスト",
                country: "ハンガリー",
                image: "https://images.unsplash.com/photo-1541963058-d6c01a428e6f?w=800&q=80",
                description: "ドナウの真珠ブダペストは、温泉と美しい建築を求めるあなたにぴったりです。国会議事堂、ブダ城、セーチェーニ温泉など、見どころ満載。ヨーロッパ有数の温泉都市で、歴史ある温泉施設でリラックスできます。ドナウ川の夜景は息を呑む美しさ。ハンガリー料理やワインも絶品で、物価も比較的リーズナブル。活気ある雰囲気と優雅さが共存する魅力的な都市です。",
                links: [
                    { text: "ブダペスト観光局", url: "https://www.budapest.com/" },
                    { text: "セーチェーニ温泉", url: "https://www.szechenyibath.hu/" },
                    { text: "ハンガリー観光局", url: "https://www.hungary.com/" }
                ]
            },
            warsaw: {
                name: "ワルシャワ",
                country: "ポーランド",
                image: "https://images.unsplash.com/photo-1601823984263-b551ba56d5c0?w=800&q=80",
                description: "ポーランドの首都ワルシャワは、復興の歴史と現代的な活気を求めるあなたに最適です。第二次世界大戦で破壊された旧市街は、市民の手で見事に復元され世界遺産に登録されています。ショパンゆかりの地としても有名で、音楽愛好家にもおすすめ。近代的なビジネス地区と歴史的な街並みが共存し、ダイナミックな雰囲気が魅力。物価も安く、ポーランド料理も美味しいです。",
                links: [
                    { text: "ワルシャワ観光局", url: "https://www.warsawtour.pl/" },
                    { text: "ワルシャワ王宮", url: "https://www.zamek-krolewski.pl/" },
                    { text: "ポーランド観光局", url: "https://www.poland.travel/" }
                ]
            },
            krakow: {
                name: "クラクフ",
                country: "ポーランド",
                image: "https://images.unsplash.com/photo-1578894381163-e72c17f2d45f?w=800&q=80",
                description: "古都クラクフは、中世の雰囲気と歴史を求めるあなたにぴったりです。ヴァヴェル城、中央市場広場、聖マリア教会など、美しい歴史的建造物が保存されています。アウシュヴィッツ強制収容所への玄関口でもあり、重要な歴史を学べます。ヴィエリチカ岩塩坑も世界遺産で必見。学生が多く活気があり、カフェやレストランも充実。ポーランドで最も美しい都市の一つです。",
                links: [
                    { text: "クラクフ観光局", url: "https://www.krakow.travel/" },
                    { text: "ヴァヴェル城", url: "https://wawel.krakow.pl/" },
                    { text: "ヴィエリチカ岩塩坑", url: "https://www.wieliczka-saltmine.com/" }
                ]
            },
            bratislava: {
                name: "ブラチスラヴァ",
                country: "スロバキア",
                image: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?w=800&q=80",
                description: "スロバキアの首都ブラチスラヴァは、コンパクトで魅力的な街を求めるあなたに最適です。ドナウ川沿いに位置し、ウィーンやブダペストからも近く、複数都市を巡る旅に便利。ブラチスラヴァ城からの眺望は素晴らしく、旧市街は歩いて回れるサイズ。物価も安く、のんびりとした雰囲気が魅力。ユニークな銅像が街中にあり、写真スポットとしても人気です。",
                links: [
                    { text: "ブラチスラヴァ観光局", url: "https://www.visitbratislava.com/" },
                    { text: "ブラチスラヴァ城", url: "https://www.bratislava-hrad.sk/" },
                    { text: "スロバキア観光局", url: "https://www.slovakia.travel/" }
                ]
            },
            bucharest: {
                name: "ブカレスト",
                country: "ルーマニア",
                image: "https://images.unsplash.com/photo-1590422749897-dcd8c89e2e7f?w=800&q=80",
                description: "ルーマニアの首都ブカレストは、東欧の隠れた魅力を求めるあなたにぴったりです。「東欧の小パリ」と呼ばれ、美しい建築物が点在しています。世界第二位の大きさを誇る国民の館は圧巻。物価が非常に安く、長期滞在にも向いています。ドラキュラ伝説のトランシルヴァニア地方への玄関口でもあり、ルーマニアの多様な魅力を体験できます。",
                links: [
                    { text: "ブカレスト観光局", url: "https://www.bucharest-city.ro/" },
                    { text: "国民の館", url: "https://cic.cdep.ro/" },
                    { text: "ルーマニア観光局", url: "https://romaniatourism.com/" }
                ]
            },
            sofia: {
                name: "ソフィア",
                country: "ブルガリア",
                image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80",
                description: "ブルガリアの首都ソフィアは、コストパフォーマンスと歴史を求めるあなたに最適です。アレクサンドル・ネフスキー大聖堂の黄金のドームは圧巻。ローマ時代の遺跡、オスマン帝国時代のモスク、正教会の教会が共存し、多層的な歴史を感じられます。ヨーロッパで最も物価が安い首都の一つで、温泉施設も充実。リラ修道院など、周辺の観光地へのアクセスも便利です。",
                links: [
                    { text: "ソフィア観光局", url: "https://www.visitsofia.bg/" },
                    { text: "アレクサンドル・ネフスキー大聖堂", url: "https://www.alexander-nevsky.bg/" },
                    { text: "ブルガリア観光局", url: "https://www.bulgariatravel.org/" }
                ]
            },
            riga: {
                name: "リガ",
                country: "ラトビア",
                image: "https://images.unsplash.com/photo-1593659039732-f5d8b7b8c3e3?w=800&q=80",
                description: "バルト三国の中心都市リガは、アールヌーヴォー建築と中世の街並みを求めるあなたにぴったりです。旧市街は世界遺産に登録されており、石畳の路地と美しい建築物が魅力。ヨーロッパ最大級のアールヌーヴォー建築群があり、建築好きには必見。中央市場は旧飛行船格納庫を利用したユニークな施設。バルト海に面し、ビーチリゾートへのアクセスも良好です。",
                links: [
                    { text: "リガ観光局", url: "https://www.liveriga.com/" },
                    { text: "リガ旧市街", url: "https://www.riga.lv/" },
                    { text: "ラトビア観光局", url: "https://www.latvia.travel/" }
                ]
            },
            tallinn: {
                name: "タリン",
                country: "エストニア",
                image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
                description: "中世の宝石箱タリンは、おとぎ話の世界を求めるあなたに最適です。旧市街は世界遺産に登録されており、中世の城壁や塔が完璧に保存されています。石畳の路地、カラフルな建物、展望台からの眺めは絵画のよう。IT先進国エストニアの首都でもあり、伝統と最新技術が共存。コンパクトな街なので徒歩で回りやすく、カフェ文化も発達しています。",
                links: [
                    { text: "タリン観光局", url: "https://www.visittallinn.ee/" },
                    { text: "タリン旧市街", url: "https://www.tallinn.ee/" },
                    { text: "エストニア観光局", url: "https://www.visitestonia.com/" }
                ]
            },
            vilnius: {
                name: "ヴィリニュス",
                country: "リトアニア",
                image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800&q=80",
                description: "リトアニアの首都ヴィリニュスは、バロック建築と静かな雰囲気を求めるあなたにぴったりです。旧市街は世界遺産で、ヨーロッパ最大級のバロック様式の街並みが広がります。ゲディミナス城からの眺望は素晴らしく、街全体を見渡せます。アートシーンも活発で、ウジュピス地区は独立を宣言したアーティスト地区として有名。物価も安く、落ち着いた雰囲気でゆっくり観光できます。",
                links: [
                    { text: "ヴィリニュス観光局", url: "https://www.vilnius-tourism.lt/" },
                    { text: "ゲディミナス城", url: "https://www.lnm.lt/" },
                    { text: "リトアニア観光局", url: "https://www.lithuania.travel/" }
                ]
            }
        }
    },
    
    "カナダ編": {
        questions: [
            {
                question: "旅行で最も重視することは？",
                options: [
                    { text: "壮大な自然とアウトドア", scores: { banff: 3, whistler: 3, victoria: 2, niagarafalls: 2 } },
                    { text: "都市観光とグルメ", scores: { toronto: 3, vancouver: 3, montreal: 2, ottawa: 1 } },
                    { text: "歴史と文化体験", scores: { quebec: 3, montreal: 2, ottawa: 2, victoria: 1 } }
                ]
            },
            {
                question: "好きな気候は？",
                options: [
                    { text: "温暖で過ごしやすい", scores: { vancouver: 3, victoria: 3, whistler: 1 } },
                    { text: "四季がはっきりしている", scores: { toronto: 2, montreal: 2, ottawa: 2, quebec: 2 } },
                    { text: "冬のウィンタースポーツ", scores: { whistler: 3, banff: 3, calgary: 2 } }
                ]
            },
            {
                question: "食事で楽しみたいのは？",
                options: [
                    { text: "多国籍で多様な料理", scores: { toronto: 3, vancouver: 3, montreal: 2 } },
                    { text: "フレンチカナディアン料理", scores: { montreal: 3, quebec: 3, ottawa: 1 } },
                    { text: "シーフードとローカルフード", scores: { vancouver: 2, victoria: 3, niagarafalls: 1 } }
                ]
            },
            {
                question: "観光スタイルは？",
                options: [
                    { text: "ハイキングや自然散策", scores: { banff: 3, whistler: 2, victoria: 2, vancouver: 1 } },
                    { text: "街歩きとショッピング", scores: { toronto: 3, vancouver: 2, montreal: 2, calgary: 1 } },
                    { text: "歴史的建造物巡り", scores: { quebec: 3, ottawa: 3, montreal: 2, victoria: 1 } }
                ]
            },
            {
                question: "求める体験は？",
                options: [
                    { text: "ロッキー山脈の絶景", scores: { banff: 3, calgary: 2, whistler: 1 } },
                    { text: "ナイアガラの滝を見たい", scores: { niagarafalls: 3, toronto: 2 } },
                    { text: "ヨーロッパ風の街並み", scores: { quebec: 3, montreal: 2, victoria: 2 } }
                ]
            },
            {
                question: "アクティビティの好みは？",
                options: [
                    { text: "スキーやスノーボード", scores: { whistler: 3, banff: 3, calgary: 1 } },
                    { text: "カヤックやホエールウォッチング", scores: { victoria: 3, vancouver: 2 } },
                    { text: "美術館や博物館巡り", scores: { ottawa: 3, toronto: 2, montreal: 2, quebec: 1 } }
                ]
            },
            {
                question: "言語の好みは？",
                options: [
                    { text: "英語圏が安心", scores: { toronto: 2, vancouver: 2, calgary: 2, ottawa: 2 } },
                    { text: "フランス語圏を体験したい", scores: { quebec: 3, montreal: 3 } },
                    { text: "どちらでも構わない", scores: { ottawa: 2, victoria: 2, banff: 1, whistler: 1 } }
                ]
            }
        ],
        destinations: {
            vancouver: {
                name: "バンクーバー",
                country: "カナダ",
                image: "https://images.unsplash.com/photo-1559511260-66a654ae982a?w=800&q=80",
                description: "カナダ西海岸の宝石バンクーバーは、都市と自然が完璧に調和した街を求めるあなたにぴったりです。スタンレーパーク、グランビルアイランド、ギャスタウンなど、見どころ満載。山と海に囲まれ、都市にいながらアウトドアアクティビティを楽しめます。多文化都市で世界中の料理が楽しめ、特にアジア料理が充実。温暖な気候で、カナダの中では最も過ごしやすい都市の一つです。",
                links: [
                    { text: "バンクーバー観光局", url: "https://www.tourismvancouver.com/" },
                    { text: "スタンレーパーク", url: "https://vancouver.ca/parks-recreation-culture/stanley-park.aspx" },
                    { text: "グランビルアイランド", url: "https://granvilleisland.com/" }
                ]
            },
            toronto: {
                name: "トロント",
                country: "カナダ",
                image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=800&q=80",
                description: "カナダ最大の都市トロントは、国際的で活気ある都市体験を求めるあなたに最適です。CNタワー、ロイヤルオンタリオ博物館、ディスティラリー地区など、見どころ豊富。世界で最も多文化な都市の一つで、多様な料理やエンターテイメントを楽しめます。ナイアガラの滝へも日帰りで行けます。四季がはっきりしており、季節ごとに異なる魅力があります。",
                links: [
                    { text: "トロント観光局", url: "https://www.seetorontonow.com/" },
                    { text: "CNタワー", url: "https://www.cntower.ca/" },
                    { text: "ロイヤルオンタリオ博物館", url: "https://www.rom.on.ca/" }
                ]
            },
            montreal: {
                name: "モントリオール",
                country: "カナダ",
                image: "https://images.unsplash.com/photo-1519821172144-4f87d85de2a1?w=800&q=80",
                description: "北米のパリと呼ばれるモントリオールは、ヨーロッパの雰囲気を求めるあなたにぴったりです。旧市街の石畳の路地、ノートルダム大聖堂、モン・ロワイヤルからの眺望が魅力。フランス語圏ならではの文化とグルメが楽しめ、特にベーグルやプーティンは必食。アートシーンも活発で、フェスティバルも多数開催されます。英語とフランス語が混在する独特の雰囲気が魅力です。",
                links: [
                    { text: "モントリオール観光局", url: "https://www.mtl.org/" },
                    { text: "ノートルダム大聖堂", url: "https://www.basiliquenotredame.ca/" },
                    { text: "モン・ロワイヤル", url: "https://www.lemontroyal.qc.ca/" }
                ]
            },
            niagarafalls: {
                name: "ナイアガラフォールズ",
                country: "カナダ",
                image: "https://images.unsplash.com/photo-1489447068241-b3490214e879?w=800&q=80",
                description: "世界三大瀑布の一つナイアガラの滝は、圧倒的な自然の力を体験したいあなたに最適です。轟音とともに流れ落ちる大量の水は圧巻。霧の乙女号に乗って滝に接近したり、展望台から眺めたり、様々な角度から楽しめます。夜のライトアップや冬の氷瀑も美しい。周辺にはワイナリーも多く、アイスワインの試飲も楽しめます。トロントから日帰りも可能です。",
                links: [
                    { text: "ナイアガラフォールズ観光局", url: "https://www.niagarafallstourism.com/" },
                    { text: "霧の乙女号", url: "https://www.niagaracruises.com/" },
                    { text: "ナイアガラパークス", url: "https://www.niagaraparks.com/" }
                ]
            },
            banff: {
                name: "バンフ",
                country: "カナダ",
                image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=800&q=80",
                description: "カナディアンロッキーの宝石バンフは、壮大な山岳風景を求めるあなたにぴったりです。ルイーズ湖、モレーン湖の美しいターコイズブルーの水は息を呑む美しさ。ハイキング、スキー、温泉など、四季を通じてアクティビティが充実。野生動物との出会いも期待できます。小さな山岳リゾートタウンには、レストランやショップも充実。カナダの大自然を満喫できる最高の目的地です。",
                links: [
                    { text: "バンフ＆レイクルイーズ観光局", url: "https://www.banfflakelouise.com/" },
                    { text: "バンフ国立公園", url: "https://www.pc.gc.ca/en/pn-np/ab/banff" },
                    { text: "レイクルイーズスキーリゾート", url: "https://www.skilouise.com/" }
                ]
            },
            whistler: {
                name: "ウィスラー",
                country: "カナダ",
                image: "https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=800&q=80",
                description: "世界的なスキーリゾート、ウィスラーは、ウィンタースポーツを愛するあなたに最適です。2010年冬季オリンピックの会場となった世界クラスのスキー場で、パウダースノーを満喫できます。夏はマウンテンバイクやハイキングも楽しめる通年リゾート。ビレッジには高級レストランやショップが並び、リゾートライフを満喫できます。バンクーバーから車で約2時間とアクセスも良好です。",
                links: [
                    { text: "ウィスラー観光局", url: "https://www.whistler.com/" },
                    { text: "ウィスラーブラッコム", url: "https://www.whistlerblackcomb.com/" },
                    { text: "ピーク2ピークゴンドラ", url: "https://www.whistler.com/activities/peak-2-peak-gondola/" }
                ]
            },
            victoria: {
                name: "ビクトリア",
                country: "カナダ",
                image: "https://images.unsplash.com/photo-1583037189850-1921ae7c6c22?w=800&q=80",
                description: "ブリティッシュコロンビア州の州都ビクトリアは、英国風の優雅な雰囲気を求めるあなたにぴったりです。ブッチャートガーデンの美しい花々、州議事堂の荘厳な建築、インナーハーバーの景色が魅力。アフタヌーンティーの文化が根付き、英国の雰囲気を感じられます。ホエールウォッチングも人気で、シャチに出会えるチャンスも。温暖な気候で、カナダで最も過ごしやすい都市の一つです。",
                links: [
                    { text: "ビクトリア観光局", url: "https://www.tourismvictoria.com/" },
                    { text: "ブッチャートガーデン", url: "https://www.butchartgardens.com/" },
                    { text: "ロイヤルBC博物館", url: "https://royalbcmuseum.bc.ca/" }
                ]
            },
            quebec: {
                name: "ケベック・シティ",
                country: "カナダ",
                image: "https://images.unsplash.com/photo-1519659528534-7d349698f0b5?w=800&q=80",
                description: "北米唯一の城壁都市ケベック・シティは、ヨーロッパの雰囲気を求めるあなたに最適です。旧市街は世界遺産に登録されており、石畳の路地とフランス風の建築が美しい。シャトー・フロンテナックは街のシンボルで、まるでおとぎ話の城のよう。フランス語が公用語で、本格的なフレンチカナディアン文化を体験できます。冬のウィンターカーニバルも有名で、四季折々の魅力があります。",
                links: [
                    { text: "ケベック・シティ観光局", url: "https://www.quebecregion.com/" },
                    { text: "シャトー・フロンテナック", url: "https://www.fairmont.com/frontenac-quebec/" },
                    { text: "ケベック要塞", url: "https://www.lacitadelle.qc.ca/" }
                ]
            },
            calgary: {
                name: "カルガリー",
                country: "カナダ",
                image: "https://images.unsplash.com/photo-1559511260-66a654ae982a?w=800&q=80",
                description: "カウボーイの街カルガリーは、西部開拓時代の雰囲気とロッキー山脈への玄関口を求めるあなたにぴったりです。毎年7月に開催されるカルガリー・スタンピードは世界最大のロデオイベント。カルガリータワーからの眺望は素晴らしく、街と山々を一望できます。バンフやジャスパーへのアクセスも良好で、ロッキー観光の拠点として最適。近代的な都市でありながら、西部の伝統も感じられます。",
                links: [
                    { text: "カルガリー観光局", url: "https://www.visitcalgary.com/" },
                    { text: "カルガリー・スタンピード", url: "https://www.calgarystampede.com/" },
                    { text: "カルガリータワー", url: "https://www.calgarytower.com/" }
                ]
            },
            ottawa: {
                name: "オタワ",
                country: "カナダ",
                image: "https://images.unsplash.com/photo-1519659528534-7d349698f0b5?w=800&q=80",
                description: "カナダの首都オタワは、歴史と文化を求めるあなたに最適です。国会議事堂、カナダ国立美術館、カナダ歴史博物館など、国を代表する施設が集まっています。リドー運河は世界遺産で、冬には世界最長のスケートリンクに変身。英語とフランス語の両方が使われるバイリンガル都市で、カナダの多様性を体験できます。春のチューリップフェスティバルも有名で、四季折々のイベントが楽しめます。",
                links: [
                    { text: "オタワ観光局", url: "https://www.ottawatourism.ca/" },
                    { text: "国会議事堂", url: "https://www.parl.ca/" },
                    { text: "カナダ国立美術館", url: "https://www.gallery.ca/" }
                ]
            }
        }
    },
    
    "アフリカ編": {
        questions: [
            {
                question: "旅行で最も重視することは？",
                options: [
                    { text: "サファリと野生動物", scores: { nairobi: 3, johannesburg: 2, addisababa: 1 } },
                    { text: "歴史と古代遺跡", scores: { cairo: 3, marrakech: 2, tunis: 2, addisababa: 1 } },
                    { text: "ビーチリゾート", scores: { zanzibar: 3, durban: 3, capetown: 2, dakar: 2 } }
                ]
            },
            {
                question: "求める体験は？",
                options: [
                    { text: "ピラミッドや古代文明", scores: { cairo: 3, tunis: 2, addisababa: 1 } },
                    { text: "エキゾチックな市場散策", scores: { marrakech: 3, tunis: 2, dakar: 2, nairobi: 1 } },
                    { text: "大自然とアドベンチャー", scores: { capetown: 3, nairobi: 2, zanzibar: 2, durban: 1 } }
                ]
            },
            {
                question: "好きな雰囲気は？",
                options: [
                    { text: "洗練された都会的", scores: { capetown: 3, johannesburg: 2, cairo: 1 } },
                    { text: "エキゾチックで神秘的", scores: { marrakech: 3, zanzibar: 2, tunis: 2, addisababa: 1 } },
                    { text: "活気があって賑やか", scores: { nairobi: 2, dakar: 2, cairo: 2, johannesburg: 1 } }
                ]
            },
            {
                question: "食事で楽しみたいのは？",
                options: [
                    { text: "北アフリカ料理（タジンなど）", scores: { marrakech: 3, tunis: 3, cairo: 2 } },
                    { text: "多国籍で洗練された料理", scores: { capetown: 3, johannesburg: 2, nairobi: 1 } },
                    { text: "シーフードとローカルフード", scores: { zanzibar: 3, durban: 3, dakar: 2 } }
                ]
            },
            {
                question: "予算のイメージは？",
                options: [
                    { text: "できるだけ抑えたい", scores: { addisababa: 3, nairobi: 2, dakar: 2, cairo: 1 } },
                    { text: "標準的な予算", scores: { marrakech: 2, tunis: 2, zanzibar: 2, durban: 1 } },
                    { text: "贅沢に楽しみたい", scores: { capetown: 3, johannesburg: 2, zanzibar: 2 } }
                ]
            },
            {
                question: "アクティビティの好みは？",
                options: [
                    { text: "サファリツアー", scores: { nairobi: 3, johannesburg: 2, addisababa: 1 } },
                    { text: "ダイビングやシュノーケリング", scores: { zanzibar: 3, durban: 2, dakar: 1 } },
                    { text: "遺跡や博物館巡り", scores: { cairo: 3, tunis: 2, marrakech: 2, addisababa: 1 } }
                ]
            },
            {
                question: "求める景観は？",
                options: [
                    { text: "美しい海とビーチ", scores: { zanzibar: 3, durban: 3, capetown: 2, dakar: 2 } },
                    { text: "砂漠とオアシス", scores: { marrakech: 3, cairo: 2, tunis: 2 } },
                    { text: "山と自然保護区", scores: { capetown: 2, nairobi: 2, addisababa: 2 } }
                ]
            }
        ],
        destinations: {
            capetown: {
                name: "ケープタウン",
                country: "南アフリカ共和国",
                image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800&q=80",
                description: "アフリカ大陸最南端の宝石ケープタウンは、自然と都市が完璧に調和した街を求めるあなたにぴったりです。テーブルマウンテン、喜望峰、美しいビーチ、ワインランドなど、見どころ満載。ペンギンコロニーやシャークケージダイビングなど、ユニークな体験も。洗練されたレストランやカフェも充実し、アフリカで最も美しい都市の一つと言われています。",
                links: [
                    { text: "ケープタウン観光局", url: "https://www.capetown.travel/" },
                    { text: "テーブルマウンテン", url: "https://www.tablemountain.net/" },
                    { text: "南アフリカ観光局", url: "https://www.southafrica.net/" }
                ]
            },
            marrakech: {
                name: "マラケシュ",
                country: "モロッコ",
                image: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=800&q=80",
                description: "赤い街マラケシュは、エキゾチックな雰囲気を求めるあなたに最適です。ジャマ・エル・フナ広場の賑わい、迷路のようなスーク（市場）、美しいリヤド（伝統的な邸宅）が魅力。マジョレル庭園やバヒア宮殿など、見どころも豊富。タジン料理やミントティーを楽しみ、ハマムで伝統的なスパ体験も。サハラ砂漠ツアーの拠点としても人気です。",
                links: [
                    { text: "モロッコ観光局", url: "https://www.visitmorocco.com/" },
                    { text: "マジョレル庭園", url: "https://jardinmajorelle.com/" },
                    { text: "マラケシュ観光情報", url: "https://www.marrakech.travel/" }
                ]
            },
            cairo: {
                name: "カイロ",
                country: "エジプト",
                image: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=800&q=80",
                description: "古代文明の都カイロは、歴史ロマンを求めるあなたにぴったりです。ギザの三大ピラミッドとスフィンクス、エジプト考古学博物館、イスラム地区の歴史的モスクなど、5000年の歴史が詰まっています。ナイル川クルーズも人気。活気あるハーン・ハリーリ市場でのショッピングも楽しめます。世界最古の文明の一つを肌で感じられる、唯一無二の体験ができます。",
                links: [
                    { text: "エジプト観光局", url: "https://www.egypt.travel/" },
                    { text: "ギザのピラミッド", url: "https://egymonuments.gov.eg/en/archaeological-sites/giza-pyramids" },
                    { text: "エジプト考古学博物館", url: "https://www.egyptianmuseum.gov.eg/" }
                ]
            },
            nairobi: {
                name: "ナイロビ",
                country: "ケニア",
                image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800&q=80",
                description: "東アフリカのハブ都市ナイロビは、サファリ体験を求めるあなたに最適です。ナイロビ国立公園では、都市のすぐ近くでライオンやキリンに出会えます。マサイマラ国立保護区への玄関口でもあり、大移動の時期は圧巻。デビッド・シェルドリック野生動物トラストでは、孤児の象に会えます。活気ある都市でありながら、野生動物との距離が近い、ユニークな体験ができます。",
                links: [
                    { text: "ケニア観光局", url: "https://www.magicalkenya.com/" },
                    { text: "ナイロビ国立公園", url: "https://www.kws.go.ke/content/nairobi-national-park" },
                    { text: "デビッド・シェルドリック野生動物トラスト", url: "https://www.sheldrickwildlifetrust.org/" }
                ]
            },
            johannesburg: {
                name: "ヨハネスブルグ",
                country: "南アフリカ共和国",
                image: "https://images.unsplash.com/photo-1577948000111-9c970dfe3743?w=800&q=80",
                description: "南アフリカ最大の都市ヨハネスブルグは、現代アフリカのダイナミズムを体験したいあなたにぴったりです。アパルトヘイト博物館では重要な歴史を学べます。ソウェト地区ツアーでは、ネルソン・マンデラの足跡をたどれます。クルーガー国立公園やピラネスバーグ国立公園へのサファリツアーの拠点としても便利。活気ある都市で、アフリカの過去と未来を感じられます。",
                links: [
                    { text: "ヨハネスブルグ観光局", url: "https://www.joburg.org.za/" },
                    { text: "アパルトヘイト博物館", url: "https://www.apartheidmuseum.org/" },
                    { text: "南アフリカ観光局", url: "https://www.southafrica.net/" }
                ]
            },
            durban: {
                name: "ダーバン",
                country: "南アフリカ共和国",
                image: "https://images.unsplash.com/photo-1591608971362-f08b2a75731a?w=800&q=80",
                description: "インド洋に面したダーバンは、ビーチリゾートを求めるあなたに最適です。ゴールデンマイルと呼ばれる美しいビーチ、サーフィンに最適な波、温暖な気候が魅力。インド系住民が多く、本格的なカレーやバニーチャウ（カレーパン）が楽しめます。uShaka Marine Worldは家族連れにも人気。ドラケンスバーグ山脈やフルウルウェ・イモロジ保護区へのアクセスも良好です。",
                links: [
                    { text: "ダーバン観光局", url: "https://www.durban.gov.za/" },
                    { text: "uShaka Marine World", url: "https://www.ushakamarineworld.co.za/" },
                    { text: "南アフリカ観光局", url: "https://www.southafrica.net/" }
                ]
            },
            tunis: {
                name: "チュニス",
                country: "チュニジア",
                image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80",
                description: "地中海とサハラの間に位置するチュニスは、多様な文化を求めるあなたにぴったりです。メディナ（旧市街）は世界遺産で、迷路のような路地と伝統的なスークが魅力。カルタゴ遺跡やシディ・ブ・サイドの青と白の美しい街並みも必見。地中海料理とアラブ料理が融合した美味しい料理も楽しめます。比較的治安も良く、アフリカ初心者にもおすすめです。",
                links: [
                    { text: "チュニジア観光局", url: "https://www.discovertunisia.com/" },
                    { text: "カルタゴ遺跡", url: "https://whc.unesco.org/en/list/37/" },
                    { text: "シディ・ブ・サイド", url: "https://www.discovertunisia.com/en/sidi-bou-said" }
                ]
            },
            zanzibar: {
                name: "ザンジバル・シティ",
                country: "タンザニア",
                image: "https://images.unsplash.com/photo-1568625365034-c9329b6d4d8f?w=800&q=80",
                description: "スパイスアイランドとして知られるザンジバルは、トロピカルパラダイスを求めるあなたに最適です。ストーンタウンは世界遺産で、アラブ、ペルシャ、インド、ヨーロッパの文化が融合した独特の雰囲気。白砂のビーチと透明度の高い海でのダイビングやシュノーケリングは最高。スパイスツアーでは、島の歴史と香辛料について学べます。のんびりとした島時間を楽しめます。",
                links: [
                    { text: "ザンジバル観光局", url: "https://www.zanzibartourism.go.tz/" },
                    { text: "ストーンタウン", url: "https://whc.unesco.org/en/list/173/" },
                    { text: "タンザニア観光局", url: "https://www.tanzaniatourism.go.tz/" }
                ]
            },
            addisababa: {
                name: "アディスアベバ",
                country: "エチオピア",
                image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800&q=80",
                description: "アフリカの外交首都アディスアベバは、独自の文化と歴史を求めるあなたにぴったりです。エチオピアは植民地化されなかった数少ないアフリカ国家で、独自の文字、暦、料理を持ちます。国立博物館には人類最古の化石「ルーシー」が展示されています。エチオピア正教会の教会、活気ある市場、本格的なエチオピアコーヒーセレモニーなど、ユニークな体験が待っています。",
                links: [
                    { text: "エチオピア観光局", url: "https://www.ethiopia.travel/" },
                    { text: "国立博物館", url: "https://www.ethiopianmuseums.org/" },
                    { text: "アディスアベバ観光情報", url: "https://www.addisababa.gov.et/" }
                ]
            },
            dakar: {
                name: "ダカール",
                country: "セネガル",
                image: "https://images.unsplash.com/photo-1568625365034-c9329b6d4d8f?w=800&q=80",
                description: "西アフリカの玄関口ダカールは、活気ある文化と美しい海岸を求めるあなたに最適です。ゴレ島は奴隷貿易の歴史を伝える世界遺産。ピンクレイクとして知られるレトバ湖の不思議な景色も必見。西アフリカ音楽の中心地で、ライブミュージックやダンスが盛ん。新鮮なシーフードとフランス植民地時代の影響を受けた料理も楽しめます。フレンドリーな人々とテランガ（おもてなし）の文化が魅力です。",
                links: [
                    { text: "セネガル観光局", url: "https://www.senegal-tourism.com/" },
                    { text: "ゴレ島", url: "https://whc.unesco.org/en/list/26/" },
                    { text: "ダカール観光情報", url: "https://www.dakar.sn/" }
                ]
            }
        }
    },
    
    "南米編": {
        questions: [
            {
                question: "旅行で最も重視することは？",
                options: [
                    { text: "ビーチとカーニバル", scores: { rio: 3, montevideo: 2, saopaulo: 1 } },
                    { text: "古代遺跡と歴史", scores: { cusco: 3, lima: 2, lapaz: 2, bogota: 1 } },
                    { text: "都市文化とグルメ", scores: { buenosaires: 3, santiago: 2, saopaulo: 2, lima: 1 } }
                ]
            },
            {
                question: "求める体験は？",
                options: [
                    { text: "マチュピチュを訪れたい", scores: { cusco: 3, lima: 2, lapaz: 1 } },
                    { text: "タンゴやサンバを楽しみたい", scores: { buenosaires: 3, rio: 3, montevideo: 1 } },
                    { text: "アンデス山脈の絶景", scores: { lapaz: 3, cusco: 2, santiago: 2, bogota: 1 } }
                ]
            },
            {
                question: "好きな雰囲気は？",
                options: [
                    { text: "情熱的で陽気", scores: { rio: 3, buenosaires: 2, medellin: 2, saopaulo: 1 } },
                    { text: "洗練されたヨーロッパ風", scores: { buenosaires: 3, montevideo: 3, santiago: 2 } },
                    { text: "伝統的でエキゾチック", scores: { cusco: 3, lapaz: 3, lima: 2, bogota: 1 } }
                ]
            },
            {
                question: "食事で楽しみたいのは？",
                options: [
                    { text: "本格的なステーキとワイン", scores: { buenosaires: 3, santiago: 2, montevideo: 2 } },
                    { text: "セビーチェやペルー料理", scores: { lima: 3, cusco: 2, bogota: 1 } },
                    { text: "シュラスコやブラジル料理", scores: { rio: 3, saopaulo: 3 } }
                ]
            },
            {
                question: "予算のイメージは？",
                options: [
                    { text: "できるだけ抑えたい", scores: { lapaz: 3, cusco: 2, bogota: 2, medellin: 2 } },
                    { text: "標準的な予算", scores: { lima: 2, rio: 2, montevideo: 2, santiago: 1 } },
                    { text: "快適さ重視", scores: { buenosaires: 2, santiago: 2, saopaulo: 2 } }
                ]
            },
            {
                question: "アクティビティの好みは？",
                options: [
                    { text: "トレッキングや登山", scores: { cusco: 3, lapaz: 3, santiago: 2, bogota: 1 } },
                    { text: "ビーチやサーフィン", scores: { rio: 3, lima: 2, montevideo: 1 } },
                    { text: "美術館や博物館巡り", scores: { buenosaires: 3, saopaulo: 2, bogota: 2, lima: 1 } }
                ]
            },
            {
                question: "訪れたい標高は？",
                options: [
                    { text: "海抜0m付近のビーチ", scores: { rio: 3, montevideo: 2, lima: 2 } },
                    { text: "標準的な高度の都市", scores: { buenosaires: 2, saopaulo: 2, santiago: 2, medellin: 2 } },
                    { text: "高地でも大丈夫", scores: { lapaz: 3, cusco: 3, bogota: 2 } }
                ]
            }
        ],
        destinations: {
            rio: {
                name: "リオデジャネイロ",
                country: "ブラジル",
                image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800&q=80",
                description: "カーニバルの街リオデジャネイロは、情熱とエネルギーを求めるあなたにぴったりです。コルコバードの丘のキリスト像、コパカバーナビーチ、シュガーローフマウンテンなど、象徴的なスポットが満載。世界最大のカーニバルは一生に一度は体験したいイベント。サンバ、ボサノバの音楽、美しいビーチ、フレンドリーな人々が、忘れられない思い出を作ってくれます。",
                links: [
                    { text: "リオデジャネイロ観光局", url: "https://visit.rio/" },
                    { text: "コルコバードの丘", url: "https://www.corcovado.com.br/" },
                    { text: "ブラジル観光局", url: "https://www.visitbrasil.com/" }
                ]
            },
            buenosaires: {
                name: "ブエノスアイレス",
                country: "アルゼンチン",
                image: "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?w=800&q=80",
                description: "南米のパリと呼ばれるブエノスアイレスは、洗練された文化を求めるあなたに最適です。タンゴ発祥の地で、情熱的なタンゴショーは必見。ヨーロッパ風の美しい建築、世界最高峰のステーキとワイン、活気ある書店やカフェ文化が魅力。ボカ地区のカラフルな街並みやレコレータ墓地など、見どころも豊富。アルゼンチンの文化と情熱を存分に味わえます。",
                links: [
                    { text: "ブエノスアイレス観光局", url: "https://turismo.buenosaires.gob.ar/" },
                    { text: "タンゴショー情報", url: "https://www.tangol.com/" },
                    { text: "アルゼンチン観光局", url: "https://www.argentina.travel/" }
                ]
            },
            saopaulo: {
                name: "サンパウロ",
                country: "ブラジル",
                image: "https://images.unsplash.com/photo-1548963670-aaaa8f73a5e3?w=800&q=80",
                description: "南米最大の都市サンパウロは、ダイナミックな都市体験を求めるあなたにぴったりです。世界中の料理が楽しめる美食の街で、特に日系人が多く本格的な日本料理も充実。サンパウロ美術館、イビラプエラ公園、活気ある市場など、見どころ豊富。ナイトライフも充実し、常に何かが起こっている刺激的な大都市。ブラジルの経済と文化の中心地です。",
                links: [
                    { text: "サンパウロ観光局", url: "https://www.cidadedesaopaulo.com/" },
                    { text: "サンパウロ美術館", url: "https://masp.org.br/" },
                    { text: "ブラジル観光局", url: "https://www.visitbrasil.com/" }
                ]
            },
            lima: {
                name: "リマ",
                country: "ペルー",
                image: "https://images.unsplash.com/photo-1531968455001-5c5272a41129?w=800&q=80",
                description: "ペルーの首都リマは、美食と歴史を求めるあなたに最適です。世界的に評価されるペルー料理の中心地で、セビーチェやピスコサワーは必食。旧市街は世界遺産で、スペイン植民地時代の美しい建築が残ります。マチュピチュへの玄関口でもあり、ペルー観光の拠点として便利。太平洋に面し、海岸沿いのミラフローレス地区は近代的で快適です。",
                links: [
                    { text: "リマ観光局", url: "https://www.peru.travel/en/what-to-do/lima" },
                    { text: "ペルー観光局", url: "https://www.peru.travel/" },
                    { text: "ラルコマール", url: "https://www.larcomar.com/" }
                ]
            },
            santiago: {
                name: "サンティアゴ",
                country: "チリ",
                image: "https://images.unsplash.com/photo-1555881675-ac4f1a0d3d0c?w=800&q=80",
                description: "チリの首都サンティアゴは、洗練された都市と自然のバランスを求めるあなたにぴったりです。アンデス山脈を背景にした美しい景観、近代的な高層ビル、歴史的な旧市街が共存。ワインの産地として有名で、周辺のワイナリーツアーも人気。サンクリストバルの丘からの眺望は素晴らしく、バルパライソやビーニャ・デル・マールへの日帰り旅行も楽しめます。",
                links: [
                    { text: "サンティアゴ観光局", url: "https://www.santiagocapital.cl/" },
                    { text: "チリ観光局", url: "https://chile.travel/" },
                    { text: "サンクリストバルの丘", url: "https://www.parquemet.cl/" }
                ]
            },
            cusco: {
                name: "クスコ",
                country: "ペルー",
                image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=800&q=80",
                description: "古代インカ帝国の首都クスコは、歴史とアドベンチャーを求めるあなたに最適です。マチュピチュへの玄関口で、インカの石組みとスペイン植民地建築が融合した独特の街並み。標高3400mの高地にあり、高山病対策が必要ですが、その分神秘的な雰囲気が漂います。聖なる谷、レインボーマウンテンなど、周辺の見どころも豊富。インカ文明の歴史を肌で感じられます。",
                links: [
                    { text: "クスコ観光情報", url: "https://www.peru.travel/en/what-to-do/cusco" },
                    { text: "マチュピチュ公式サイト", url: "https://www.machupicchu.gob.pe/" },
                    { text: "ペルー観光局", url: "https://www.peru.travel/" }
                ]
            },
            bogota: {
                name: "ボゴタ",
                country: "コロンビア",
                image: "https://images.unsplash.com/photo-1568632234157-ce7aecd03d0d?w=800&q=80",
                description: "コロンビアの首都ボゴタは、文化と芸術を求めるあなたにぴったりです。黄金博物館には世界最大の金製品コレクションがあり、ボテロ美術館では巨匠の作品を無料で鑑賞できます。カンデラリア地区のカラフルな街並み、モンセラーテの丘からの眺望も素晴らしい。コロンビアコーヒーの本場で、カフェ文化も発達。標高2640mの高地にあり、涼しい気候が特徴です。",
                links: [
                    { text: "ボゴタ観光局", url: "https://bogota.gov.co/" },
                    { text: "黄金博物館", url: "https://www.banrepcultural.org/bogota/museo-del-oro" },
                    { text: "コロンビア観光局", url: "https://colombia.travel/" }
                ]
            },
            medellin: {
                name: "メデジン",
                country: "コロンビア",
                image: "https://images.unsplash.com/photo-1568632234157-ce7aecd03d0d?w=800&q=80",
                description: "永遠の春の街メデジンは、革新と変革を求めるあなたに最適です。かつての危険な街から、革新的な都市計画で生まれ変わった成功例。メトロケーブルで貧困地区にもアクセスでき、社会変革の現場を見られます。ボテロ広場の巨大彫刻、花祭り、温暖な気候が魅力。周辺のグアタペの岩山や、コーヒー農園ツアーも人気。フレンドリーな人々とポジティブなエネルギーに満ちています。",
                links: [
                    { text: "メデジン観光局", url: "https://www.medellin.travel/" },
                    { text: "ボテロ広場", url: "https://www.medellin.gov.co/" },
                    { text: "コロンビア観光局", url: "https://colombia.travel/" }
                ]
            },
            lapaz: {
                name: "ラパス",
                country: "ボリビア",
                image: "https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?w=800&q=80",
                description: "世界最高所の首都ラパスは、ユニークな体験を求めるあなたにぴったりです。標高3600mの高地にあり、すり鉢状の地形が独特の景観を作り出しています。ロープウェイ（テレフェリコ）で街を移動する体験は他では味わえません。ウユニ塩湖への玄関口でもあり、先住民文化が色濃く残る魅力的な街。魔女市場やムリーリョ広場など、エキゾチックな見どころも豊富です。",
                links: [
                    { text: "ボリビア観光局", url: "https://www.bolivia.travel/" },
                    { text: "ラパス観光情報", url: "https://www.lapaz.bo/" },
                    { text: "ウユニ塩湖ツアー情報", url: "https://www.uyuni.travel/" }
                ]
            },
            montevideo: {
                name: "モンテビデオ",
                country: "ウルグアイ",
                image: "https://images.unsplash.com/photo-1599009434879-b6e6d1f4e5a6?w=800&q=80",
                description: "ウルグアイの首都モンテビデオは、落ち着いた雰囲気を求めるあなたに最適です。ラプラタ川沿いの美しい海岸線、ヨーロッパ風の建築、のんびりとした雰囲気が魅力。ブエノスアイレスに似た文化を持ちながら、より静かで治安も良好。メルカド・デル・プエルトでは本格的なアサード（焼肉）を楽しめます。タンゴやカンドンベ（アフロウルグアイ音楽）の文化も根付いています。",
                links: [
                    { text: "モンテビデオ観光局", url: "https://montevideo.gub.uy/" },
                    { text: "ウルグアイ観光局", url: "https://turismo.gub.uy/" },
                    { text: "メルカド・デル・プエルト", url: "https://www.mercadodelpuerto.com/" }
                ]
            }
        }
    },
    
    "日本編": {
        questions: [
            {
                question: "旅行で最も重視することは？",
                options: [
                    { text: "温泉でゆっくりリラックス", scores: { hakone: 3, kusatsu: 3, yufuin: 2, nikko: 1 } },
                    { text: "自然の絶景を楽しむ", scores: { fuji: 3, aso: 2, nikko: 2, okinawa: 1 } },
                    { text: "歴史と文化を体験", scores: { ise: 3, nikko: 3, karuizawa: 1 } }
                ]
            },
            {
                question: "好きな気候は？",
                options: [
                    { text: "涼しくて過ごしやすい", scores: { karuizawa: 3, nikko: 2, hakone: 2, kusatsu: 1 } },
                    { text: "温暖で南国気分", scores: { okinawa: 3, shirahama: 3, aso: 1 } },
                    { text: "四季を感じられる", scores: { hakone: 2, nikko: 2, fuji: 2, ise: 1 } }
                ]
            },
            {
                question: "求める体験は？",
                options: [
                    { text: "富士山を間近で見たい", scores: { fuji: 3, hakone: 2, karuizawa: 1 } },
                    { text: "美しいビーチでマリンスポーツ", scores: { okinawa: 3, shirahama: 3 } },
                    { text: "パワースポット巡り", scores: { ise: 3, nikko: 2, aso: 2 } }
                ]
            },
            {
                question: "食事で楽しみたいのは？",
                options: [
                    { text: "新鮮な海鮮料理", scores: { okinawa: 2, shirahama: 2, hakone: 2, ise: 2 } },
                    { text: "温泉地の会席料理", scores: { hakone: 3, yufuin: 3, kusatsu: 2 } },
                    { text: "ご当地グルメと郷土料理", scores: { ise: 2, okinawa: 2, aso: 2, nikko: 1 } }
                ]
            },
            {
                question: "宿泊スタイルは？",
                options: [
                    { text: "高級温泉旅館でゆったり", scores: { hakone: 3, yufuin: 3, kusatsu: 2 } },
                    { text: "リゾートホテルで快適に", scores: { okinawa: 3, shirahama: 2, karuizawa: 2 } },
                    { text: "観光重視でアクティブに", scores: { nikko: 2, fuji: 2, ise: 2, aso: 1 } }
                ]
            },
            {
                question: "アクティビティの好みは？",
                options: [
                    { text: "ハイキングや登山", scores: { fuji: 3, aso: 3, nikko: 2, hakone: 1 } },
                    { text: "ダイビングやシュノーケリング", scores: { okinawa: 3, shirahama: 2 } },
                    { text: "美術館や博物館巡り", scores: { hakone: 2, karuizawa: 2, nikko: 1 } }
                ]
            },
            {
                question: "旅の雰囲気は？",
                options: [
                    { text: "静かで落ち着いた", scores: { yufuin: 3, karuizawa: 2, ise: 2, kusatsu: 1 } },
                    { text: "賑やかで活気がある", scores: { okinawa: 3, hakone: 2, shirahama: 2 } },
                    { text: "神秘的でスピリチュアル", scores: { ise: 3, nikko: 3, aso: 2, fuji: 1 } }
                ]
            }
        ],
        destinations: {
            hakone: {
                name: "箱根温泉郷",
                country: "神奈川県",
                image: "./picts/hakone.jpg",
                description: "東京から近い温泉リゾート箱根は、温泉と芸術を楽しみたいあなたにぴったりです。17の温泉地からなる温泉郷で、それぞれ異なる泉質を楽しめます。芦ノ湖、大涌谷、箱根神社など自然と歴史のスポットも豊富。箱根彫刻の森美術館やポーラ美術館など、アート施設も充実。富士山の眺望も素晴らしく、都心から日帰りも可能な人気の温泉地です。",
                links: [
                    { text: "箱根町観光協会", url: "https://www.hakone.or.jp/" },
                    { text: "箱根ナビ", url: "https://www.hakonenavi.jp/" },
                    { text: "箱根彫刻の森美術館", url: "https://www.hakone-oam.or.jp/" }
                ]
            },
            okinawa: {
                name: "沖縄",
                country: "沖縄県",
                image: "./picts/okinawa.jpg",
                description: "日本の南国リゾート沖縄は、美しい海とビーチを求めるあなたに最適です。エメラルドグリーンの海、白い砂浜、豊かなサンゴ礁でのダイビングやシュノーケリングは最高。首里城や美ら海水族館など、独自の琉球文化も体験できます。ゴーヤチャンプルーや沖縄そばなど、独特の料理も魅力。温暖な気候で、冬でも比較的暖かく過ごせます。",
                links: [
                    { text: "沖縄観光コンベンションビューロー", url: "https://www.okinawastory.jp/" },
                    { text: "美ら海水族館", url: "https://churaumi.okinawa/" },
                    { text: "首里城公園", url: "https://oki-park.jp/shurijo/" }
                ]
            },
            ise: {
                name: "伊勢神宮",
                country: "三重県",
                image: "./picts/ise.jpg",
                description: "日本人の心のふるさと伊勢神宮は、スピリチュアルな体験を求めるあなたにぴったりです。2000年以上の歴史を持つ日本最高峰の神社で、内宮と外宮を参拝する「お伊勢参り」は特別な体験。おかげ横丁では伊勢うどんや赤福餅など、名物グルメも楽しめます。神聖な雰囲気の中、心が洗われるような時間を過ごせます。鳥羽や志摩の海の幸も絶品です。",
                links: [
                    { text: "伊勢神宮公式サイト", url: "https://www.isejingu.or.jp/" },
                    { text: "おかげ横丁", url: "https://www.okageyokocho.co.jp/" },
                    { text: "伊勢志摩観光ナビ", url: "https://www.iseshima-kanko.jp/" }
                ]
            },
            fuji: {
                name: "富士山・富士五湖",
                country: "山梨県・静岡県",
                image: "./picts/fujisan.jpg",
                description: "日本の象徴富士山は、雄大な自然を求めるあなたに最適です。世界遺産に登録された美しい山容を、富士五湖（河口湖、山中湖、西湖、精進湖、本栖湖）から様々な角度で楽しめます。夏は登山、冬は雪景色と四季折々の魅力があります。周辺には温泉や美術館も多く、富士急ハイランドなどのレジャー施設も充実。日本一の山の絶景を堪能できます。",
                links: [
                    { text: "富士山オフィシャルサイト", url: "https://www.fujisan-climb.jp/" },
                    { text: "富士五湖観光連盟", url: "https://www.fujigoko.or.jp/" },
                    { text: "富士山世界遺産センター", url: "https://www.mtfuji-whc.jp/" }
                ]
            },
            kusatsu: {
                name: "草津温泉",
                country: "群馬県",
                image: "./picts/kusatsu.jpg",
                description: "日本三名泉の一つ草津温泉は、本格的な温泉を求めるあなたにぴったりです。「恋の病以外なら治る」と言われるほど効能豊かな強酸性の湯が特徴。湯畑を中心とした温泉街は情緒たっぷりで、湯もみショーも必見。無料の共同浴場も多く、温泉三昧の旅が楽しめます。標高1200mの高原にあり、夏は避暑地としても人気。冬はスキーも楽しめます。",
                links: [
                    { text: "草津温泉観光協会", url: "https://www.kusatsu-onsen.ne.jp/" },
                    { text: "草津温泉ポータルサイト", url: "https://www.kusatsu-onsen.ne.jp/" },
                    { text: "熱乃湯（湯もみショー）", url: "https://www.kusatsu-onsen.ne.jp/netsunoyu/" }
                ]
            },
            karuizawa: {
                name: "軽井沢",
                country: "長野県",
                image: "https://images.unsplash.com/photo-1570284613060-766c33850e00?w=800&q=80",
                description: "避暑地の代名詞軽井沢は、洗練されたリゾートライフを求めるあなたに最適です。明治時代から外国人宣教師に愛された高原リゾートで、おしゃれなカフェやレストラン、ショップが点在。旧軽井沢銀座、白糸の滝、雲場池など見どころも豊富。夏は涼しく、秋は紅葉が美しい。アウトレットモールでのショッピングも人気。都心から新幹線で約1時間とアクセスも良好です。",
                links: [
                    { text: "軽井沢観光協会", url: "https://karuizawa-kankokyokai.jp/" },
                    { text: "軽井沢・プリンスショッピングプラザ", url: "https://www.karuizawa-psp.jp/" },
                    { text: "旧軽井沢銀座", url: "https://www.kyukaruizawa.com/" }
                ]
            },
            nikko: {
                name: "日光（東照宮・中禅寺湖）",
                country: "栃木県",
                image: "./picts/nikko.jpg",
                description: "世界遺産の街日光は、歴史と自然を求めるあなたにぴったりです。徳川家康を祀る日光東照宮の豪華絢爛な建築は圧巻。「見ざる言わざる聞かざる」の三猿や眠り猫も有名。中禅寺湖、華厳の滝など、奥日光の自然美も素晴らしい。紅葉の名所としても知られ、秋は特に美しい。日光湯元温泉で疲れを癒すこともできます。東京から特急で約2時間です。",
                links: [
                    { text: "日光観光協会", url: "https://www.nikko-kankou.org/" },
                    { text: "日光東照宮", url: "https://www.toshogu.jp/" },
                    { text: "日光国立公園", url: "https://www.env.go.jp/park/nikko/" }
                ]
            },
            yufuin: {
                name: "由布院温泉",
                country: "大分県",
                image: "./picts/yufuin.jpg",
                description: "九州の人気温泉地由布院は、静かで洗練された温泉体験を求めるあなたに最適です。由布岳を望む美しい景観の中、おしゃれなカフェやギャラリー、雑貨店が点在する温泉街。金鱗湖の朝霧は幻想的で必見。高級旅館から気軽な宿まで、様々なスタイルの宿泊施設があります。温泉街を散策しながら、足湯や食べ歩きを楽しめます。女性に特に人気の温泉地です。",
                links: [
                    { text: "由布市ツーリズム協会", url: "https://www.yufuin.gr.jp/" },
                    { text: "由布院温泉観光協会", url: "https://www.yufuin.gr.jp/" },
                    { text: "金鱗湖", url: "https://www.yufuin.gr.jp/spot/kinrinko/" }
                ]
            },
            shirahama: {
                name: "白浜温泉・南紀白浜",
                country: "和歌山県",
                image: "./picts/shirahama.jpg",
                description: "関西のリゾート白浜は、温泉とビーチの両方を楽しみたいあなたにぴったりです。白良浜の白い砂浜と青い海はまるで南国リゾート。日本三古湯の一つである白浜温泉で、海を眺めながらの露天風呂は最高。アドベンチャーワールドではパンダに会え、千畳敷や三段壁などの景勝地も見どころ。新鮮な海の幸も絶品。関西から特急で約2時間半とアクセスも良好です。",
                links: [
                    { text: "南紀白浜観光協会", url: "https://www.nankishirahama.jp/" },
                    { text: "アドベンチャーワールド", url: "https://www.aws-s.com/" },
                    { text: "白浜温泉旅館協同組合", url: "https://www.shirahama-ryokan.jp/" }
                ]
            },
            aso: {
                name: "阿蘇・阿蘇山周辺",
                country: "熊本県",
                image: "https://photo.city.aso.kumamoto.jp/files/uploads/dc8f1cf06ce1df54618f933a10e99a4c-768x1024.jpg",
                description: "世界最大級のカルデラを持つ阿蘇は、ダイナミックな自然を求めるあなたに最適です。活火山である阿蘇山の火口を間近で見られる迫力ある体験。広大な草原が広がる草千里、米塚など、雄大な景観が魅力。阿蘇神社や高千穂峡など、神話の舞台でもあります。温泉も豊富で、黒川温泉や内牧温泉で疲れを癒せます。あか牛や馬刺しなど、ご当地グルメも楽しめます。",
                links: [
                    { text: "阿蘇市観光協会", url: "https://www.asocity-kanko.jp/" },
                    { text: "阿蘇火山博物館", url: "https://www.asomuse.jp/" },
                    { text: "阿蘇くじゅう国立公園", url: "https://www.env.go.jp/park/aso/" }
                ]
            }
        }
    }
};
