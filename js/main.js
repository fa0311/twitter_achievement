setTimeout(function() {
    if (location.href == "https://twitter.com/home") {
        let btn_position = $(".css-1dbjc4n.r-k4xj1c.r-18u37iz.r-1wtj0ep > .css-1dbjc4n.r-1d09ksm.r-18u37iz.r-1wbh5a2");
        $('.css-901oao.r-18jsvk2.r-1tl8opc.r-a023e6.r-16dba41.r-ad9z0x.r-bcqeeo.r-bnwqim.r-qvutc0').each(function(eq, element) {
            console.log($(element)[0].innerText);
        });
    }
}, 5000);