"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function somma3(numero) {
    console.log('decorator somma3 - factory');
    if (numero < 10)
        return function (int1) {
            console.log('dati preparati per numeri bassi');
            const chiamante = new int1(numero); // richiamo constuctor classe provabassa
            console.log(chiamante.var1); // accesso alle propr della classe chiamante
        };
    else
        return function (int1) {
            console.log('dati preparati per numeri alti');
            const chiamante = new int1(numero); // richiamo constuctor classe provabassa
            console.log(chiamante.var1); // accesso alle propr della classe chiamante
        };
    //return int1+int2
}
//let totale = somma3(1,2)
//console.log(totale)
let ProvaBassa = class ProvaBassa {
    var1;
    constructor(_var1) {
        this.var1 = _var1;
        console.log('constructor ProvaBassa');
    }
    somma() {
        console.log('somma bassa');
        return this.var1;
    }
};
ProvaBassa = __decorate([
    somma3(5)
], ProvaBassa);
let ProvaAlta = class ProvaAlta {
    var1;
    constructor(_var1) {
        this.var1 = _var1;
        console.log('constructor ProvaAlta ');
    }
    somma() {
        console.log('somma alta');
        return this.var1;
    }
};
ProvaAlta = __decorate([
    somma3(99)
], ProvaAlta);
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
