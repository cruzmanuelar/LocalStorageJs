document.getElementById('formTarea').addEventListener('submit', guardarTarea);

function guardarTarea(e) {
    let titulo = document.getElementById('titulo').value;
    let descripcion = document.getElementById('descripcion').value;
  
    let tarea = {
      titulo,
      descripcion
    };
  
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

function eliminarTarea(titulo) {

    let tareas = JSON.parse(localStorage.getItem('tareas'));
    for(let i = 0; i < tareas.length; i++) {
      if(tareas[i].titulo == titulo) {
        tareas.splice(i, 1);
      }
    }
  
    localStorage.setItem('tareas', JSON.stringify(tareas));
    mostrarTareas();
}


function mostrarTareas() {
    let tareas = JSON.parse(localStorage.getItem('tareas'));
    let vistaTareas = document.getElementById('tareas');
    vistaTareas.innerHTML = '';
    for(let i = 0; i < tareas.length; i++) {
      let titulo = tareas[i].titulo;
      let descripcion = tareas[i].descripcion;
  
      vistaTareas.innerHTML += `
        <div class="row my-2 px-4">
            <div class="col-6">
                <p class="text-dark">${titulo} : ${descripcion}
            </div>
            <div class="col-6 text-right">
                <a href="#" onclick="eliminarTarea('${titulo}')" class="btn btn-info">Hecho</a>
            </div>
        </div>`;
    }
}

function limpiarTareas(e){

    let tareas = JSON.parse(localStorage.getItem('tareas'));
    if(tareas===null){
        alert("Registro vacío");
    }else{
        let eliminar = prompt("¿Eliminar todo el registro? S/N");
        if(eliminar==="S" || eliminar ==="s"){
            localStorage.clear();
        }
    }
    document.getElementById('formTarea').reset();
    mostrarTareas();

}

mostrarTareas();