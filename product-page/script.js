const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
const heroSection = document.querySelector('.hero-section');
const scooterImage = document.querySelector('.scooter-image img');

// Stats elements
const stats = document.querySelectorAll('.stat .value');

// Themes including the red theme with stats
const themes = [
  {
    image: 'assets/scooter_green.png',
    backgroundColor: '#e8f5e9', // Light green
    circleColor1: '#a5d6a7',    // Green
    circleColor2: '#81c784',    // Green
    stats: [40, 20, 15, 50, 10, 1], // Green scooter stats
  },
  {
    image: 'assets/scooter_blue.png',
    backgroundColor: '#e3f2fd', // Light blue
    circleColor1: '#64b5f6',    // Blue
    circleColor2: '#42a5f5',    // Blue
    stats: [100, 40, 60, 120, 30, 5], // Blue scooter stats
  },
  {
    image: 'assets/scooter_red.png',
    backgroundColor: '#edc5c5', // Light red
    circleColor1: '#d16060',    // Red
    circleColor2: '#d16060',    // Red
    stats: [150, 60, 80, 200, 50, 10], // Red scooter stats
  },
];

let currentIndex = 0; // Start with the first theme
let animationIntervals = []; // Store active intervals

// Function to update the hero section and stats
function updateTheme(index) {
  const theme = themes[index];
  heroSection.style.backgroundColor = theme.backgroundColor;
  heroSection.style.setProperty('--circle-color-1', theme.circleColor1);
  heroSection.style.setProperty('--circle-color-2', theme.circleColor2);
  scooterImage.src = theme.image;

  // Clear ongoing animations before starting new ones
  clearAllIntervals();

  // Animate stats
  animateStats(theme.stats);
}

// Function to animate stats over 10 seconds
function animateStats(newStats) {
  stats.forEach((statElement, i) => {
    const startValue = parseInt(statElement.textContent); // Extract current number
    const endValue = newStats[i];
    const difference = endValue - startValue;
    const duration = 1200; // 1.2 seconds
    const increment = difference / (duration / 50); // Update every 50ms

    let currentValue = startValue;
    const interval = setInterval(() => {
      currentValue += increment;
      if (
        (increment > 0 && currentValue >= endValue) || // If incrementing and currentValue exceeds endValue
        (increment < 0 && currentValue <= endValue)   // If decrementing and currentValue falls below endValue
      ) {
        currentValue = endValue; // Ensure the final value is accurate
        clearInterval(interval);
      }
      statElement.textContent = Math.round(currentValue); // Update the displayed value
    }, 50); // Update every 50ms

    // Store the interval so we can clear it later
    animationIntervals.push(interval);
  });
}

// Function to clear all active intervals
function clearAllIntervals() {
  animationIntervals.forEach((interval) => clearInterval(interval));
  animationIntervals = []; // Reset the intervals array
}

// Event listener for "Next" button
nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % themes.length; // Cycle to the next theme
  updateTheme(currentIndex);
});

// Event listener for "Previous" button
prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + themes.length) % themes.length; // Cycle to the previous theme
  updateTheme(currentIndex);
});

// Initial setup
updateTheme(currentIndex);

const imagePath = 'assets/scooter.png';
let imageIndex = 0;
var greenColor = '#e8f5e9';

let blueBackgroundColorPrimary = '#e3f2fd';
let blueBackgroundColorSecondary = '#64b5f6';
let activeImage = 'assets/smoothie_blue.png';
let activeItemIndex = 4;
let backgroundImage = 'assets/smoothie_blueBackground.png';

let greenBackgroundColorPrimary = '#e8f5e9';
let greenBackgroundColorSecondary = '#a5d6a7';
let greenActiveImage = 'assets/smoothie_green.png';
let greenActiveItemIndex = 3;
let greenBackgroundImage = 'assets/smoothie_greenBackground.png';

const primaryBackgroundColor = document.querySelector('.primary-background-color');
const secondaryBackgroundColor = document.querySelector('.secondary-background-color');
const activeImageElement = document.querySelector('.active-image img');
const items = document.querySelectorAll('.active-item');

const greenSmoothieButton = document.querySelector('.green-smoothie');

greenSmoothieButton.addEventListener('click', () => {
  primaryBackgroundColor.style.backgroundColor = greenBackgroundColorPrimary;
  secondaryBackgroundColor.style.backgroundColor = greenBackgroundColorSecondary;
  activeImageElement.src = greenActiveImage;
  items.forEach(element => {
    element.classList.remove('active');
  });
  items[greenActiveItemIndex].classList.add('active');
});
