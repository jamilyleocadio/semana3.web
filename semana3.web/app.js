// =====================================================
// INTRODUÇÃO AO JAVASCRIPT
// BLOCO 1, BLOCO 2 E BLOCO 3
// =====================================================


// =====================================================
// BLOCO 1 – FUNDAMENTOS E VARIÁVEIS
// =====================================================

console.log("====================================");
console.log("BLOCO 1 – FUNDAMENTOS E VARIÁVEIS");
console.log("====================================");


// 1. Variável let "pontos"
// Adicionando 10 ao valor inicial

let pontos = 20;

pontos += 10;

console.log("1. Pontos:", pontos);


// -----------------------------------------------------


// 2. Constante MAX_PONTOS
// Uma constante não pode receber outro valor.

const MAX_PONTOS = 100;

console.log("2. MAX_PONTOS:", MAX_PONTOS);

// A linha abaixo causaria um TypeError.
// Ela está comentada para não interromper o programa.

// MAX_PONTOS = 150;

// Erro esperado:
// TypeError: Assignment to constant variable.


// -----------------------------------------------------


// 3. Tipos primitivos e typeof

const texto = "JavaScript";
const numero = 42;
const booleano = true;

let valorUndefined;

const valorNull = null;

console.log("3. String:", typeof texto);
console.log("3. Number:", typeof numero);
console.log("3. Boolean:", typeof booleano);
console.log("3. Undefined:", typeof valorUndefined);
console.log("3. Null:", typeof valorNull);

// Observação:
// typeof null retorna "object" por uma particularidade
// histórica do JavaScript.


// -----------------------------------------------------


// 4. Template Literals

const nome = "Maria";
const idade = 20;

// Usando Template Literal
const fraseTemplate =
    `Meu nome é ${nome} e eu tenho ${idade} anos.`;

// Usando concatenação com +
const fraseConcatenada =
    "Meu nome é " + nome + " e eu tenho " + idade + " anos.";

console.log("4. Template Literal:", fraseTemplate);
console.log("4. Concatenação:", fraseConcatenada);


// =====================================================
// BLOCO 2 – FUNÇÕES
// =====================================================

console.log("");
console.log("====================================");
console.log("BLOCO 2 – FUNÇÕES");
console.log("====================================");


// 5. Função declarada
// Demonstração de HOISTING.
//
// A função está sendo chamada antes de ser declarada.
// Isso funciona porque function declarations sofrem hoisting.

console.log(
    "5. Maior de idade:",
    ehMaiorDeIdade(20)
);

console.log(
    "5. Menor de idade:",
    ehMaiorDeIdade(15)
);


function ehMaiorDeIdade(idade) {
    return idade >= 18;
}


// -----------------------------------------------------


// 6. Função de expressão

const ehMaiorDeIdadeExpressao = function (idade) {
    return idade >= 18;
};

console.log(
    "6. Função de expressão:",
    ehMaiorDeIdadeExpressao(20)
);


// -----------------------------------------------------


// 7. Demonstração do ReferenceError
//
// Uma função de expressão armazenada em const não pode
// ser chamada antes de sua inicialização.
//
// Para testar o erro, descomente as duas linhas abaixo
// e execute novamente.
//
// console.log(ehMaiorDeIdadeAntes(20));
// const ehMaiorDeIdadeAntes = function (idade) {
//     return idade >= 18;
// };
//
// Erro esperado:
// ReferenceError: Cannot access 'ehMaiorDeIdadeAntes'
// before initialization.


// -----------------------------------------------------


// 8. Função dobro nas três formas


// 8.1 – Função declarada

function dobroDeclarada(numero) {
    return numero * 2;
}

console.log(
    "8.1. Dobro - declarada:",
    dobroDeclarada(5)
);


// 8.2 – Função de expressão

const dobroExpressao = function (numero) {
    return numero * 2;
};

console.log(
    "8.2. Dobro - expressão:",
    dobroExpressao(5)
);


// 8.3 – Arrow Function

const dobroArrow = (numero) => numero * 2;

