const form = document.getElementById('form-contato');
const tabelaContatos = document.getElementById('tabela-contatos').getElementsByTagName('tbody')[0];

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;

    adicionarContato(nome, telefone);
    limparCampos();
});

function adicionarContato(nome, telefone) {
    const linha = tabelaContatos.insertRow();
    const colunaNome = linha.insertCell(0);
    const colunaTelefone = linha.insertCell(1);

    colunaNome.textContent = nome;
    colunaTelefone.textContent = telefone;
}

function limparCampos() {
    document.getElementById('nome').value = '';
    document.getElementById('telefone').value = '';
}