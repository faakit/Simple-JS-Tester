const formataCpf = (cpf) => {
   return cpf.replace(/^([\d]{3})([\d]{3})([\d]{3})([\d]{2})$/, "$1.$2.$3-$4");
}

// http://www.receita.fazenda.gov.br/aplicacoes/atcta/cpf/funcoes.js
// Alterado para retornar falso com CPFs de número repetido EX: "11111111111"
const validaCpf = (cpf) => {
   let soma;
   let resto;
   soma = 0;

   if (/([0-9])\1\1\1\1\1\1\1\1\1\1\1*/.test(cpf)) return false;
   for (i = 1; i <= 9; i++) soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);

   resto = (soma * 10) % 11;
   if ((resto == 10) || (resto == 11)) resto = 0;
   if (resto != parseInt(cpf.substring(9, 10))) return false;

   soma = 0;
   for (i = 1; i <= 10; i++) soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
   resto = (soma * 10) % 11;
   if ((resto == 10) || (resto == 11)) resto = 0;
   if (resto != parseInt(cpf.substring(10, 11))) return false;
   return true;
}

const stringArray = () => (['hello', 'world']);

const strangerFloats = () => (0.1 + 0.2);