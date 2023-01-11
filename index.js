const canvas = document.querySelector('canvas');
const cntx = canvas.getContext('2d');

canvas.width = 1024
canvas.height = 576

cntx.fillStyle = 'white';
cntx.fillRect(0, 0, canvas.width, canvas.height);
const image = new Image();
image.src = './Assets/PokemonStyleMap.png';

image.onload = () => {
    cntx.drawImage(image, -1300 , -7990);
} 