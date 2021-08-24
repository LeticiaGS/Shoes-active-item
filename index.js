// mudar o as Divtext dos elementos
const allStarText  = document.getElementById('allStar');
const nikeText     = document.getElementById('nike');
const adiddasText   = document.getElementById('adiddas');
hideOrShowTextDiv('allStar');

//mudar o active
const items    = Array.from(document.getElementsByClassName('item'));

//mudar a background image
let picture    = document.getElementById('picture');
picture.src    ="assets/allStar.jpg";

items.forEach((item)=> {
  item.addEventListener('click',onItemClick);
})

function onItemClick (event) {
    const selectedAttribute = event.target.getAttribute('data');
    addOrRemoveActive (selectedAttribute); 
    changeBackgroundImage (selectedAttribute);
    hideOrShowTextDiv(selectedAttribute);
}

function addOrRemoveActive (selectedAttribute) {
  items.forEach((item)=> {
    const itemAttribute = item.getAttribute('data');
    if (itemAttribute === selectedAttribute) {
       item.classList.add('active');
       return;
    }
    item.classList.remove('active');
  })
}

function changeBackgroundImage (selectedAttribute) {
  
    if (selectedAttribute === "allStar") {
      picture.src="assets/allStar.jpg";
      picture.style.animation = "transitionSuave 1.5s ease";
    }
    if (selectedAttribute === "nike") {
      picture.src="assets/nike.jpg";
      picture.style.animation = "transitionSuave 1.5s ease";
    }
    if (selectedAttribute === "adiddas") {
      picture.src="assets/adiddas.jpg";
      picture.style.animation = "transitionSuave 1.5s ease";
    }
}

function hideTextElements() {
  allStarText.style.display = 'none';
  nikeText.style.display = 'none';
  adiddasText.style.display = 'none';
}

function hideOrShowTextDiv(selectedAttribute) {
  hideTextElements();
  if(selectedAttribute === 'allStar') {
    allStarText.style.display= 'block';
  }
  if(selectedAttribute === 'nike') {
    nikeText.style.display= 'block';
  }
  if(selectedAttribute === 'adiddas') {
    adiddasText.style.display= 'block';
  }
}


