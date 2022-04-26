/* --------- --------- --------- PROGRAMA DE INSERCION DE DATOS --------- --------- --------- */
let portadas = document.getElementsByClassName('card-img-top'),
	/*A partir del 4 empiezan las 27 img hasta la 31*/
    imagenes = document.getElementsByClassName('w-100'),

    /*Los titulares son 9 y va del 0 al 8*/
    titulos = document.getElementsByClassName('text'),
    /*Los textos van son 9 y va del 0 al 8*/
    textos = document.getElementsByClassName('card-text'),
    /*Los wigets sin 27 y van del 0 al 26*/
    wigets = document.getElementsByClassName('list-group-item'),
    /*Los enlaces son 18 y van del 0 al 17*/
    enlaces = document.getElementsByClassName('card-link');


class Arma {
	/*Pido el elemento y lo guardo en una variable*/
	constructor(portada){
		this.elemento = portada;
	}

	// IMAGENES
	/*Pido la ruta y establesco la modificacion*/
	portadaCambiar(ruta){
		this.elemento.src = ruta;
	}
	/*Pido el numero de imagen y establesco la nueva ruta*/
	imagenCambiar(num, ruta){
		imagenes[num].src = ruta;
	}

	// TEXTOS
	/*Pido el numero de titular y establesco el nuevo titulo*/
	tituloCambiar(num, nuevo){
		titulos[num].textContent = nuevo;
	}
	/*Pido el numero y establesco el nuevo*/
	textoCambiar(num, nuevo){
		textos[num].textContent = nuevo;
	}
	/*Pido el numero y establesco el nuevo*/
	wigetCambiar(num, nuevo){
		wigets[num].textContent = nuevo;
	}
	/*Pido el numero el texto y el link*/
	modificarEnlace(numero, texto, link){
		if(enlaces[numero].textContent == 'Fuente'){
			enlaces[numero].textContent = 'Fuente';
		} else {
			enlaces[numero].textContent = texto;
		}
		enlaces[numero].href = link;
	}
}

let wealponType = 'sg';

let one = new Arma(portadas[0]),
    two = new Arma(portadas[1]),
    three = new Arma(portadas[2]),
    four = new Arma(portadas[3]),
    five = new Arma(portadas[4]),
    six = new Arma(portadas[5]),
    seven = new Arma(portadas[6]),
    eight = new Arma(portadas[7]),
    nine = new Arma(portadas[8]);

/* ----- ----- ----- ARMA: one ----- ----- ----- */
let srcName1 = 
'remington870'
,
titleName1 =
'Remington 870'
,
textContent1 =
'La Remington 870 es una escopeta corredera estadounidense, fabricada por la empresa Remington Arms. Es ampliamente empleada por civiles.',
wigContenta1 =
'Creada en 1950.'
,
wigContentb1 =
'Alimentada desde abajo.'
,
wigContentc1 =
'Cartucho del 12.'
,
fuenteLink1 =
'https://www.ecured.cu/Remington_870'
,
armaLink1 =
'https://es.wikipedia.org/wiki/Remington_870'
;


/* ----- ----- ----- ARMA: two ----- ----- ----- */
let srcName2 = 
'saiga-12k'
,
titleName2 =
'Saiga 12K'
,
textContent2 =
'Construida a partir del rifle de asalto AK47, la Saiga 12K es una escopeta semiautomática idónea para disparos en distancias cortas.',
wigContenta2 =
'Creada en 1990, Rusia.'
,
wigContentb2 =
'Capacidad de 5-8 cartuchos.'
,
wigContentc2 =
'Bajo retroceso.'
,
fuenteLink2 =
'https://www.armas.es/listado-armas/escopetas/saiga-12k'
,
armaLink2 =
'https://es.wikipedia.org/wiki/Saiga-12'
;


