//Creare un oggetto che descriva uno studente, con le seguenti proprietà:
//nome, cognome, età.
var studente1 = {
    nome: "Anna",
    cognome: "Verdi",
    eta: 23
}

console.log(studente1);

//Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.

for(var key in studente1){
    console.log(studente1[key]);
    document.getElementById("stu1").innerHTML += key + ": " + studente1[key] + "<br>";
    console.log(key);
}


//Creare un array di oggetti di studenti.
//Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
//(part three)
var list_student = [
    {
        nome: "Ale",
        cognome: "Rossi",
        eta: 23
    },
    {
        nome: "Alice",
        cognome: "Bianchi",
        eta: 23
    },
    {
        nome: "Laura",
        cognome: "Neri",
        eta: 23
    },
    {
        nome: "Marta",
        cognome: "Ambra",
        eta: 23
    }

    
];

console.log(list_student);

for (var i=0; i<list_student.length; i++){
    var lista = list_student[i];
    console.log(lista);
    var nome = lista.nome;
    var cognome = lista.cognome;
    document.getElementById("list").innerHTML += lista.nome + " " + lista.cognome + "<br>";
}



//Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente 
//inserendo nell’ordine: nome, cognome e età.
//(part four)
var nome_u = prompt("Inserisci un nome:");
var cognome_u = prompt("Inserisci un cognome:");
var age_u = Number(prompt("Inserisci un'età:"));

list_student.push({
    nome: nome_u,
    cognome: cognome_u,
    eta: age_u
})

console.log(list_student);





