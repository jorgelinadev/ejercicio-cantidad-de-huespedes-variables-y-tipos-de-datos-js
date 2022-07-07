//alert('Mi archivo está bien linkeado');

//Cantidad de huéspedes

//Crear un programa que pida al usuario ingresar, de a uno por vez, cuántas habitaciones tiene un hotel para 2, 3 y 4 personas, y muestre el máximo de huéspedes que puede albergar.

const habDos = prompt ('Ingrese el número de habitaciones dobles');
const habTres = prompt ('Ingrese el número de habitaciones triples');
const habCuatro = prompt ('Ingrese el número de habitaciones cuádruples');
const maxHuespedes = (Number(habDos) * 2 + Number (habTres) * 3 + Number (habCuatro) * 4);

alert(`El número máximo de huéspedes que el hotel puede albergar es de: ${maxHuespedes}.`);