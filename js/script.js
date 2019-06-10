$(document).ready(function () {
    $("#img1").click(function () {
        $("#par1").slideToggle();
        $("#img1").slidetoggle("slow");
    });

    $("#par1").click(function () {
        $("#img1").slideToggle();
        $("#par1").slidetoggle("slow");
    });

    $("#img2").click(function () {
        $("#par2").slideToggle();
        $("#img2").slidetoggle("slow");
    });

    $("#par2").click(function () {
        $("#img2").slideToggle();
        $("#par2").slidetoggle("slow");
    });

    $("#img3").click(function () {
        $("#par3").slideToggle();
        $("#img3").slidetoggle("slow");
    });

    $("#par3").click(function () {
        $("#img3").slideToggle();
        $("#par3").slidetoggle("slow");
    });

    $("#sub").click(function () {
        alert("Thanks for contacting us.We value your feedback.")
        
    });
$(".card").hover(function(){
    $(".img-description").fadeIn(2000);
    $(".img-description").fadeOut(2000);

});

$(".onTop").hover(function () {
        // over
        $(this).css({
            "opacity":"3",
            "transition":"1s"
        })
    }, function () {
        // out
        $(this).css({
            "opacity":"0"
        })
    }
);
});