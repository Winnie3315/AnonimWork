import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import { Header, reload, reloadSwiperImages, renderSingleImage } from "../../module/ui";
import axios from "axios";
import { getData } from "../../module/request";
import { ImageLoader } from "../../components/ImageLoader";
import { ProductCard } from '../../components/Product';

const imgFlex = document.querySelector(".img-flex");
const swiper_wrapper = document.querySelector('.swiper-wrapper');
const prodSearch = location.search.split('=');
const prodId =  prodSearch.at(-1)
const title = document.querySelector("h1")
const actualPrice = document.querySelector(".actual")
const realPrice = document.querySelector(".real")

// Сохраняем экземпляр Swiper в переменную
const swiper = new Swiper('.product_swiper', {
    modules: [Navigation],
    loop: false,
    slidesPerView: 3,
    spaceBetween: 23,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },    
    breakpoints: {
        320:{
          slidesPerView: 1
        },
        490: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        567:{
          slidesPerView: 2, 
          spaceBetween: 10
        },
        768:{
          slidesPerView: 2,
          spaceBetween: 15
        },
        900: {
          slidesPerView: 2,
          spaceBetween: 15
        }
  
  
  
      }
});

Header();

getData("/products/" + prodId)
.then(res => {
    console.log(res);
    console.log(res.data.images);
    
    reloadSwiperImages(res.data.images, ImageLoader, swiper_wrapper);
    
    const title = document.querySelector("h1");
    const actualPriceElement = document.querySelector(".actual");
    const realPrice = document.querySelector(".real");
    const desc = document.querySelector(".product_description")
    const brand = document.querySelector(".brand")
    const categ = document.querySelector(".categ")
    const width = document.querySelector(".width")
    const height = document.querySelector(".height")
    const deep = document.querySelector(".deep")
    const full = document.querySelector(".full")
    const similar_wrap = document.querySelector(".similar_wrap")

    
    if (title) {
        title.innerHTML = res.data.title;
    }
    if (actualPriceElement) {
        const actualPrice = res.data.price;
        actualPriceElement.innerHTML = actualPrice;
        
        const discount = res.data.discountPercentage;
        const originalPrice = actualPrice / (1 - discount / 100);
        desc.innerHTML = res.data.description
        brand.innerHTML = `brand: ` + res.data.brand
        categ.innerHTML = `category: ` + res.data.category
        width.innerHTML = `width: ` + res.data.dimensions.width
        height.innerHTML = `height: ` + res.data.dimensions.height
        deep.innerHTML = `depth: ` + res.data.dimensions.depth
        full.innerHTML = res.data.description


        getData('/products?category=' + res.data.category)
            .then(res => reload( res.data, ProductCard, similar_wrap ))
        if (realPrice) {
            realPrice.innerHTML = originalPrice.toFixed(2);
        }
    }

    swiper.update();
})
.catch(error => {
    console.error("Ошибка при получении данных:", error);
});
