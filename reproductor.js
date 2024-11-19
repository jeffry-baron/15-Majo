const progreso = document.getElementById('progreso');
const cancion = document.getElementById('cancion');

const IconoControl = document.getElementById('pause');

const botonReproducir = document.querySelector('.controles button.reproducir')

const canciones = [
    {
        fuente: 'assets/audio/miprincesa.m4a'
    }
];

let indiceCancionActual = 0;

function ActulizarCancion() {
    cancion.src = canciones[indiceCancionActual].fuente;
    cancion.addEventListener('loadeddata', function () { });
};

botonReproducir.addEventListener('click', reproducirPausar);

function reproducirPausar() {

    if (cancion.paused) {
        reproducirCancion();
    } else {
        pausarCancion();
    };
};

function reproducirCancion() {
    cancion.play();
    IconoControl.classList.add('bi-pause-fill')
    IconoControl.classList.remove('bi-play-circle')
};

function pausarCancion() {
    cancion.pause();
    IconoControl.classList.remove('bi-pause-fill')
    IconoControl.classList.add('bi-play-circle')
};

cancion.addEventListener('timeupdate', function () {
    if (!cancion.paused) {
        progreso.value = cancion.currentTime;
    }
});

progreso.addEventListener('input', function () {
    cancion.currentTime = progreso.value;
});

progreso.addEventListener('change', function () {
    reproducirCancion();
})
ActulizarCancion()
