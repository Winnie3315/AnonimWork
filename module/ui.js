export function setSwiper(arr, className = "", component, place) {
    const swiperDiv = document.createElement("div");
    const swiperWrapper = document.createElement("div");
    const next = document.createElement("button");
    const prev = document.createElement("button");

    next.classList.add("swiper-button-next", `.${className}-next`);
    prev.classList.add(`swiper-button-prev`, `.${className}-prev`);
    swiperDiv.classList.add(className);
    swiperWrapper.classList.add("swiper-wrapper");

    swiperDiv.append(swiperWrapper, next, prev);
    place.append(swiperDiv);

    new Swiper(`.${className}`, {
        modules: [Navigation],
        slidesPerView: 4,
        spaceBetween: 23,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}

//header
export function Header() {
    let header = document.querySelector('header')
    const leftDiv = document.createElement("div");
    leftDiv.classList.add("left");

    const leftImg = document.createElement("img");
    leftImg.src = "/public/images/logo.png";
    leftImg.alt = "";

    const catalogButton = document.createElement("button");
    catalogButton.textContent = "Каталог";

    const searchInput = document.createElement("input");
    searchInput.type = "text";
    searchInput.placeholder = "Искать товары";

    leftDiv.append(leftImg, catalogButton, searchInput);

    const rightDiv = document.createElement("div");
    rightDiv.classList.add("right");

    const usersDiv = document.createElement("div");
    usersDiv.classList.add("users");

    const userImg = document.createElement("img");
    userImg.src = "/public/icons/user.png";
    userImg.alt = "";

    const userName = document.createElement("span");
    userName.textContent = "Шахзод";

    usersDiv.append(userImg, userName);

    const favoriteSpan = document.createElement("span");
    favoriteSpan.textContent = "Избранное";

    const cartDiv = document.createElement("div");
    cartDiv.classList.add("cart");

    const cartText = document.createElement("span");
    cartText.textContent = "Корзина";

    const cartButton = document.createElement("button");
    cartButton.textContent = "3";

    cartDiv.append(cartText, cartButton);

    rightDiv.append(usersDiv, favoriteSpan, cartDiv);

    header.append(leftDiv, rightDiv);
}

export function reload(arr, component, place, ...args) {
    place.innerHTML = "";

    for (let item of arr) {
        const elem = component(item, ...args);
        place.append(elem);
    }
}

// export function reloadSwiperImages(arr, place) {
//     place.innerHTML = ''

//     for (let item of arr) {
//         place.innerHTML += `
//     <div class="swiper-slide">
//         <img src="${item}" alt="">
//     </div>
//     `
//     }
// }

export function reloadSwiperImages(images, component, place) {
    if (!images || images.length === 0) return;

    place.innerHTML = "";

    images.forEach(image => {
        const imgElement = component({ src: image });
        imgElement.classList.add("swiper-slide");
        place.append(imgElement);
    });
}

export function renderSingleImage(imageUrl, component, place) {
    if (!imageUrl) return;

    place.innerHTML = ""; // Очищаем содержимое элемента

    const imgElement = component({ src: imageUrl });
    place.append(imgElement);
}