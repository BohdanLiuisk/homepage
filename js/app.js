//function on jQuery for animated scroll triger
(function ($) {
    "use strict";
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').on('click', function () {
        if (
            location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ?
                target :
                $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                anime({
                    targets: 'html, body',
                    scrollTop: target.offset().top,
                    duration: 100,
                    easing: 'easeInOutExpo'
                });
                return false;
            }
        }
    });
    $(".js-scroll-trigger").on('click', function () {
        $(".navbar-collapse").collapse("hide");
    });
    $("body").scrollspy({
        target: "#mainNav"
    });

})(jQuery);

//functions to send email
document.querySelector('.contact_form').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();
    
    let name = document.getElementById("form_name").value;
    let surname = document.getElementById("form_lastname").value;
    let email = document.getElementById("form_email").value;
    let message = document.getElementById("form_message").value;

    sendEmail(name, surname, email, message);

    document.querySelector('.contact_form').reset();
}

function sendEmail(name, surname, email, message) {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "bodialiusik31@gmail.com",
        Password: "izszxypyjewewclf",
        To: "bodialiusik31@gmail.com",
        From: "bodialiusik31@gmail.com",
        Subject: `${name} ${surname} sent you a message!`,
        Body: `Name: ${name}<br/>
               Surname: ${surname}<br/>
               Email: ${email}<br/>
               Message: <br/>${message}`
    })
    .then(function (message) {
        alert("mail sent successfully")
    });
}