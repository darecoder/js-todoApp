//click on 'markAsDone' button
var list = document.querySelector('ul');
list.addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('checked');
  }
}, false);

// click on 'delete' button
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// clear the whole list
var todoList = document.getElementById('todoList');
function clearList() {
  localStorage.removeItem('todoList');
  todoList.innerHTML = '';
}

//add item to the list
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("itemInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("Write something!");
    } else {
      document.getElementById("todoList").appendChild(li);
    }
    document.getElementById("itemInput").value = "";
  
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }