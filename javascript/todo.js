// export default class localStorage(){
// 	constructor(){
// 		this.tasks=JSON.parse(localStorage.getItem('tasks')) || [];
// 	}
// 
// }
// export default class LocalStorage {
// let addtodobutton = document.getElementById("addtodo");
// let todocontainer = document.getElementById("todocontainer");
// let inputfield = document.getElementById("inputfield");
// 
// addtodobutton.addEventListener('click', function () {
// 	var paragraph = document.createElement("p");
// 	paragraph.classList.add("paragraph-styling");
// 	paragraph.innerText = inputfield.value;
// 	todocontainer.appendChild(paragraph);
// 	inputfield.value = "";
// 	paragraph.addEventListener('click',function(){
// 	paragraph.style.textDecoration= "line-through";
//     paragraph.addEventListener('dblclick',function(){
// 	todocontainer.removeChild(paragraph);
// })
// })
// })
//}
//

$(".add").on("click",()=>{
    index = localStorage.getItem("index");
    if(index==null){
        index = 0;
        localStorage.setItem("index",index);
    }
    item = $("#forminput").val();
    if(item!=="")
    {
    localStorage.setItem(Number(index)+1,item);
    localStorage.setItem("index",Number(index)+1);
    $("#forminput").val("");
    element = ' <div id="'+index+'"> <input type="checkbox" name="checkbox" onChange="del('+index+')" id="checkbox"><p>'+item+'</p></div><br>';
    $(".listitem").append(element);
    }
});

window.addEventListener("load",()=>{
    index = localStorage.getItem("index");
    if(index!=null){
        for(i=1;i<=index;i++){
            item = localStorage.getItem(i);
            if(item!=null){
            element = '<div id="'+i+'"> <input type="checkbox" name="checkbox"  onChange="del('+i+')" id="checkbox"><p>'+item+'</p></div><br>';
        $(".listitem").append(element);
            }
        }
    }
    if($(".listitem").html().trim()==""){
        index = 0;
        localStorage.setItem("index",0);
    }
});
const del = (index) =>{
    localStorage.removeItem(index);
    $("#"+index).remove();
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// paragraph.addEventListener('click',function(){
// 	paragraph.style.text-decoration="line-through";
// })
// 
// paragraph.addEventListener('dblclick',function(){
// 	todocontainer.removeChild(paragraphs);
// })

/////////////////////////////////////////////////////////////////////////////////////
// const inputVal=document.getElementsByClassName('inputVal')[0];
// const addTaskBtn=document.getElementsByClassName('btn')[0];
// addTaskBtn.addEventListener('click',function(){
// 	if(inputVal.value.trim()!=0){
// let localItems=JSON.parse(localStorage.getItem('localItem'))
// if(localItems===null){
// 	taskList=[]
// }
// else{
// 	taskList=localItems;
// }
// taskList.push(inputVal.value)
// localStorage.setItem('localItem',JSON.stringify(taskList));
// }
// showItem()
// })
// 
// function showItem(){
// 	let localItems=JSON.parse(localStorage.getItem('localItem'))
// if(localItems===null){
// 	taskList=[]
// }
// else{
// 	taskList=localItems;
// }
// 
// let html='';
// let itemShow=document.querySelector('.todoLists');
// taskList.forEach((data,index))=>{
// taskLis.forEach((data,index)=>{
	// html+=
	// <div class="todoList">
	// 	<p class="pText" >${data} </p>
	// 	<button
	// </div>
// }