const quantidade = 0;

console.log(quantidade || 10);
console.log(quantidade ?? 10);

// O primeiro console que há || irá exibir o segundo valor, pois o primeiro valor trata-se de um falsy (0, null, "", false, NaN, undefined)
// O segundo console que há ?? irá exibir o primeiro valor, se esse valor fosse null ou undefined, seria o segundo valor