const aluno = {
  nota: 0
};

console.log(aluno.nota || 10);
console.log(aluno.nota ?? 10);

// O primeiro console terá a saída 10, pois o primeiro valor é falsy

// O segundo console terá a saída 0, pois é o próprio valor, agora, se fosse null ou undefined a saída seria o segundo valor, 10.