"use strict";

// Selecciono los elementos necesasios
const form = document.querySelector("form#new-task");
const list = document.querySelector("ul#tasks");

class TaskList {
  constructor(form, list, keyName) {
    // Nombre del key con el que guardar la lista en local
    this.keyName = keyName;

    // Lista de tasks
    this.tasks = [];

    // Miro a ver si hay tasks guardadas en local y si las hay, guardo al inicio las nuevas
    const storedTasks = JSON.parse(window.localStorage.getItem(this.keyName));
    if (storedTasks) {
      this.tasks = storedTasks;
    }
    this.form = form;
    this.list = list;
    this.cleanButton = this.form.querySelector("button.clean");
    this.deleteAllButton = this.form.querySelector("button.delete");
  }

  attachEvents() {
    // Cuando se envía el formulario ejecuta el método addTask con el texto introducido
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = this.form.querySelector("input#task");

      if (input.value.length > 0 && input.value.length < 200) {
        this.addTask(input.value);
        input.value = "";
      } else if (input.value.length === 0) {
        window.alert(`Escribe alguna tarea`);
      } else {
        window.alert(`No se admiten tareas con más de 200 caracteres`);
      }
    });

    // Cuando se pulsa el botón de limpiar tareas ejecuta el método cleanTaskList
    this.cleanButton.addEventListener("click", (e) => {
      this.cleanTaskList();
    });

    // Cuando se pulsa el botón de borrar ejecuta el método deleteAllTasks
    this.deleteAllButton.addEventListener("click", (e) => {
      if (
        window.prompt("Escribe BORRAR para eliminar todas las Tasks") ===
        "BORRAR"
      ) {
        this.deleteAllTaks();
      }
    });

    // Evento delegado: cada vez que clico en la lista, si donde clico es en el checkbox,marco la tarea como hecha/pendiente

    this.list.addEventListener("click", (event) => {
      const target = event.target;
      if (target.matches('input[type="checkbox"]')) {
        this.toogleTaskStatus(target.getAttribute("data-index"));
      }
    });
  }

  // Este método añade las tareas que introducimos
  addTask(text) {
    const newTask = {
      text: text,
      done: false,
    };
    this.tasks.unshift(newTask);
    this.sync();
  }

  // Este método borra todas las tareas
  deleteAllTaks() {
    this.tasks = [];
    this.sync();
  }

  // Este método marca la tarea según su index como hecha/pendiente
  toogleTaskStatus(index) {
    const task = this.tasks[index];
    task.done = !task.done;
    this.sync();
  }

  // Este método elimina las tareas marcadas como hechas
  cleanTaskList() {
    const cleanList = this.tasks.filter((task) => !task.done);
    this.tasks = cleanList;
    this.sync();
  }

  // Este método sincroniza la lista actual de tareas con el localStorage
  sync() {
    window.localStorage.setItem(this.keyName, JSON.stringify(this.tasks));
    this.render();
  }

  // Escribe la lista de tareas en el HTML
  render() {
    this.list.innerHTML = "";
    const fragment = document.createDocumentFragment();
    let i = 0;
    for (const task of this.tasks) {
      const li = document.createElement("li");
      const input = document.createElement("input");
      input.setAttribute("type", "checkbox");
      input.setAttribute("data-index", i);

      if (task.done) {
        li.classList.add("done");
        input.setAttribute("checked", true);
      }
      const p = document.createElement("p");
      p.textContent = task.text;
      li.append(input);
      li.append(p);

      fragment.append(li);
      i++;
    }
    this.list.append(fragment);
  }
}
// Instancio la clase
const myTasks = new TaskList(form, list, `stored-tasks`);
myTasks.attachEvents();
