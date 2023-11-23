// Accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}


const button = document.querySelector('button');
if (button != null) {
  // Hover button effect
  button.addEventListener('mouseover', () => {
    button.style.backgroundColor = 'lightgrey';
  });

  button.addEventListener('mouseout', () => {
    button.style.backgroundColor = '';
  });

  // Outline buttons
  button.style.borderStyle = 'solid';
  button.style.borderColor = 'gray';
}

// Play audio
var audio = document.getElementById("audio");

function playAudio() {
  if (audio === null)
    return;
  if (!audio.paused) {
    audio.pause();
    audio.currentTime = 0;
  }
  audio.play();
}

// Drag and Drop
const gameNames = document.querySelectorAll('.gameName');
const descriptions = document.querySelectorAll('.description');
var count = 0;

gameNames.forEach((gameName) => {
  gameName.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', e.target.textContent);
  });
});

descriptions.forEach((description) => {
  description.addEventListener('dragover', (e) => {
    e.preventDefault();
  });

  description.addEventListener('drop', (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData('text/plain');
    const matchedGameName = description.getAttribute('data-gameName');
    if (data === matchedGameName) {
      description.textContent = data;
      description.classList.add('correct');
      popUp(description);
      playAudio();
      count++;
      console.log(count);
      if (count === 2) {
        console.log("animation started!");
        newAnimation();
      }
    }
  });
});

// Animation
function popUp(element) {
  let startTime = null;
  let animationDuration = 500; // 0.5 second;

  function animate(timestamp) {
    if (!startTime) {
      startTime = timestamp;
    }

    const elapsedTime = timestamp - startTime;
    const progress = Math.min(elapsedTime / animationDuration, 1);

    // Linear animation: The element's opacity and scale change linearly.
    const scale = progress + 0.5;

    // Modify element properties
    element.style.opacity = scale;
    element.style.transform = `scale(${scale})`;

    if (progress < .5) {
      requestAnimationFrame(animate);
    }
    else {
      popDown(element);
    }
  }

  requestAnimationFrame(animate);
}

function popDown(element) {
  let startTime = null;
  let animationDuration = 300; // 0.3 second;

  function animateDown(timestamp) {
    if (!startTime) {
      startTime = timestamp;
    }

    const elapsedTime = timestamp - startTime;
    const progress = Math.min(elapsedTime / animationDuration, 1);

    // Linear animation: The element's opacity and scale change linearly.
    const scale = (-progress) + 1.11;

    // Modify element properties
    element.style.opacity = scale;
    element.style.transform = `scale(${scale})`;

    if (progress < .1) {
      requestAnimationFrame(animateDown);
    }
  }

  requestAnimationFrame(animateDown);
}

// Second animation
function newAnimation() {
  const element = document.getElementById('animation');

  // Define keyframes
  const keyframes = [
    { transform: 'translate(-10%, 0)' },   // Start position
    { transform: 'translate(10%, 0)' }, // Middle position
    { transform: 'translate(-10%, 0)' }    // End position
  ];

  // Set animation properties
  const animationOptions = {
    duration: 1500,   // 1.5 seconds
    iterations: 10,  // Run count
    fill: 'forwards' // Keep final state
  };

  // Create an animation
  element.animate(keyframes, animationOptions);
}
