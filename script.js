var calScreen=document.getElementById('calScreen');
var ce=()=>{
    calScreen.value="";
}
var equal=()=>{
    calScreen.value=eval(calScreen.value);
}
var put=(char)=>{
    calScreen.value+=char;
}
var back=()=>{
    var a=calScreen.value;
    a.substring(1);
    calScreen.value=a.substr(0,a.length-1);
}
window.addEventListener('keydown',function(e){
    const btn=document.querySelector(`button[data-key="${e.keyCode}"]`);
    btn.click();
    btn.classList.add('btn-click');
    setTimeout(()=>{   
    btn.classList.remove('btn-click')
    },100);
})
