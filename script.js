
//code for tasks counter


let counter = 0;

let tTasks = document.getElementById('totalTasks');

function changeTaskNum(){
    tTasks.innerText = 'Total Tasks: ' + counter;
    
}






//this part is to add the todo item in the todo list and display it in the DOM

let addBtn = document.getElementById('addItem');
let inputBox = document.getElementById('input');
let ull = document.getElementById('ull');

addBtn.addEventListener('click', function(){

    let textV = inputBox.value;

    //If nothing is entered in the input box then it will give an alert message

    if(textV == ''){
        alert("Please Enter a Value");
        return;
    }
    counter++;

    changeTaskNum();




   //code to create and add list item in the DOM

    let newItem = document.createElement('li');

    newItem.innerHTML = '<input type="radio" name="" class="radioBtn">' + textV + '<button class="delBtn">Delete</button>';
    ull.appendChild(newItem);





    //code to delete the list item from the TODO list

    let delBtn = document.getElementsByClassName('delBtn');


    for(var i =0; i<delBtn.length; i++){

        delBtn[i].addEventListener('click', delItem);
    
    }



    //code to highlight the completed item from the todo list


    let radioBtn = document.getElementsByClassName('radioBtn');

    for(var j =0; j<radioBtn.length; j++){

        radioBtn[j].addEventListener('click', completedItem);
    
    }


    function completedItem(event){
        let chelist = event.target.parentElement;

            
        chelist.style.backgroundColor= 'black';
        chelist.style.opacity = '0.5';

        chelist.style.transitionDuration = '0.6s';
        
        chelist.style.textDecoration= 'line-through';
        
        chelist.style.color = 'rgb(233, 222, 233)';

    }

});



//delete task function. This function will be called when delete button is clicked


function delItem(event){
    
    event.target.parentElement.remove();
    console.log("btn clicked")
    counter--;

    changeTaskNum();

}








