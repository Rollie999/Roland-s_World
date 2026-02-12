const images = [
    "20250901_073931.jpg",
"20251220_131008.jpg",
"20251222_124736.jpg",
"20251224_131808.jpg",
"20251225_130318.jpg",
"20251225_135241.jpg",
"1000016206.jpg",
"1000016212.jpg",
"1000016213.jpg",
"1000022300.jpg",
"1000022665.jpg",
"1000022666.jpg",
"20250711_130253.jpg",
"20250711_130919.jpg",
"20250711_165940.jpg",
"20250711_190335.jpg",
"20250711_191247.jpg",
"20250711_191309.jpg",
"20250712_085934.jpg",
"20250712_121839.jpg",
"20250712_122110.jpg",
"20250712_122114.jpg",
"20250712_125106.jpg",
"20250712_184959.jpg",
"20250712_185356.jpg",
"20250713_080752.jpg",
"20250716_204038.jpg",
"20250721_210954.jpg",
"20250723_125358.jpg",
"20250821_140846.jpg",
];

const folder = 'food/';
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