const body = document.querySelector("body");
const container = document.querySelector(".container");

function createSketchPad(size){
    for (let i = 0; i<size; i++){
        const row = document.createElement("div");
        row.setAttribute("class", "row");
        for (let j=0; j<size; j++){
            const div = document.createElement("div");
            div.style.padding = "12px";
            div.style.border = "2px solid black"
            row.appendChild(div);
    
        }
        container.appendChild(row);
    }
}

createSketchPad(16);

const divs = document.querySelectorAll(".row div");
divs.forEach(div => {
    const color = getRandomColor();
    console.log(color);
    div.addEventListener("mouseenter", ()=>{
        changeColor(div, color);
    });
    div.addEventListener("mouseleave", ()=>{
        changeColor(div, "white");
    }
    )
});

function getRandomColor(){
    const letter = "0123456789ABCDEF";
    let color = "#";
    for (let i=0; i<6; i++){
        color+=letter[Math.floor(Math.random()*16)];
    }
    return color;
}

function changeColor(elem, color){
    elem.style.backgroundColor = color;
}

const button = document.createElement("button");
button.textContent = "Click Me!";
body.insertBefore(button, body.firstChild);

button.addEventListener("click", ()=>{
    const input = prompt("Choose a grid size (1-100)");
    container.innerHTML = '';
    createSketchPad(input);
})



