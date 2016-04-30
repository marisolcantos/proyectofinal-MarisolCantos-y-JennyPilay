console.log("Inicio del programa");

function printList (lista)
{
	var listHTML = '<ol>';
	for (var i=0; i < lista.length; i ++)
	{
		listHTML += '<li>' + lista[i] + '</li>'
	}
	listHTML += '</ol>';
	print(listHTML);
}

function print(html)
{
	document.write(html);
}

var playList=[];
playList.push("UN GRAN DINASAURIO");
playList.push("EN BUSCA DE LA FELICIDAD");
playList.push("EL LIBRO DE LA SELVA");
playList.push("CAPITAN AMERICA:GUERRA CIVIL");
playList.push("BUSCANDO A DORY");
printList(playList);
console.log("Programa completado");



//var html="";
var pelicula1 =
{
	nombre:"UN GRAN DINOSAURIO",director: "peter sohn",genero: "infantil",actor:"JENNY PILAY";
};
var pelicula2 =
{
	nombre:"EN BUSCA DE LA FELICIDAD",director: "gabriel muccino",genero: "drama",actor: "will smith";
};
var pelicula3=
{
	nombre:"El LIBRO DE LA SELVA",director: "gabriel muccino",genero: "drama",actor: "will smith";
};
var pelicula4 =
{
	nombre:"capitan america:guerra civil",director: "gabriel muccino",genero: "drama",actor: "will smith";
};
var pelicula5=
{
	nombre:"EN BUSCA DE DORY",director: "gabriel muccino",genero: "drama",actor: "will smith";

var estu =[];
estu.push(pelicula1);estu.push(pelicula2);estu.push(pelicula3);estu.push(pelicula4);estu.push(pelicula5);
var nombres =[];
nombres.push(pelicula.nombre);nombres.push(pelicula.nombre);nombres.push(pelicula.nombre);nombres.push(pelicula.nombre);nombres.push(pelicula.nombre);


function printHTML (mensaje)
 {
	html += "<h3>Registro de peliculas</h3>";
	html += printList(pelicula);

var infoDiv = document.getElementById("pelicula"); 
infoDiv.innerHTML=mensaje;
	return html;
 }

function printList (lista)//
{
	var listHTML = '<ul>';
	for (var i=0; i < lista.length; i ++)
	{
		html += "<div>"+i+"</div>";
		listHTML += '<li>' + lista[i].nombre + '<br>'+lista[i].genero+ '<br>'+lista[i].edad+ '<br>'+lista[i].notas+ '<br>'+lista[i].ciudad+ '<br>'+'</li>';
	}
	listHTML += '</ul>';
	return listHTML;//
}//