document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.getElementById("registrationForm");
    const contactMethodSelect = document.getElementById("contactMethod");
    const messengerOptions = document.getElementById("messengerOptions");
    const messengerSelect = document.getElementById("messenger");
    const whatsappNumber = document.getElementById("whatsappNumber");
    const telegramUsername = document.getElementById("telegramUsername");
    const successMessage = document.getElementById("successMessage");

    contactMethodSelect.addEventListener("change", function () {
        if (this.value === "write") {
            messengerOptions.style.display = "block";
        } else {
            messengerOptions.style.display = "none";
            whatsappNumber.style.display = "none";
            telegramUsername.style.display = "none";
        }
    });

    messengerSelect.addEventListener("change", function () {
        if (this.value === "whatsapp") {
            whatsappNumber.style.display = "block";
            telegramUsername.style.display = "none";
        } else if (this.value === "telegram") {
            whatsappNumber.style.display = "none";
            telegramUsername.style.display = "block";
        } else {
            whatsappNumber.style.display = "none";
            telegramUsername.style.display = "none";
        }
    });

    registrationForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const formData = {
            firstName: document.getElementById("firstName").value,
            lastName: document.getElementById("lastName").value,
            age: document.getElementById("age").value,
            language: document.getElementById("language").value,
            role: document.getElementById("role").value,
            course: document.getElementById("course").value,
            phoneNumber: document.getElementById("phoneNumber").value,
            contactMethod: document.getElementById("contactMethod").value,
            messenger: document.getElementById("messenger").value,
            whatsapp: document.getElementById("whatsapp").value,
            telegram: document.getElementById("telegram").value,
        };

        console.log(formData);

        alert('Успешно зарегистрировано! Наши менеджеры свяжутся с вами в ближайшее время.');

        registrationForm.reset();
        messengerOptions.style.display = "none";
        whatsappNumber.style.display = "none";
        telegramUsername.style.display = "none";
    });
});
