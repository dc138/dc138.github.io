function setTheme(mode) {
    localStorage.setItem("site-theme", mode);

    let darkMeta = document.querySelector("meta[name=darkreader-lock]");
    if (darkMeta !== null) {
        darkMeta.remove();
    }

    if (mode === "dark") {
        document.getElementById("dark-css").disabled = false;
        document.getElementById("dark-mode-toggle").innerHTML = "<i data-feather=\"sun\"></i>";

        darkMeta = document.createElement("meta");
        darkMeta.name = "darkreader-lock";
        document.head.appendChild(darkMeta);

    } else {
        document.getElementById("dark-css").disabled = true;
        document.getElementById("dark-mode-toggle").innerHTML = "<i data-feather=\"moon\"></i>";
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
    document.getElementById("dark-mode-toggle").style.display = "unset";
    const savedTheme = localStorage.getItem("site-theme");

    if (savedTheme === "light" || savedTheme === "dark") {
        setTheme(savedTheme);

    } else {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme("dark");

        } else {
            setTheme("light");
        }
    }
});
