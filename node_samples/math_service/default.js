/// <reference path="_references.js" />

$(document).ready(function () {
    //$('#btnAdd').on('click', addNumbers);
    $('#btnAdd').on('click', addNumbersjQuery);
    $('#btnSubstract').on('click', substractNumbers);
    $('#btnMultiplication').on('click', multiplyNumbers);
    $('#btnDivision').on('click', divideNumbers);
});

function addNumbers() {
    var data = getFormData();
    serverAddition(data).done(displayResult);
}

function addNumbersjQuery() {
    //replacement with jQuery
    var x = $('#x').val();
    var y = $('#y').val();
    var data = { "x": x, "y": y };
    $.ajax({
        url: '/addition',
        data: data,
        type: 'GET',
        cache: false,
        datatype: 'json',
        success: function (data) {
            $('#result').html(data.result);
        }
    });
}

function substractNumbers() {
    var data = getFormData();
    serverSubstraction(data).done(displayResult);
}

function multiplyNumbers(){
    var data = getFormData();
    serverMultiplication(data).done(displayResult);
}

function divideNumbers() {
    var data = getFormData();
    serverDivision(data).done(displayResult).fail(displayError);
}

function displayError(serverData, error) {
    var value = 'No result';
    if ('result' in serverData) value = serverData.result;
    $('#result').html(value + ' - '+ error);
}

function getFormData() {
    var x = $('#x').val();
    var y = $('#y').val();
    return { "x": x, "y": y };
}

function serverAddition(data){
    return $.getJSON('/addition', data);
}

function serverSubstraction(data) {
    return $.post('/substraction', data, 'json');
}

function serverMultiplication(data) {
    return $.ajax({
        url: '/multiply',
        data: data,
        type: 'PUT',
        cache: false,
        datatype: 'json',
    });
}

function serverDivision(data) {
    return $.ajax({
        url: '/divide',
        data: data,
        type: 'DELETE',
        cache: false,
        datatype: 'json'
    });
}

function displayResult(serverData) {
    $('#result').html(serverData.result);
}
