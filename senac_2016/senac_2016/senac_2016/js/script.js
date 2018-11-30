
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
    
    var d_inicio = new Date(data_inicio+'T00:00:00-03:00');

    var d_inicio_dia = d_inicio.getDate();
    var d_inicio_mes = d_inicio.getMonth();
    var d_inicio_ano = d_inicio.getFullYear();

    var data_inicio = (d_inicio_dia || 00) + '/' + (d_inicio_mes || 00) + '/' + (d_inicio_ano || 0000);

    var d_termino = new Date(data_termino+'T00:00:00-03:00');

    var d_termino_dia = d_termino.getDate();
    var d_termino_mes = d_termino.getMonth();
    var d_termino_ano = d_termino.getFullYear();

    var data_termino = (d_termino_dia|| 00) + '/' + (d_termino_mes || 0) + '/' + (d_termino_ano || 0000);

    document.getElementById("m_curso").innerHTML = curso || "Nome do curso";
    document.getElementById("m_descricao").innerHTML = descricao || "Descrição do curso";
    document.getElementById("m_oferta").innerHTML = oferta || "Oferta";
    document.getElementById("m_numero_aula").innerHTML = numero_aula || "Número da aula";
    document.getElementById("m_data_inicio").innerHTML = data_inicio;
    document.getElementById("m_data_termino").innerHTML = data_termino;
    document.getElementById("m_id_docente").innerHTML = id_docente || "ID do Docente Principal";
    document.getElementById("m_nome_docente").innerHTML = nome_docente || "Nome do Docente Principal";
    document.getElementById("m_justificativa").innerHTML = justificativa || "Justificativa";

};

function mostrar_parte() {

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