"use strict";
// lo stesso di prima ma con classe e metodi astratti
class Persona2Abstract {
    eta;
    nome;
    cognome;
    constructor(_nome, _cognome, eta = 0 //shorthand, non e' necessario dichiarare la prop!!
    ) {
        this.eta = eta;
        this.nome = _nome,
            this.cognome = _cognome;
    }
}
// classi derivate
class Studente2 extends Persona2Abstract {
    materiaPref;
    constructor(_nome, _cognome, materiaPref) {
        super(_nome, _cognome);
        this.materiaPref = materiaPref;
    }
    saluta() {
        console.log(`Sono lo studente ${this.nome} ${this.cognome} e adoro ${this.materiaPref} !`);
    }
}
// class singleton
class Preside {
    nome;
    cognome;
    static instance;
    constructor(nome, cognome) {
        this.nome = nome;
        this.cognome = cognome;
    }
    static getInstance() {
        if (Preside.instance) {
            return this.instance;
        }
        else {
            this.instance = new Preside('marco', 'verdi');
            return this.instance;
        }
    }
    presentaPreside() {
        console.log(`Sono il preside dr. ${this.nome} ${this.cognome}`);
    }
}
let s2 = new Studente2('gino', 'studioso', 'storia');
s2.saluta();
Preside.getInstance().presentaPreside();
