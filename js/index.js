// let alunos = 12;
// let escola = 'Digital College';

// //PRIMITIVOS
// let numero = 1; //number
// let palavras = 'palavra ou frase'; // string
// let verdadeiro = true; //boolean
// let falso = false; //boolean


// //ARRAY
// let arrayDeNumeros = [1,2,3,4];
// let arrayDePalavras = ['segunda','terça','quarta','quinta','sexta','sabado','domingo'];
// let arrayDeBooleans = [true,false,true,true];

// //OBJETOS
// let aluno = {
//     nome: 'Nathan',
//     idade: 15,
//     genero: 'masculino',
//     gostosMusicais: ['pagode gospel','samba gospel','forro gospel']
// };

//---------------------------------------------

// let v1 = document.querySelector('#valor1').value;
// let v2 = document.querySelector('#valor2').value;

// console.log('valor1:',v1);
// console.log('valor2:',v2);

// let adicao = document.querySelector('#somar');
// adicao.addEventListener('click',function(){
//     alert('cliquei')
// })

//------------------------------------------------

// 



const form = document.getElementById('form');

form.addEventListener('submit',function(event){
    event.preventDefault();

    let peso = Number(document.getElementById('weight').value);
    let altura = Number(document.getElementById('height').value);


    let imc = (peso / (altura * altura)).toFixed(2);

    infos.classList.remove('hidden');

    if(imc < 18.5){
        description.textContent = 'Cuidado!Você está a baixo do peso.';
    } else if(imc >= 18.5 && imc <= 25) {
        description.textContent = 'Você está no peso ideal campeão!.';
    } else if(imc > 25 && imc <= 30) {
        description.textContent = 'Cuidado! Gordo!';
    } else if(imc > 30 && imc <= 35) {
        description.textContent = 'Cuidado! Você está mais que cheinho.';
    } else if(imc > 35 && imc <= 40) {
        description.textContent = 'Cuidado! Você está com obesidade severa.';
    } else {
        description.textContent = 'Cuidado! Você está com obesidade mórbida';
    }
    value.textContent = imc.replace('.',',');
});


