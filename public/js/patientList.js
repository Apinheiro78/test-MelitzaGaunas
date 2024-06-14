document.addEventListener("DOMContentLoaded", () => {
    const listPatient = document.querySelector("#listPatient");

    const patients = [
        { apellido: "Perez", nombre: "Pedro", edad: 45, Patologia: "Hipertensión", status: "Estable" },
        { apellido: "González", nombre: "María", Patologia: "Diabetes Tipo 2", status: "Estable" },
        { apellido: "Rodriguez", nombre: "Carlos", edad: 29, Patologia: "Asma", status: "Controlado" },
        { apellido: "Martínez", nombre: "Ana", edad: 50, Patologia: "Cardiopatía", status: "Crítico" },
        { apellido: "Fernández", nombre: "Luis", edad: 65,  Status: "Estable" },
        { apellido: "López", nombre: "Sofía", edad: 23, Patologia: "Alergias", status: "Controlado" },
        { apellido: "Ramirez", nombre: "Miguel", edad: 38, Patologia: "Migrañas", status: "Estable" },
        { apellido: "Torres", nombre: "Isabel", edad: 27, Patologia: "Hipotiroidismo", status: "Controlado" },
        { apellido: "Díaz", nombre: "Jorge", edad: 55, Patologia: "Cáncer de Piel", status: "Tratamiento" },
        { apellido: "Hernández", nombre: "Laura", edad: 42, Patologia: "Obesidad", status: "Estable" }
    ];

    function renderPatients(patients) {
        
        listPatient.innerHTML = "";

        patients.forEach(patient => {
          
            const listItem = document.createElement("li");
            listItem.classList.add("list-group-item");

            const lastNameLink = document.createElement("a");
            lastNameLink.href = "#"; 
            
            lastNameLink.textContent = patient.apellido + ", " + patient.nombre;

            lastNameLink.addEventListener("click", () => {
                showPatientDetail(patient);
            });

          
            listItem.appendChild(lastNameLink);

            listPatient.appendChild(listItem);
        });
    }

    function showPatientDetail(patient) {
        
        console.log("Detalles del paciente:", patient);
        alert(`Detalles del paciente:\nNombre: ${patient.nombre}\nApellido: ${patient.apellido}\nEdad: ${patient.edad}\nStatus: ${patient.status}`);
    }

    renderPatients(patients);
});
