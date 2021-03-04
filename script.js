UP = "w", RIGHT = "d", DOWN = "s", LEFT = "a", PAUSE = "p", REPLAY = "r";
VOID = 0, WALL = -1, APPLE = -2, CELL_SIZE = 17, FPS = 100, ROWS = 38, COLS = 28;

var map, score, gameState, direction = DOWN;

map = MAP = [
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,-1],
    [-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,-1],
    [-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,-1],
    [-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,-1],
    [-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,-1],
    [-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,-1],
    [-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,-1],
    [-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,-1],
    [-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,-1],
    [-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,-1],
    [-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,-1],
    [-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,-1],
    [-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,-1],
    [-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,-1],
    [-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,-1],
    [-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,-1],
    [-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,-1],
    [-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,-1],
    [-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,-1],
    [-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,-1],
    [-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,-1],
    [-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,-1],
    [-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,-1],
    [-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,-1],
    [-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,-1],
    [-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,-1],
    [-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,-1],
    [-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,-1],
    [-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,-1],
    [-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,-1],
    [-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,-1],
    [-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,-1],
    [-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,-1],
    [-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,-1],
    [-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]
]

element = document.getElementById('sneic')
var canvas = document.createElement("canvas");
canvas.setAttribute("width", 500 + "px")
canvas.setAttribute("height", 700 + "px")
element.appendChild(canvas)
var context  = canvas.getContext('2d');


const mainLoop = () => {
    game(gameState);
    context.clearRect(0, 0, canvas.width, canvas.height);
    (gameState == "START") ? drawStart(context) : drawGrid(context);
    window.addEventListener("keydown", ({key}) => setDirection(key))
}

window.setInterval(mainLoop, 5000 / FPS);

const setGameState = newGameState => {gameState = newGameState} 

const setDirection = newDirection => {
    //alert(newDirection);
    if(!((direction == RIGHT && newDirection == LEFT) ||
        (direction == LEFT && newDirection == RIGHT) ||
        (direction == UP && newDirection == DOWN) ||
        (direction == DOWN && newDirection == UP)) && 
        (newDirection == RIGHT || newDirection == LEFT || 
        newDirection == UP || newDirection == DOWN)) 
    direction = newDirection;
    console.log(gameState == "IN_GAME")
    if(newDirection == PAUSE){
        //if(gameState == "PAUSE") setGameState("IN_GAME");
        if(gameState == "IN_GAME"){
            //alert("in pausaaaaaa") 
            setGameState("PAUSE");
            return
        }
    }
    //newState = (gameState == "IN_GAME") ? "PAUSE" : "IN_GAME"; setGameState(newGameState);
    if(newDirection == REPLAY && gameState == PAUSE) setGameState("START"); 
    //switch(newDirection){
        // case RIGHT: {if(direction == LEFT) return; ;}
        // case LEFT: {if(direction == LEFT) return;}
        // case UP: {if(direction == LEFT) return;}
        // case DOWN: {if(direction == LEFT) return;}
        
        // (gameState == "PAUSE") setGameState("IN_GAME"); 
        //             else if(gameState == "IN_GAME") setGameState("PAUSE"); return}
        
    //}
}

const getNextCoor = (x, y, direction) => (direction == UP || direction == RIGHT) ? 
    (direction == UP ? {x: x-1, y} : {x, y: y+1}) : (direction == LEFT ? {x, y: y-1} : {x: x+1, y})

const putSnake = direction => {
    let x = Math.floor(Math.random() * (MAP.length-14) + 7);
    let y = Math.floor(Math.random() * (MAP[0].length-14) + 7);
    ({x, y} = getNextCoor(x, y, direction)); map[x][y] = 1;
}

const getSnake = () => {
    let snake = [];
    map.map((coloumn, x) =>{coloumn.map((element, y) => {if(element > 0) snake.push({x, y, num: element})})})
    return snake;
}

const decreaseSnake = () => {
    ({x, y} = getSnake().find(({num}) => num == Math.max(...getSnake().map(({num}) => num))))
    map[x][y] = 0
}

const putBall = () => {
    let row= Math.floor(Math.random() * (MAP.length-2) + 1);
    let col= Math.floor(Math.random() * (MAP.length-2) + 1);
    if(getSnake().length == map.length * map[0].length) return;
    (map[row][col] != VOID) ? putBall() : map[row][col] = APPLE
}

const isDied = direction => {
    ({x, y} = getSnake().find(({num}) => num == 1));
    ({x: xN, y: yN} = getNextCoor(x, y, direction))
    return map[xN][yN] == WALL || map[xN][yN] > 1
}

