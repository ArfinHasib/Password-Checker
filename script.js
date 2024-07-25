let container = document.querySelector(".container");
let password = document.querySelector("#YourPassword");
let show = document.querySelector(".show");

const Strength = (passwordValue) => {
    let i = 0;

    if (passwordValue.length > 6) i++;

    if (passwordValue.length >= 10) i++;

    if (/[A-Z]/.test(passwordValue)) i++;

    if (/[0-9]/.test(passwordValue)) i++;

    if (/[A-Za-z0-8]/.test(passwordValue)) i++;

    return i;
};

document.addEventListener("keyup", (e) => {
    let passwordValue = password.value;

    let strength = Strength(passwordValue);

    if (strength <= 2) {
        container.classList.add("weak");
        container.classList.remove("moderate");
        container.classList.remove("strong");
    } else if (strength >= 2 && strength <= 4) {
        container.classList.remove("weak");
        container.classList.add("moderate");
        container.classList.remove("strong");
    } else {
        container.classList.remove("weak");
        container.classList.remove("moderate");
        container.classList.add("strong");
    }
});

show.onclick = function () {
    if (password.type === "password") {
        password.setAttribute("type", "text");
        show.classList.add("hide");
    } else {
        password.setAttribute("type", "password");
        show.classList.remove("hide");
    }
};
