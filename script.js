// Referencias a elementos del DOM
const display = document.getElementById('display');
const dateDisplay = document.getElementById('date-display');
const select = document.getElementById('timezone-select');

/**
 * Función que obtiene la hora actual y la formatea
 * según la zona horaria seleccionada.
 */
function updateTime() {
    const timezone = select.value;
    const now = new Date(); // Objeto de fecha actual del sistema

    // Configuración para el formateo de hora (HH:MM:SS)
    let options = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    };

    // Si no es local, añadimos la propiedad timeZone al objeto de configuracion
    if (timezone !== 'local') {
        options.timeZone = timezone;
    }

    // Intl.DateTimeFormat: API de JS para formateo de fechas internacional
    const timeString = new Intl.DateTimeFormat('es-ES', options).format(now);
    display.textContent = timeString;

    // Configuración para el formateo de fecha larga
    const dateOptions = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        timeZone: timezone === 'local' ? undefined : timezone 
    };
    
    // Inyectamos la fecha formateada en el párrafo correspondiente
    dateDisplay.textContent = new Intl.DateTimeFormat('es-ES', dateOptions).format(now);
}

// Ejecuta la función cada 1000 milisegundos (1 segundo)
setInterval(updateTime, 1000);

// Ejecución inicial inmediata para evitar el retraso de 1s al cargar
updateTime();