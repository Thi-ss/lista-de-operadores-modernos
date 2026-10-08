const usuario = {
  nome: "",
  idade: 0,
  endereco: null
};

console.log(usuario.nome || "Visitante");
console.log(usuario.nome ?? "Visitante");
console.log(usuario.idade || 18);
console.log(usuario.idade ?? 18);
console.log(usuario.endereco?.cidade);
console.log(usuario.endereco?.cidade ?? "Sem cidade");

// O primeiro console irá exibir Visitante, pois o || vê se o primeiro valor é falsy, se for exibirá o segundo valor.

// O segundo console não exibirá nada, porque o ?? verifica se o primeiro valor é o padrão null ou undefined, se fosse ele exibiria o segundo valor.

// O terceiro console irá exibir 18, pois o || verá que o primeiro valor é falsy, e em seguida exibirá o segundo valor.

// O quarto console irá exibir 0, pois o ?? verifica se o valor é null ou undefined, para aí sim exibir o segundo valor. Não é o caso, pois o valor é 0.

// O quinto console exibirá undefined, pois ele irá tentar entrar no objeto cidade, e não quebrará o código, desse modo verá que o valor é indefinido.

// O sexto console irá exibir "Sem cidade", pois após entrar em cidade sem quebrar o código com ?. o operador ?? irá ver que "cidade" é undefined, e exibirá o segundo valor.