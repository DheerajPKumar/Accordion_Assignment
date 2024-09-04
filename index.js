let headerContainer = document.querySelectorAll(
    ".container__accordions-header"
);

let panelContainer = document.querySelectorAll(".container__accordions-panel");

headerContainer.forEach(function (header) {
    var toggleButton = header.querySelector(".container__accordions-toggle");

    header.addEventListener("click", function () {
        let panel = this.nextElementSibling;

        if (panel.classList.contains("container__accordions-panelshow")) {
            panel.classList.remove("container__accordions-panelshow");
            toggleButton.classList.remove("ri-indeterminate-circle-fill");
            toggleButton.classList.add("ri-add-circle-line");
        } else {
            panelContainer
                .forEach(function (p) {
                    p.classList.remove("container__accordions-panelshow");
                    p.previousElementSibling
                        .querySelector(".container__accordions-toggle")
                        .classList.remove("ri-indeterminate-circle-fill");
                    p.previousElementSibling
                        .querySelector(".container__accordions-toggle")
                        .classList.add("ri-add-circle-line");
                });

            panel.classList.add("container__accordions-panelshow");
            toggleButton.classList.remove("ri-add-circle-line");
            toggleButton.classList.add("ri-indeterminate-circle-fill");
        }
    });
});
