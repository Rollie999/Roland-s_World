const images = [
    
];

const folder = 'random/';
const gallery = document.getElementById('random-gallery');

images.forEach((fileName) => {
    const img = document.createElement('img');
    img.src = folder + fileName;
    
    const randomRotate = Math.floor(Math.random() * 30) - 15;
    img.style.transform = `rotate(${randomRotate}deg)`;
    
    img.onclick = () => window.open(img.src, '_blank');
    
    img.onerror = () => {
        if (!img.src.includes('.JPG')) {
            img.src = folder + fileName.replace('.jpg', '.JPG');
        }
    };

    gallery.appendChild(img);
});