const themeSwitch = document.querySelector('#checkbox');

themeSwitch.addEventListener('change', () => {
    if (themeSwitch.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.removeAttribute('data-theme');
    }
});

const recommendBtn = document.getElementById('recommend-btn');
const menuDisplay = document.getElementById('menu-display');
const recommendationHistory = document.getElementById('recommendation-history');

const dinnerMenus = [
    "치킨",
    "피자",
    "삼겹살",
    "된장찌개",
    "김치찌개",
    "떡볶이",
    "햄버거",
    "초밥",
    "파스타",
    "국밥"
];

function recommendMenu() {
    const randomIndex = Math.floor(Math.random() * dinnerMenus.length);
    return dinnerMenus[randomIndex];
}

function updateDisplay(menu) {
    menuDisplay.innerHTML = `<p>${menu}</p>`;
}

function updateHistory(menu) {
    const listItem = document.createElement('li');
    listItem.textContent = menu;
    recommendationHistory.prepend(listItem);
}

recommendBtn.addEventListener('click', () => {
    const newMenu = recommendMenu();
    updateDisplay(newMenu);
    updateHistory(newMenu);
});
