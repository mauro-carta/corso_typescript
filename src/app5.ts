
function somma3(numero: number){
    console.log('decorator somma3 - factory')
    if (numero < 10)
        return function(int1: any){
            console.log('dati preparati per numeri bassi')
            const chiamante = new int1(numero) // richiamo constuctor classe provabassa
            console.log(chiamante.var1) // accesso alle propr della classe chiamante
        }
    else
        return function(int1: any){
            console.log('dati preparati per numeri alti')
            const chiamante = new int1(numero) // richiamo constuctor classe provabassa
            console.log(chiamante.var1) // accesso alle propr della classe chiamante
        }

    //return int1+int2
}

//let totale = somma3(1,2)
//console.log(totale)

@somma3(5)
class ProvaBassa{
    public var1: number

    constructor(_var1: number){
        this.var1 = _var1
        console.log('constructor ProvaBassa')
    }
    public somma():number{
        console.log('somma bassa')
        return this.var1 
    }
}

@somma3(99)
class ProvaAlta{
    public var1: number

    constructor(_var1: number){
        this.var1 = _var1
        console.log('constructor ProvaAlta ' )
    }
    public somma():number{
        console.log('somma alta')
        return this.var1 
    }
}
  

//let p5 = new Prova2(3)
//console.log(p5.somma())


/*
// funzione che richiama un'altra funzione
function creaElemento(elemento: string, id: string, nome: string){

    // funzione anonima
    return function(costruttore: any){
        // prendiamo elemento div container
        const container = document.getElementById(id)
        // creiamo una nuova persona
        const persona = new costruttore(nome)
        if (container){
            // buttiamo dentro h1
            container.innerHTML = elemento
            container.querySelector('h2')!.textContent = persona.nome
        }
    }
}


// decoratore, e' una factory, una funzione che ritorna un'altra funzione
// passo dei parametri
@creaElemento('<h2></h2>', 'container', 'Lucaaaaaa')
class Persona{
    constructor(public nome: string){
        console.log('sto creando classe provaaa')
    }
}

@creaElemento('<h2></h2>', 'container2', 'Mariooo')
class Persona2{
    constructor(public nome: string){
        console.log('sto creando classe provaaa')
    }
}
    */