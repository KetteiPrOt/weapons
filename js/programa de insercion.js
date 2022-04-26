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
''
,
titleName1 =
''
,
textContent1 =
''
,
wigContenta1 =
''
,
wigContentb1 =
''
,
wigContentc1 =
''
,
fuenteLink1 =
''
,
armaLink1 =
''
;


/* ----- ----- ----- ARMA: two ----- ----- ----- */
let srcName2 = 
''
,
titleName2 =
''
,
textContent2 =
''
,
wigContenta2 =
''
,
wigContentb2 =
''
,
wigContentc2 =
''
,
fuenteLink2 =
''
,
armaLink2 =
''
;


/* ----- ----- ----- ARMA: three ----- ----- ----- */
let srcName3 = 
''
,
titleName3 =
''
,
textContent3 =
'',
wigContenta3 =
''
,
wigContentb3 =
''
,
wigContentc3 =
''
,
fuenteLink3 =
''
,
armaLink3 =
''
;


/* ----- ----- ----- ARMA: four ----- ----- ----- */
let srcName4 = 
''
,
titleName4 =
''
,
textContent4 =
'',
wigContenta4 =
''
,
wigContentb4 =
''
,
wigContentc4 =
''
,
fuenteLink4 =
''
,
armaLink4 =
''
;


/* ----- ----- ----- ARMA: five ----- ----- ----- */
let srcName5 = 
''
,
titleName5 =
''
,
textContent5 =
'',
wigContenta5 =
''
,
wigContentb5 =
''
,
wigContentc5 =
''
,
fuenteLink5 =
''
,
armaLink5 =
''
;


/* ----- ----- ----- ARMA: six ----- ----- ----- */
let srcName6 = 
''
,
titleName6 =
''
,
textContent6 =
'',
wigContenta6 =
''
,
wigContentb6 =
''
,
wigContentc6 =
''
,
fuenteLink6 =
''
,
armaLink6 =
''
;


/* ----- ----- ----- ARMA: seven ----- ----- ----- */
let srcName7 = 
''
,
titleName7 =
''
,
textContent7 =
'',
wigContenta7 =
''
,
wigContentb7 =
''
,
wigContentc7 =
''
,
fuenteLink7 =
''
,
armaLink7 =
''
;

/* ----- ----- ----- ARMA: eight ----- ----- ----- */
let srcName8 = 
''
,
titleName8 =
''
,
textContent8 =
'',
wigContenta8 =
''
,
wigContentb8 =
''
,
wigContentc8 =
''
,
fuenteLink8 =
''
,
armaLink8 =
''
;


/* ----- ----- ----- ARMA: nine ----- ----- ----- */
let srcName9 = 
''
,
titleName9 =
''
,
textContent9 =
'',
wigContenta9 =
''
,
wigContentb9 =
''
,
wigContentc9 =
''
,
fuenteLink9 =
''
,
armaLink9 =
''
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