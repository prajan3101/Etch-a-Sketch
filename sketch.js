const boxi = document.querySelector(".boxi");
const button =document.querySelector('.btn');


let n=16;
function createGrid(n,r,g,b){

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        let a=0.1;

    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    const box = document.createElement("div");
    box.classList.add("boxItem");
    box.style.opacity = "20";
    boxi.appendChild(box);
    box.addEventListener("mouseover", function () {
        a+=.1
      box.style.backgroundColor = `rgb(${r},${g},${b},${a})`;
    });
}
}
}
createGrid(n)
button.addEventListener('click',function(){
    n =prompt('Enter the number of grids')
    boxi.innerHTML=""
    createGrid(n);

})