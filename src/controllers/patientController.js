const list = require('./patients/list');
const add = require('./patients/add');
module.exports = {
    list, 
    add,
    patologia : require('./patients/patologiaCont')
    
}
   
