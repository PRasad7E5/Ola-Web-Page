
var buttons = document.querySelectorAll('.downlod-butt');
 buttons.forEach(btn =>{
     btn.addEventListener('click', function(e){

        let x=e.clientX -  e.target.offsetLeft;
         let y=e.clientY - e.target.offsetTOP;

         let ripples= document.createElement('span');
         ripples.style.left=  x +  'px';
         ripples.style.top=  y  +  'px';
         this.appendChild(ripples);

         setTimeout(()=>{ripples.remove()    },1000);
     })
 })
