//    Written by ZanuZoss

document.addEventListener("DOMContentLoaded", function() {
    var okButtonVersion = document.querySelector(".popup-version .button-ok");
    var okButtonAbout = document.querySelector(".popup-about .button-ok-mb1");
    var okButtonSocials = document.querySelector(".popup-socials .button-ok-mb3");
    var okButtonProjects = document.querySelector(".popup-projects .button-ok-mb2");
    var okButtonSpecial = document.querySelector(".popup-special .button-ok-mb5");
    var popupVersion = document.querySelector(".popup-version");
    var popupAbout = document.querySelector(".popup-about");
    var popupSocials = document.querySelector(".popup-socials");
    var popupProjects = document.querySelector(".popup-projects");
    var popupSpecial = document.querySelector(".popup-special");

    function handleClickOKVersion() {
        popupVersion.style.display = "none";
    }

    function handleClickOKAbout() {
        popupAbout.style.display = "none";
    }

    function handleClickOKSocials() {
        popupSocials.style.display = "none";
    }

    function handleClickOKProjects() {
        popupProjects.style.display = "none";
    }

    function handleClickOKSpecial() {
        popupSpecial.style.display = "none";
    }

    okButtonVersion.addEventListener("click", handleClickOKVersion);
    okButtonAbout.addEventListener("click", handleClickOKAbout);
    okButtonSocials.addEventListener("click", handleClickOKSocials);
    okButtonProjects.addEventListener("click", handleClickOKProjects);
    okButtonSpecial.addEventListener("click", handleClickOKSpecial);

    var mb1Link = document.querySelector(".mb1");

    mb1Link.addEventListener("click", function() {
        popupAbout.style.display = "block";
        popupSocials.style.display = "none";
        popupProjects.style.display = "none";
        popupSpecial.style.display = "none";
    });

    var mb3Link = document.querySelector(".mb3");

    mb3Link.addEventListener("click", function() {
        popupSocials.style.display = "block";
        popupAbout.style.display = "none";
        popupProjects.style.display = "none";
        popupSpecial.style.display = "none";
    });

    var mb2Link = document.querySelector(".mb2");

    mb2Link.addEventListener("click", function() {
        popupProjects.style.display = "block";
        popupAbout.style.display = "none";
        popupSocials.style.display = "none";
        popupSpecial.style.display = "none";
    });

    var mb5Link = document.querySelector(".mb5");

    mb5Link.addEventListener("click", function() {
        popupSpecial.style.display = "block";
        popupAbout.style.display = "none";
        popupSocials.style.display = "none";
        popupProjects.style.display = "none";
    });
});
