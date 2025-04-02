function openPopup(event) {
        event.preventDefault(); // Evita que el enlace cambie de página
        document.getElementById("videoPopup").style.display = "block";
    }

    function closePopup() {
        let popup = document.getElementById("videoPopup");
        let video = document.getElementById("popupVideo");

        popup.style.display = "none";
        video.pause(); // Pausar el video cuando se cierre el popup
    }