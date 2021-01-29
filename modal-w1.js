const modal = document.querySelectorAll('.overlay'),
  btn = document.querySelectorAll('.my-btn'),
  spClose = document.querySelectorAll('.closex'),
  licenseBtns = document.querySelectorAll('.license__link'),
  licenseScreen = document.querySelector('.license-bg'),
  licenseClose = document.querySelector('.license-closex');

console.log(spClose);


for (const _btn of btn) {
  _btn.onclick = function () {

    
    
    for (let j = 0; j < modal.length; j++) {
      let a = _btn.getAttributeNode("name");
      let b = modal[j].getAttributeNode("name");
      
      if (a.value === b.value) {
        modal[j].style.display = "block";
        console.log("true");
      }
      
    }
    
  };

}

for (const _btn of licenseBtns) {
  _btn.onclick = function () {

    licenseScreen.style.display = "block";
    console.log('license open');

    
  };

}

for (let i = 0; i < spClose.length; i++) { 
  spClose[i].onclick = function () {
    for (let j = 0; j < modal.length; j++) {
  
      modal[j].style.display = "none";

    }

   
  };
}


licenseClose.addEventListener('click', () => {
  licenseScreen.style.display = "none";
});

window.addEventListener('click', (event) => {
  for (let j = 0; j < modal.length; j++) {
    if (event.target == modal[j]) {
      modal[j].style.display = "none";
      console.log('winclick');
    }
  
  }
});


 
 


