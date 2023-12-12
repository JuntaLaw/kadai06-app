import { Button } from "@/components/ui/button";
import prisma from "../utils/db";


export default function SeedDatabase() {
    async function postData() {
        "use server";
        await prisma.movie.createMany({
            data: [{
                id: 0,
                title: "Top Gun with a Cat",
                age: 12,
                duration: 0.6,
                overview:
                    "A Parody of Top Gun Maverick (and scenes from the original!) starring OwlKitty #OwlKitty #TopGun #topgunmaverick #halloween",
                videoSource: "https://res.cloudinary.com/dydlqa1nc/video/upload/f_auto:video,q_auto/Top_Gun_with_a_Cat_xxuste",
                imageString: "https://res.cloudinary.com/dydlqa1nc/image/upload/f_auto,q_auto/Screenshot_2023-12-12_at_23.04.13_avkgqw",
                release: 2022,
                category: "recent",
                youtubeString: "https://www.youtube.com/embed/w3rQ3328Tok?si=B1gQjnK7IMMMg2oZ",
            },
            {
                id: 1,
                title: "ルー、パリで生まれた猫",
                age: 0,
                duration: 1.4,
                overview:
                    "パリに住む10歳の少女クレムは、屋根裏で生まれたばかりのキジトラの子猫を見つけ、ルーと名付けて一緒に暮らしはじめる。両親の不仲に心を痛めていたクレムにとって、クールで自由で好奇心に満ちたルーとの生活は心安らぐ時間となっていく。ある日、森の別荘へやって来たクレムとルーに、ある出会いが訪れる。",
                release: 2023,
                videoSource: "",
                imageString: "https://eiga.k-img.com/images/movie/99850/photo/546a2916abf7716e.jpg?1689651406",
                category: "recent",
                youtubeString: "https://www.youtube.com/embed/jIKCTtBNJNQ?si=aD80P23pAmHpkK52",
            },
            {
                id: 2,
                title: "猫は抱くもの",
                age: 0,
                duration: 1.5,
                overview:
                    "東京郊外を流れる美しい青目川に架けられた「ねこすて橋」。そこでは、夜になるとさまざまな境遇を持った猫たちが集会を開いている。あるとき、美しいロシアンブルーの良男が足を滑らせ流されてくる。良男は自分の事を人間で沙織の恋人だと思い込んでいて、沙織のもとに帰ろうとするが…。",
                release: 2018,
                videoSource: "",
                imageString:
                    "https://www.themoviedb.org/t/p/original/sCqrvQQc00YUQ3sRsrhI02676Uf.jpg",
                category: "movie",
                youtubeString: "https://www.youtube.com/embed/c53uIhJxO8A?si=xuJVReCq2NaRBpKG",
            },
            {
                id: 3,
                title: "ドラマ25「猫」",
                age: 0,
                duration: 1,
                imageString:
                    "https://www.themoviedb.org/t/p/original/b8GLTIkJuDmT3JNWWy9H7i4b58j.jpg",
                overview: "脳に腫瘍があり医者から余命宣告を受け自らの死と向き合う女性・金子みねこと、やりたいことや夢もなくその日暮らしの生活を送るフリーター・天音光司。一匹の“猫”をきっかけに出会い、カップルとなった2人の「いつもと同じ帰り道」を通して、男女それぞれの視点で描く切なくも温かいラブストーリー",
                release: 2020,
                videoSource: "",
                category: "show",
                youtubeString: "https://www.youtube.com/embed/kX09M6y3Qsc?si=EL3Nh-Jxm3WsWN0H",
            },
            {
                id: 4,
                title: "きょうの猫村さん",
                age: 0,
                duration: 0.2,
                imageString:
                    "https://image.tmdb.org/t/p/original/or0E36KfzJYZwqXeiCfm1JgepKF.jpg",
                overview:
                    "猫村ねこは、自分を拾ってくれた飼い主・ぼっちゃんとの再会を果たすため、家政婦として働いてお金を貯めるべく村田家政婦紹介所の門をたたく。家政婦紹介所の長、村田の奥さんも家政婦志望の猫に戸惑うが、その家事能力の高さを認め、犬神家へ家政婦として奉公させることに。緊張しながら向かった犬神家は、とてもお金持ちのようだが、何やら問題を抱えているようで――。",
                release: 2020,
                videoSource: "",
                category: "show",
                youtubeString: "https://www.youtube.com/embed/7CFgXdCIOEk?si=cSy2BDV0uUuj7C6k",
            },
            {
                id: 5,
                title: "猫は逃げた",
                age: 15,
                duration: 1.5,
                imageString:
                    "https://www.themoviedb.org/t/p/original/wukN4Y13MAu83rPAvsCQcrRirf.jpg",
                overview:
                    "漫画家・町田亜子と週刊誌記者の広重の夫婦。広重は同僚の真実子と浮気中で、亜子も編集者の松山と体の関係を持っており、夫婦関係は冷え切っていた。離婚間近の2人は飼い猫のカンタをどちらが引き取るかで揉めていた。そんな矢先、カンタが家からいなくなってしまう。",
                release: 2022,
                videoSource: "",
                category: "recent",
                youtubeString: "https://www.youtube.com/embed/OX6vzNW1mFg?si=wVTpDmBF6TdxNVLy",
            },
            {
                id: 6,
                title: "泣きたい私は猫をかぶる",
                age: 0,
                duration: 1.4,
                imageString:
                    "https://www.themoviedb.org/t/p/original/tJZLNThqxgE1Xtv1zlTGC5kOTOi.jpg",
                overview:
                    "周囲になじめない少女の唯一の楽しみは、猫に変身して好きな人に会いにいくこと。でもそんな毎日を続けるうちに、猫と人間の境界が次第にあいまいになり始め...。",
                release: 2023,
                videoSource: "",
                category: "movie",
                youtubeString: "https://www.youtube.com/embed/irZZkLW1Ygk?si=fcwBjQvGKeq-nuTS",
            },
            {
                id: 7,
                title: "旅猫リポート",
                age: 0,
                duration: 1.6,
                imageString:
                    "https://www.themoviedb.org/t/p/original/m8Ei6UfBcpsn0sp8kEJujF2pI9x.jpg",
                overview:
                    "野良猫だったナナは交通事故に遭ってしまい、猫好きの人のいい青年・悟(福士蒼汰)に救われる。その後5年間、ナナは家猫として悟と仲良く暮らしてきたが、ある事情から彼は愛猫を手放す決意を固める。そして新たな飼い主を見つけるため、彼らは悟の親友や初恋の相手などを訪ねる旅に出る。",
                release: 2023,
                videoSource: "",
                category: "movie",
                youtubeString: "https://www.youtube.com/embed/6mZaTqoNrCE?si=JjExdeh5quReURT6",
            },
            {
                id: 8,
                title: "ルイス・ウェイン 生涯愛した妻とネコ",
                release: 2021,
                age: 12,
                duration: 1.5,
                imageString:
                    "https://www.themoviedb.org/t/p/original/vWgIB6l3nDs2i6k3KuSM0zNpP2o.jpg",
                overview:
                    "英国のネコ画家、ルイス・ウェインを巡る実録ストーリー。主人公ルイスにベネディクト・カンパーバッチが、妻エミリーにクレア・フォイがそれぞれ扮し、画家を守り続けた妻とネコ、そして愛の物語を紡いでいく。",
                videoSource: "",
                category: "recent",
                youtubeString: "https://www.youtube.com/embed/dnVYrwweCX8?si=uJ5hmghKEpA0PTsB",
            },
            {
                id: 9,
                title: "世界から猫が消えたなら",
                release: 2016,
                age: 0,
                duration: 1.4,
                imageString:
                    "https://www.themoviedb.org/t/p/original/pNDmV7AY84jgw2bMB34DF4aWKdc.jpg",
                overview:
                    "“僕”は愛猫キャベツと暮らす30歳の郵便配達員。ある日自転車で転んだ彼は、ひどい頭痛に悩まされて病院に行ったところ、脳腫瘍で余命わずかだと宣告されてしまう。ショックで呆然とする“僕”の前に、自分に容姿のよく似た“悪魔”が現われる。うろたえる“僕”に、“悪魔”は「自分にとって大切なものを消せばさらに1日の命をあげる」とささやく。“僕”が悪魔と取引すると、まずいつも持ち歩いている電話が消える。",
                videoSource: "",
                category: "movie",
                youtubeString: "https://www.youtube.com/embed/0eyLOrqtFi4?si=s3HZyoD4dSKZOrjK",
            },
            {
                id: 10,
                title: "ねことじいちゃん",
                age: 0,
                duration: 1.5,
                imageString:
                    "https://www.themoviedb.org/t/p/original/485HE16tuwGTn6jQIM19T4Dz8MM.jpg",
                overview:
                    "2年前に妻を亡くした70歳の大吉(立川志の輔)は、友人たちに囲まれ、飼い猫のタマの散歩と妻が残したレシピノートの作成が日課の自由気ままな生活を楽しんでいた。だが、親しい友人が亡くなり、自身の体にも変調を覚えた矢先、タマがどこかに行ってしまう。",
                release: 2019,
                videoSource: "",
                category: "movie",
                youtubeString: "https://www.youtube.com/embed/T8c2wbsHnd0?si=TTj8Gzc09XHpcZxx",
            },
            ],
        });
    }

    return (
        <div className="m-5">
            <form action={postData}>
                <Button type="submit">
                    Submit
                </Button>
            </form>

        </div>
    )
}