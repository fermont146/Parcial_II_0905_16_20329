// Obtenemos elementos del DOM relacionados con la fecha
const dateNumber = document.getElementById('dateNumber'); // Elemento para el número del día
const dateText = document.getElementById('dateText'); // Elemento para el día de la semana
const dateMonth = document.getElementById('dateMonth'); // Elemento para el nombre del mes
const dateYear = document.getElementById('dateYear'); // Elemento para el año

// Obtenemos el contenedor de las tareas
const tasksContainer = document.getElementById('tasksContainer');

// Función para establecer la fecha actual en los elementos del DOM
const setDate = () => {
    const date = new Date();
    dateNumber.textContent = date.toLocaleString('es', { day: 'numeric' }); // Establece el número del día
    dateText.textContent = date.toLocaleString('es', { weekday: 'long' }); // Establece el día de la semana
    dateMonth.textContent = date.toLocaleString('es', { month: 'short' }); // Establece el nombre del mes
    dateYear.textContent = date.toLocaleString('es', { year: 'numeric' }); // Establece el año
};

// Función para agregar una nueva tarea cuando se envía un formulario
const addNewTask = event => {
    event.preventDefault();
    const { value } = event.target.taskText;
    if (!value) return; // Evita agregar una tarea vacía
    const task = document.createElement('div');
    task.classList.add('task', 'roundBorder');
    task.addEventListener('click', changeTaskState); // Agrega un evento de clic para cambiar el estado de la tarea
    task.textContent = value;
    tasksContainer.prepend(task); // Agrega la nueva tarea al principio del contenedor
    event.target.reset(); // Limpia el formulario
};

// Función para cambiar el estado de una tarea al hacer clic en ella
const changeTaskState = event => {
    event.target.classList.toggle('done'); // Alternar la clase 'done' para cambiar el estado de la tarea
};

// Función para ordenar las tareas en función de su estado ('done' o 'to do')
const order = () => {
    const done = [];
    const toDo = [];
    tasksContainer.childNodes.forEach(el => {
        el.classList.contains('done') ? done.push(el) : toDo.push(el)
    });
    return [...toDo, ...done]; // Devuelve un arreglo que contiene primero las tareas por hacer y luego las tareas completadas
};

// Función para renderizar las tareas ordenadas en el contenedor de tareas
const renderOrderedTasks = () => {
    order().forEach(el => tasksContainer.appendChild(el)); // Agrega las tareas ordenadas al contenedor
};

// Establece la fecha al cargar la página
setDate();
