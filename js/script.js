// stabilisco il prezzo al chilometro
const prezzoKm = 0.21
console.log('prezzoKm:',prezzoKm)

// funzione eseguita al click del pulsante genera
document.getElementById('genera').addEventListener('click', function(){
    const km = document.getElementById('km').value
    console.log('km:', km)
    const age = document.getElementById('age').value
    console.log('age:', age)

    // calcolo il prezzo base
    let prezzoBaseKm = km * prezzoKm
    console.log('prezzoBaseKm:',prezzoBaseKm)

    // creo una variabile vuota per il testo dello sconto eventuale
    let sconto = ''
    
    // controllo l'età per sapere se applicare gli sconti
    if(age < 18){
        // calcolo lo sconto del 20% 
        prezzoBaseKm -= prezzoBaseKm * 0.2
        sconto = ' con sconto del 20%'
    } else if (age >= 65){
        // calcolo lo sconto del 40% 
        prezzoBaseKm -= prezzoBaseKm * 0.4
        sconto = ' con sconto del 40%'
    }
    
    // stampo il prezzo del  biglietto in console
    console.log('prezzo biglietto:',prezzoBaseKm,'età:',age)
    
    // stampo il prezzo del  biglietto nella pagina arrotondandolo ai due decimali
    document.getElementById('biglietto').innerHTML = "Prezzo biglietto: <strong>"+ prezzoBaseKm.toFixed(2)+" €</strong>"+sconto
})

