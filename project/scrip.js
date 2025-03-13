document.addEventListener("DOMContentLoaded", function() {
    const projectLinks = document.querySelectorAll(".projects ul li");

    projectLinks.forEach((project) => {
        project.addEventListener("click", function() {
            alert("Bạn đang xem dự án: " + this.innerText);
        });
    });
});
