   //getElementById("count-el").textContent
let saveEl=document.getElementById("save-el")
let countEl=document.getElementById("count-el")

console.log(saveEl)

let count=0

function increment(){
    count+=1
    countEl.textContent=count
    console.log(count)
}

function save(){
   let countstr=count +" - "
   saveEl.textContent+=countstr    //textcontent is used instead of innertext to gve space in o/p btwn - nd count.
   countEl.textContent=0
   count=0
}

function led(){
   countEl.textContent=document.getElementById("count-el").style.color=" blue";

}



