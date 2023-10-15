const DEFAULT_COLOR = '#fefefe';
const DEFAULT_MODE = 'color';
const DEFAULT_SIZE = 16;

let currentColor = DEFAULT_COLOR;
let currentMode = DEFAULT_MODE;
let currentSize = DEFAULT_SIZE;
let mouseDown = false

document.addEventListener('mousedown',()=>mouseDown=true);
document.addEventListener('mouseup',()=>mouseDown=false);


function setCurrentColor(newColor) {
    currentColor = newColor
  }
  
  function setCurrentMode(newMode) {
    //activateButton(newMode)
    currentMode = newMode
  }
  
const sketch= document.querySelector('.sketch-area');
const size_label=document.querySelector('#sketch_size');
const edge_size=document.querySelector("#edge_size")
edge_size.addEventListener("input",()=>{
    size_label.textContent=`${edge_size.value} x ${edge_size.value}`;
    currentSize=edge_size.value;
    reRenderGrid();
})

function reRenderGrid(){
    clearGrid();
    renderGrid();
}

function renderGrid(){
    sketch.style.gridTemplateColumns= `repeat(${currentSize}, 1fr)`;
    sketch.style.gridTemplateRows= `repeat(${currentSize}, 1fr)`;
    for(let i=0 ;i<currentSize*currentSize;i++)
    {
        let gridElement =document.createElement('div');
        gridElement.classList.add('grid-Element');
        gridElement.addEventListener('mousedown',changeColor);
        gridElement.addEventListener('mouseover',changeColor);
        sketch.appendChild(gridElement);
        console.log(sketch);
    }
}

function changeColor(e){
    if(e.type==='mouseover' && !mouseDown)return;
    if(currentMode ==='random'){
        let randomR=Math.floor(Math.random()*257);
        let randomB=Math.floor(Math.random()*257);
        let randomG=Math.floor(Math.random()*257);
        e.target.style.backgroundColor=`rgb(${randomR},${randomB},${randomG})`;
    }
    else if(currentMode==='color')
        e.target.style.backgroundColor=currentColor;
    else if(currentMode==='eraser')
        e.target.style.backgroundColor='#3071a9';
        e.target.style.backgroundColor='#3071a9';
}

function clearGrid(){
    sketch.innerHTML="";
}
window.onload=()=>{
    renderGrid();
    //activateButton(DEFAULT_MODE)
}