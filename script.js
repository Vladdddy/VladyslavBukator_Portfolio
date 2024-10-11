const menuIcon = document.getElementById("menuIcon");
const navbarContent = document.getElementById("navbarContent");
const headerNavbar = document.getElementById("headerNavbar");

menuIcon.onclick = function () {
    if (navbarContent.classList.contains("active")) {
        navbarContent.classList.remove("active");
        navbarContent.style.display = "none";
        headerNavbar.style.backgroundColor = "transparent";
        headerNavbar.style.borderBottom = "2px solid transparent";
    } else {
        navbarContent.classList.add("active");
        navbarContent.style.display = "flex";
        headerNavbar.style.backgroundColor = "#0b011732";
        headerNavbar.style.borderBottom = "2px solid #0b01174a";
    }
};