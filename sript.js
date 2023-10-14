
const sketch= document.querySelector('.sketch-area');
const size_label=document.querySelector('#sketch_size');
const edge_size=document.querySelector("#edge_size")
edge_size.addEventListener("input",()=>{
    size_label.textContent=`${edge_size.value} x ${edge_size.value}`;
})