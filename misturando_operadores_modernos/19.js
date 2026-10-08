//const usuario = {};
//const cidade = usuario.endereco.cidade ?? "Não informada";
//console.log(cidade);

//Reescrita
const usuario = {};

const cidade = usuario.endereco?.cidade ?? "Não informada";
console.log(cidade);