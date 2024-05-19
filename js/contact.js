function validateForm() {
    // Obtención de valores de los campos del formulario
    var name = document.forms["contactForm"]["name"].value;
    var email = document.forms["contactForm"]["email"].value;
    var message = document.forms["contactForm"]["message"].value;
    var destination = document.forms["contactForm"]["destination"].value;
    var accept = document.forms["contactForm"]["accept"].checked;

    // Validación para asegurar que todos los campos estén completos
    if (name == "" || email == "" || message == "" || destination == "" || !accept) {
        alert("Todos los campos son obligatorios.");
        return false;
    }

    // Aplicar la clase 'submitted' al botón de envío para cambiar su estilo
    var submitButton = document.querySelector('form button[type="submit"]');
    submitButton.classList.add('submitted');

    // Limpiar el formulario
    document.forms["contactForm"].reset();

    return false; // Para evitar el envío real del formulario durante el desarrollo
}

// Función para actualizar la imagen según el destino seleccionado
function updateImage() {
    var destination = document.getElementById("destination").value;
    var image = document.getElementById("destination-image");

    switch(destination) {
        case "mendoza":
            image.src = "../assets/images/Mendoza.jpg";
            image.alt = "Imagen de Mendoza";
            break;
        case "cordoba":
            image.src = "../assets/images/Cordoba.jpg";
            image.alt = "Imagen de Córdoba";
            break;
        case "tierra":
            image.src = "../assets/images/Ushuaia.jpg";
            image.alt = "Imagen de Tierra de Fuego";
            break;
        case "misiones":
            image.src = "../assets/images/Iguazu.jpg";
            image.alt = "Imagen de Misiones";
            break;
        default:
            image.src = "../assets/images/Mendoza.jpg";
            image.alt = "Imagen Turística";
            break;
    }
}

// Contador de visitantes (simulación para fines de demostración)
window.onload = function() {
    var visitorCount = localStorage.getItem('visitorCount') || 0;
    visitorCount++;
    localStorage.setItem('visitorCount', visitorCount);
    document.getElementById('visitor-count').innerText = visitorCount;
};
