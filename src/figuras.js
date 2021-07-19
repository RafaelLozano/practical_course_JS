const calcArea = side => Math.pow(side,2);
const calcPerimeter = side => side * 4;
const calTringleArea = (base, height) =>  (base*height)/2

const getSquareArea = () => {
    const side = document.getElementById("square side").value
    const resultContainer = document.getElementById("result__container")

    resultContainer.innerHTML= `<span class="result__text">Area: ${calcArea(side)} cm<sup>2</sup></span>`
    resultContainer.style.display = "block"//display the result 
} 
const getSquarePerimeter = () => {
    const side = document.getElementById("square side").value
    const resultContainer = document.getElementById("result__container")

    resultContainer.innerHTML= `<span class="result__text">Perimeter: ${calcPerimeter(side)} cm</span>`
    resultContainer.style.display = "block"//display the result 
} 
const getTriangleArea = () => {
    const base = document.getElementById("triangleBase").value
    const height = document.getElementById("triangleHeight").value
    const resultContainer = document.getElementById("result__container--triangle")

    resultContainer.innerHTML= `<span class="result__text">Area: ${calTringleArea(base,height)} cm<sup>2</sup></span>`
    resultContainer.style.display = "block"//display the result 
} 