
class heroi {
    constructor (nome, idade){
        this.nome = nome 
        this.idade = idade
    }

    atacar(){
        console.log(`Herói\n\nNome: ${this.nome}    |    Idade: ${this.idade}\n\nO ${tipo} atacou usando ${ataque}`)
    }
    
}
nome = prompt("Nome: ")
idade = prompt("Idade: ")
let tipoClasse = Number(prompt("Escolha um tipo de classe:\n1 - Mago\n2 - Guerreiro\n3 - Monge\n4 - Ninja"))


switch(tipoClasse){
    case 1: 
        tipo = "Mago";
        ataque = "Magia"
        break

    case 2:
        tipo = "Guerreiro"
        ataque = "Espada"
        break
        
        case 3:
            tipo = "Monge"
            ataque =  "Artes Marciais"
            break
            
            case 4:
                tipo = "Ninja"
                ataque = "Shuriken"

                break

                default:
                    alert("Erro!")
}
    
let personagem = new heroi(nome, idade)

personagem.atacar()



    