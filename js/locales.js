var html="";
var cine1 =
{
	ciudad:"Guayaquil",numSalas: 8, direccion:"avda francisco de orellana"
};
var cine2 =
{
	ciudad:"Guayaquil",numSalas: 8, direccion:"avda 9 de octubre"
};
var cine3 =
{
	ciudad:"quevedo",numSalas: 8, direccion:"paseo shoping quevedo - centro"
};
var cine4 =
{
	ciudad:"Libertad",numSalas: 8, direccion:"paseo shoping la libertad - via salinas"
};
var cine5 =
{
	ciudad:"Guayaquil",numSalas: 8, direccion:"centro comercial mall de el sol - joaquin jose orrantina "
};

var cine =[];
cine.push(cine1);cine.push(cine2);cine.push(cine3);cine.push(cine4);cine.push(cine5);




for (var i=0; i < cine.length; i ++)
{
listHTML = '<ul><li>' + cine[i].ciudad + '<br>'+cine[i].numSalas+ '<br>'+cine[i].direccion+ '<br>'+'</li></ul>';
				var infoDiv = document.getElementById("info-cine"); 
				infoDiv.innerHTML+=listHTML;
			}