console.log(
    "8.3. Dobro - arrow:",
    dobroArrow(5)
);


// -----------------------------------------------------


// 9. Função com parâmetro padrão
//
// Se nenhum valor for informado, numero será 1.

const dobroComPadrao = (numero = 1) => {
    return numero * 2;
};

console.log(
    "9. Com argumento:",
    dobroComPadrao(10)
);

console.log(
    "9. Sem argumento:",
    dobroComPadrao()
);


// =====================================================
// BLOCO 3 – CONTROLE DE FLUXO
// =====================================================

console.log("");
console.log("====================================");
console.log("BLOCO 3 – CONTROLE DE FLUXO");
console.log("====================================");


// 10. Função classificarNota
//
// Se nota >= 6 → Aprovado
// Caso contrário → Reprovado

function classificarNota(nota) {
    if (nota >= 6) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }
}

console.log(
    "10. Nota 8:",
    classificarNota(8)
);

console.log(
    "10. Nota 5:",
    classificarNota(5)
);


// -----------------------------------------------------


// 11. Switch – Semáforo

const corSemaforo = "verde";

switch (corSemaforo) {

    case "vermelho":
        console.log("11. Pare");
        break;

    case "amarelo":
        console.log("11. Atenção");
        break;

    case "verde":
        console.log("11. Siga");
        break;

    default:
        console.log("11. Cor inválida");
}


// -----------------------------------------------------


// 12. Tabuada do 5
// Utilizando o laço for

console.log("");
console.log("12. TABUADA DO 5");

for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}


// -----------------------------------------------------


// 13. Contagem regressiva de 5 até 1
// Utilizando while

console.log("");
console.log("13. CONTAGEM REGRESSIVA");

let contador = 5;

while (contador >= 1) {
    console.log(contador);

    contador--;
}


// -----------------------------------------------------


// 14. Números de 1 a 20
// Identificando pares e ímpares com FOR

console.log("");
console.log("14. PARES E ÍMPARES - FOR");

for (let i = 1; i <= 20; i++) {

    if (i % 2 === 0) {
        console.log(`${i} é par`);
    } else {
        console.log(`${i} é ímpar`);
    }
}


// -----------------------------------------------------


// 15. Números de 1 a 20
// Identificando pares e ímpares com WHILE

console.log("");
console.log("15. PARES E ÍMPARES - WHILE");

let numeroAtual = 1;

while (numeroAtual <= 20) {

    if (numeroAtual % 2 === 0) {
        console.log(`${numeroAtual} é par`);
    } else {
        console.log(`${numeroAtual} é ímpar`);
    }

    numeroAtual++;
}


// -----------------------------------------------------


// 16. Função diaDaSemana
//
// 1 → Domingo
// 2 → Segunda-feira
// 3 → Terça-feira
// 4 → Quarta-feira
// 5 → Quinta-feira
// 6 → Sexta-feira
// 7 → Sábado

function diaDaSemana(numero) {

    switch (numero) {

        case 1:
            return "Domingo";

        case 2:
            return "Segunda-feira";

        case 3:
            return "Terça-feira";

        case 4:
            return "Quarta-feira";

        case 5:
            return "Quinta-feira";

        case 6:
            return "Sexta-feira";

        case 7:
            return "Sábado";

        default:
            return "Número inválido";
    }
}


// Testando a função

console.log("");
console.log("16. DIAS DA SEMANA");

console.log("Número 1:", diaDaSemana(1));
console.log("Número 2:", diaDaSemana(2));
console.log("Número 3:", diaDaSemana(3));
console.log("Número 4:", diaDaSemana(4));
console.log("Número 5:", diaDaSemana(5));
console.log("Número 6:", diaDaSemana(6));
console.log("Número 7:", diaDaSemana(7));
console.log("Número 8:", diaDaSemana(8));


// =====================================================
// FINAL
// =====================================================

console.log("");
console.log("====================================");
console.log("TODOS OS EXERCÍCIOS FORAM EXECUTADOS!");
console.log("====================================");