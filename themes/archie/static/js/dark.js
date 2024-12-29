function setTheme(mode) {
    localStorage.setItem("site-theme", mode);

    if (mode === "dark") {
        document.getElementById("dark-css").disabled = false;
        document.getElementById("dark-mode-toggle").innerHTML = "<a class=\"border\"></a> <i data-feather=\"sun\"></i>";

    } else {
        document.getElementById("dark-css").disabled = true;
        document.getElementById("dark-mode-toggle").innerHTML = "<a class=\"border\"></a> <i data-feather=\"moon\"></i>";
    }

    feather.replace()
}

function toggleTheme() {
    if (localStorage.getItem("site-theme") === "light") {
        setTheme("dark");

    } else {
        setTheme("light");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    var savedTheme = localStorage.getItem("site-theme");

    if (savedTheme !== "light" && savedTheme !== "dark") {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme("dark");

        } else {
            setTheme("light");
        }

    } else {
        setTheme(savedTheme);
    }
});
