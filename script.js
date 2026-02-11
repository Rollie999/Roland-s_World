const images = [
    '20250711_130253.jpg', '20250711_130919.jpg', '20250711_165940.jpg', 
    '20250711_190335.jpg', '20250711_191247.jpg', '20250711_191309.jpg', 
    '20250712_085934.jpg', '20250712_121839.jpg', '20250712_122110.jpg', 
    '20250712_122114.jpg', '20250712_125106.jpg', '20250712_184959.jpg', 
    '20250712_185356.jpg', '20250713_080752.jpg', '20250716_204038.jpg', 
    '20250721_210954.jpg', '20250724_202829.jpg', '20250724_202834.jpg', 
    '20250724_203529.jpg', '20250726_114321.jpg', '20250726_114324.jpg', 
    '20250726_114330.jpg', '20250726_114336.jpg', '20250726_114343.jpg', 
    '20250726_114400.jpg', '20250726_114413.jpg', '20250726_114434.jpg', 
    '20250726_114451.jpg', '20250726_114503.jpg', '20250726_114518.jpg',
    '20250726_114532.jpg', '20250726_114546.jpg'
];

const folder = 'food/';
const gallery = document.getElementById('image-gallery');
const rowPositions = [5, 22, 39, 56, 73]; 

images.forEach((fileName, index) => {
    const img = document.createElement('img');
    img.src = folder + fileName;
    
    const row = index % 5;
    img.style.top = rowPositions[row] + '%';
    
    img.style.animationDelay = (index * 3) + 's';

    img.onclick = () => window.open(img.src, '_blank');
    
    img.onerror = () => {
        img.src = folder + fileName.replace('.jpg', '.JPG');
    };

    gallery.appendChild(img);
});