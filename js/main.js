// 一意のid:[ 実績の名前, 正規表現, ポイント]
let achievement_list = {
    "a": ["チュートリアル", ".*", 10],
    "b": ["コロナおじさん", "コロナはただの風邪", 10],
    "c": ["チーズ牛丼", "(チーズ牛丼|チー牛)", 10]
};

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
    $("nav.css-1dbjc4n.r-1habvwh.r-eqz5dr").children().eq(3).after('<div id="kusotui_menu_btn" aria-expanded="false" aria-haspopup="true" aria-label="クソツイコレクター" role="button" data-focusable="true" tabindex="0" class="css-18t94o4 css-1dbjc4n r-1habvwh r-6koalj r-eqz5dr r-16y2uox r-1ny4l3l r-1ag2gil r-13qz1uu" data-testid="AppTabBar_More_Menu"><div class="css-1dbjc4n r-1awozwy r-sdzlij r-18u37iz r-1777fci r-dnmrzs r-1sp51qo r-o7ynqc r-6416eg"><div class="css-1dbjc4n">' +
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-book"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>' +
        '</div><div dir="auto" class="css-901oao css-bfa6kz r-18jsvk2 r-1tl8opc r-1b6yd1w r-b88u0q r-ad9z0x r-1joea0r r-y3t9qe r-bcqeeo r-qvutc0"><span class="css-901oao css-16my406 r-1tl8opc r-ad9z0x r-bcqeeo r-qvutc0">クソツイコレクター</span></div></div></div>');
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
        box.append('<h1>クソツイコレクター</h1><div class="chart"><div class="column"><div>達成状況</div><div>実績名</div><div>解除条件</div></div></div>');
        let chart = box.find(".chart");
        console.log(achievement_list);
        console.log(remain_achievement_list);
        $.each(achievement_list, function(id, column) {
            if (got_achievement_list[id] === undefined) chart.append('<div class="column"><div>未達成</div><div>' + column[0] + '</div><div>' + column[1] + '</div></div>');
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
                setTimeout(function() {
                    span.text(text)
                }, 2000);
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