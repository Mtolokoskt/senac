
$( document ).ready(function() {
    new ClipboardJS('.btn');
});


function monstrar() {
    var curso = document.getElementById("curso").value;
    var descricao = document.getElementById("descricao").value;
    var oferta = document.getElementById("oferta").value;
    var numero_aula = document.getElementById("numero_aula").value;
    var data_inicio = document.getElementById("data_inicio").value;
    var data_termino = document.getElementById("data_termino").value;
    var id_docente = document.getElementById("id_docente").value;
    var nome_docente = document.getElementById("nome_docente").value;
    var justificativa = document.getElementById("justificativa").value;

    document.getElementById("m_curso").innerHTML = curso;
    document.getElementById("m_descricao").innerHTML = descricao;
    document.getElementById("m_oferta").innerHTML = oferta;
    document.getElementById("m_numero_aula").innerHTML = numero_aula;
    document.getElementById("m_data_inicio").innerHTML = data_inicio;
    document.getElementById("m_data_termino").innerHTML = data_termino;
    document.getElementById("m_id_docente").innerHTML = id_docente;
    document.getElementById("m_nome_docente").innerHTML = nome_docente;
    document.getElementById("m_justificativa").innerHTML = justificativa;

};

function mostrar_radio() {

    var parte = document.getElementsByName("radio_parte");

    for (var i = 0, length = parte.length; i < length; i++) {
        if (parte[i].checked) {
            var m_parte = parte[i].value;
            document.getElementById("m_parte").innerHTML = m_parte;
            break;
        }
    }

}

function mostrar_motivo() {

    var motivo = document.getElementsByName("radio_mot");

    for (var i = 0, length = motivo.length; i < length; i++) {
        if (motivo[i].checked) {
            var m_parte = motivo[i].value;
            document.getElementById("m_motivo").innerHTML = m_parte;
            break;
        }
    }

}

function clipboard(){
    setTimeout(function(){
        if (window.getSelection) {window.getSelection().removeAllRanges();}
    else if (document.selection) {document.selection.empty();}
    },50);
    
}