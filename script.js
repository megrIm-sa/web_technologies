//Accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

//Hover button effect
const button = document.querySelector('button');

button.addEventListener('mouseover', () => {
  button.style.backgroundColor = 'lightgrey';
});

button.addEventListener('mouseout', () => {
  button.style.backgroundColor = '';
});

//Hover card effect
const card = document.querySelector('img');

card.addEventListener('mouseover', () => {
  //card.style.backgroundColor = 'lightgrey';
  console.log("mouseover");
});

card.addEventListener('mouseout', () => {
  //card.style.backgroundColor = '';
});