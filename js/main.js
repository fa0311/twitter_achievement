// 一意のid:[ 実績の名前, 正規表現, ポイント]
let achievement_list = {
    "tutorial": ["チュートリアル", ".*", 10],

    "infection0": ["感染症", "コロナ", 20],
    "infection1": ["感染症", "インフルエンザ", 20],
    "infection2": ["感染症", "コロナはただの風邪", 20],

    "slang0": ["スラング", "(チーズ牛丼|チー牛)", 20],
    "slang1": ["スラング", "\\(\\)", 20],
    "slang2": ["スラング", "w", 20],
    "slang3": ["スラング", "草", 20],
    "slang4": ["スラング", "w{10,}", 20],

    "bot0": ["bot", "匿名質問を募集中", 20],
    "bot1": ["bot", "かぁいいおにゃのこはすはすしたい", 20],

    "pcer0": ["自作er", "時期が悪い", 20],
    "pcer1": ["自作er", "時期が良い", 20],
    "pcer2": ["自作er", "(NVIDIA|nvidia)", 20],
    "pcer3": ["自作er", "(GeForce|geforce)", 20],
    "pcer4": ["自作er", "(GTX|gtx)", 20],
    "pcer5": ["自作er", "(RTX|rtx)", 20],
    "pcer6": ["自作er", "(AMD|amd)", 20],
    "pcer7": ["自作er", "(INTEL|Intel|intel)", 20],
    "pcer8": ["自作er", "(レイトレ|レイトレーシング)", 20],

    "gadget0": ["ガジェット", "マウス", 20],
    "gadget1": ["ガジェット", "キーボード", 20],
    "gadget2": ["ガジェット", "軸", 20],
    "gadget3": ["ガジェット", "(Razer|razer)", 20],
    "gadget4": ["ガジェット", "(logicool|Logicool)", 20],

    "game0": ["ゲーム", "(Fortnite|fortnite|フォートナイト)", 20],
    "game1": ["ゲーム", "(apex|APEX|エーペックス)", 20],
    "game2": ["ゲーム", "(ARK|ark)", 20],
    "game3": ["ゲーム", "(Minecraft|minecraft|マイクラ|マインクラフト)", 20],
    "game4": ["ゲーム", "(GTA|gta|グラセフ)", 20],
    "game5": ["ゲーム", "(VALORANT|valorant|ヴァロラント)", 20],
    "game6": ["ゲーム", "(R6S|r6s|シージ|虹六)", 20],
    "game7": ["ゲーム", "BF", 20],

    "trend20200": ["2020年流行語", "3密", 20],
    "trend20201": ["2020年流行語", "ソーシャルディスタンス", 20],
    "trend20202": ["2020年流行語", "密です", 20],
    "trend20203": ["2020年流行語", "都民ファースト", 20],
    "trend20204": ["2020年流行語", "愛の不時着", 20],
    "trend20205": ["2020年流行語", "(あつ森|どうぶつの森)", 20],
    "trend20206": ["2020年流行語", "アベノマスク", 20],
    "trend20207": ["2020年流行語", "アマビエ", 20],
    "trend20208": ["2020年流行語", "オンライン", 20],
    "trend20209": ["2020年流行語", "(鬼滅の刃|鬼滅)", 20],
    "trend202010": ["2020年流行語", "(GoTo|GOTO|goto)", 20],
    "trend202011": ["2020年流行語", "(ソロキャンプ|ソロキャン)", 20],
    "trend202012": ["2020年流行語", "フワちゃん", 20],

    "pref0": ["都道府県", "北海道", 50],
    "pref1": ["都道府県", "青森", 50],
    "pref2": ["都道府県", "岩手", 50],
    "pref3": ["都道府県", "宮城", 50],
    "pref4": ["都道府県", "秋田", 50],
    "pref5": ["都道府県", "山形", 50],
    "pref6": ["都道府県", "福島", 50],
    "pref7": ["都道府県", "茨城", 50],
    "pref8": ["都道府県", "栃木", 50],
    "pref9": ["都道府県", "群馬", 50],

    "pref10": ["都道府県", "埼玉", 50],
    "pref11": ["都道府県", "千葉", 50],
    "pref12": ["都道府県", "東京", 50],
    "pref13": ["都道府県", "神奈川", 50],
    "pref14": ["都道府県", "新潟", 50],
    "pref15": ["都道府県", "富山", 50],
    "pref16": ["都道府県", "石川", 50],
    "pref17": ["都道府県", "福井", 50],
    "pref18": ["都道府県", "山梨", 50],
    "pref19": ["都道府県", "長野", 50],

    "pref20": ["都道府県", "岐阜", 50],
    "pref21": ["都道府県", "静岡", 50],
    "pref22": ["都道府県", "愛知", 50],
    "pref23": ["都道府県", "三重", 50],
    "pref24": ["都道府県", "滋賀", 50],
    "pref25": ["都道府県", "京都", 50],
    "pref26": ["都道府県", "大阪", 50],
    "pref27": ["都道府県", "兵庫", 50],
    "pref28": ["都道府県", "奈良", 50],
    "pref29": ["都道府県", "和歌山", 50],

    "pref30": ["都道府県", "鳥取", 50],
    "pref31": ["都道府県", "島根", 50],
    "pref32": ["都道府県", "岡山", 50],
    "pref33": ["都道府県", "広島", 50],
    "pref34": ["都道府県", "山口", 50],
    "pref35": ["都道府県", "徳島", 50],
    "pref36": ["都道府県", "香川", 50],
    "pref37": ["都道府県", "愛媛", 50],
    "pref38": ["都道府県", "高知", 50],
    "pref39": ["都道府県", "福岡", 50],

    "pref40": ["都道府県", "佐賀", 50],
    "pref41": ["都道府県", "長崎", 50],
    "pref42": ["都道府県", "熊本", 50],
    "pref43": ["都道府県", "大分", 50],
    "pref44": ["都道府県", "宮崎", 50],
    "pref45": ["都道府県", "鹿児島", 50],
    "pref46": ["都道府県", "沖縄", 50]
}
let remain_achievement_list = {};
Object.assign(remain_achievement_list, achievement_list);

