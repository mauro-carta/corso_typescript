"use strict";
// classe ts
// con 2 proprieta, constructor e metodi
class Persona2 {
    eta;
    nome;
    cognome;
    constructor(_nome, _cognome, eta = 0 //shorthand, non e' necessario dichiarare la prop!!
    ) {
        this.eta = eta;
        this.nome = _nome,
            this.cognome = _cognome;
    }
    presenta() {
        console.log(`Mi presento, sono ${this.nome} ${this.cognome} ho ${this.eta} anni`);
    }
    saluta(_persona) {
        console.log(`Arrivederci ${_persona.nome} ${_persona.cognome}`);
    }
}
let p1 = new Persona2('mario', 'rossi', 33);
let p2 = new Persona2('marco', 'verdi', 44);
// p1.nome = 'altro_nome'  <--- ERR
p1.presenta();
p2.saluta(p1);
p2.presenta();
// passaggio di una classe come argomento del metodo saluta
// classi derivate
class Studente extends Persona2 {
    materiaPref;
    constructor(_nome, _cognome, materiaPref) {
        super(_nome, _cognome);
        this.materiaPref = materiaPref;
    }
    presentastud() {
        console.log(`Sono lo studente ${this.nome} ${this.cognome} e adoro ${this.materiaPref} !`);
    }
}
let s1 = new Studente('gino', 'studioso', 'storia');
s1.presenta();
s1.presentastud();
