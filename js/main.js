 
    // Get elements

    const form= document.querySelector('#form'); 

   const userInput= document.querySelector('#task-input');
     
    const ul= document.querySelector('#listing')


    // call event Listeners

    eventListeners();

    function eventListeners(){

      // DOM Load event
      document.addEventListener('DOMContentLoaded', getTasks);

        form.addEventListener('submit', addTask);

        // remove task


        ul.addEventListener('click', removeTasks);


    }


    function addTask(e){

        // create li

     let li = document.createElement('li');


     // add class to li

     li.className= 'list-group-item';



     // append textNode to li

     li.appendChild(document.createTextNode(userInput.value));


     //  create i

    let i = document.createElement('i');

    i.className='pl-4';


        i.innerHTML= '<ion-icon name="trash-outline"></ion-icon>'

        // append i to li


        li.appendChild(i);


     // append li to ul

     ul.appendChild(li);


     storeTaskInLocalStorage( userInput.value)

    //   clear input
      userInput.value= ' ';


       //remove default form behavour
         
        e.preventDefault();
        
    }



   
    //=========== Store Task ===========================
function storeTaskInLocalStorage(task) {
    let tasks;
    if(localStorage.getItem('tasks') === null){
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }
  
    tasks.push(task);
  
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }



  // Get Tasks from LS
function getTasks() {
    let tasks;
    if(localStorage.getItem('tasks') === null){
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }
  
    tasks.forEach(function(task){
      
        let li = document.createElement('li');


        // add class to li
   
        li.className= 'list-group-item';
   
   
   
        // append textNode to li
   
        li.appendChild(document.createTextNode(task));
   
   
        //  create i
   
       let i = document.createElement('i');
   
       i.className='pl-4';
   
   
       i.innerHTML= '<ion-icon name="trash-outline"></ion-icon>'
   
           // append i to li
   
   
         li.appendChild(i);
   
   
        // append li to ul
   
        ul.appendChild(li);

    });
  }
  




   //============================ remove task ======================


   function removeTasks(e){

    if(e.target.parentElement.parentElement.classList.contains('list-group-item')){


        e.target.parentElement.parentElement.remove();


        // Remove from LS
        removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }


}



     //===== Remove from LS ======================
function removeTaskFromLocalStorage(taskItem) {
    let tasks;
    if(localStorage.getItem('tasks') === null){
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }
  
    tasks.forEach(function(task, index){
      if(taskItem.textContent === task){
        tasks.splice(index, 1);
      }
    });
  
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
     
    
