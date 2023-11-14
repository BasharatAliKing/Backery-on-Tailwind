const navbar=document.querySelector(".navbar");
const nav=document.querySelector(".nav");
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