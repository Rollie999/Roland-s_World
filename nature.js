const images = [ "20250801_185713.jpg",
"20250815_181617.jpg",
"20250816_080124.jpg",
"20250905_120429.jpg",
"IMG-20240323-WA0009.jpg",
"20240616_175837.heif",
"20241030_124512.heif",
"20250717_064112.jpg",
"20250717_064446.jpg",
"20250717_064544.jpg",
"20250718_075634.jpg",
"20250721_082302.jpg",
"20250723_174236.jpg"
];

const folder = 'nature/';
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