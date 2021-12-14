var windowsize = window.matchMedia( "(min-width: 1300px)" );
if (windowsize.matches) {
document.getElementById("impressum-id").innerHTML = "IMPRESSUM";
document.getElementById("sponsoren-id").innerHTML = "SPONSOREN";
document.getElementById("daten-id").innerHTML = "DATENSCHUTZERKLÄRUNG";
document.getElementById("team-id").innerHTML = "TEAM";
document.getElementById("instagram-id").innerHTML = "INSTAGRAM";
};
scale(windowsize) // Call listener function at run time
windowsize.addListener(scale) // Attach listener function on state changes
