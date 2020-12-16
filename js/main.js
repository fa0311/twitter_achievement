let main = function() {
    setTimeout(main, 500);
    if (location.href !== "https://twitter.com/home") {
        return;
    }
    $('article.css-1dbjc4n.r-1loqt21.r-18u37iz.r-1ny4l3l.r-1udh08x.r-1yt7n81.r-ry3cjt.r-o7ynqc.r-6416eg').each(function(eq, article) {
        let element = $(article).find('.css-901oao.r-18jsvk2.r-1tl8opc.r-a023e6.r-16dba41.r-ad9z0x.r-bcqeeo.r-bnwqim.r-qvutc0');
        if (element.attr("loaded") !== "true") {
            element.attr("loaded", "true");
            if (element[0] !== undefined)
                if (get_exp(element[0].innerText) == 0) return;
                else;
            else return;
            element.parents(".css-1dbjc4n.r-1iusvr4.r-16y2uox.r-1777fci.r-1mi0q7o").find(".css-1dbjc4n.r-k4xj1c.r-18u37iz.r-1wtj0ep > .css-1dbjc4n.r-1d09ksm.r-18u37iz.r-1wbh5a2").append('<div dir="auto" aria-hidden="true" class="css-901oao r-m0bqgq r-1q142lx r-1tl8opc r-a023e6 r-16dba41 r-ad9z0x r-bcqeeo r-ou255f r-qvutc0"><span class="css-901oao css-16my406 r-1tl8opc r-ad9z0x r-bcqeeo r-qvutc0">·</span></div>' +
                    '<a><span class="get_achievement_btn">実績解除</span></a>')
                .find("span.get_achievement_btn")
                .on("click", function() {
                    let element = $(this).parents(".css-1dbjc4n.r-1iusvr4.r-16y2uox.r-1777fci.r-1mi0q7o").find('.css-901oao.r-18jsvk2.r-1tl8opc.r-a023e6.r-16dba41.r-ad9z0x.r-bcqeeo.r-bnwqim.r-qvutc0');
                    $(this).text(get_exp(element[0].innerText) + "exp獲得")
                        .off("click");
                    let text = "該当ワード" + get_exp_details(element[0].innerText);
                    let that = $(this);
                    setTimeout(function() {
                        that.text(text)
                    }, 1000);
                    get_exp_remove(element[0].innerText);
                })
        }
    });
}
setTimeout(main, 500);

let achievement_list = [
    [10, ["コロナ", "風邪"]],
    [10, ["チー牛"]],
    [10, ["\\(\\)"]]
];
let get_exp = function(text) {
    let r = 0;
    $.each(achievement_list, function(index, column) {
        $.each(column[1], function(index, value) {
            if (text.match(new RegExp(value)) === null) return false;
            if (column[1].length == index + 1) r = column[0];
        });
        if (r > 0) return false;
    });
    return r;
}

let get_exp_details = function(text) {
    let r = "";
    $.each(achievement_list, function(index, column) {
        let d = "";
        $.each(column[1], function(index, value) {
            d = d + "[" + value + "]";
            if (text.match(new RegExp(value)) === null) return false;
            if (column[1].length == index + 1) r = d;
        });
        if (r != "") return false;
    });
    return r;
}
let get_exp_remove = function(text) {
    $.each(achievement_list, function(column_eq, column) {
        let d = "";
        $.each(column[1], function(index, value) {
            d = d + "[" + value + "]";
            if (text.match(new RegExp(value)) === null) return false;
            if (column[1].length == index + 1) achievement_list.splice(column_eq, 1);
        });
    });
}