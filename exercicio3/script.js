const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
}

//a

const pokemon2 = {
    ...pokemon1,
    nome: "Squirtle",
    tipo: "Agua"
}

//b

const ataques = pokemon1.ataques = [

]

//c

const ataque = {
    nome: "Investida",
    dano: 40,
    tipo: "Normal",
    precisao: 100
}

ataques.push(ataque)

//d

const copiaAtaques = pokemon2.ataques = [

]

const copiaAtaque = {...ataque};

copiaAtaques.push(copiaAtaque)

//e

const ataqueFolha = {
    nome: "Folha Navalha",
    dano: 45,
    tipo: "Grama",
    precisao: 100
}

ataques.push(ataqueFolha)

//f

const ataqueJato = {
    nome: "Jato de Água",
    dano: 40,
    tipo: "Agua",
    precisao: 100
}

copiaAtaques.push(ataqueJato)


console.log(pokemon1, pokemon2)