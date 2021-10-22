function copyEmailToClipBoard() {
    var content = document.getElementById('email-copy-target').innerHTML;

    navigator.clipboard.writeText(content)
        .then(() => {
            console.log("Text copied to clipboard...")
        })
        .catch(err => {
            console.log('Something went wrong', err);
        })

}

function copyLinkedinToClipBoard() {
    var content = document.getElementById('linkedin-copy-target').innerHTML;

    navigator.clipboard.writeText(content)
        .then(() => {
            console.log("Text copied to clipboard...")
        })
        .catch(err => {
            console.log('Something went wrong', err);
        })

}

function collapseNavBar() {
    $('.navbar-collapse').collapse('hide');
}

function activateNavItem() {
    $(this).addClass("active");
    $(this).css("color", "green");
}

function deActivateNavItem() {
    $('.active').css("color", "black");
    $('.active').removeClass("active");
}

function shadowNavWhenScrolling() {
    var $nav = $(".navbar");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
}

$(document).ready(function () {
    $(document).scroll(shadowNavWhenScrolling);
    $("#email-copy-button").on("click", copyEmailToClipBoard);
    $("#linkedin-copy-button").on("click", copyLinkedinToClipBoard);

    $(".nav-link").on('click', collapseNavBar);
    $(".nav-link").on('click', deActivateNavItem);
    $(".nav-link").on('click', activateNavItem);

});