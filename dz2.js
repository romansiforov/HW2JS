document.write("<h1>Прямокутник</h1><hr>");

let height = 5, width = 20;

for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
        if (i == 0 || i == height - 1 || j == 0 || j == width - 1) {
            document.write("*&nbsp");
        }
        else {
            document.write("&nbsp&nbsp&nbsp");
        }
    }
    document.write("<br>");
}

document.write("<h1>Прямокутний трикутник</h1><hr>");

let triangleSideLength = 10;

for (let i = 0; i < triangleSideLength; i++) {
    for (let j = 0; j < triangleSideLength; j++) {
        if( j >= i){
            document.write("*&nbsp");
        }
    }
    document.write("<br>");
}

document.write("<h1>Рiвностороннiй трикутник</h1><hr>");


triangleSideLength = 7; 

for(let i = 0; i < triangleSideLength ; i++){
    for(let j = (0 + i + 1) ; j < triangleSideLength; j++){
        document.write("&nbsp;")
    }
    for(let y = (triangleSideLength - 1 - i); y < triangleSideLength; y++){
        document.write("*")
    }
    document.write("<br/>")
}


document.write("<h1>Ромб</h1><hr>");

for(let i = 0; i < triangleSideLength ; i++){
    for(let j = (0 + i + 1) ; j < triangleSideLength; j++){
        document.write("&nbsp;")
    }
    for(let y = (triangleSideLength - 1 - i); y < triangleSideLength; y++){
        document.write("*")
    }
    document.write("<br/>")
}

for(let i = 0; i < triangleSideLength ; i++){
    for(let j = (triangleSideLength - 1 - i) ; j < triangleSideLength; j++){
        document.write("&nbsp;")
    }
    for(let y = (0 + i + 1); y < triangleSideLength; y++){
        document.write("*")
    }
    document.write("<br/>")
}