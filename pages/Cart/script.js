import { Header } from "../../module/ui"

Header()
const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("openModalBtn"); // кнопка для открытия модалки
const closeBtn = document.getElementById("closeBtn"); // кнопка для закрытия модалки


// Открыть модалку с помощью кнопки (если есть)
if (openModalBtn) {
    openModalBtn.addEventListener("click", () => {
        modal.style.display = "block";
        document.body.classList.add("no-scroll"); // Отключаем прокрутку
    });
}

// Закрыть модалку
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    document.body.classList.remove("no-scroll"); // Включаем прокрутку
});

// Закрытие модалки при клике вне её содержимого
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
        document.body.classList.remove("no-scroll"); // Включаем прокрутку
    }
});
