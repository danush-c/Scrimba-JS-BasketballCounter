function onePoint(score, element) {
    score = Number(score)
    score += 1
    console.log(score)
    element.innerText = score
}
function twoPoint(score, element) {
    score = Number(score)
    score += 2
    console.log(score)
    element.innerText = score
}
function threePoint(score, element) {
    score = Number(score)
    score += 3
    console.log(score)
    element.innerText = score
}

function resetGame() {
    document.getElementById('home').innerText = 0
    document.getElementById('guest').innerText = 0
}

document.addEventListener('click', function(event) {
    if (event.target.matches('button')) {
        let homeScore = Number(document.getElementById('home').innerText)
        let guestScore = Number(document.getElementById('guest').innerText)
        let homeEl = document.getElementById('homeHead')
        let guestEl = document.getElementById('guestHead')

        if (homeScore > guestScore) {
            homeEl.style.border = '1px solid greenyellow'
            guestEl.style.removeProperty('border')
        }
        else if (guestScore > homeScore) {
            guestEl.style.border = '1px solid greenyellow'
            homeEl.style.removeProperty('border')
        }
        else {
            guestEl.style.removeProperty('border')
            homeEl.style.removeProperty('border')
        }
    }
})