const images = [
    "IMG-20240814-WA0038.jpg",
"IMG-20240814-WA0126.jpg",
"IMG-20240815-WA0019.jpg",
"IMG-20240815-WA0023.jpg",
"IMG-20240815-WA0044.jpg",
"IMG-20240818-WA0013.jpg",
"Screenshot 2024-12-24 140147.png",
"Screenshot 2024-12-31 234042.png",
 
];

const folder = 'loved/';
const gallery = document.getElementById('image-gallery');

images.forEach((fileName, index) => {
    const img = document.createElement('img');
    img.src = folder + fileName;
    
    img.style.top = Math.random() * 80 + 5 + '%'; 
    img.style.animationDelay = (index * 3.5) + 's';

    img.onclick = () => {
        window.open(img.src, '_blank');
    };
    
    gallery.appendChild(img);
});