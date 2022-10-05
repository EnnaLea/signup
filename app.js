const container = document.querySelector('.container');
const signUpBtn = document.querySelector('.green-bg button');

// ogni volta che clicchiamo il bottone aggiungiamo una nuova classe a .container con nuovo stile css. con il click seguente si rimuove la classe dal container

signUpBtn.addEventListener("click", 
() => {
    container.classList.toggle("change");

});

