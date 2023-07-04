"use strict";

const prompt = require("prompt-sync")({sigint : true});

var num = 0;
var listaFuncionarios = [[1, "admin", 123],]

class Cliente {

    constructor(idC, nomeC, petsC, fidelizadoC) {
        this.id = idC;
        this.nome = nomeC;
        this.pets = petsC;
        this.fidelizado = false;

    }

    get dados() {
        return Object.entries(this);
    }

    set dados(obj) {
        this.nome = obj.nome;
        this.pets = obj.pets;
        this.fidelizado = obj.fidelizado;
    }
}

class Funcionario {
    #password;
    constructor(idC, usernameC, passwordC) {
        this.id = idC;
        this.username = usernameC;
        this.#password = passwordC;
    }

    get senha() {
        return this.#password;
    }

    cadastro() {
        let adicionar = [this.id, this.username, this.senha];
        listaFuncionarios.push(adicionar);
    }
}

class Animal {

    constructor(idPET, nomePetC, nomeDonoC, numConsultasC) {
        this.id = idPET;
        this.nomePet = nomePetC;
        this.nomeDono = nomeDonoC;
        this.numConsultas = numConsultasC;
    }
}

class Consulta {

    constructor(idC, nomeClienteC, nomePetC, nomeFuncionarioC, statusC, dataC) {
        this.id = idC;
        this.nomeCliente = nomeClienteC;
        this.nomePet = nomePetC;
        this.nomeFuncionario = nomeFuncionarioC;
        this.status = statusC;
        this.data = dataC;

    }
}

class Sistema {
    constructor() {
      this.clientes = [];
      this.funcionarios = [];
      this.animais = [];
      this.consultas = [];
      this.login = false;
    }   
}

function login(username, senha) {
    // Laço de repetição que, dentro do listaFuncionarios, de acordo com o índice padrão 1 e 2
    // de username e senha, e verifica se eles existem na lista
    for (info of listaFuncionarios) {

        if (info[1] == username) {

            if (info[2] == senha) {
                return 1;
            }
            else {
                console.log("Senha incorreta.");
                return 2;        // 2 = senha incorreta
            }            
        } else {
            console.log("Usuário inexistente.");
            return 0;            // 0 = usuario inexistente
        }
    }
}

function main() {
    while (true) {
        console.log("(1) Login\n(2) Cadastrar\n(3) Sair\n")
        var opcao = parseInt(prompt("Digite uma opção de 1 a 3;"));
        
        if (opcao == 1) {
            let user = prompt("Digite o username:\n >>>\n")
            let pass = prompt("Digite a senha:\n >>>\n")
            login(user, pass)
        }
        if (opcao == 2) {
            Funcionario.cadastro()
        }
        if (opcao == 3) {
            break
        }
    }
}

main()