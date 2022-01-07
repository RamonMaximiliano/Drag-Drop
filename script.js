// How to perform the drag & drop
// https://www.w3schools.com/html/tryit.asp?filename=tryhtml5_draganddrop
// https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_global_draggable
// https://www.w3schools.com/html/tryit.asp?filename=tryhtml5_draganddrop2
// https://www.w3schools.com/html/html5_draganddrop.asp

// allowDrop(event) = The ondragover event specifies where the dragged data can be dropped.
function allowDrop(item){
    item.preventDefault()
}

// function that grabs the element
function drag(item){
    item.dataTransfer.setData("Text", item.target.id);
}

//dropSquare(event)" = When the dragged data is dropped, a drop event occurs.
function dropSquare(item){
    //Call preventDefault() to prevent the browser default handling of the data (default is open as link on drop)
    var square = item.dataTransfer.getData("Text");
    item.target.appendChild(document.getElementById(square))
    item.preventDefault();

    //Validation block 1 
    let child1 = document.getElementById("destiny1").firstChild;
    console.log(child1)
    let child1Contains = child1.classList.contains("number1");
    console.log(child1Contains)

    //Validation block 2 
    let child2 = document.getElementById("destiny2").firstChild;
    console.log(child2)
    let child2Contains = child2.classList.contains("number2");
    console.log(child2Contains)

    //Validation block 3 
    let child3 = document.getElementById("destiny3").firstChild;
    console.log(child3)
    let child3Contains = child3.classList.contains("number3");
    console.log(child3Contains)

    //Final Validation
    if(child1Contains === true && child2Contains === true && child3Contains === true){
        console.log("Correto")
        document.getElementById("destiny1").classList.remove("destiny1");
        document.getElementById("destiny1").classList.add("destiny1Correct");

        document.getElementById("destiny2").classList.remove("destiny2");
        document.getElementById("destiny2").classList.add("destiny2Correct");

        document.getElementById("destiny3").classList.remove("destiny3");
        document.getElementById("destiny3").classList.add("destiny3Correct");
    } else {
        console.log("Errado")
        document.getElementById("destiny1").classList.remove("destiny1");
        document.getElementById("destiny1").classList.add("destiny1Wrong");

        document.getElementById("destiny2").classList.remove("destiny2");
        document.getElementById("destiny2").classList.add("destiny2Wrong");

        document.getElementById("destiny3").classList.remove("destiny3");
        document.getElementById("destiny3").classList.add("destiny3Wrong");
    }
}

//Resets the page putting elements back to their original places
function reset(){
    window.location.reload();
}

//Validation
//https://www.javascripttutorial.net/javascript-dom/javascript-get-child-element/
//https://www.codegrepper.com/code-examples/javascript/javascript+get+specific+child+element

