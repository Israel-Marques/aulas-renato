var click= document.getElementById("click");
var contClick=0;
click.addEventListener("click", ()=>{
    contClick= (contClick+1);
    click.innerHTML=`<h3>${contClick} clik </h3>`;
    

})