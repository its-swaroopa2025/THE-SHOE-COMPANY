const btn=document.querySelector('#btn')
const header=document.querySelector('header')
btn.addEventListener('click',()=>{
    header.classList.toggle('open-menu')
})