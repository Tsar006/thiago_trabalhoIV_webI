function myFunction(x) {
    x.classList.toggle("change");
    var links = document.getElementById("myLinks");
    if (links.style.display === "block") {
        links.style.display = "none";
    } else {
        links.style.display = "block";
    }
}
