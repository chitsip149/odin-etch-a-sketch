const body = document.querySelector("body");
const container = document.querySelector(".container");

for (let i = 0; i<16; i++){
    const row = document.createElement("div");
    row.setAttribute("class", "row");
    for (let j=0; j<16; j++){
        const div = document.createElement("div");
        div.style.padding = "12px";
        div.style.border = "2px solid black"
        row.appendChild(div);

    }
    container.appendChild(row);
}

const divs = document.querySelectorAll(".row div");
divs.forEach(div => {
    div.addEventListener("mouseenter", ()=>{
        changeColor(div, "blue");
    });
    div.addEventListener("mouseleave", ()=>{
        changeColor(div, "white");
    }
    )
});

function changeColor(elem, color){
    elem.style.backgroundColor = color;
}



