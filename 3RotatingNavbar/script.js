
const container=document.querySelector('.container')
document.querySelector('#open').addEventListener('click',()=>container.classList.add('show-nav'))
document.querySelector('#close').addEventListener('click',()=>container.classList.remove('show-nav'))