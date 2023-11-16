
const panels = document.querySelectorAll(".panel");

let array=["hola","fernando"];



panels.forEach(panel =>{
    panel.addEventListener('click',() =>{
        removeActiovveClasses();
        panel.classList.add('active')
    })
})

function removeActiovveClasses(){
    panels.forEach(panel=>{
        panel.classList.remove('active')
    })
}