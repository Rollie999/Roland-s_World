const images = ["1000014570.jpg",
"1000015903.jpg",
"1000017287.jpg",
"1000017288.jpg",
"1000023757.jpg",
"1000025797.jpg",
"e56cf212ab47ed25be6f905b0fcc00db.jpg",
"IMG-20230715-WA0001.jpg",
"IMG-20230716-WA0002.jpg",
"IMG-20230917-WA0001.jpg",
"PDBM12.png",
"Screenshot 2024-12-18 012124.png",
"Screenshot 2025-12-13 173656.png",
"Screenshot_20231007_205826_One UI Home.jpg",
"Screenshot_20240111_225843_Instagram.jpg",
"Wi-Fi_QR_code_Mohsen.jpg",
"917iVfhEhxL._AC_UF1000,1000_QL80_.jpg",
"20231005_094423.jpg",
"20231005_094817.jpg",
"20231005_094823.jpg",
"1000013559.jpg",
"1000013641.jpg",
"1000014168.jpg",
"1000014239.jpg"
    
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