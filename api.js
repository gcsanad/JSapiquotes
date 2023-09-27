const URL = "https://api.adviceslip.com/advice"
let idNumber = document.getElementById("idNumber")
let advice =document.getElementById("advice")

function updateAdvice(){
    fetch(URL)
    .then(res => res.json())
    .then(data => {
        idNumber.innerText = data.slip.id
        advice.innerText = data.slip.advice
    })
}
updateAdvice()