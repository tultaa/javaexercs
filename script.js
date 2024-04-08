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
    console.log(`A media do aluno ${aluno.nome} é ${media}`)
}

/* SORTEAR NUMERO */

const sorteio = [];

while(sorteio.length <6){
    let numero1 =Math.ceil(Math.random() * 60)
    if(!sorteio.includes(numero1)){
        sorteio.push(numero1)
    }
}
sorteio.sort((a,b)=>a-b);
console.log(sorteio);



const usuario ={
    nome:"Fiap",
    Local:"São paulo",
    idade:20
};
//sem desestruturacao
console.log(`Nome e Local: ${usuario.nome} ${usuario.local}`)

//com desestruturacao
let {Nome,Local} = usuario;
console.log(`${Nome} ${Local}`)

//arrow function
let items =["Fusca","Belina","Gurgel","Brasilia","Kombi"];
items.forEach(function(item){
    console.log(item)
})

let items1 = ["Fusca-1","Belina1","Gurgel1","Brasilia1","Kombi1"];
items1.forEach(item1 =>console.log(item1))