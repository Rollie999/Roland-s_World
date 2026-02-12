const images = [
 
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