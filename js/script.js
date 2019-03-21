/* variable pour fixer le menu */
var position_top_raccourci = $("#menu").offset().top;

$(function() {

    //scroll
    $(".top-scroll a").on("click", function(event) {

        event.preventDefault();
        var hash = this.hash;

        $('body, html').animate({ scrollTop: $(hash).offset().top }, 900, function() { window.location.hash = hash; })

    });

});