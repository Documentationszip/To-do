const inputbox = document.getElementById('actualinputbox');
const todocontainerlist = document.getElementById('todocontainerlist');
const todobutton = document.getElementById('todobutton');



todobutton.onclick = function(){
    if (inputbox.value === ''){
alert("Type a Todo please.");
    }
    else{
        
        var li = document.createElement('li');
        li.innerHTML = inputbox.value;

        

        todocontainerlist.appendChild(li);

        

        
    }
    inputbox.value = "";
}