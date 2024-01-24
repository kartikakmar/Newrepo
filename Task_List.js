/*let div=document.querySelector('div');
let ul=document.querySelector('ul');
let li=document.querySelectorAll('li');

div.addEventListener("click",function(){
    console.log("div was clicked");
});

ul.addEventListener("click",function(event){
    event.stopPropagation();
    console.log("ul was clicked");
});

for(li of li){
    li.addEventListener("click",function(event){
        event.stopPropagation();
        console.log("li was clicked");
    });
    
}*/

let btn=document.querySelector('button');
let ul=document.querySelector('ul');
let inp=document.querySelector('input');

btn.addEventListener("click",function(){

    let item=document.createElement('li');
    item.innerText=inp.value;

    let delbtn=document.createElement('button');
    delbtn.innerText="delete";
    delbtn.classList.add('delete');
    item.appendChild(delbtn);
    

    ul.appendChild(item);
    console.log(inp.value);
    inp.value="";
});

ul.addEventListener('click',function(event){
    if(event.target.nodeName=="BUTTON"){
        let listitem=event.target.parentElement;
        listitem.remove();
        console.log("delete")

    }
});

/*let delbtn=document.querySelectorAll(".delete");
for(delbtn of delbtn){
    delbtn.addEventListener('click', function(){
        console.log("item is delete");
        let para=this.parentElement;
        para.remove();
    });
}*/
