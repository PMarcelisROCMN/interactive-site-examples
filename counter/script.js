const counter = document.getElementById('counter');
const increment = document.getElementById('increment');

let count = 0;

increment.addEventListener('click', incrementCounter);

function incrementCounter() {
    count++;
    counter.innerText = count;
    document.cookie = 'counter=' + count;
}

function loadFromCookies (cookieKey){

    // load in all cookie data
    const cookieData = document.cookie
      .split('; ')
      .find(row => row.startsWith(cookieKey + '=')); // searches for a specific row (based on the name of the cookie)
  
      // if cookieData is not null
    if (cookieData) {
        // get the second part of the string (the value of the cookie)
      count = (cookieData.split('=')[1]);

      // Here I set the counter to the value of the cookie (this might be different than your site)
        counter.innerText = count;
    }
  };

  loadFromCookies('counter');