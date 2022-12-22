let burger=document.querySelector('.burger');
let navbar=document.querySelector('.navbar');
let raja=document.querySelector('.raja');

burger.addEventListener('click',()=>{
  navbar.classList.toggle('saroj');
  raja.classList.toggle('aryal');
  console.log('clicked');
})