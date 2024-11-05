// export function ImageLoader({ src, alt }) {
//     const img = document.createElement('img');
//     img.src = src;
//     img.alt = alt || 'Image';
//     img.className = 'image_loader';

//     return img;
// }

export function ImageLoader({ src }) {
    // Создаем контейнерный div
    const container = document.createElement('div');
    container.className = 'swiper-slide'; // Класс для слайда Swiper
  
    // Создаем элемент img
    const img = document.createElement('img');
    img.src = src;
    img.alt = 'Product Image';
    img.className = 'swiper-image'; // Класс для изображения
  
    // Добавляем img в контейнер
    container.appendChild(img);
  
    // Возвращаем контейнер
    return container;
  }
  