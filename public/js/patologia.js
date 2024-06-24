document.addEventListener("DOMContentLoaded", () => {
    const selectPatologia = document.querySelector("#selectPatologia");
    const listPatient = document.querySelector("#listPatient");

    selectPatologia.addEventListener("change", () => {
        const selectedPatologia = selectPatologia.value;

        const patients = JSON.parse(localStorage.getItem("patients")) || [];

        const filteredPatients = patients.filter(patient => patient.patologia === selectedPatologia || selectedPatologia === "");

        renderPatients(filteredPatients);
    });

    function renderPatients(patients) {
     
        listPatient.innerHTML = "";

        patients.forEach(patient => {
      
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

            /*const ageParagraph = document.createElement("p");
            ageParagraph.textContent = `Edad: ${patient.edad}`;*/
            const patologiaParagraph = document.createElement("p");
            patologiaParagraph.textContent = `Patología: ${patient.patologia}`;
            const statusParagraph = document.createElement("p");
            statusParagraph.textContent = `Estado: ${patient.status}`;

            patientDetails.appendChild(fullName);
            //patientDetails.appendChild(ageParagraph);
            patientDetails.appendChild(patologiaParagraph);
            patientDetails.appendChild(statusParagraph);

            listItem.appendChild(patientDetails);

            listPatient.appendChild(listItem);
        });
    }

    renderPatients(JSON.parse(localStorage.getItem("patients")) || []);
});

