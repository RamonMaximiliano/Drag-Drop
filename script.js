// https://www.w3schools.com/html/tryit.asp?filename=tryhtml5_draganddrop
// https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_global_draggable
// https://www.w3schools.com/html/tryit.asp?filename=tryhtml5_draganddrop2
// https://www.w3schools.com/html/html5_draganddrop.asp


function allowDrop(item){
    item.preventDefault()
}

function drag(item){
    item.dataTransfer.setData("Text", item.target.id);
}

function drop(item){
    //Call preventDefault() to prevent the browser default handling of the data (default is open as link on drop)
    var square = item.dataTransfer.getData("Text");
    item.target.appendChild(document.getElementById(square))
    item.preventDefault();
}


function reset(){
    window.location.reload();
}









