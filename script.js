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

/*com uma lista de alunos vamos percorer cada aluno e trazer a media da nota e mostrar o nome do aluno e sua media*/

const listaAlunos = [
    {nome:"Huguinho", nota:[5,7]},
    {nome:"Zezinho", nota:[6,9]},
    {nome:"Luizinho", nota:[7,8]}
]

for(aluno of listaAlunos){
    let media=(aluno.nota[0] + aluno.nota[1] / 2);
    document.write(`A media do aluno ${aluno.nome} é ${media}`)
}