// richiesta , scrivi un programma che stampi in console i numeri da 1 a 100.
// i multipli di 3 all' loro interno devono avere scritto fizz 
// per i multipli di 5  ci sarà scritto buzz 
// mentre per i numeri multipli sia di 3 che di 5 c'è da scrivere fizzbuzz


// numeri da uno a cento 
// querySelector è un metodo fornito dall'interfaccia Document in JavaScript e consente di selezionare il primo elemento nel documento HTML che corrisponde al selettore CSS specificato.
const grid = document.querySelector("#grid");

// funzione for con il quale ottimizzeremo la creazione dei quadrati
for(let i = 0 ; i <= 100 ;i++ )
{
    if( i % 3 == 0)
    {
        grid.innerHTML += `<div class="square">${i}</div>`

    }
    else if()
    {

    }
    else
    {
        grid.innerHTML += `<div class="square">${i}</div>`
    }
    
    
}