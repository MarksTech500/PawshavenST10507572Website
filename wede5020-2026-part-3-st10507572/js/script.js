// Paws Haven Animal Rescue
// Main JavaScript file for navigation and form feedback.

document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    // Mobile navigation menu
    if (menuButton && navLinks) {
        menuButton.addEventListener("click", function () {
            navLinks.classList.toggle("open");

            const expanded = navLinks.classList.contains("open");
            menuButton.setAttribute("aria-expanded", expanded);
        });

        // Close the mobile menu after selecting a page.
        navLinks.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                navLinks.classList.remove("open");
                menuButton.setAttribute("aria-expanded", "false");
            });
        });
    }

    // Demonstration form handling.
    // This does not send information to a real server yet.
    const forms = document.querySelectorAll(".demo-form");

    forms.forEach(function (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            const message = form.querySelector(".form-message");

            if (message) {
                message.textContent =
                    "Thank you! Your enquiry has been recorded for this project demonstration.";
                message.classList.add("show");
            }

            form.reset();
        });
    });

    // Automatically update the footer year.
    const yearElements = document.querySelectorAll(".current-year");
    yearElements.forEach(function (element) {
        element.textContent = new Date().getFullYear();
    });
});

// PAWSHAVEN WEBSITE JAVASCRIPT

document.addEventListener("DOMContentLoaded", function () {

    // DONATION PAGE

    const donationButtons = document.querySelectorAll(".donate-btn");

    donationButtons.forEach(function (button) {

        button.addEventListener("click", function (event) {

            event.preventDefault();

            const amountText = this.textContent.trim();
            const amount = parseInt(amountText.replace(/\D/g, ""));

            if (isNaN(amount) || amount <= 0) {
                alert("Please select a valid donation amount.");
                return;
            }

            alert(
                "Thank you for supporting Pawshaven!\n\n" +
                "Your selected donation: R" + amount +
                "\n\nPlease contact our team for verified payment details."
            );

        });

    });


    // VACCINATION PAGE

    const priceCards = document.querySelectorAll(".price-card");

    priceCards.forEach(function (card) {

        card.addEventListener("click", function () {

            const heading = this.querySelector("h3");
            const label = this.querySelector(".price-label");

            if (!heading || !label) {
                return;
            }

            const price = heading.textContent.trim();
            const type = label.textContent.trim();

            alert(
                "PAWSHAVEN VACCINATION PROGRAMME\n\n" +
                type +
                "\nContribution: " + price +
                "\n\nFor more information, please contact our team."
            );

        });

    });


    // PROGRAMME INFORMATION

    const firstVaccination = 0;
    const annualVaccination = 150;

    console.log("Pawshaven Website Successfully Loaded!");
    console.log("First eligible vaccination: FREE");
    console.log("Annual vaccination contribution: R" + annualVaccination);

});
