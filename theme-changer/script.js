const themes = [
    {
        backgroundColor: 'black',
        ballColor: 'white',
        buttonColor: 'grey',
    },
    {
        backgroundColor: 'darkred',
        ballColor: 'red',
        buttonColor: 'red',
    },
    {
        backgroundColor: 'darkblue',
        ballColor: 'blue',
        buttonColor: 'blue',
    }
];

let currentThemeIndex = 0;

const background = document.querySelector('.background');
const body = document.querySelector('body');
const button = document.getElementById('themeButton');

document.getElementById('themeButton').addEventListener('click', () => {
    currentThemeIndex = (currentThemeIndex + 1) % themes.length;
    const theme = themes[currentThemeIndex];
    setTheme(theme);
});

function setTheme(theme) {
    background.style.setProperty('--ball-color', theme.ballColor);
    body.style.setProperty('--background-color', theme.backgroundColor);
    button.style.setProperty('--button-color', theme.buttonColor);
}

setTheme(themes[currentThemeIndex]);