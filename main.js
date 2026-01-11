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
    "치킨", "피자", "삼겹살", "떡볶이", "햄버거", "보쌈", "족발", "쌀국수", "초밥", "탕수육", "삼계탕", "비빔밥", "떡갈비 정식", "제육덮밥", "갈비탕", "짜장면", "짬뽕", "깐풍기", "마파두부덮밥", "돈부리(덮밥류-규동, 가츠동 등)", "우동", "가리아게(일본식 치킨)", "연어덮밥", "순대", "오뎅", "튀김세트", "김밥", "설렁탕", "순대국"
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
