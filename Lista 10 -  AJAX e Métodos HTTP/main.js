function validarCPF() {
    var cpf = document.getElementById("cpf").value;
    var cpfValido = /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$/;
    if (cpfValido.test(cpf) == true) {
        alert("CPF Válido");
    } else {
        alert("CPF Inválido");
    }
}

function fMasc(objeto, mascara) {
    obj = objeto
    masc = mascara
    setTimeout("fMascEx()", 1)
}

function fMascEx() {
    obj.value = masc(obj.value)
}

function mCPF(cpf) {
    cpf = cpf.replace(/\D/g, "")
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2")
    return cpf
}

function validarRG() {
    var rg = document.getElementById("rg");

    if (rg.value.length == 12) {
        alert("RG Válido!")
    } else {
        alert("RG Inválido!")
    }
}

function mascara(t, mask) {
    var i = t.value.length;
    var saida = mask.substring(1, 0);
    var texto = mask.substring(i)
    if (texto.substring(0, 1) != saida) {
        t.value += texto.substring(0, 1);
    }
}

function validCEP(cep) {
    var requisicaoCEP = new XMLHttpRequest();
    var urlCEP = 'http://viacep.com.br/ws/' + cep + '/json/unicode/'
    requisicaoCEP.open("GET", urlCEP, true)
    requisicaoCEP.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var JSONText = requisicaoCEP.responseText
            var conteudo = JSON.parse(JSONText)
            document.getElementById('address').value = conteudo.logradouro
            document.getElementById('state').value = conteudo.uf
            document.getElementById('city').value = conteudo.localidade
            document.getElementById('bairro').value = conteudo.bairro
        }
    }

    requisicaoCEP.send()
}

function validarCEP(cep) {
    var requisicaoCEP = new XMLHttpRequest();
    var urlCEP = 'http://viacep.com.br/ws/' + cep + '/json/unicode/'
    requisicaoCEP.open("GET", urlCEP, true)
    requisicaoCEP.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var JSONText = requisicaoCEP.responseText
            var conteudo = JSON.parse(JSONText)
            document.getElementById('rua').value = conteudo.logradouro
            document.getElementById('estado').value = conteudo.uf
            document.getElementById('city').value = conteudo.localidade
            document.getElementById('bairro').value = conteudo.bairro
        }
    }

    requisicaoCEP.send()
}



const code = document.getElementById('cep')
function checkCEP() {
    if (code.value.length == 5) this.value += "-"
    if (code.value.length == 9) {
        code.className = 'texts'
    } else {
        code.className = 'textsObg'
    }

}

function enviarcampos() {
    var nome = formuser.nome.value;
    if (nome == "") {
        alert("Preencha o campo Nome do Funcionário.");
        formuser.nome.focus();
        return false;
    }
    var cpf = formuser.cpf.value;
    if (cpf == "") {
        alert("Preencha o campo CPF.");
        formuser.cpf.focus();
        return false;
    }
    var rg = formuser.rg.value;
    if (rg == "") {
        alert("Preencha o campo RG");
        formuser.rg.focus();
        return false;
    }
    var data = formuser.data.value;
    if (data == "") {
        alert("Preencha o campo Data de Nascimento");
        formuser.data.focus();
        return false;
    }
    var habilitacao = formuser.habilitacao.value;
    if (habilitacao == "") {
        alert("Preencha o campo Tipo de CNH");
        formuser.habilitacao.focus();
        return false;
    }
    var es = formuser.es.value;
    if (es == "") {
        alert("Preencha o campo Estado Civil");
        formuser.es.focus();
        return false;
    }
    var city = formuser.city.value;
    if (city == "") {
        alert("Preencha o campo Cidade")
        formuser.city.focus();
        return false;
    }
    var cep = formuser.cep.value;
    if (cep == "") {
        alert("Preencha o campo CEP");
        formuser.cep.focus();
        return false;
    }
    var rua = formuser.rua.value;
    if (rua == "") {
        alert("Preencha o campo Rua");
        formuser.rua.focus();
        return false;
    }
    var bairro = formuser.bairro.value;
    if (bairro == "") {
        alert("Preencha o campo Bairro");
        formuser.bairro.focus();
        return false;
    }
    var estado = formuser.estado.value;
    if (estado == "") {
        alert("Preencha o campo Estado");
        formuser.estado.focus();
        return false;
    }
    var numero = formuser.numero.value;
    if (numero == "") {
        alert("Preencha o campo Numero da Casa");
        formuser.numero.focus();
        return false;
    }

    var complemento = formuser.complemento[1].value;
    if (complemento == "") {
        alert("Campo Obrigatório!")
        formuser.complemento.focus();
        return false;
    }


    const fields = {
        "nome": formuser.nome.value,
        "CPF": formuser.cpf.value,
        "RG": formuser.rg.value,
        "data_nasc": formuser.data.value,
        "tipo_cnh": formuser.habilitacao.value,
        "estado_civil": formuser.es.value,
        "CEP": formuser.cep.value,
        "rua": formuser.rua.value,
        "bairro": formuser.bairro.value,
        "cidade": formuser.city.value,
        "estado": formuser.estado.value,
        "numero": formuser.numero.value,
        "complemento": formuser.complemento.value
    };
    
    console.log(fields);

    const objetojson = JSON.stringify(fields)

    console.log(objetojson);

    const xhr = new XMLHttpRequest();

    xhr.open("POST", "https://beginner-api.herokuapp.com/save");

    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
        if (this.status == 200 && this.readyState == 4) {
            const objetosalvo = JSON.parse(xhr.responseText);
            if (objetosalvo.Sucesso != undefined) {
                alert("Cadastro Efetuado!");
            } else {
                alert("Erro de Formulário!");
            }
        }
    }
    xhr.send(objetojson);
}