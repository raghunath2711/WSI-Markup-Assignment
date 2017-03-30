$(document).ready(function () {
    
    /* Image selection functionality starts here*/
    $(".productVariants li").click(function () {
        var temp = $(this).find("a").find("img").attr("src").replace("small", "large");
        $(".productVariants li").removeClass("selectedImage");
        $(this).addClass("selectedImage");
        $("#largeImage").attr("src", temp)
    })
    /* Image selection functionality ends here*/

    $(".accordion-toggle").click(function () {
        var obj = $(this);
        window.setTimeout(function () {
            if (obj.hasClass("collapsed")) {
                obj.text("COLLAPSED");
            } else {
                obj.html("EXPANDED");
            }
        }, 50);
    })
});