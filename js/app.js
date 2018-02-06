
$(document).ready(function () {
  $("#input").keyup(function () {

    var filtro = $("#filtro").val();

  });
});


var $container = $("<div  />").addClass("container");
var $row = $("<div  />").addClass("row");
var $input = $("<div  />").addClass("input");
var $form = $("<div  />").addClass("form");
var $filtro = $("<div  />").addClass("filtro");

$


$form.append($filtro);
$input.append($form);
$row.append($input);
$container.append($row);

$("#lugares").preppend($container);
