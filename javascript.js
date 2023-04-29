// const menumobile = document.querySelector("#menu");
// let nome = "Teu Jean";
// console.log(nome);
// alert(nome);
// const corpo = document.querySelector(body);
// corpo .style.background = "#000"

const menu = document.querySelector("#menu");
const menu_mobile = document.querySelector(".menu_mobile");

menu.style.maxHeight = "0px";

menu_mobile.addEventListener("click",()=>{
    if(menu.style.maxHeight == "0px")
    {
        menu.style.maxHeight = "150px";
    }
    else
    {
        menu.style.maxHeight ="0px";
    }
});