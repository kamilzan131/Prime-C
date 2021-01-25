let modal = document.querySelectorAll('.overlay');
let btn = document.querySelectorAll('.my-btn');
let spClose = document.getElementsByClassName('closex');

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

for (let i = 0; i < spClose.length; i++) { 
  spClose[i].onclick = function () {
    for (let j = 0; j < modal.length; j++) {
  
      modal[j].style.display = "none";
      
    }
  };
}

window.onclick = function (event) {
  for (let j = 0; j < modal.length; j++) { 
    if (event.target == modal[j]) {
      modal[j].style.display = "none";
    }
  
  }
};
