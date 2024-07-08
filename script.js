$(document).ready(function() {
    // Função que define a máscara com base na entrada do usuário
    var maskBehavior = function(val) {
        // Remove todos os caracteres não numéricos e verifica o comprimento do número
        // Se o número tem 11 dígitos, aplica a máscara de celular
        // Caso contrário, aplica a máscara de telefone fixo com a possibilidade de um nono dígito
        return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
    },
    // Opções da máscara que permitem recalcular a máscara conforme o usuário digita
    options = {
        onKeyPress: function(val, e, field, options) {
            // Aplica a máscara apropriada ao campo de telefone
            field.mask(maskBehavior.apply({}, arguments), options);
        }
    };

    // Aplica a máscara ao campo de telefone
    $('#telefone').mask(maskBehavior, options);

    // Adiciona um filtro para o campo de nome para aceitar apenas letras e espaços
    $('#nome').on('input', function() {
        // Remove tudo que não seja letra ou espaço
        $(this).val($(this).val().replace(/[^a-zA-Z\s]/g, ''));
    });

    // Validação do formulário
    $('#contato-form').validate({
        rules: {
            nome: {
                required: true,
                minlength: 3
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true,
                minlength: 14 
            },
            'aceito-termos': {
                required: true // Verifica se o checkbox está marcado
            }
        },
        messages: {
            nome: {
                required: "Por favor, insira seu nome",
                minlength: "Seu nome deve ter pelo menos 3 caracteres"
            },
            email: {
                required: "Por favor, insira seu email",
                email: "Por favor, insira um email válido"
            },
            telefone: {
                required: "Por favor, insira seu telefone",
                minlength: "Por favor, insira um telefone válido com pelo menos 10 dígitos"
            },
            'aceito-termos': {
                required: "Você deve aceitar os termos"
            }
        },
        errorElement: 'div', // Define que o elemento HTML que conterá a mensagem de erro será um <div>
        errorClass: 'invalid-feedback', // Define a classe CSS que será aplicada aos elementos de erro para estilização

        // Função que será chamada quando um campo do formulário for considerado inválido
        highlight: function(element, errorClass, validClass) {
            // Adiciona a classe 'is-invalid' ao elemento para aplicar a estilização de erro do Bootstrap
            // Remove a classe 'is-valid' do elemento, caso ela exista, para garantir que apenas a estilização de erro seja aplicada
            $(element).addClass('is-invalid').removeClass('is-valid');
        },

        // Função que será chamada quando um campo do formulário for considerado válido
        unhighlight: function(element, errorClass, validClass) {
            // Adiciona a classe 'is-valid' ao elemento para aplicar a estilização de campo válido do Bootstrap
            // Remove a classe 'is-invalid' do elemento, caso ela exista, para garantir que apenas a estilização de campo válido seja aplicada
            $(element).addClass('is-valid').removeClass('is-invalid');
        }
    });
});