/* ----- ----- ----- ARMA: three ----- ----- ----- */
let srcName3 = 
'm1887'
,
titleName3 =
'M1887'
,
textContent3 =
'Diseñada por el famoso armero estadounidense John Moses Browning a finales del siglo XIX fue una de las primeras escopetas de repetición.',
wigContenta3 =
'Acción de palanca'
,
wigContentb3 =
'Municion de calibre 12'
,
wigContentc3 =
'Se produjeron 64,855 unidades'
,
fuenteLink3 =
'https://wblog.wiki/es/Winchester_Model_1887'
,
armaLink3 =
'https://es.wikipedia.org/wiki/Winchester_Modelo_1887'
;

/* ----- ----- ----- ARMA: four ----- ----- ----- */
let srcName4 = 
'spas-12'
,
titleName4 =
'SPAS-12'
,
textContent4 =
'Special Purpose Automatic Shotgun ("Escopeta automática de propósito especial") tiene un mecanismo de corte de carga.',
wigContenta4 =
'Modo de corredera.'
,
wigContentb4 =
'Munición de baja presión.'
,
wigContentc4 =
'Munición Calibre 12'
,
fuenteLink4 =
'https://nationalinterest.org/blog/buzz/franchi-spas-12-%E2%80%93-special-purpose-automatic-shotgun-166228'
,
armaLink4 =
'https://es.wikipedia.org/wiki/SPAS-12'
;

/* ----- ----- ----- ARMA: five ----- ----- ----- */
let srcName5 = 
'm1014'
,
titleName5 =
'M1014'
,
textContent5 =
'Una escopeta semiautomática con capacidad para 7 cartuchos de calibre 12, con una cadencia de aproximadamente 125 disparos/ min.',
wigContenta5 =
'Culata telescópica.'
,
wigContentb5 =
'Popular entre los cuerpos policiales.'
,
wigContentc5 =
'Semiautomático o de acción manual.'
,
fuenteLink5 =
'https://sites.google.com/a/sanfer.es/las-armas2/es/m1014'
,
armaLink5 =
'https://es.wikipedia.org/wiki/Benelli_M4#:~:text=Se%20trata%20de%20un%20modelo,modernas%20y%20efectivas%20del%20momento.'
;


/* ----- ----- ----- ARMA: six ----- ----- ----- */
let srcName6 = 
'dp-12'
,
titleName6 =
'DP-12'
,
textContent6 =
'Es una escopeta de acción de bomba con dos cañones y cargadores de tubos diseñada por norma de fabricación.',
wigContenta6 =
'Municion Calibre 12.'
,
wigContentb6 =
'Acción de bombeo.'
,
wigContentc6 =
'Capacidad 8 + 8 municiones.'
,
fuenteLink6 =
'https://aminoapps.com/c/gun-gale-online-ggo/page/item/dp-12/J81e_lBEsMIrGZq3KDGjzdazdnd6vjvRXd5'
,
armaLink6 =
'https://en.wikipedia.org/wiki/Standard_Manufacturing_DP-12'
;


/* ----- ----- ----- ARMA: seven ----- ----- ----- */
let srcName7 = 
's682'
,
titleName7 =
'S682'
,
textContent7 =
'La S689 pertenece a la familia de escopetas superpuestas Beretta 682 entra varios grados para caza, sporting clays, trap y skeet.',
wigContenta7 =
'Cargador de dos disparos.'
,
wigContentb7 =
'De competencia.'
,
wigContentc7 =
'Producida hasta el año 1994.'
,
fuenteLink7 =
'https://es.wikipedia.org/wiki/Beretta_682'
,
armaLink7 =
'https://es.wikipedia.org/wiki/Beretta_682'
;

