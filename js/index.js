const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PHONE_REGEX = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3,4}[-\s.]?[0-9]{4,6}$/im;

window.onscroll = function () {
    myFunction();
};

const navBar = document.getElementById('nav-bar');
const scrollToTop = document.getElementById('scrollToTop');
scrollToTop.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
});

function myFunction() {
    if (window.pageYOffset > 60) {
        navBar.classList.add("header-bg");
        scrollToTop.classList.add('scroll-to-top-btn-img');
    }
    else {
        navBar.classList.remove("header-bg");
        scrollToTop.classList.remove('scroll-to-top-btn-img');
    }
}

const sendButton = document.getElementById('sendButton');
sendButton.addEventListener('click', function () {

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const emailId = document.getElementById('emailId').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const message = document.getElementById('message').value;

    if (firstName == '' || lastName == '' || emailId == '' || phoneNumber == '' || message == '') {
        alert('Please fill all details');
    }
    else if (EMAIL_REGEX.test(emailId)) {
        alert('Please enter a valid email');
    }
    else if (PHONE_REGEX.test(phoneNumber)) {
        alert('Please enter a valid phone number');
    }
    else
        console.log(firstName, lastName, emailId, phoneNumber, message);
});