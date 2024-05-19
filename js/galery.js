const data = [
	{
		id: 1,
		nombre: "Cataratas del Iguazú",
		ubicacion: "Provincia de Misiones",
		descripcion:
			"Impresionante conjunto de cataratas ubicado en la selva subtropical, declarado Patrimonio de la Humanidad por la UNESCO.",
		tipo: "Naturaleza",
		imagen_url: "../assets/images/Cataratas-del-Iguazu.jpg",
	},
	{
		id: 2,
		nombre: "Glaciar Perito Moreno",
		ubicacion: "Provincia de Santa Cruz",
		descripcion:
			"Espectacular glaciar ubicado en el Parque Nacional Los Glaciares, uno de los pocos en el mundo que se encuentra en avance.",
		tipo: "Naturaleza",
		imagen_url: "../assets/images/Glaciar-Perito-Moreno.jpg",
	},
	{
		id: 3,
		nombre: "Bariloche",
		ubicacion: "Provincia de Río Negro",
		descripcion:
			"Destino turístico conocido por sus paisajes de montaña, lagos cristalinos y actividades de deportes de invierno.",
		tipo: "Aventura",
		imagen_url: "../assets/images/Bariloche.jpg",
	},
	{
		id: 4,
		nombre: "Ushuaia",
		ubicacion: "Provincia de Tierra del Fuego",
		descripcion:
			"Conocida como 'La ciudad del fin del mundo', es el punto de partida para explorar la Antártida y ofrece paisajes impresionantes.",
		tipo: "Aventura",
		imagen_url: "../assets/images/Ushuaia.jpg",
	},
	{
		id: 5,
		nombre: "Quebrada de Humahuaca",
		ubicacion: "Provincia de Jujuy",
		descripcion:
			"Impresionante paisaje de montañas y colores en la región andina del norte argentino, con pueblos pintorescos y cultura ancestral.",
		tipo: "Cultural",
		imagen_url: "../assets/images/quebrada-humahuaca.jpeg",
	},
	{
		id: 6,
		nombre: "Mendoza",
		ubicacion: "Provincia de Mendoza",
		descripcion:
			"Famosa por sus viñedos y bodegas, es el principal destino enológico de Argentina, además de ofrecer paisajes de montaña y actividades al aire libre.",
		tipo: "Gastronomía",
		imagen_url: "../assets/images/San-Rafael-Mendoza.jpg",
	},
	{
		id: 7,
		nombre: "Salta",
		ubicacion: "Provincia de Salta",
		descripcion:
			"Conocida como 'La Linda', ofrece una combinación de paisajes naturales, arquitectura colonial y cultura tradicional.",
		tipo: "Cultural",
		imagen_url: "../assets/images/Salta.jpg",
	},
	{
		id: 8,
		nombre: "Península Valdés",
		ubicacion: "Provincia de Chubut",
		descripcion:
			"Reserva natural que alberga una gran diversidad de fauna marina, incluyendo ballenas, pingüinos y elefantes marinos.",
		tipo: "Naturaleza",
		imagen_url: "../assets/images/Peninsula-Valdes.jpg",
	},
	{
		id: 9,
		nombre: "Cafayate",
		ubicacion: "Provincia de Salta",
		descripcion:
			"Región vitivinícola famosa por sus vinos de alta calidad, rodeada de paisajes espectaculares de montañas y quebradas.",
		tipo: "Gastronomía",
		imagen_url: "../assets/images/Cafayate-Salta.jpg",
	},
	{
		id: 10,
		nombre: "Ciudad de Buenos Aires",
		ubicacion: "Capital Federal",
		descripcion:
			"Capital cosmopolita y cultural de Argentina, con una rica oferta de arquitectura, arte, gastronomía y vida nocturna.",
		tipo: "Cultural",
		imagen_url: "../assets/images/ciudad-de-bsas.jpg",
	},
	{
		id: 11,
		nombre: "Purmamarca",
		ubicacion: "Provincia de Jujuy",
		descripcion:
			"Pintoresco pueblo ubicado al pie del Cerro de los Siete Colores, famoso por su paisaje y su mercado de artesanías.",
		tipo: "Cultural",
		imagen_url: "../assets/images/purmamarca.png",
	},
	{
		id: 12,
		nombre: "Mar del Plata",
		ubicacion: "Provincia de Buenos Aires",
		descripcion:
			"Importante destino turístico costero, conocido por sus playas, su vida nocturna y su amplia oferta de entretenimiento.",
		tipo: "Playa",
		imagen_url: "../assets/images/Mar-del-Plata.jpg",
	},
];

const classBento = [
	"gallery-article-1",
	"gallery-article-2",
	"gallery-article-3",
	"gallery-article-4",
	"gallery-article-5",
	"gallery-article-6",
];

const card = (urlImage, classBento) =>
	`<article class="gallery-article ${classBento}">
    	<div
        	class="gallery-card"
        	data-bs-toggle="modal"
        	data-bs-target="#exampleModal"
		>
        	<div class="card-image-content">
            	<img src=${urlImage} />
        	</div>
    	</div>
	</article>`;


const galleryContainer = document.querySelector(".gallery-container");

let cont = 0;
data.forEach((element) => {
	galleryContainer.innerHTML += card(element.imagen_url, classBento[cont]);
	if (cont === 5) {
		cont = 0;
	} else {
		cont++;
	}
});
