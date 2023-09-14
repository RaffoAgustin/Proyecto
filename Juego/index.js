window.onload = () => {
    const player = {
        element: document.getElementById("vergareis"), // Obtener el elemento de la imagen por su ID
        topPosition: 0, // Posición inicial superior
        leftPosition: 10, // Posición inicial izquierda
        step: 25, // Tamaño del paso para el movimiento
        currentImage: 1, // Indicador de la imagen actual
        originalImageSrc: "Img/Personajes/Gareis/gareisnormal.png", // Ruta de la primera imagen
        
        // Método para mover el jugador en una dirección dada
        move: function(direction) {
            switch (direction) {
                case "ArrowUp":
                    this.topPosition -= this.step; // Mover hacia arriba
                    break;

                case "ArrowDown":
                    this.topPosition += this.step; // Mover hacia abajo
                    break;

                case "ArrowRight":
                    this.leftPosition += this.step; // Mover hacia la derecha
                    break;

                case "ArrowLeft":
                    this.leftPosition -= this.step; // Mover hacia la izquierda
                    break;

                default:
                    break;
            }

            // Actualizar las posiciones CSS de la imagen
            this.element.style.top = this.topPosition + "px";
            this.element.style.left = this.leftPosition + "px";
        },
        
        // Método para cambiar la imagen
        changeImage: function() {
            this.currentImage = 2; // Cambiar a la segunda imagen
            this.element.src = "Img/Personajes/Gareis/gareiscabezaso.png"; // Cambiar la ruta de la imagen
            
            // Después de 2 segundos, volver a la primera imagen
            setTimeout(() => {
                this.element.src = this.originalImageSrc;
                this.currentImage = 1;
            }, 270); // 200 milisegundos = 0.2 segundos
        }
    };

    // Agregar un escuchador de eventos para el evento "keydown"
    document.addEventListener("keydown", (event) => {
        if (event.key === " " || event.key === " ") {
            player.changeImage(); // Cambiar la imagen al presionar la tecla "L" o "l"
        } else {
            player.move(event.code); // Mover el jugador en la dirección de la tecla presionada
        }
    });
};