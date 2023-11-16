const navbar=document.querySelector(".navbar");
const nav=document.querySelector(".nav");
document.addEventListener("scroll",()=>{
   // console.log("scrolled")
    if(window.scrollY >100){
         nav.style="background-color:#472522ed";
    }else{
        nav.style="background-color:transparent"
    }
   
});
navbar.remove();
function clickBtn(e){
    console.log('Clicked...');
    e.name= e.name==='menu' ?'close':'menu';
    if(e.name==="menu"){
        navbar.remove();
    }else{
        nav.appendChild(navbar);
    }
}