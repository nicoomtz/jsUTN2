//Ejercicio 1
const cuadrado1 = document.querySelector('#cuadrado-1');
const cuadrado2 = document.querySelector('#cuadrado-2');
const cuadrado3 = document.querySelector('#cuadrado-3');

//Ejercicio 2
const textarea = document.querySelector('#textarea');

textarea.addEventListener('keypress', function (e) {
  document.querySelector('#ver-textarea').innerHTML =
    'Escribiste: ' + e.target.value + ' En el TextArea';
});

//Ejercicio 3

var alumnos = [
  {
    nombre: 'Juan Gomez',
    nota: 7
  },
  {
    nombre: 'Pedro Rodriguez',
    nota: 4
  },
  {
    nombre: 'Roxana García',
    nota: 8
  },
  {
    nombre: 'Luciano Lopez',
    nota: 5
  },
  {
    nombre: 'Fernanda Gimenez',
    nota: 6
  },
  {
    nombre: 'Florencia Martinez',
    nota: 10
  },
  {
    nombre: 'Raul Sanchez',
    nota: 7
  },
  {
    nombre: 'Sandra Figueroa',
    nota: 8
  }
];

const alumnosAprobados = alumnos.filter(alumno => alumno.nota >= 7);
console.log(alumnosAprobados);
