const tabsBtns = document.querySelectorAll(".tabs-nav button")
// console.log(tabsBtns);
const tabsItems = document.querySelectorAll(".tabs-item")
// console.log(tabsItem);

// Функция скрывает табы и убирает active у кнопок
function hideTabs() {
    tabsItems.forEach(item => item.classList.add("hide"));
    tabsBtns.forEach(item => item.classList.remove("active"));
}

// Функция показывает переданый  номер таба и делает соответствующую ему кнопку
function showTab(index) {
    tabsItems[index].classList.remove("hide")
    tabsBtns[index].classList.add("active")
}


hideTabs();
showTab(0);

// По нажатию на кнопку меняется картинка
tabsBtns.forEach((btn, index) => btn.addEventListener("click", () => {
    hideTabs();
    showTab(index);
}))


// Anchors
const anchors = document.querySelectorAll(".list-header a")
anchors.forEach(anc => {
    anc.addEventListener("click", function (event) {
        event.preventDefault();

        const id = anc.getAttribute("href");
        const elem = document.querySelector(id);
        
        window.scroll({
            top: elem.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});
