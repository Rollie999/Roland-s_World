const images = [
    "20250712_171152.jpg",
    "20250712_171525.jpg",
    "20250712_171538.jpg",
    "20250712_171751.jpg",
    "20250712_171753.jpg",
    "20250712_172352.jpg",
    "20250712_192547.jpg",
    "20250712_192605.jpg",
    "20250712_192621.jpg",
    "20250713_151102.jpg",
    "20250717_060851.jpg",
    "20250717_061322.jpg",
    "20250718_071551.jpg",
    "20250718_083721.jpg",
    "20250718_133748.jpg",
    "20250721_082313.jpg",
    "20250721_084731.jpg",
    "20250901_113618.jpg",
    "20250901_182621.jpg",
    "20250901_182923.jpg",
    "20250901_182929.jpg",
    "20250905_120429.jpg",
    "20251222_114237.jpg",
    "IMG-20240701-WA0012.jpg",
    "IMG-20240814-WA0045.jpg",
    "IMG-20240816-WA0010.jpg",
    "IMG-20240816-WA0036.jpg",
    "IMG-20250712-WA0102.jpg",
    "IMG-20250712-WA0103.jpg",
    "IMG-20250720-WA0052.jpg",
    "IMG-20250720-WA0072.jpg",
    "IMG-20250721-WA0028.jpg",
    "Screenshot 2024-12-29 224937.png",
    "20231006_064503.jpg",
    "20240913_130740.heif",
    "20250712_171141.jpg"
];

const folder = 'architecture/';
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
