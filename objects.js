/*

1. Criando Objetos com Propriedades Fixas e Dinâmicas
Propriedades Fixas:
São propriedades definidas diretamente no objeto que não mudam a estrutura do objeto (embora os valores possam ser alterados).

Propriedades Dinâmicas:
São adicionadas, modificadas ou removidas depois que o objeto é criado.



*/

//Propriedades fixas
const carro = {
     marca:"Toyota",
     modelo:"Corolla",
     ano: 2023
};
console.log(`Marca: ${carro.marca}, Modelo: ${carro.modelo}`);
console.log(carro.ano);

//Propriedades dinâmicas
const car={
     marca:"Toyota"
};

//Adicionando uma nova propriedade dinamicamente
car.cor="Verde";
console.log(car);

//Modificando uma propriedade
car.marca = "Honda";

//Removendo uma propriedade
delete car.cor;
console.log(car);

/*
2. Imutabilidade de Objetos com const
Objetos declarados com const não podem ser reatribuídos, 
mas suas propriedades internas podem ser alteradas.
*/

const pessoa = {
     nome: "João",
     idade: 30
   };
   
   pessoa.idade = 31; // Isso é permitido
   console.log(pessoa); // { nome: "João", idade: 31 }
   
   // Reatribuir o objeto inteiro causa erro:
   // pessoa = { nome: "Maria", idade: 25 }; // ERRO: Assignment to constant variable.
   

   //Spreed operator vs Object.assign();

   // {...original,idade=45}; //Actual
   // Object.assign({},original) //Limitacoes nao aceita actualizaao automatica.

   
const original = { nome: "Alice", 
     idade: 25 
};
const copia1 = Object.assign({}/*shallow copy */, original);

copia1.idade = 30;
console.log(original); // { nome: "Alice", idade: 25 }
console.log(copia1);    // { nome: "Alice", idade: 30 }


const originall = { nome: "Carlos", idade: 40 };
const copia = { ...originall, idade: 45 };

console.log(originall);        // { nome: "Carlos", idade: 40 }
console.log(copia);           // { nome: "Carlos", idade: 45 }


//Vector de objectos
//é simplesmente um array cujos elementos são objetos.

const alunos = [
     {nome:"Ana", idade:20, curso: "Matematica"},
     {nome:"João", idade: 20, curso: "Fisica"},
     {nome: "Beatriz", idade: 19, curso: "Química"}
];

console.log(alunos);

for(let i=0; i<3; i++)
     console.log(`Nome: ${alunos[i].nome} Idade: ${alunos[i].idade} Curso: ${alunos[i].curso}`);

alunos.forEach(aluno => {
     console.log(`${aluno.nome} faz o curso de ${aluno.curso}`);
});
   