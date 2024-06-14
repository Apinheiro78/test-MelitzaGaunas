const {leerJSON}= require("../../data")

module.exports = (req, res)=> {

    const patients = leerJSON('patient.json');

    console.log(patients);

    return res.render('patologiaList')
}
