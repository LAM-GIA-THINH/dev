// 2. Tạo đối tượng player. Đặt hai khóa name và chips và gán giá trị cho chúng
let player = {
    name: "Elliot",
    chips: 150
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

// 3. Lấy phần tử có id là player-el và lưu nó vào một biến playerEl
let playerEl = document.getElementById("player-el")

// 4. Render tên người chơi và số chip trong playerEl
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomNumer = Math.floor( Math.random()*13 ) + 1
    if (randomNumer > 10) {
        return 10
    } else if (randomNumer === 1) {
        return 11
    } else {
        return randomNumer
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard,secondCard];
    sum = firstCard + secondCard;
    renderGame()
}


function renderGame() {
    cardsEl.textContent = "Thẻ bài: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Tổng: " + sum
    if (sum <= 20) {
        message = "Bạn có muốn rút thêm thẻ bài không?"
    } else if (sum === 21) {
        message = "Bạn đã có Blackjack!"
        hasBlackJack = true
    } else {
        message = "Bạn đã thua!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    if(isAlive === true && hasBlackJack === false ){
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    }
    
}
