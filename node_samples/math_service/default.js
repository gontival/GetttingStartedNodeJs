/// <reference path="_references.js" />

$(document).ready(function () {
    //$('#btnAdd').on('click', addNumbers);
    $('#btnAdd').on('click', addNumbersjQuery);
    $('#btnSubstract').on('click', substractNumbers);
    $('#btnMultiplication').on('click', multiplyNumbers);
    $('#btnDivision').on('click', divideNumbers);
});

function addNumbers() {
    var x = document.getElementById('x').value;
    var y = document.getElementById('y').value;
    var result = document.getElementById('result');
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var jsonObject = JSON.parse(xmlhttp.response);
            result.innerHTML = jsonObject.result;
        }
    }
    xmlhttp.addEventListener('progress', updateProgress, false);
    xmlhttp.addEventListener('errors', failed, false);
    xmlhttp.addEventListener('abort', canceled, false);
    xmlhttp.open('GET', '/addition?x=' + x + '&y=' + y, true);
    xmlhttp.send();

    function updateProgress(evt) {
        if(evt.lengthComputable)
        {
            var percentComplete = evt.loaded / evt.total;
            // display percentComplete
        }
        else
        {
            //Need total size to compute progress
        }
    }

    function failed() {
        alert('an error occured');
    }

    function canceled() {
        alert('canceled by the user');
    }

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
    var x = $('#x').val();
    var y = $('#y').val();
    var data = { "x": x, "y": y };

    $.post('/substraction', data, function (data) {
        $('#result').html(data);
    },'json');
}

function multiplyNumbers(){
    var x = $('#x').val();
    var y = $('#y').val();
    var data = {'x': x, 'y': y};
    $.ajax({
        url: '/multiply',
        data: data,
        type: 'PUT',
        cache: false,
        datatype: 'json',
        success: function (data) {
            $('#result').html(data.result);
        }
    });
}

function divideNumbers() {
    var x = $('#x').val();
    var y = $('#y').val();
    var data = { 'x': x, 'y': y };
    $.ajax({
        url: '/divide',
        data: data,
        type: 'DELETE',
        datatype: 'json',
        cache: false,
        success: function (data) {
            $('#result').html(data.result);
        }
    });
}