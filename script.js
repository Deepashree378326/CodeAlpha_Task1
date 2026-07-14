const buttons = document.querySelectorAll(".filter-btn");

const images = document.querySelectorAll(".gallery-item");

const lightbox = document.querySelector(".lightbox");

const lightboxImage = document.querySelector(".lightbox-image");

const closeBtn = document.querySelector(".close");

const nextBtn = document.querySelector(".next");

const prevBtn = document.querySelector(".prev");

let currentIndex = 0;

let visibleImages = [];

buttons.forEach(button=>{

button.addEventListener("click",()=>{

buttons.forEach(btn=>btn.classList.remove("active"));

button.classList.add("active");

const filter=button.dataset.filter;

visibleImages=[];

images.forEach(image=>{

if(filter==="all"||image.dataset.category===filter){

image.style.display="block";

visibleImages.push(image);

}

else{

image.style.display="none";

}

});

});

});

visibleImages=[...images];

images.forEach((image,index)=>{

image.addEventListener("click",()=>{

lightbox.style.display="flex";

lightboxImage.src=image.src;

currentIndex=visibleImages.indexOf(image);

});

});

closeBtn.addEventListener("click",()=>{

lightbox.style.display="none";

});

nextBtn.addEventListener("click",()=>{

currentIndex++;

if(currentIndex>=visibleImages.length){

currentIndex=0;

}

lightboxImage.src=visibleImages[currentIndex].src;

});

prevBtn.addEventListener("click",()=>{

currentIndex--;

if(currentIndex<0){

currentIndex=visibleImages.length-1;

}

lightboxImage.src=visibleImages[currentIndex].src;

});

window.addEventListener("click",(e)=>{

if(e.target===lightbox){

lightbox.style.display="none";

}

});