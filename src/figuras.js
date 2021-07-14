const calcArea = side => Math.pow(side,2)
const getSquareArea = () => {
    const side = document.getElementById("square side").value
    const result = document.getElementById("result")
    const resultContainer = document.getElementById("result__container")

    result.innerHTML = '';//clear existing data
    result.appendChild(document.createTextNode(calcArea(side)))//
    resultContainer.style.display = "block"//display the result 
} 