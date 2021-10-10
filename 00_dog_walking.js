const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;
// ** for the animation spirit ****//
let spriteImage;
let animation = [];
let counter = 0; 
const spriteImageFrame = 10; 
// ** for the images of contents ****//



function preload() {
 // ** for the animation spirit ****//
 spriteImage = loadImage('assets/dog-walking.png'); 

}

function setup() {
  createCanvas(canvasWidth, canvasHeight); 
  background(0, 0, 255 );
  // *** get position of dog walking sequence********// 
  for(let i = 0; i < spriteImageFrame; i++ )
  animation[i] = spriteImage.get(i * 200, 0, 200, 200)

}

function draw() {
 // background(0, 0, 255);

  //  for(let i = 0; i < imgPainting.length; i++){
  //    image(imgPainting[i], 0 + i * 150, 0 , 150, 150);
  // }

   //  *** display dog walking sequence********// 
   image(animation[counter % animation.length], mouseX, mouseY, 100, 100)
   counter ++;
    
}

