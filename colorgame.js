// alert("connected");

// var colors = generateRandomColors(6);
var colors = []
var pickedColor;
var numSquares = 6;

var squares = document.querySelectorAll(".square");
// var randNum = Math.floor((Math.random() * 5));
// var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var easyBtn = document.querySelector("#easybtn");
var hardBtn = document.querySelector("#hardbtn");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    setUpModeButtons();
    setUpSquares();
        reset();
}

function setUpModeButtons(){
    for (var i = 0; i <modeButtons.length;i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
            reset();
            // turnary operator
        });
    }
}

function setUpSquares(){
    for (var i = 0; i < squares.length; i ++){
        squares[i].addEventListener ("click", function(){
            // grab color of clicked square
            // compare color to picked color
            var clickedColor = this.style.background; 
            if (clickedColor === pickedColor){
                messageDisplay.textContent = "Correct";
                resetButton.textContent = "Play Again?";
                changeColors(clickedColor);
                h1.style.background = clickedColor;
            }else{
                // alert("wrong");
                this.style.background = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}

function reset(){
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent  = "";
    resetButton.textContent = "New Colors";
    for (var i = 0; i < squares.length; i ++){
        if (colors[i]){
            squares[i].style.display = "block";
            squares[i].style.background= colors[i];
        }
        else{
            squares[i].style.display = "none";
        }
        
    }
    h1.style.background = "steelblue";
    // generate all new colors

}

resetButton.addEventListener("click", function(){
    reset();
});


function changeColors(color){
    // loop through all squares
    for (var i = 0 ; i < squares.length; i ++){
        squares[i].style.background = color;
    }
}
function pickColor(){
    var random = Math.floor(Math.random() * colors.length )
    return colors[random];
}

function generateRandomColors(num){
    // make array
    var arr = []
    for (var i = 0; i < num; i++){
        arr.push(randomColor());
        // get random color
    }
    return arr;
    // add num random colors to array
}

function randomColor(){
    // pick red from 255
    // pick green from 255
    // pick blue from 255

    var r =  Math.floor(Math.random() * 256 );
    var g =  Math.floor(Math.random() * 256 );
    var b =  Math.floor(Math.random() * 256 );
    return "rgb(" +  r + ", " + g + ", " + b + ")";
   
}