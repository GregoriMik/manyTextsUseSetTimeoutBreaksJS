// alert('to działa!')

const spanText = document.querySelector('.text');
const spanCursor = document.querySelector('.cursor'); //stworzenie stałej dla kursora na końcu w html dla kursora jest przeznaczony drugi span

const txt = ['Zaczynamy...', 'Dzień dobry!', 'Dobrze, że jesteś'];
//Parametry
let indexText = 0;
const time = .8;
//Zmienne
let activeLetter = -35; //-3,5 sekundy czeka na początku na pierwszą literę
let activeText = 0;


//Implementacja

// const indexTyping = setInterval(addLetter, time);

//Implementacja
const addLetter = () => {
    //setTimeout
    if (activeLetter >= 0) { //Oczekiwanie na pierwszą literę
        spanText.textContent += txt[activeText][activeLetter];
    }
    activeLetter++;
    if (activeLetter === txt[activeText].length) {
        activeText++;
        if (activeText === txt.length) return;

        return setTimeout(() => {
            activeLetter = 0;
            spanText.textContent = '';
            addLetter();
        }, 2000)
    }
    setTimeout(addLetter, 100)

}

addLetter();

//Migający kursor
const cursorAnimation = () => {
    console.log(".cursor");
    spanCursor.classList.toggle('active');
}
setInterval(cursorAnimation, 400)