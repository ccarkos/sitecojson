function enviarCadastro() {
    // CAPTURAR OS VALORES E CRIAR VARIAVEL PARA O OBJETO JSON

    var contaCliente = new Object();

    contaCliente.email = document.getElementById('email').value;
    contaCliente.senha = document.getElementById('senha').value;
    contaCliente.nome = document.getElementById('nome').value;
    contaCliente.cpf = document.getElementById('cpf').value;
    contaCliente.endereco = document.getElementById('endereco').value;
    contaCliente.telefone = document.getElementById('telefone').value;
    contaCliente.nascimento = document.getElementById('nascimento').value;
    contaCliente.sexo = document.getElementById('sexo').value;

    // CONVERTER PARA STRING

    var myJSON = JSON.stringify(contaCliente)

    //console.log(myJSON)
    console.log("EMAIL: " + 'email')
    console.log("SENHA: " + 'senha')
    console.log("NOME: " + 'nome')
    console.log("CPF: " + 'cpf')
    console.log("ENDERECO: " + 'endereco')
    console.log("TELEFONE: " + 'telefone')
    console.log("DATA DE NASCIMENTO: " + 'nascimento')
    console.log("SEXO: " + 'sexo')
    console.log(contaCliente.valueOf())
}