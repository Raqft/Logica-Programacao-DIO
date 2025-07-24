class Hero {
    constructor (tipo,ataque){
        this.tipo = tipo
        this.ataque = ataque
    }
    toString (){
        console.log(`o ${this.tipo} ${nameHero} de ${age} anos te atacou usando ${this.ataque}`)
    }
}
let nameHero = "Alfredo"
let age = 40
let mage = new Hero ("mago", "magia")
let warrior = new Hero("guerreiro", "espada")
let ninja = new Hero("ninja", "shuriken")
let monk = new Hero("monge", "artes marciais")

mage.toString()
warrior.toString()
ninja.toString()
monk.toString()