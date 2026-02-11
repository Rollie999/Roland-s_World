const images = [
    '20250726_114705.jpg', 
    '20250726_114717.jpg', 
    '20250726_114741.jpg', 
    '20250726_114748.jpg', 
    '20250726_114815.jpg', 
    '20250726_114819.jpg', 
    '20250726_114830.jpg', 
    '20250726_114840.jpg',
    '20250726_114902.jpg',
    '20250726_114925.jpg',
    '20250726_114936.jpg',
    '20250726_114946.jpg',
    '20250726_115002.jpg',
    '20250726_115011.jpg',
    '20250726_115024.jpg',
    '20250726_115036.jpg',
    '20250726_115049.jpg',
    '20250726_115059.jpg',
    '20250726_115112.jpg',
    '20250726_115132.jpg',
    '20250726_115143.jpg',
    '20250726_115155.jpg',
    '20250726_115206.jpg',
    '20250726_115217.jpg'
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