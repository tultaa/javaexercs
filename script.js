/*criar algoritmo que leia uma lista e retorne duas novas listas*/

let listaNumeros =[1,2,3,4,5,6,7,8,9];
let pares =[];
let impares=[];

for(let numero of listaNumeros){
    if(numero % 2 == 0){
        pares.push(numero)
    }else{
        impares.push(numero)
    }
}
console.log("pares", pares);
console.log("impares", impares);