//variable
const formAddPatient = document.querySelector("#addForm");
const listPatient = document.querySelector("#tableBody");

let patients = [];

eventListerns();

function eventListerns() {
  //readJson();
  formAddPatient.addEventListener("submit", addPatient);
  document.addEventListener("DOMContentLoaded", () => {
    patients = JSON.parse(localStorage.getItem("patients")) || [];

    crearHTML();
    
  });
}

function addPatient(e) {
  e.preventDefault();

  const nombre = document.querySelector("#nombre").value;
  if (nombre === "") {
    errorUsuario("Elcampo no debe ir vacío");
    return;
  }
  const apellido = document.querySelector("#apellido").value;
  if (apellido === "") {
    errorUsuario("Elcampo no debe ir vacío");
    return;
  }
  const edad = document.querySelector("#edad").value;
  const patologia = document.querySelector("#patologia").value; 
  const statusp = document.querySelector("#statusp").value;
  
  const patientsObject = {
    nombre: nombre,
    apellido: apellido,
    edad: edad,
    patologia: patologia,
    status: statusp,
  };
  patients = [...patients, patientsObject];


  crearHTML();

 
  formAddPatient.reset();
}

function errorUsuario(error) {
  const notaError = document.createElement("p");
  notaError.textContent = error;
  notaError.classList.add("alert", "alert-danger");

  formAddPatient.appendChild(notaError);
  setTimeout(() => {
    notaError.remove();
  }, 2500);
}

function crearHTML() { 
  listPatient.innerHTML = "";  
  patients.forEach((patient, index) => {
    
    const row = document.createElement("tr");

    const nameParagraph = document.createElement("td");   
    const lastNameParagrah = document.createElement("td");
    const ageParagraph = document.createElement("td");
    const patologiaParagraph = document.createElement("td");
    const statuspParagraph = document.createElement("td");

    nameParagraph.textContent = `${patient.nombre}`;
    lastNameParagrah.textContent = `${patient.apellido}`;
    ageParagraph.textContent = `${patient.edad}`; 
    patologiaParagraph.textContent = `${patient.patologia}`;
    statuspParagraph.textContent = `${patient.status}`;

    const editButton = document.createElement("button");
    editButton.classList.add("button", "button--secondary");
    editButton.textContent ="Editar";

    editButton.addEventListener('click', function(){
      editPatient(index);
    })
   

    row.appendChild(nameParagraph);
    row.appendChild(lastNameParagrah);
    row.appendChild(ageParagraph);
    row.appendChild(patologiaParagraph);
    row.appendChild(statuspParagraph);

    listPatient.appendChild(row);

    function editPatient(index) {
      const item = patients[index];
      nombre.value= item.nombre;
      apellido.value= item.apellido;
      edad.value= item.edad;
      patologia.value=item.patologia;
      statusp.value= item.status;
      patients.splice(index, 1);
      sincronizarDATOS();
      crearHTML();  
    }
    
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("btn", "btn-danger");
    deleteButton.textContent = "Eliminar";

    
    deleteButton.addEventListener("click", () => {
     
      const index = patients.findIndex(
        (p) => p.nombre === patient.nombre && p.apellido === patient.apellido
      );   
      patients.splice(index, 1);
     
      crearHTML();
     
      //-----ojo lo borre xq lo copie arriba y no elimine este
      /*const deleteButton = document.createElement("button");
      deleteButton.classList.add("btn", "btn-danger");
      deleteButton.textContent = "Eliminar";*/
    });

    row.appendChild(editButton);
    row.appendChild(deleteButton);
    
  });
  
  sincronizarDATOS();
}

function sincronizarDATOS() {
  localStorage.setItem("patients", JSON.stringify(patients));
}

/*function readJson() {
  fetch("patient.json")
    .then((response) => response.json())
    .then((data) => {
      localStorage.setItem("patients", JSON.stringify(data.patients));

    })
    .catch((error) => {
      console.error("Error:", error);
    });
}*/