const moveSnake = direction => {
    const eatApple = () => {score++; putBall();}
    ({x, y} = getSnake().find(({num}) => num == 1));
    isApple = false;
    getSnake().map(({x, y, num}) => map[x][y] = num+1);
    ({x: xN, y: yN} = getNextCoor(x, y, direction));
    if(map[xN][yN] == APPLE) isApple = true;
    map[xN][yN] = 1;
    isApple ? eatApple() : decreaseSnake();
}

const game = gameState => {
    switch (gameState) {
        case "START": {
            console.log("start")
            score = 0;
            map.map((coloumn ,x) =>{coloumn.map((element ,y)=> {
                if(element > 0 || element == APPLE) map[x][y] = 0;
                if(x == map.length-1 || x == 0 || y == map[0].length-1 || y == 0) map[x][y] = -1;
            })})
            window.addEventListener("keypress", () => setGameState("IN_GAME"))
            putSnake()
            putBall()
            break;
        }
        case "IN_GAME": { 
            console.log("IN")
            if(isDied(direction)) setGameState("END");
            moveSnake(direction);
            break;
        }
        case "PAUSE": {
            console.log("pause");
            alert("dmwodmewpomfeownferonferjpifnrewp");
            context.fillStyle = 'black';
            context.font = "35px Arial";
            context.fillText("Press P to continue\nPress N to replay", map[0].length*CELL_SIZE/4 , map.length*CELL_SIZE/2);

        }
        case "END": { 
            console.log("end")
            alert("HAI PERSO");
            setGameState("START");
            break;
        }
    }
}

setGameState("START")


const drawStart = context => {
    context.beginPath();
    context.fillStyle = 'rgba(255, 255, 255, 0.274)'
    context.fillRect(0, 0, map[0].length*CELL_SIZE, map.length*CELL_SIZE)
    context.fillStyle = 'black'
    context.font = "35px Arial";
    context.fillText("Press any key", map[0].length*CELL_SIZE/4 , map.length*CELL_SIZE/2);
    context.stroke()
}

const drawGrid = context => {
    const drawWalls = context => {
        context.beginPath()
        context.fillStyle='black'
        context.fillRect(0,0, CELL_SIZE*MAP[0].length, CELL_SIZE);
        context.beginPath()
        context.fillStyle='black'
        context.fillRect(0,CELL_SIZE*(MAP.length-1), CELL_SIZE*MAP[0].length, CELL_SIZE);
        context.beginPath()
        context.fillStyle='black'
        context.fillRect(0,0, CELL_SIZE, CELL_SIZE*MAP.length);
        context.beginPath()
        context.fillStyle='black'
        context.fillRect(CELL_SIZE*(MAP[0].length-1), 0, CELL_SIZE, CELL_SIZE*(MAP.length-1));
        context.stroke();
    }
    const drawVoid = (context, x, y) =>{
        context.beginPath();
        context.fillStyle='rgba(255, 255, 255, 0.274)'
        context.fillRect(x*CELL_SIZE, y*CELL_SIZE, CELL_SIZE, CELL_SIZE)
    }
    const drawSnake = (context, x, y) => {
        context.beginPath();
        context.fillStyle='#228b22'
        context.fillRect
        context.fillRect(x*CELL_SIZE, y*CELL_SIZE, CELL_SIZE, CELL_SIZE)
        
    }
    const drawApple = (context, x, y) => {
        context.beginPath();
        context.fillStyle='#b22222'
        context.fillRect(x*CELL_SIZE, y*CELL_SIZE, CELL_SIZE, CELL_SIZE)
    }
    const drawScore = context => {
        context.fillStyle='rgba(255, 255, 255, 0.274)'
        context.font = "20px Arial";
        context.fillText("Score: "+ score, 0 , CELL_SIZE*MAP.length+CELL_SIZE*2);
    }
    drawWalls(context);
    map.map((coloumn,x) => {
        coloumn.map((element,y) =>{
        switch(element){
            case VOID: drawVoid(context, y, x); break;
            case APPLE: drawApple(context,y, x); break;
            default: if(element != WALL) drawSnake(context, y ,x); break;
        }
    })})
    drawScore(context);
}






// const initMap = () =>{
//     var mapp = [ROWS][COLS];
//     mapp.map((columns, x) => {columns.map((element, y) =>{
//         (x == 0 || x == ROWS || y == 0 || y == COLS) ? element = -1 : element = 0})})

//     return mapp;
// }