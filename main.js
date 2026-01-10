class LottoBall extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    static get observedAttributes() {
        return ['number'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'number') {
            this.render();
        }
    }

    getColor(number) {
        if (number <= 10) return '#fbc400';
        if (number <= 20) return '#69c8f2';
        if (number <= 30) return '#ff7272';
        if (number <= 40) return '#aaa';
        return '#b0d840';
    }

    render() {
        const number = this.getAttribute('number') || '';
        const color = this.getColor(parseInt(number, 10));

        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: var(--ball-size, 60px);
                    height: var(--ball-size, 60px);
                    border-radius: 50%;
                    background-color: ${color};
                    color: white;
                    font-size: 1.5rem;
                    font-weight: bold;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                }
            </style>
            <span>${number}</span>
        `;
    }
}

customElements.define('lotto-ball', LottoBall);

const generateBtn = document.getElementById('generate-btn');
const lottoBalls = document.querySelectorAll('lotto-ball');
const historyList = document.getElementById('history-list');

function generateNumbers() {
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }
    return Array.from(numbers).sort((a, b) => a - b);
}

function updateDisplay(numbers) {
    lottoBalls.forEach((ball, index) => {
        ball.setAttribute('number', numbers[index]);
    });
}

function updateHistory(numbers) {
    const listItem = document.createElement('li');
    listItem.textContent = numbers.join(', ');
    historyList.prepend(listItem);
}

generateBtn.addEventListener('click', () => {
    const newNumbers = generateNumbers();
    updateDisplay(newNumbers);
    updateHistory(newNumbers);
});
