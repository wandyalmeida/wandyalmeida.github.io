

const typed = new Typed(".auto-type", {
    strings: ["Developer Front-END", "Freelancer"],
    typeSpeed: 75,
    backSpeed: 75,
    loop: true
})

const bnt = document.querySelector('.see-more');
const see_more = document.querySelector('.hidden');

bnt.addEventListener('click', function() {
     if(see_more.classList.contains('hidden')){
        see_more.classList.remove('hidden');
        see_more.classList.add('visible');
        bnt.innerHTML = 'See less';

     }else{
        see_more.classList.add('hidden');
        see_more.classList.remove('visible');
        bnt.innerHTML = 'See more';
     }

});


const fadeOut = {
   
}
      const loaderWrapper =
      document.querySelector('.wrapper');
      loaderWrapper.classList.add('fade');
window.addEventListener('load', fadeOut);