/* ----- ----- ----- ARMA: eight ----- ----- ----- */
let srcName8 = 
'aa-12'
,
titleName8 =
'AA-12'
,
textContent8 =
'Atchisson Assault Shotgun es un rifle automático de calibre 12 creado por el ingeniero estadounidense Maxwell Atchisson.'
,
wigContenta8 =
'Desarrollada en 1972.'
,
wigContentb8 =
'Dispara a cerrojo abierto.'
,
wigContentc8 =
'Cargador recto de 8 cartuchos.'
,
fuenteLink8 =
'https://es.frwiki.wiki/wiki/Atchisson_Assault_Shotgun_AA-12#:~:text=5.1%20Art%C3%ADculos%20relacionados-,Descripci%C3%B3n,salida%20de%20320%20m%20%2F%20s%20.'
,
armaLink8 =
'https://es.wikipedia.org/wiki/AA-12'
;


/* ----- ----- ----- ARMA: nine ----- ----- ----- */
let srcName9 =
'usas-12'
,
titleName9 =
'USAS-12'
,
textContent9 =
'La Daewoo USAS-12 es una escopeta automática diseñada como escopeta de combate, desarrollada en Corea del Sur durante la década de 1980.'
,
wigContenta9 =
'Recarga accionada por gas.'
,
wigContentb9 =
'Cadencia de tiro 400-450 dsp/min.'
,
wigContentc9 =
'Alcance efectivo de 40 m.'
,
fuenteLink9 =
'https://sites.google.com/a/sanfer.es/las-armas2/es/usas-12'
,
armaLink9 =
'https://es.wikipedia.org/wiki/Daewoo_USAS-12'
;


/* ----- ----- ----- ARMA: one ----- ----- ----- */
/*Modificando la Portada*/
/*NORMAL: one.portadaCambiar(`img/smg/${srcName1}/${srcName1}.jpg`);*/
one.portadaCambiar(`img/${wealponType}/${srcName1}/${srcName1}a.jpg`);

/*Agregando las rutas modales*/
one.imagenCambiar(4, `img/${wealponType}/${srcName1}/${srcName1}a.jpg`);

one.imagenCambiar(5, `img/${wealponType}/${srcName1}/${srcName1}b.jpg`);

one.imagenCambiar(6, `img/${wealponType}/${srcName1}/${srcName1}c.jpg`);

/*Modificando el titulo*/
one.tituloCambiar(0, `${titleName1}`);

/*Modificando el Texto*/
one.textoCambiar(0, `${textContent1}`)

/*Modificando los Witgets*/
one.wigetCambiar(0, `${wigContenta1}`);

one.wigetCambiar(1, `${wigContentb1}`);

one.wigetCambiar(2, `${wigContentc1}`);

/*Modificando los enlaces*/
one.modificarEnlace(0, `${titleName1}`, `${fuenteLink1}`);

one.modificarEnlace(1, `${titleName1}`, `${armaLink1}`);


/* ----- ----- ----- ARMA: two ----- ----- ----- */
/*Modificando la Portada*/
two.portadaCambiar(`img/${wealponType}/${srcName2}/${srcName2}.jpg`);

/*Agregando las rutas modales*/
two.imagenCambiar(7, `img/${wealponType}/${srcName2}/${srcName2}a.jpg`);

two.imagenCambiar(8, `img/${wealponType}/${srcName2}/${srcName2}b.jpg`);

two.imagenCambiar(9, `img/${wealponType}/${srcName2}/${srcName2}c.jpg`);

/*Modificando el titulo*/
two.tituloCambiar(1, `${titleName2}`);

/*Modificando el Texto*/
two.textoCambiar(1, `${textContent2}`)

/*Modificando los Witgets*/
two.wigetCambiar(3, `${wigContenta2}`);

two.wigetCambiar(4, `${wigContentb2}`);

two.wigetCambiar(5, `${wigContentc2}`);

/*Modificando los enlaces*/
two.modificarEnlace(2, `${titleName2}`, `${fuenteLink2}`);

two.modificarEnlace(3, `${titleName2}`, `${armaLink2}`);


/* ----- ----- ----- ARMA: three ----- ----- ----- */
/*Modificando la Portada*/
three.portadaCambiar(`img/${wealponType}/${srcName3}/${srcName3}.jpg`);

/*Agregando las rutas modales*/
three.imagenCambiar(10, `img/${wealponType}/${srcName3}/${srcName3}a.jpg`);

