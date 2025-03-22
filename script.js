document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("a");

    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            document.body.classList.add("fade-out");

            setTimeout(() => {
                window.location = this.href;
            }, 500);
        });
    });
});