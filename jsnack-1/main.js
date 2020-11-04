/*  CONSEGNA: Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.  */

$(document).ready(function() {
    // creo un array di oggetti
    // ogni oggetto corrisponde ad una bicicletta caratterizzata da nome e peso
    const bicycles = [
        {
            'name' : 'Bianchi',
            'weight' : 20
        },
        {
            'name' : 'Garelli',
            'weight' : 17
        },
        {
            'name' : 'Olympia',
            'weight' : 22
        },
        {
            'name' : 'Lapierre',
            'weight' : 16
        },
        {
            'name' : 'Bickerton',
            'weight' : 19
        }
    ];

    // creo una variabile lightestBicycle in cui salverò la bicicletta più leggera
    // inizialmente, pongo questa variabile uguale alla prima bicicletta presente nell'array bicycles
    var lightestBicycle = bicycles[0];

    // ciclo sull'array bicycles
    bicycles.forEach((currentBicycle) => {
        // se la bicicletta corrente è più leggera di quella salvata nella variabile lightestBicycle,
        // salvo la bici corrente nella variabile lightestBicycle
        if (currentBicycle.weight < lightestBicycle.weight) {
            lightestBicycle = currentBicycle;
        }
    });

    // stampo la bici più leggera
    console.log(lightestBicycle);



});
