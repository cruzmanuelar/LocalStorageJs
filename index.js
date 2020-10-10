document.getElementById('formTarea').addEventListener('submit', guardarTarea);

function guardarTarea(e) {
    let titulo = document.getElementById('titulo').value;
    let descripcion = document.getElementById('descripcion').value;
  
    let tarea = {
      titulo,
      descripcion
    };
  
    //console.log(tarea)
  
    if(localStorage.getItem('tareas') === null) {
      let tareas = [];
      tareas.push(tarea);
      localStorage.setItem('tareas', JSON.stringify(tareas));
    } else {
      let tareas = JSON.parse(localStorage.getItem('tareas'));
      tareas.push(tarea);
      localStorage.setItem('tareas', JSON.stringify(tareas));
    }
  
}