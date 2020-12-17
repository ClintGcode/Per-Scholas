$(document).ready(function(){
	// construct the canvas element
	let canvas = $("#canvas")[0];
	let context = canvas.getContext("2d");
	let canvasWidth = $("#canvas").width();
	let canvasHeight = $("#canvas").height();
	
	// variables for ease of access
	let cellWidth = 10;
	let direction;
	let apple;
    let score;
    var highScore = 0;
    var level = 70; // 
	// Develop the snake
	let snake; 
    
    //----------------This function represents the beginning of the game --------------//
	function startGame() {
		direction = 'right'; // we'll start with the snake going to the right
		makeSnake(); // creates a snake everytime the game starts from the beginning
		makeApple(); // creates an 'apple' everytime the game starts from the beginning
        score = 0; // the score will always start from 0
		
		// We'll tie the snakes movement to a timer that fires every 70ms
        typeof gameLoop != "undefined" ? clearInterval(gameLoop) : null;
        gameLoop = setInterval(gameFill, level);
        
        
	};
	startGame();
    //---------------- Ends the start Game Function ---------------------------------//
    
    //--------------The make snake function---------------------------------//
	function makeSnake() {
		let snakeLength = 5; // The snake will begin with 5 cells
		snake = []; // This array will collect the cells that compose the snake
		for (let i = snakeLength-1; i >= 0; i--) {
			snake.push({
                x: i, 
                y: 0
            })
		}
    };
    //--------------Ends the make snake function-----------------------------//

    //--------------The function to make the 'apple'-------------------------//
    function makeApple() {
        // Apple will apear in random position within the canvas
        apple = {
            x: Math.round(Math.random() * (canvasWidth - cellWidth) / cellWidth),
            y: Math.round(Math.random() * (canvasHeight - cellWidth) / cellWidth)
        };
    }
    //--------------Ends make apple function--------------------------------//
    
	//---------------This function fills in the game-----------------------//
	function gameFill() {
        // Filling in the canvas //
		context.fillStyle = "white";
		context.fillRect(0, 0, canvasWidth, canvasHeight);
		context.strokeStyle = "black";
		context.strokeRect(0, 0, canvasWidth, canvasHeight);
        // Ends filling in canvass //
		
        // Developing the Snakes movement //
        let headX = snake[0].x // x axis of head cell
        let headY = snake[0].y // y axis of head cell
		
        // Developing movement in our snake //
        if (direction == 'right') {
            headX++;
        } else if (direction == 'left') {
            headX--;
        } else if (direction == 'up') {
            headY--;
        } else if (direction == 'down') {
            headY++;
        }
        // End movement development //
		
        //--- Game over conditions ----//

        // Wall collision conditional //
        if (headX == -1 || headX == canvasWidth / cellWidth || headY == -1 || headY == canvasHeight / cellWidth || bodyOnBody(headX, headY, snake) ) {
            //restart game
            startGame();
            return;
        }
        // End wall conditional

        //--- End Game Over Conditions---//

        // Snake Eats apple condition //
        if (headX == apple.x && headY == apple.y) {
            // tail becomes the head
            var tail = {
                x: headX,
                y: headY
            };

            // increment score by 1
            score++;
            
            // Increases speed with level
            if (score >= 5) {
                level = 50;
            } else if (score >= 10) {
                level = 40;
            } else if (score >= 15) {
                level = 30;
            } else {
                level = 70;
            }

            // make a new apple
            makeApple();
        } else {
            var tail = snake.pop();
            tail.x = headX;
            tail.y = headY;
        }
		// returns tail to the front (movement)
        snake.unshift(tail);
        // Ends snake eats apple condition //

        // Set the new higscore
        if (score > highScore) {
            highScore = score;
        }

            // Increases speed with level
            if (score >= 5) {
                level = 60;
            } else if (score >= 10) {
                level = 50;
            } else if (score >= 15) {
                level = 40;
            } else {
                level = 70;
            }        
		
		// Develop the snake cells //
        for (let i = 0; i < snake.length; i++) {
            let cell = snake[i];
            devCells(cell.x, cell.y);
        };
		
		// Develop the apple cell //
        devCells(apple.x, apple.y);

		// Develop the score board //
        let scoreBoard = `Your Score: ${score}`;
        let highScoreBoard = `High Score: ${highScore}`;
        context.fillText(scoreBoard, 5, canvasHeight-5);
        context.fillText(highScoreBoard, 360, canvasHeight-5);

	}
    //-----------Ends Fill In Game Function-------------//
    


    // Develop Cells Function //
    function devCells(x, y) {
        context.fillStyle = 'black';
        context.fillRect(x * cellWidth, y * cellWidth, cellWidth, cellWidth)
        context.strokeStyle = 'white';
        context.strokeRect(x * cellWidth, y * cellWidth, cellWidth, cellWidth)
    }
    // End of DevCells Function //
	
	// Snake Eat Snake Function //
    function bodyOnBody(x, y, array) {
        for (let i = 0; i < array.length; i++) {
            (array[i].x == x && array[i].y == y) ? true : false;
        }
    }
    // Ends bodyOnBody Function //
	
    // Keyboard Event Lister //
    $(document).keydown((event) => {
        var keyPress = event.which; // this returns the numeric keyCode of the key pressed

        // Setting direction conditionals based on keycodes of the direction keys
        if (keyPress == '37' && direction !== 'right') {
            direction = 'left';
        } else if (keyPress == '38' && direction !== 'down') {
            direction = "up";
        } else if (keyPress == "39" && direction !== 'left') {
            direction = "right";
        } else if (keyPress == "40" && direction !== 'up') {
            direction = "down";
        }

    })

    // Stops page from moving witht the arroy keys //
    window.addEventListener("keydown", function(e) {
        // space and arrow keys
        if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
            e.preventDefault();
        }
    }, false);
    // End - Stops page from moving witht the arroy keys //
    

})