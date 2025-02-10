/*
Uma classe é um modelo para criar objetos com propriedades e comportamentos 
específicos. O construtor (constructor) é uma função especial usada para 
inicializar as propriedades de um objeto.


*/
//Em js tudo eh dinamico... tudo eh alocado dinamicamente
class Game{

     #nome;//Atributos private
     #idade;

     constructor(name, age){//"constructor"(c minusculo) eh declarado com essa parava reservada
          this.#nome=name;
          this.#idade=age;
     }

     show(){
          console.log(`Ola, ${this.#nome}, tens ${this.#idade} anos?`);
     }
}

const pessoa = new Game("Paulo",45);// Definicao do objecto nao precisa do nome da classe.
pessoa.show();




/*
 Implementar Herança entre Classes
#Conceito:
Herança permite que uma classe (filha) herde propriedades e métodos de 
outra classe (pai), promovendo reutilização de código.
*/
class Pessoa {
     constructor(nome, idade) {
       this.nome = nome;
       this.idade = idade;
     }
   
     cumprimentar() {
       console.log(`Olá, eu sou ${this.nome}`);
     }
   }
   
   class Professor extends Pessoa {
     constructor(nome, idade, materia) {
       super(nome, idade); // Chama o construtor da classe Pai
       this.materia = materia;
     }
   
     darAula() {
       console.log(`Estou dando aula de ${this.materia}`);
     }
   }
   
   const prof1 = new Professor("Ana", 35, "Matemática");
   prof1.cumprimentar(); // Olá, eu sou Ana
   prof1.darAula(); // Estou dando aula de Matemática




// Polimorfismo
class Animal {
     falar() {
       console.log("O animal emite um som.");
     }
   }
   
   class Cachorro extends Animal {
     falar() {
       console.log("O cachorro late: Au au!");
     }
   }
   
   class Gato extends Animal {
     falar() {
       console.log("O gato mia: Miau!");
     }
   }
   
   const animais = [new Animal(), new Cachorro(), new Gato()];
   
   animais.forEach(animal => animal.falar());
   





/// Um sistema de gestao simples... ler e entender
class Aluno {
     constructor(nome) {
       this.nome = nome;
       this.notas = [];
     }
   
     adicionarNota(nota) {
       this.notas.push(nota);
     }
   
     calcularMedia() {
       if (this.notas.length === 0) return 0;
       const soma = this.notas.reduce((acumulador, nota) => acumulador + nota, 0);
       return soma / this.notas.length;
     }
   }
   
   class Turma {
     constructor(nome) {
       this.nome = nome;
       this.alunos = [];
     }
   
     adicionarAluno(aluno) {
       this.alunos.push(aluno);
     }
   
     exibirMedias() {
       this.alunos.forEach(aluno => {
         console.log(`${aluno.nome}: Média = ${aluno.calcularMedia()}`);
       });
     }
   }
   
   // Criando objetos e interações
   const aluno1 = new Aluno("Carlos");
   const aluno2 = new Aluno("Mariana");
   
   aluno1.adicionarNota(8);
   aluno1.adicionarNota(7);
   
   aluno2.adicionarNota(9);
   aluno2.adicionarNota(10);
   
   const turma1 = new Turma("3º Ano");
   turma1.adicionarAluno(aluno1);
   turma1.adicionarAluno(aluno2);
   
   turma1.exibirMedias();
   // Carlos: Média = 7.5
   // Mariana: Média = 9.5
   




   //Import and export within modules...

   // permite a modularizacao do codigo 
   // separar em diferentes arquivos

   /*
   Para utilizar: 

   <script type="module" src="app.js"></script>
   Utilizar o type:module

   aplicacao:

// math.js
 export function somar(a, b) {
     // Validação de tipos
     if (typeof a !== 'number' || typeof b !== 'number') {
          throw new Error("Ambos os argumentos devem ser números");
     }

     // Cálculo complexo
     let resultado = a + b;
     resultado = resultado * 2; // Exemplo de operação adicional
     if (resultado > 100) {
          resultado = 100; // Limita o valor a 100
     }

     // Retorno do resultado
     return resultado;
}

 // app.js
     import { somar } from './math.js';

     console.log(somar(10, 20));  // 60


Abrir pasta modulos
   */