//const titalinput = document.querySelector('form-control');

const submitButton = document.querySelector('.submit');
const inputtitle = document.querySelector('#title');
const authorinput = document.querySelector('#author');
const isbninput = document.querySelector('#isbn');
const tablebody = document.querySelector('#book-list');


//events

submitButton.addEventListener('click',addData);
tablebody.addEventListener('click',delData);






//function

function addData(event){
 event.preventDefault();
 console.log('hello');
 //create tr
 const tablerow = document.createElement('tr');
 tablerow.classList.add("table-light");
 tablerow.innerHTML=`<td>${inputtitle.value}</td><td>${authorinput.value}</td><td>${isbninput.value}</td><td> <button class="fas fa-trash delete"></button></td>`;
 tablebody.appendChild(tablerow);
 //clear values
 inputtitle.value="";
 authorinput.value="";
 isbninput.value="";


 
}
const deleteButton = document.querySelector('.fa-trash');

//function dlete data
 function delData(e){
  e.preventDefault();
 
  if(e.target.classList.contains("delete")){
   e.target.parentElement.parentElement.remove();
 }
}
