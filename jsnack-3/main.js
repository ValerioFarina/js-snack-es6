/*  CONSEGNA: A partire da un array di oggetti, creare una copia dell'array
e aggiungere ai singoli elementi dell'array una nuova proprietà "position" che contiene una lettera casuale.  */


$(document).ready(function() {

    // creo un array di oggetti
    // ciascun oggetto rappresenta un libro
    let books = [
        {
            'title' : 'Frankenstein',
            'author' : 'Mary Shelley',
            'genre' : 'Gothic novel'
        },
        {
            'title' : 'Hard times',
            'author' : 'Charles Dickens',
            'genre' : 'Novel'
        },
        {
            'title' : 'Fahrenheit 451',
            'author' : 'Ray Bradbury',
            'genre' : 'Dystopian'
        },
        {
            'title' : 'Three Men in a Boat',
            'author' : 'Jerome Klapka Jerome',
            'genre' : 'Comedy novel'
        }
    ];

    // clono l'array books
    let clonedBooks = books.map(cloneObject);

    // ciclo sull'array clonedBooks
    // ad ogni iterazione, aggiungo al libro corrente la proprietà "position" e gli assegno come valore una lettera generata casualmente
    clonedBooks.forEach((currentBook) => currentBook.position = getRndLetter());
    
    console.log(clonedBooks);
    console.log(books);


});


// *************** LE MIE FUNZIONI ***************

// questa funzione prende come parametro un oggetto o un array e restituisce una sua copia
const cloneObject = (object) => {
    return {...object};
};


// questa funzione prende in input un min e un max e ritorno un valore casuale compreso tra di essi
const getRndInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;


// questa funzione ritorna una lettera a caso dell'alfabeto
const getRndLetter = () => {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let randomNumber = getRndInteger(0, alphabet.length - 1);
    return alphabet[randomNumber];
};