let got_achievement_list = {};

chrome.storage.local.get("got_achievement_list", function(value) {
    setTimeout(loading, 500);
    if (value.got_achievement_list === undefined) return;
    got_achievement_list = value.got_achievement_list;
});

let loading = function() {
    $.each(got_achievement_list, function(id, column) {
        delete remain_achievement_list[id];
    });


    if ($("nav.css-1dbjc4n.r-1habvwh.r-eqz5dr").length === 0) setTimeout(loading, 500);
    $("nav.css-1dbjc4n.r-1habvwh.r-eqz5dr").children().eq(3).after('<div id="kusotui_menu_btn" aria-expanded="false" aria-haspopup="true" aria-label="ツイートコレクター" role="button" data-focusable="true" tabindex="0" class="css-18t94o4 css-1dbjc4n r-1habvwh r-6koalj r-eqz5dr r-16y2uox r-1ny4l3l r-1ag2gil r-13qz1uu" data-testid="AppTabBar_More_Menu"><div class="css-1dbjc4n r-1awozwy r-sdzlij r-18u37iz r-1777fci r-dnmrzs r-1sp51qo r-o7ynqc r-6416eg"><div class="css-1dbjc4n">' +
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-book"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>' +
        '</div><div dir="auto" class="css-901oao css-bfa6kz r-18jsvk2 r-1tl8opc r-1b6yd1w r-b88u0q r-ad9z0x r-1joea0r r-y3t9qe r-bcqeeo r-qvutc0"><span class="css-901oao css-16my406 r-1tl8opc r-ad9z0x r-bcqeeo r-qvutc0">ツイートコレクター</span></div></div></div>');
    $("#kusotui_menu_btn").on("click", function() {
        location.href = "https://twitter.com/kusotui/collector";
    });
    if (location.href == "https://twitter.com/kusotui/collector") {
        $("#kusotui_menu_btn").attr("clicked", "true");
        let clicked = function() {
            setTimeout(clicked, 500);
            if (location.href == "https://twitter.com/kusotui/collector") return;
            $("#kusotui_menu_btn").attr("clicked", "false");
        }
        setTimeout(clicked, 500);
        let box = $(".css-1dbjc4n.r-1jgb5lz.r-1ye8kvj.r-13qz1uu");
        box.find("div").remove()
        box.append('<h1>クソツイコレクター</h1><div class="chart"><div class="column"><div>達成状況</div><div>ジャンル</div><div>解除条件</div></div></div>');
        let chart = box.find(".chart");
        console.log(achievement_list);
        console.log(remain_achievement_list);
        $.each(achievement_list, function(id, column) {
            if (got_achievement_list[id] === undefined) chart.append('<div class="column"><div>未達成</div><div>' + column[0] + '</div><div>非公開</div></div>');
            else chart.append('<div class="column"><div>達成済</div><div>' + column[0] + '</div><div>' + column[1] + '</div></div>');
        })
    }

    setTimeout(main, 500);
}


