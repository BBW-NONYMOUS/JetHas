document.addEventListener("DOMContentLoaded", function () {
    let navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent immediate navigation

            let redirectMessage = document.createElement("div");
            redirectMessage.classList.add("redirect-message");
            redirectMessage.innerHTML = `
                <div class="redirect-box">
                    <p>Redirecting you to <strong>${this.textContent}</strong>...</p>
                    <div class="loader"></div>
                </div>
            `;
            document.body.appendChild(redirectMessage);

            setTimeout(() => {
                window.location.href = this.href; // Navigate after delay
            }, 2000); // 2-second delay for effect
        });
    });
});
