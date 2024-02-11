class Moneda {
	constructor (nombre,valorEnDolares,valorEnMoneda){
		this.nombre = nombre;
		this.valorEnDolares = valorEnDolares;
		this.valorEnMoneda = valorEnMoneda;
	}
}

const ArrayMonedas = [
	{nombre:"Dolar", valorEnDolares:1 , valorEnMoneda:1},
	{nombre:"Pesos", valorEnDolares:1/1250 , valorEnMoneda:1250},
	{nombre:"Reales",valorEnDolares: 1/5,valorEnMoneda:5},
	{nombre:"Euros",valorEnDolares:1.08,valorEnMoneda:0.93 }

]

const ArrayBonos = [
	{bono:"TX24", cotización: 1},
	{bono:"TX26", cotización: 1.25},
	{bono:"TX28", cotización: 1.50}
]

let divisa1=prompt("Seleccione la primer divisa: 1-Dolar 2-Peso Argentino 3-Real brasileño 4-Euro ");

while (isNaN(divisa1) || divisa1>=5 || divisa1<=0){

	alert("La primer divisa ingresada no corresponde a un valor indicado");
	divisa1=prompt("Seleccione la primer divisa: 1-Dolar 2-Peso Argentino 3-Real brasileño 4-Euro ");

}

let divisa2=parseInt(prompt("Seleccione la segunda divisa: 1-Dolar 2-Peso Argentino 3-Real brasileño 4-Euro "));


while (isNaN(divisa2) || divisa2>=5 || divisa2<=0){

	alert("La segunda divisa ingresada no corresponde a un valor indicado");
	divisa2=prompt("Seleccione la segunda divisa: 1-Dolar 2-Peso Argentino 3-Real brasileño 4-Euro ");

}

let importe=parseFloat(prompt("Ingrese el importe a convertir"));

while (isNaN(importe)){

	alert("El importe ingresado no corresponde a un valor numerico");
	importe=parseFloat(prompt("Ingrese el importe a convertir"));
}


while (divisa1==divisa2){
	console.log ("Ingresó dos veces la misma divisa");
	divisa1=prompt("Seleccione la primer divisa: 1-Dolar 2-Peso Argentino 3-Real brasileño 4-Euro ");
	divisa2=prompt("Seleccione la segunda divisa: 1-Dolar 2-Peso Argentino 3-Real brasileño 4-Euro ");
}; 



console.log(convertir());

function convertir(){
	let i = divisa1-1;
	let j = divisa2-1;
	let importeDolarizado = importe * ArrayMonedas[i].valorEnDolares;
	let importeFinal = importeDolarizado * ArrayMonedas[j].valorEnMoneda;
	return importeFinal;
}

let respuesta = prompt("¿Quiere conocer la cotizacion de otras bonos dolarizados?").toUpperCase;


if (respuesta = "SI"){
	for (const cotizacion of ArrayBonos){
		console.log(`El bono ${cotizacion.bono} cotiza ${cotizacion.cotización}`)
	}
}else {
	console.log("Te lo pierdes entonces")
}

