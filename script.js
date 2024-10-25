// background color auto change
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  function changeBackgroundColor() {
    document.body.style.backgroundColor = getRandomColor();
  }
  
  // Change color every 2 seconds
  setInterval(changeBackgroundColor, 2000);
  
  // Fruits shuffels color auto change

  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  function changeFontColor() {
    const textElement = document.getElementById('dynamic-text');
    textElement.style.color = getRandomColor();
  }
  
  // Change font color every 2 seconds
  setInterval(changeFontColor, 2000);


const cardsArray = [
    { name: '🍎', id: 1 }, { name: '🍎', id: 2 },
    { name: '🍌', id: 3 }, { name: '🍌', id: 4 },
    { name: '🍇', id: 5 }, { name: '🍇', id: 6 },
    { name: '🍓', id: 7 }, { name: '🍓', id: 8 }
  ];
  
  let firstCard = null;
  let secondCard = null;
  let lockBoard = false;
  let matchedPairs = 0;
  
  const gameBoard = document.getElementById('game-board');
 

  // Shuffle the cards
  function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }
  
  // Initialize the game board
  function initializeBoard() {
    const shuffledCards = shuffle(cardsArray);
  
    shuffledCards.forEach(card => {
      const cardElement = document.createElement('div');
      cardElement.classList.add('card');
      cardElement.dataset.name = card.name;
  
      cardElement.innerHTML = `
        <div class="card-inner">
          <div class="card-front"></div>
          <div class="card-back">${card.name}</div>
        </div>
      `;
  
      cardElement.addEventListener('click', flipCard);
      gameBoard.appendChild(cardElement);
    });
  }
  
  // Handle card flip
  function flipCard() {
    if (lockBoard || this === firstCard) return;
  
    this.classList.add('flipped');
  
    if (!firstCard) {
      firstCard = this;
    } else {
      secondCard = this;
      checkForMatch();
    }
  }
  
  // Check if two cards match
  function checkForMatch() {
    const isMatch = firstCard.dataset.name === secondCard.dataset.name;
  
    isMatch ? disableCards() : unflipCards();
  }
  
  // Disable matched cards
  function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoard();
  
    matchedPairs++;
    if (matchedPairs === cardsArray.length / 2) {
      setTimeout(() => alert('You won!'), 500);
    }
  }
  
  // Unflip unmatched cards
  function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
      firstCard.classList.remove('flipped');
      secondCard.classList.remove('flipped');
      resetBoard();
    }, 1000);
  }
  
  // Reset board state
  function resetBoard() {
    [firstCard, secondCard, lockBoard] = [null, null, false];
  }
   //Initialize the game
   initializeBoard();