three.imagenCambiar(11, `img/${wealponType}/${srcName3}/${srcName3}b.jpg`);

three.imagenCambiar(12, `img/${wealponType}/${srcName3}/${srcName3}c.jpg`);

/*Modificando el titulo*/
three.tituloCambiar(2, `${titleName3}`);

/*Modificando el Texto*/
three.textoCambiar(2, `${textContent3}`)

/*Modificando los Witgets*/
three.wigetCambiar(6, `${wigContenta3}`);

three.wigetCambiar(7, `${wigContentb3}`);

three.wigetCambiar(8, `${wigContentc3}`);

/*Modificando los enlaces*/
three.modificarEnlace(4, `${titleName3}`, `${fuenteLink3}`);

three.modificarEnlace(5, `${titleName3}`, `${armaLink3}`);


/* ----- ----- ----- ARMA: four ----- ----- ----- */
/*Modificando la Portada*/
four.portadaCambiar(`img/${wealponType}/${srcName4}/${srcName4}.jpg`);

/*Agregando las rutas modales*/
four.imagenCambiar(13, `img/${wealponType}/${srcName4}/${srcName4}a.jpg`);

four.imagenCambiar(14, `img/${wealponType}/${srcName4}/${srcName4}b.jpg`);

four.imagenCambiar(15, `img/${wealponType}/${srcName4}/${srcName4}c.jpg`);

/*Modificando el titulo*/
four.tituloCambiar(3, `${titleName4}`);

/*Modificando el Texto*/
four.textoCambiar(3, `${textContent4}`)

/*Modificando los Witgets*/
four.wigetCambiar(9, `${wigContenta4}`);

four.wigetCambiar(10, `${wigContentb4}`);

four.wigetCambiar(11, `${wigContentc4}`);

/*Modificando los enlaces*/
four.modificarEnlace(6, `${titleName4}`, `${fuenteLink4}`);

four.modificarEnlace(7, `${titleName4}`, `${armaLink4}`);


/* ----- ----- ----- ARMA: five ----- ----- ----- */
/*Modificando la Portada*/
five.portadaCambiar(`img/${wealponType}/${srcName5}/${srcName5}.jpg`);

/*Agregando las rutas modales*/
five.imagenCambiar(16, `img/${wealponType}/${srcName5}/${srcName5}a.jpg`);

five.imagenCambiar(17, `img/${wealponType}/${srcName5}/${srcName5}b.jpg`);

five.imagenCambiar(18, `img/${wealponType}/${srcName5}/${srcName5}c.jpg`);

/*Modificando el titulo*/
five.tituloCambiar(4, `${titleName5}`);

/*Modificando el Texto*/
five.textoCambiar(4, `${textContent5}`)

/*Modificando los Witgets*/
five.wigetCambiar(12, `${wigContenta5}`);

five.wigetCambiar(13, `${wigContentb5}`);

five.wigetCambiar(14, `${wigContentc5}`);

/*Modificando los enlaces*/
five.modificarEnlace(8, `${titleName5}`, `${fuenteLink5}`);

five.modificarEnlace(9, `${titleName5}`, `${armaLink5}`);


/* ----- ----- ----- ARMA: six ----- ----- ----- */
/*Modificando la Portada*/
six.portadaCambiar(`img/${wealponType}/${srcName6}/${srcName6}.jpg`);

/*Agregando las rutas modales*/
six.imagenCambiar(19, `img/${wealponType}/${srcName6}/${srcName6}a.jpg`);

six.imagenCambiar(20, `img/${wealponType}/${srcName6}/${srcName6}b.jpg`);

six.imagenCambiar(21, `img/${wealponType}/${srcName6}/${srcName6}c.jpg`);

/*Modificando el titulo*/
six.tituloCambiar(5, `${titleName6}`);

/*Modificando el Texto*/
six.textoCambiar(5, `${textContent6}`)