let main = function() {
    setTimeout(main, 500);

    let split = location.href.split('/');
    if (split[3] !== "home" && split[4] !== "status") return;

    $('article.css-1dbjc4n.r-1loqt21.r-18u37iz.r-1ny4l3l.r-1udh08x.r-1yt7n81.r-ry3cjt.r-o7ynqc.r-6416eg').each(function(eq, article) {
        let element = $(article).find('.css-901oao.r-18jsvk2.r-1tl8opc.r-a023e6.r-16dba41.r-ad9z0x.r-bcqeeo.r-bnwqim.r-qvutc0');
        if (element.attr("loaded") === "true") return;
        element.attr("loaded", "true");
        if (element[0] !== undefined)
            if (search_id(element[0].innerText));
            else return;
        else return;
        element.parents(".css-1dbjc4n.r-1iusvr4.r-16y2uox.r-1777fci.r-1mi0q7o").find(".css-1dbjc4n.r-k4xj1c.r-18u37iz.r-1wtj0ep > .css-1dbjc4n.r-1d09ksm.r-18u37iz.r-1wbh5a2").append('<div class="get_achievement_btn"><div dir="auto" aria-hidden="true" class="css-901oao r-m0bqgq r-1q142lx r-1tl8opc r-a023e6 r-16dba41 r-ad9z0x r-bcqeeo r-ou255f r-qvutc0"><span class="css-901oao css-16my406 r-1tl8opc r-ad9z0x r-bcqeeo r-qvutc0">·</span></div>' +
                '<a><span class="get_achievement_btn">実績解除</span></a></div>')
            .find("div.get_achievement_btn")
            .on("click", function() {
                let parents = $(this).parents(".css-1dbjc4n.r-1iusvr4.r-16y2uox.r-1777fci.r-1mi0q7o");
                let element = parents.find('.css-901oao.r-18jsvk2.r-1tl8opc.r-a023e6.r-16dba41.r-ad9z0x.r-bcqeeo.r-bnwqim.r-qvutc0');
                let href = parents.find("a.css-4rbku5.css-18t94o4.css-901oao.r-m0bqgq.r-1loqt21.r-1q142lx.r-1tl8opc.r-a023e6.r-16dba41.r-ad9z0x.r-bcqeeo.r-3s2u2q.r-qvutc0").attr("href");
                let id = search_id(element[0].innerText);
                if (remain_achievement_list[id] === undefined) {
                    $(this).remove();
                    return;
                }
                let span = $(this).find("span.get_achievement_btn");
                span.text(remain_achievement_list[id][2] + "exp獲得")
                    .off("click");
                let text = "実績解除[" + remain_achievement_list[id][0] + "]";
                let text1 = "解除条件[" + remain_achievement_list[id][1] + "]";
                setTimeout(function() {
                    span.text(text)
                }, 2000);
                setTimeout(function() {
                    span.text(text1)
                }, 4000);
                got_achievement_list[id] = href;
                delete remain_achievement_list[id];
                chrome.storage.local.set({
                    'got_achievement_list': got_achievement_list
                });
            })

    });
}


let search_id = function(text) {
    let ret = false;
    $.each(remain_achievement_list, function(id, column) {
        if (text.match(new RegExp(column[1])) !== null) {
            ret = id;
            return false;
        }
    });
    return ret;
}