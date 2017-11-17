/* Function to automatically resize home page property images to match the browser sizing of the first image. */
function resizeHeaderImage(){
  var images = document.getElementsByClassName("img-fluid");
  height = images[0].height;
  width = images[0].width;

  var i;
  for(i = 1; i < images.length; i++){
    images[i].style.width = width + 'px';
    images[i].style.height = height + 'px';
  }
}

/* Function to rotate through header images. */
function rotateHeaderImage(){
  if(position == total){
    position = 1;
    document.getElementById("button-heading").innerHTML = 'TELL ME MORE<br><i class="fa fa-arrow-down"></i>';
    document.getElementById("button-heading").href = "#services";
  }
  else if(position >= 1 && position <= 6){
    /* 11b Jean Street. */
    position++;
    document.getElementById("button-heading").innerHTML = "11b Jean Street<br> Sold for $1,011,000";
    document.getElementById("button-heading").href = "./properties/11b-jean.html";
  }
  else if(position >= 7 && position <= 11){
    /* 75 Orange Street. */
    position++;
    document.getElementById("button-heading").innerHTML = "75 Orange Street<br> 4 Bedrooms, 3 Bathrooms";
    document.getElementById("button-heading").href = "./properties/11b-jean.html";
  }

  header.style.backgroundImage = 'url("./img/header/header0' + position + '.jpg")';

  /* Preload next image. */
  if(preload.length != total - 2 && position != total){
    preload[position - 2] = new Image();
    preload[position - 2].src = "./img/header/header0" + (position + 1) + ".jpg";
  }
}

/* Function to rotate property images. */
function rotatePropertyImage(){
  if(position == total){
    position = 1;
  }
  else{
    position++;
  }

  image.src = '../img/properties/' + property + '/0' + position + '.jpg';
  image.style.width = width + 'px';
  image.style.height = height + 'px';
}

/* Function to resize all property images on window resize. */
function resizePropertyImage(){
  image.style.width = '80%';
  image.style.height = '100%';
  width = image.width;
  height = image.height;
}

/* Initialise, and run home page functions. */
function initHome(){
  header = document.getElementById("header");
  style = window.getComputedStyle(header);
  image = style.getPropertyValue('background-image');
  position = image.charAt(image.length-7);
  total = header.dataset.total;
  preload = [];

  resizeHeaderImage();
  window.addEventListener('resize', resizeHeaderImage);
  setInterval(rotateHeaderImage, 4000);
}

/* Initialise, and run home property functions. */
function initProperty(){
  image = document.getElementById("property-image");
  position = image.src.charAt(image.src.length-5);
  total = image.dataset.total;
  property = image.dataset.name;
  width = image.width;
  height = image.height;

  window.addEventListener('resize', resizePropertyImage);
  setInterval(rotatePropertyImage, 4000);
}

/* Home page events. */
if(document.getElementById("header") !== null){
  window.addEventListener('load', initHome);
}
/* Property page events. */
else if(document.getElementById("property-image")){
  window.addEventListener('load', initProperty);
}
