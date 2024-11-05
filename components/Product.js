export function ProductCard({ id, title, price, images }) {
    console.log({ id, title, price, images });
    

    const productCard = document.createElement('div');
    productCard.className = 'product_card';

    const imgWrap = document.createElement('a');
    imgWrap.href = `/pages/product/?id=${id}`;
    imgWrap.className = 'img_wrap';

    const productImg = document.createElement('img');
    productImg.src = images[0];
    productImg.alt = 'Product Image';
    productImg.className = 'product_img';

    imgWrap.append(productImg);

    const likeButton = document.createElement('button');
    likeButton.className = 'product_like_btn';

    const likeImg = document.createElement('img');
    likeImg.src = '/public/icons/like-white.svg';
    likeImg.alt = 'Лайк';

    likeButton.append(likeImg);

    const productInfo = document.createElement('div');
    productInfo.className = 'product_info';

    const productName = document.createElement('a');
    productName.href = `/pages/product/?id=${id}`;
    productName.className = 'product_name';
    productName.textContent = title;

    const productPrice = document.createElement('a');
    productPrice.href = `/pages/product/?id=${id}`;
    productPrice.className = 'product_price';
    productPrice.textContent = `${price} сум`;

    const addCartButton = document.createElement('button');
    addCartButton.className = 'add_cart_btn';

    const addToCartImg = document.createElement('img');
    addToCartImg.src = '/public/icons/add-to-cart.svg';
    addToCartImg.alt = 'Добавить в корзину';

    addCartButton.append(addToCartImg);

    productInfo.append(productName, productPrice, addCartButton);
    productCard.append(imgWrap, likeButton, productInfo);

    return productCard;
}