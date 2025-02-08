let game = [1,2,3,4];

/*
push() - adiciona items ao final do vetor;
unshift() - adiciona items no inicio do vector;

pop() - apaga o item no final do vector;
shift() - apaga o item no inicio do vector;

indexOf() - usado para econtrar o indice de um item;
includes() - usado para verificar se um item existe;
*/

game.push(5);
console.log(game);

game.unshift(0);
console.log(game);

game.pop();
console.log(game);

game.shift();
console.log(game);

game.push(4);
console.log(game.indexOf(4));
console.log(game);

console.log(game.includes(0));



console.log("Exercicio 1");
let veta =[];

function inserir(init,end,vector){
     vector.unshift(init);
     vector.push(end);
     console.log(vector);
}

inserir(1,2,veta);


console.log("Exercicio 2");
veta=[1,2,3,4];
function sum(vetor){
     let soma=0;
     for(let i=0; i<4; i++){
          soma+=vetor[i];
     }
     console.log(`A soma eh: ${soma}`);
}
sum(veta);


console.log("Exercicio 3");

veta=[1,2,3,4];
let ver=true;
function rmImpar(vetor){
     let j=0;
     while(ver){
          if(j%2!=0 && vetor.includes(j))
               vetor[vetor.indexOf(j)]=0;
          j++;
          if(j===4)
               ver=false;
     }
     console.log(vetor);

}
rmImpar(veta);

//Exercicio sobre filters
veta = [1,2,3,4];

function filtar(vetor){
     let restante = vetor.filter(num => num%2!=0);
     console.log(restante);
}
filtar(veta);

//ForEach
//vetor.forEach((elemento, indice, vetorOriginal) => {
  // Ação desejada
//});

veta = [1,2,3,4];

veta.forEach(num =>
     {
          console.log(num);
     });