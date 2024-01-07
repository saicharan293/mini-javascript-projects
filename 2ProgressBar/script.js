const prev=document.getElementById('prev')
const next=document.getElementById('next')
const circles=document.querySelectorAll('.circle')
const progress=document.querySelector('.progress-bar')

let activeClass=1;
next.addEventListener('click',()=>{
    activeClass++;
    if(activeClass>circles.length){
        activeClass=circles.length
    }
    update();
})
prev.addEventListener('click',()=>{
    activeClass--;
    if(activeClass<1){
        activeClass=1
    }
    update();
})

function update(){
    circles.forEach((circle,index)=>{
        if(index<activeClass){
            circle.classList.add('active')
        }else{
            circle.classList.remove('active')
        }
    })
    const actives=document.querySelectorAll('.active')
    progress.style.width=(actives.length-1)/(circles.length-1)*100+'%';
    if(activeClass==1){
        prev.disabled=true
    }else if(activeClass==circles.length){
        next.disabled=true;
    }else{
        prev.disabled=false;
        next.disabled=false;
    }
}