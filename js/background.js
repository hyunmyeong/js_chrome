const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

//createElement() => javascript로 html element 만듦
const bgImage = document.createElement("img"); 

bgImage.src = `img/${chosenImage}`;

//appendChild() => html 추가
document.body.appendChild(bgImage);


//html element 생성 
//-> 이미지를 선택하고 src로 img 폴더 뒤에 추가 + chosenImage 
//-> bgImage를 body에 append
