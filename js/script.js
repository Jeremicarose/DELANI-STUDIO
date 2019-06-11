$(document).ready(function () {
    $("#img1").click(function () {
        $("#par1").slideToggle();
        $("#img1").hide();
    });

    $("#par1").click(function () {
        $("#img1").slideToggle();
        $("#par1").hide();
    });

    $("#img2").click(function () {
        $("#par2").slideToggle();
        $("#img2").hide();
    });

    $("#par2").click(function () {
        $("#img2").slideToggle();
        $("#par2").hide();
    });

    $("#img3").click(function () {
        $("#par3").slideToggle();
        $("#img3").hide();
    });

    $("#par3").click(function () {
        $("#img3").slideToggle();
        $("#par3").hide();
    });

    $("#sub").click(function () {
        alert("Thanks for contacting us.We value your feedback.")

    });

    $(".onTop").hover(function () {
        $(this).css({
            "opacity": "3",
            "transition": "1s"
        })
    }, function () {

        $(this).css({
            "opacity": "0"
        })
    }
    );
});