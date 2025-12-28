
const searchBtn = document.querySelector(".search-btn");
const skillInput = document.querySelector(".search-bar input[type='text']");
const expSelect = document.querySelector(".search-bar select");
const locationInput = document.querySelectorAll(".search-bar input[type='text']")[1];


searchBtn.addEventListener("click", function () {
    const skills = skillInput.value.trim();
    const experience = expSelect.value;
    const location = locationInput.value.trim();

    if (skills === "" || experience === "Select experience" || location === "") {
        alert("Please fill all fields before searching!");
        return;
    }

    
    alert(
        `🔎 Searching for:\n\nSkills: ${skills}\nExperience: ${experience}\nLocation: ${location}`
    );
});


const nav = document.querySelector("nav");
const logo = document.querySelector(".logo");

logo.addEventListener("click", () => {
    nav.classList.toggle("open");
});
