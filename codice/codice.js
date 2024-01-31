// richiesta , scrivi un programma che stampi in console i numeri da 1 a 100.
// i multipli di 3 all' loro interno devono avere scritto fizz 
// per i multipli di 5  ci sarà scritto buzz 
// mentre per i numeri multipli sia di 3 che di 5 c'è da scrivere fizzbuzz


// numeri da uno a cento 
// querySelector è un metodo fornito dall'interfaccia Document in JavaScript e consente di selezionare il primo elemento nel documento HTML che corrisponde al selettore CSS specificato.
const grid = document.querySelector("#grid");

// funzione for con il quale ottimizzeremo la creazione dei quadrati
for(let i = 0 ; i <= 100 ; i++ )
{
    // comando usato per creare nuovacostante a cui abbiamo assegnato 
    const newelement = document.createElement("div")


    newelement.className=("square");
    

    // prima condizione usata per " inserire" fuzzbuzz solo quando ci sono numeri multipli per 3 e 5
    if(i % 5 == 0 && i % 3 == 0)
    {   
        // grid è un oggetto DOM (Document Object Model) che rappresenta un elemento HTML, e innerHTML è una proprietà che restituisce o imposta il markup HTML contenuto all'interno di quell'elemento. sta aggiungendo una nuova <div> con la classe "square" e il testo "buzz" all'interno.
        
        // inizio righe di stilizzazione assegnate da js
        newelement.innerHTML+= `${"fizzbuzz"}`;
        newelement.style.color = "orange";
        newelement.style.backgroundColor = "lightgreen";
        newelement.style.fontSize= "bold";
        // fine righe di stilizzazione assegnate da js

        newelement.className=("rotate");
        

    }
    else if( i % 3 == 0)
    {
         // grid è un oggetto DOM (Document Object Model) che rappresenta un elemento HTML, e innerHTML è una proprietà che restituisce o imposta il markup HTML contenuto all'interno di quell'elemento. sta aggiungendo una nuova <div> con la classe "square" e il testo "fuzz" all'interno.
        
        // inizio righe di stilizzazione assegnate da js
         newelement.innerHTML+= `${"fizz"}`;
         newelement.style.color = "blue";
         newelement.style.backgroundColor = "red";
         newelement.style.fontSize= "bold";
        // fine righe di stilizzazione assegnate da js

        // newelement.className=("pulse");
    }
    else if(i % 5 == 0)
    {   
        // grid è un oggetto DOM (Document Object Model) che rappresenta un elemento HTML, e innerHTML è una proprietà che restituisce o imposta il markup HTML contenuto all'interno di quell'elemento. sta aggiungendo una nuova <div> con la classe "square" e il testo "buzz" all'interno.
        // La proprietà innerHTML in JavaScript viene utilizzata per ottenere o impostare il contenuto HTML di un elemento.
        newelement.innerHTML+= `${"buzz"}`;

        // inizio righe di stilizzazione assegnate da js
        newelement.style.color = "purple";
        newelement.style.backgroundColor = "yellow";
        newelement.style.fontSize= "bold";
        // fine righe di stilizzazione assegnate da js

        newelement.className=("slide");

    }
    else
    {
        // stringa usata per inserire all' interno delle rimanenti caselle il valore di i
        newelement.innerHTML+=`${i}`;
    }

    //  alla fine "appendiamo" l'elemento appena creato (newElement)
    // alla griglia (grigliaElement)
    // il metodo .append() aggiunge all'interno di grigliaElement
    // l'elemento che gli passiamo tra parentesi, esso sarà l'ultimo figlio
    grid.append(newelement);
    
}