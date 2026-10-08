const pedido = {
  cliente: {
    nome: "Pedro"
  }
};

const telefone = pedido.celular?.telefone ?? "Telefone não informado";
console.log(telefone);