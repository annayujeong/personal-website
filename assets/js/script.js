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
}

function deActivateNavItem() {
    $('.active').removeClass("active");
}

function shadowNavWhenScrolling() {
    var $nav = $(".navbar");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
}

/** project overlay */
function displayProjectDetails() {
    var overlayElement = this.id + "-overlay";
    document.getElementById(overlayElement).style.display = "block";

    // disable document body scrolling when the overlay elements are on 'on'
    document.body.style.overflow = 'hidden';

    document.getElementById("contacts").style.backgroundColor = red;
}

function hideProjectDetails() {
    document.getElementById("green-space-overlay").style.display = "none";
    document.getElementById("covaware-overlay").style.display = "none";
    document.getElementById("trackerly-overlay").style.display = "none";

    // un-disable document body scrolling when the overlay elements are on 'on'
    document.body.style.overflow = 'scroll';
}

/** change color of nav bar element on scroll */
function changeNavElementColor(id, start, end) {
    $(window).scroll(() => {
        var scroll = $(this).scrollTop();
        if (scroll > start && scroll < end) {
            $("#" + id).addClass("active");
        } else {
            $("#" + id).removeClass("active");
        }
    });
}

function changeNavElementColorOnScroll() {
    changeNavElementColor("nav-home", 0, 599);
    changeNavElementColor("nav-about", 600, 1299);
    changeNavElementColor("nav-education", 1300, 1799);
    changeNavElementColor("nav-skills", 1800, 2299);
    changeNavElementColor("nav-projects", 2300, 3199);
    changeNavElementColor("nav-contacts", 3200, 4000);
}

$(document).ready(() => {
    $(document).scroll(shadowNavWhenScrolling);
    changeNavElementColorOnScroll();

    $(".nav-link").on('click', collapseNavBar);
    $(".nav-link").on('click', deActivateNavItem);
    $(".nav-link").on('click', activateNavItem);

    $(".project-body").on("click", displayProjectDetails);
    $(".overlay .fa-times").on("click", hideProjectDetails);

    $("#email-copy-button").on("click", copyEmailToClipBoard);
    $("#linkedin-copy-button").on("click", copyLinkedinToClipBoard);
});
