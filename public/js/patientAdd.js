//variable
const formAddPatient = document.querySelector("#addForm");
const listPatient = document.querySelector("#listPatient");

let patients = [];

eventListerns();

function eventListerns() {
  readJson();
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
  const status = document.querySelector("#status").value;
  
  const patientsObject = {
    nombre: nombre,
    apellido: apellido,
    edad: edad,
    patologia: patologia,
    status: status,
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
  
  patients.forEach((patient) => {
    
    const listItem = document.createElement("li");
    listItem.classList.add("list-group-item");

    const patientDetails = document.createElement("div");
    patientDetails.classList.add(
      "d-flex",
      "justify-content-between",
      "align-items-center"
    );

    const fullName = document.createElement("h5");
    fullName.textContent = `${patient.nombre} ${patient.apellido}`;


    const ageParagraph = document.createElement("p");
    ageParagraph.textContent = `${patient.edad}`;
    const patologiaParagraph = document.createElement("p");
    patologiaParagraph.textContent = `${patient.patologia}`;
    const statusParagraph = document.createElement("p");
    statusParagraph.textContent = `${patient.status}`;

    patientDetails.appendChild(fullName);
    patientDetails.appendChild(ageParagraph);
    patientDetails.appendChild(patologiaParagraph);
    patientDetails.appendChild(statusParagraph);

    
    listItem.appendChild(patientDetails);

  
    listPatient.appendChild(listItem);
    
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("btn", "btn-danger");
    deleteButton.textContent = "Eliminar";

    
    deleteButton.addEventListener("click", () => {
     
      const index = patients.findIndex(
        (p) => p.nombre === patient.nombre && p.apellido === patient.apellido
      );
   
      patients.splice(index, 1);
     
      crearHTML();
     
      const deleteButton = document.createElement("button");
      deleteButton.classList.add("btn", "btn-danger");
      deleteButton.textContent = "Eliminar";
    });

    // Agregar el nombre y el botón de eliminar al contenedor de detalles
    
    patientDetails.appendChild(deleteButton);
  });
  sincronizarDATOS();
}

function sincronizarDATOS() {
  localStorage.setItem("patients", JSON.stringify(patients));
}


function readJson() {
  fetch("patient.json")
    .then((response) => response.json())
    .then((data) => {
      localStorage.setItem("patients", JSON.stringify(data.patients));

    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
