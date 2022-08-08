const pets = [
  {
    "id": "0",
    "name": "Jennifer",
    "img": "../../assets/images/pets-jennifer.png",
    "type": "Dog",
    "breed": "Labrador",
    "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    "age": "2 months",
    "inoculations": ["none"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "id": "1",
    "name": "Sophia",
    "img": "../../assets/images/pets-sophia.png",
    "type": "Dog",
    "breed": "Shih tzu",
    "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    "age": "1 month",
    "inoculations": ["parvovirus"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "id": "2",
    "name": "Woody",
    "img": "../../assets/images/pets-woody.png",
    "type": "Dog",
    "breed": "Golden Retriever",
    "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    "age": "3 years 6 months",
    "inoculations": ["adenovirus", "distemper"],
    "diseases": ["right back leg mobility reduced"],
    "parasites": ["none"]
  },
  {
    "id": "3",
    "name": "Scarlett",
    "img": "../../assets/images/pets-scarlet.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    "age": "3 months",
    "inoculations": ["parainfluenza"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "id": "4",
    "name": "Katrine",
    "img": "../../assets/images/pets-katrine.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    "age": "6 months",
    "inoculations": ["panleukopenia"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "id": "5",
    "name": "Timmy",
    "img": "../../assets/images/pets-timmy.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    "age": "2 years 3 months",
    "inoculations": ["calicivirus", "viral rhinotracheitis"],
    "diseases": ["kidney stones"],
    "parasites": ["none"]
  },
  {
    "id": "6",
    "name": "Freddie",
    "img": "../../assets/images/pets-freddie.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    "age": "2 months",
    "inoculations": ["rabies"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "id": "7",
    "name": "Charly",
    "img": "../../assets/images/pets-charly.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    "age": "8 years",
    "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
    "diseases": ["deafness", "blindness"],
    "parasites": ["lice", "fleas"]
  }
];


let btnBurger = document.querySelector('.burger');
let navMenu = document.querySelector('.nav');
let overflow = document.querySelector('.overflow');
let navBlock = document.querySelector('.nav-block');
let logoNav = document.querySelector('.logo-nav');
let bodyScroll = document.body;

function handler (){
    overflow.classList.toggle('block-none')
    navMenu.classList.toggle('nav-toggle')
    btnBurger.classList.toggle('burger-animation')
    bodyScroll.classList.toggle('scroll-hide')
}

function handlerMenu (event){
  let myElement = event.target.getAttribute('class');
  if(myElement === 'nav-link'){
    overflow.classList.toggle('block-none')
    navMenu.classList.toggle('nav-toggle')
    btnBurger.classList.toggle('burger-animation')
    bodyScroll.classList.toggle('scroll-hide')  
  }
}

btnBurger.addEventListener('click', handler)
overflow.addEventListener('click', handler)
logoNav.addEventListener('click', handler)
navBlock.addEventListener('click', handlerMenu)

// popup 

let continer = document.querySelector('.continer');
let windowModal = document.querySelector('.window');

function popup (event){
  let myElement = event.target.closest('.card');
  let myModal = event.target;
  if(myElement){
    windowModal.classList.toggle('window-hide')
    bodyScroll.classList.toggle('body-hide')
    let i = +event.target.closest('.card').getAttribute('id');
    document.querySelector('.img').src = pets[i]["img"];
    document.querySelector('.window-name').innerHTML = pets[i]["name"];
    document.querySelector('.type').innerHTML = pets[i]["type"];
    document.querySelector('.breed').innerHTML = pets[i]["breed"];
    document.querySelector('.window-description').innerHTML = pets[i]["description"];
    document.querySelector('.age').innerHTML = pets[i]["age"];
    document.querySelector('.inoculations').innerHTML = pets[i]["inoculations"];
    document.querySelector('.diseases').innerHTML = pets[i]["diseases"];
    document.querySelector('.parasites').innerHTML = pets[i]["parasites"];
  }
  if(myModal.getAttribute('class') === 'window-area' || myModal.closest('.window-btn')){
    windowModal.classList.toggle('window-hide')
    bodyScroll.classList.toggle('body-hide')
  }
  
}

continer.addEventListener('click', popup)
windowModal.addEventListener('click', popup)

// pets slider
let cards = document.querySelectorAll('.card');
let arrPets = [];
let arrPetsAll = [];

function petsPage (){
  for(let i = 0; i < 6; i++){
    for(let i = 0; arrPets.length < cards.length; i++){
      let num = Math.floor(Math.random() * 10);
      if(num <= 7 && arrPets.indexOf(num) === -1){
        arrPets.push(num)
      }
    }
    arrPetsAll.push(arrPets)
    arrPets = [];
  }

  for(let i = 0; i < cards.length; i++){
    cards[i].id = arrPetsAll[0][i];
    cards[i].innerHTML = `
    <div class='card-img'><img class='images' src='${pets[arrPetsAll[0][i]]["img"]}' alt='image'></div>
    <div class='card-title'>${pets[arrPetsAll[0][i]]["name"]}</div>
    <div class='btn card-btn'>Learn more</div>
    `;
  }

}

petsPage()

let btnAllLeft = document.querySelector('.btn-pg-left-all');
let btnLeft = document.querySelector('.btn-pg-left');
let btnMyPush = document.querySelector('.btn-fix');
let btnRight = document.querySelector('.btn-pg-right');
let btnAllRight = document.querySelector('.btn-pg-right-all');















