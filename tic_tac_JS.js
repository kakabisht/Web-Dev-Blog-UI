console.log("Hello");

//Restart game button
var restart=document.querySelector("#b")
//Grabs all the squares

var squares=document.querySelectorAll('td')

//Clear all the squares

function clearBoard() {

  for (var i = 0; i < squares.length; i++) {
      squares[i].textContent = '';
  }
}
restart.addEventListener('click',clearBoard)


//check the square marker

function changeMarker(){
    if(this.textContent===" "){
        this.textContent="X";
        console.log("You have choosen X");
    }
    else if (this.textContent==="X") {
        this.textContent="O";
        console.log("You have choosen 0");
    }
    else {
        this.textContent=" ";
        console.log("You have choosen blank");

    }
}

for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click',changeMarker);
    console.log("You are changing the marker");

}

//For loop to add event listeners to all the squares
