function sendMail() {
    // Get form values
    let name = document.getElementById("names").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let phone = document.getElementById("number").value;
    let message = document.getElementById("message").value;

    // Construct mailto link
    let mailtoLink = `mailto:kartikkarle5151@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`
    )}`;

    // Open email client
    window.location.href = mailtoLink;
}
