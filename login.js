const PromptSync = require("prompt-sync")();

const prompt =  PromptSync;

let email = prompt('digite seu Login: ');
let senha = prompt('digite sua senha: ');

class Login{
    constructor(email, senha){
        this.email  = email;
        this.senha = senha;
    }

    regexLogin(){
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!this.email){
            return " o campo de email não pode esta vazio"
        }else  if(regexEmail.test(this.email)){
            return 'email valido';
        }else{
            return 'email invalido, a senha deve conter o: @gmail ou @email';
        }
    };

    regexSenha(){
         const senhaValida = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/
         if(!this.senha){
            return " o campo de email não pode esta vazio"
        } else if(senhaValida.test(this.senha)){
            return 'senha valido';
        }else{
            return 'senha invalido, digite os caracteres especiais como: .!@#$%%¨&¨* , e letras maiusculas ';
        }
    };

    };




let tiago = new Login(email , senha);
console.log(tiago);
console.log(tiago.regexLogin() ,'\n' , tiago.regexSenha());



