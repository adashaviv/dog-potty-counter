let peeCount = document.getElementById("count-pee")
let pooCount = document.getElementById("count-poo")
let walkCount = document.getElementById("walk-log")

let peeNumber = 0
let pooNumber = 0
let walkNumber = 0

function logPee() {
    peeNumber += 1
    peeCount.textContent = peeNumber
}

function logPoo() {
    pooNumber += 1
    pooCount.textContent = pooNumber
}

function logWalk() {
    walkNumber += 1
    walkCount.innerHTML += "<br>" + "Walk " + walkNumber + " - 💧 : " + peeNumber + ", 💩 : " + pooNumber  
    peeNumber = 0
    pooNumber = 0
    peeCount.textContent = peeNumber
    pooCount.textContent = pooNumber

    

}

