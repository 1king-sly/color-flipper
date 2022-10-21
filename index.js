const hex=[1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const color = document.getElementById("color");
const btn = document.getElementById("btn");



btn.addEventListener("click", function(){
    let  hexcolor="#"
    for(i = 0;i<6;i++){
        hexcolor += hex[randomnumber()];
    }
    document.body.style.backgroundColor = hexcolor;
    color.textContent = hexcolor;
})
function randomnumber(){
    return Math.floor(Math.random()*hex.length);
}