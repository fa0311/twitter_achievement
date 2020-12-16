let main = function() {
    if (location.href == "https://twitter.com/home") {

        $('article.css-1dbjc4n.r-1loqt21.r-18u37iz.r-1ny4l3l.r-1udh08x.r-1yt7n81.r-ry3cjt.r-o7ynqc.r-6416eg').each(function(eq, article) {
            let element = $(article).find('.css-901oao.r-18jsvk2.r-1tl8opc.r-a023e6.r-16dba41.r-ad9z0x.r-bcqeeo.r-bnwqim.r-qvutc0');
            if (element.attr("loaded") !== "true") {
                element.attr("loaded", "true");
                if (element[0].innerText !== undefined) console.log(element[0].innerText);
                element.parents(".css-1dbjc4n.r-1iusvr4.r-16y2uox.r-1777fci.r-1mi0q7o").find(".css-1dbjc4n.r-k4xj1c.r-18u37iz.r-1wtj0ep > .css-1dbjc4n.r-1d09ksm.r-18u37iz.r-1wbh5a2").append('<div dir="auto" aria-hidden="true" class="css-901oao r-m0bqgq r-1q142lx r-1tl8opc r-a023e6 r-16dba41 r-ad9z0x r-bcqeeo r-ou255f r-qvutc0"><span class="css-901oao css-16my406 r-1tl8opc r-ad9z0x r-bcqeeo r-qvutc0">·</span></div>' +
                    '<span class="get_achievement_btn">実績解除</span>');
            }
        });
    }
    setTimeout(main, 500);
}
setTimeout(main, 500);