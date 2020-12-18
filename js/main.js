(function() {
    // 一意のid:[ 実績の名前, 正規表現, ポイント]
    let achievement_list = {
        "a": ["チュートリアル", ".*", 10],
        "b": ["コロナおじさん", "コロナはただの風邪", 10],
        "c": ["チーズ牛丼", "(チーズ牛丼|チー牛)", 10]
    };

    let got_achievement_list = {};
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
                    if (achievement_list[id] === undefined) {
                        $(this).remove();
                        return;
                    }
                    let span = $(this).find("span.get_achievement_btn");
                    span.text(achievement_list[id][2] + "exp獲得")
                        .off("click");
                    let text = "実績解除[" + achievement_list[id][0] + "]";
                    setTimeout(function() {
                        span.text(text)
                    }, 2000);
                    got_achievement_list[id] = href;
                    delete achievement_list[id];
                })

        });
    }


    let search_id = function(text) {
        let ret = false;
        $.each(achievement_list, function(id, column) {
            if (text.match(new RegExp(column[1])) !== null) {
                ret = id;
                return false;
            }
        });
        return ret;
    }


})()