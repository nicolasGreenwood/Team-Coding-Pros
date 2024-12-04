const aboutSection = document.getElementById("about-section");

window.addEventListener("scroll", () => {
    if (aboutSection.getBoundingClientRect().top < window.innerHeight / 2) {
        aboutSection.style.backgroundColor = "black";
    } else {
        aboutSection.style.backgroundColor = "red";
        console.log("Red!");
    }
})