/*Modificando los Witgets*/
six.wigetCambiar(15, `${wigContenta6}`);

six.wigetCambiar(16, `${wigContentb6}`);

six.wigetCambiar(17, `${wigContentc6}`);

/*Modificando los enlaces*/
six.modificarEnlace(10, `${titleName6}`, `${fuenteLink6}`);

six.modificarEnlace(11, `${titleName6}`, `${armaLink6}`);


/* ----- ----- ----- ARMA: seven ----- ----- ----- */
/*Modificando la Portada*/
seven.portadaCambiar(`img/${wealponType}/${srcName7}/${srcName7}.jpg`);

/*Agregando las rutas modales*/
seven.imagenCambiar(22, `img/${wealponType}/${srcName7}/${srcName7}a.jpg`);

seven.imagenCambiar(23, `img/${wealponType}/${srcName7}/${srcName7}b.jpg`);

seven.imagenCambiar(24, `img/${wealponType}/${srcName7}/${srcName7}c.jpg`);

/*Modificando el titulo*/
seven.tituloCambiar(6, `${titleName7}`);

/*Modificando el Texto*/
seven.textoCambiar(6, `${textContent7}`)

/*Modificando los Witgets*/
seven.wigetCambiar(18, `${wigContenta7}`);

seven.wigetCambiar(19, `${wigContentb7}`);

seven.wigetCambiar(20, `${wigContentc7}`);

/*Modificando los enlaces*/
seven.modificarEnlace(12, `${titleName7}`, `${fuenteLink7}`);

seven.modificarEnlace(13, `${titleName7}`, `${armaLink7}`);


/* ----- ----- ----- ARMA: eight ----- ----- ----- */
/*Modificando la Portada*/
eight.portadaCambiar(`img/${wealponType}/${srcName8}/${srcName8}.jpg`);

/*Agregando las rutas modales*/
eight.imagenCambiar(25, `img/${wealponType}/${srcName8}/${srcName8}a.jpg`);

eight.imagenCambiar(26, `img/${wealponType}/${srcName8}/${srcName8}b.jpg`);

eight.imagenCambiar(27, `img/${wealponType}/${srcName8}/${srcName8}c.jpg`);

/*Modificando el titulo*/
eight.tituloCambiar(7, `${titleName8}`);

/*Modificando el Texto*/
eight.textoCambiar(7, `${textContent8}`)

/*Modificando los Witgets*/
eight.wigetCambiar(21, `${wigContenta8}`);

eight.wigetCambiar(22, `${wigContentb8}`);

eight.wigetCambiar(23, `${wigContentc8}`);

/*Modificando los enlaces*/
eight.modificarEnlace(14, `${titleName8}`, `${fuenteLink8}`);

eight.modificarEnlace(15, `${titleName8}`, `${armaLink8}`);


/* ----- ----- ----- ARMA: nine ----- ----- ----- */
/*Modificando la Portada*/
nine.portadaCambiar(`img/${wealponType}/${srcName9}/${srcName9}.jpg`);

/*Agregando las rutas modales*/
nine.imagenCambiar(28, `img/${wealponType}/${srcName9}/${srcName9}a.jpg`);

nine.imagenCambiar(29, `img/${wealponType}/${srcName9}/${srcName9}b.jpg`);

nine.imagenCambiar(30, `img/${wealponType}/${srcName9}/${srcName9}c.jpg`);

/*Modificando el titulo*/
nine.tituloCambiar(8, `${titleName9}`);

/*Modificando el Texto*/
nine.textoCambiar(8, `${textContent9}`)

/*Modificando los Witgets*/
nine.wigetCambiar(24, `${wigContenta9}`);

nine.wigetCambiar(25, `${wigContentb9}`);

nine.wigetCambiar(26, `${wigContentc9}`);

/*Modificando los enlaces*/
nine.modificarEnlace(16, `${titleName9}`, `${fuenteLink9}`);

nine.modificarEnlace(17, `${titleName9}`, `${armaLink9}`);