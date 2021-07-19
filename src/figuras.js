const calcArea = side => Math.pow(side,2);
const calcPerimeter = side => side * 4;
const getSquareArea = () => {
    const side = document.getElementById("square side").value
    const result = document.getElementById("result")
    const resultContainer = document.getElementById("result__container")

    resultContainer.innerHTML= `<span class="result__text">Area: ${calcArea(side)} cm<sup>2</sup></span>`
    resultContainer.style.display = "block"//display the result 
} 
const getSquarePerimeter = () => {
    const side = document.getElementById("square side").value
    const result = document.getElementById("result")
    const resultContainer = document.getElementById("result__container")

    resultContainer.innerHTML= `<span class="result__text">Perimeter: ${calcPerimeter(side)} cm</span>`
    resultContainer.style.display = "block"//display the result 
} 
