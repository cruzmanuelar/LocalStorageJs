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
    mostrarTareas();
    document.getElementById('formTarea').reset();
    e.preventDefault();
}

function mostrarTareas() {
    let tareas = JSON.parse(localStorage.getItem('tareas'));
    let vistaTareas = document.getElementById('tareas');
    vistaTareas.innerHTML = '';
    for(let i = 0; i < tareas.length; i++) {
      let titulo = tareas[i].titulo;
      let descripcion = tareas[i].descripcion;
  
      vistaTareas.innerHTML += `
        <div class="row">
            <div class="col-6">
                <p class="text-dark">${titulo} - ${descripcion}
            </div>
            <div class="col-6">
                <a href="#" class="btn btn-danger ml-5">Eliminar</a>
            </div>
        </div>`;
    }
}

mostrarTareas();