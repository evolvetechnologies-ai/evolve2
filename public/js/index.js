
  
function animateCounter(elementId, target, duration) {
  const counterElement = document.getElementById(elementId);
  let start = 0;
  const increment = target / (duration / 10); // Increment value per 10ms interval

  const timer = setInterval(() => {
    start += increment;
    if (start >= target) {
      start = target;
      clearInterval(timer);
    }
    counterElement.textContent = Math.floor(start);
  }, 10);
}

// Observer to detect when elements are in the viewport
const counters = [
  { id: "counter1", target: 25, duration: 3000 },
  { id: "counter2", target: 1, duration: 2000 },
  { id: "counter3", target: 19, duration: 3000 },
   { id: "counter4", target: 0.77, duration: 3000 },
    { id: "counter5", target: 25, duration: 3000 },
     { id: "counter6", target: 1, duration: 3000 },
      { id: "counter7", target: 19, duration: 3000 },
       { id: "counter8", target: 0, duration: 3000 },
];

const observerOptions = {
  root: null, // Use the viewport as the root
  threshold: 0.5, // Trigger when 50% of the element is visible
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const counterData = counters.find(counter => counter.id === entry.target.id);
      if (counterData) {
        animateCounter(counterData.id, counterData.target, counterData.duration);
        observer.unobserve(entry.target); // Stop observing once animation starts
      }
    }
  });
}, observerOptions);

// Start observing each counter element
counters.forEach(counter => {
  const element = document.getElementById(counter.id);
  observer.observe(element);
});


// 
const myModal = document.getElementById('myModal');
const video1 = document.getElementById('video1');

// 
myModal.addEventListener('shown.bs.modal', function() {
    video1.play();
});

// 
myModal.addEventListener('hidden.bs.modal', function() {
    video1.pause();
});









const clipp = document.querySelectorAll(".hover-to-play");
const video = document.getElementById("myVideo");

clipp.forEach(clip => {
    clip.addEventListener("click", () => {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });
});



