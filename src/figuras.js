const calcArea = side => Math.pow(side,2);
const calcPerimeter = side => side * 4;
const getSquareArea = () => {
    const side = document.getElementById("square side").value
    const result = document.getElementById("result")
    const resultContainer = document.getElementById("result__container")

    result.innerHTML = '';//clear existing data
    result.appendChild(document.createTextNode(`Area: ${calcArea(side)}`))//
    resultContainer.style.display = "block"//display the result 
} 
const getSquarePerimeter = () => {
    const side = document.getElementById("square side").value
    const result = document.getElementById("result")
    const resultContainer = document.getElementById("result__container")

    result.innerHTML = '';//clear existing data
    result.appendChild(document.createTextNode(`Perimeter: ${calcPerimeter(side)}`))//
    resultContainer.style.display = "block"//display the result 
} 
