const timerDisplay = document.getElementById('timer');
const resetButton = document.getElementById('reset');
const log = document.getElementById('reset-log');
const count = document.getElementById('reset-count');
const cookieKey = 'resetData';

// Handle reset button click
resetButton.addEventListener('click', reset);

let resetData = {
  resets: [],
  count: 0
};

let lastTime = performance.now(); // To track the last frame's timestamp
let startTime = lastTime; // To track when the timer started
let deltaTime = 0; // To track the time between frames
let totalElapsedTime = 0; // To track the total time elapsed

function update(currentTime) {
    deltaTime = (currentTime - lastTime) / 1000; // Time since the last frame
    totalElapsedTime = (currentTime - startTime) / 1000; // Total time since the start

    lastTime = currentTime; // Update the last frame's timestamp

    // Use deltaTime for frame-by-frame updates
    // console.log(`Delta Time: ${deltaTime.toFixed(3)} seconds`);

    // Display total elapsed time
    // console.log(`Total Elapsed Time: ${totalElapsedTime.toFixed(1)} seconds`);

    timerDisplay.textContent = totalElapsedTime.toFixed(1);

    requestAnimationFrame(update);
}

function reset(){
  resetData.resets.push(totalElapsedTime);
  resetData.count++;
  saveToCookies();
  updateLog();

  totalElapsedTime = 0;
  startTime = performance.now();
  timerDisplay.textContent = '0.000';
}

function saveToCookies(){
  document.cookie = `${cookieKey}=${
    JSON.stringify(resetData)
  }; path=/;`;

  console.log(JSON.stringify(resetData));
}

var cookie = loadFromCookies('cookieName');


// Load data from cookies
function loadFromCookies (cookieKey){
  const cookieData = document.cookie
    .split('; ')
    .find(row => row.startsWith(cookieKey + '='));

  if (cookieData) {
    var data = (cookieData.split('=')[1]);
    return data;
  }
};

// Update the reset log
const updateLog = () => {

  log.innerHTML = resetData.resets
    .map((time, index) => `<li>Reset ${index + 1}: ${time.toFixed(3)} seconds</li>`)
    .join('');
  count.textContent = resetData.count;
};

// Load cookies and start the update loop
loadFromCookies();
requestAnimationFrame(update);

document.cookie = 'counter=' + 500;


'cookieName="5"'

// cookieName=  cookieName="5"