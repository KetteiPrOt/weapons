let acordiones = document.getElementsByClassName('accordion'),
	cabeceras = document.getElementsByClassName('accordion-header'),
	contenidos = document.getElementsByClassName('accordion-collapse');

for(acor in acordiones) {
	acordiones[acor].id = 'acordion_' + acor;
}

for(cab in cabeceras) {
	cabeceras[cab].id = 'cabecera_' + cab;
}

for(cont in contenidos) {
	contenidos[cont].id = 'contenido_' + cont;
}