// Type animation
const typed = new Typed(".auto-type", {
    strings: ["Developer Front-END", "Freelancer"],
    typeSpeed: 75,
    backSpeed: 75,
    loop: true
})

// nav Menu
const navMenu = document.querySelector("#navMenu");

navMenu.addEventListener("click", () => {
   navMenu.classList.toggle("active");
});

// See more button
const btn = document.querySelector('.see-more');
const see_more = document.querySelectorAll('.hidden');

btn.addEventListener('click', function() {
    see_more.forEach(function(element) {
        if(element.classList.contains('hidden')){
            element.classList.remove('hidden');
            element.classList.add('visible');
            btn.innerHTML = 'See less';
        } else {
            element.classList.add('hidden');
            element.classList.remove('visible');
            btn.innerHTML = 'See more';
        }
    });
});

// Loader
const fadeOut = () => {
   const loaderWrapper =
   document.querySelector('.wrapper');
   loaderWrapper.classList.add('fade');
}
     
window.addEventListener('load', fadeOut);

function sendEmail(){
    Email.send({
        SecureToken : "4eb02015-ff65-40b8-9efa-2d0212e511a9",
        To : 'wandwilson.silva@gmail.com',
        From : 'wandwilson.silva@gmail.com',
        Subject : "New oportunity",
        Body : "Name: " + document.getElementById("name").value
            + "<br> Email: " + document.getElementById("email").value
            + "<br> Phone no : " + document.getElementById("phone").value
            + "<br> Message: " + document.getElementById("message").value 
        }).then(
            message => alert("Form submission successful!")
            )};



