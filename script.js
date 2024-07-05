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

    // Inicialmente aplica a máscara ao campo de telefone
    $('#telefone').mask(maskBehavior, options);
});