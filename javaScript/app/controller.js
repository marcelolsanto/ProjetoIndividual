const express = require('express');
const { ArduinoDataTemp } = require('./newserial')
const { ArduinoDataHumidity } = require('./serialHumidity')
const { ArduinoDataSwitch } = require('./serialSwitch')
const { ArduinoDataLuminosity} = require('./serialLuminosidity')
const db = require('./database')
const router = express.Router();


router.get('/index', (request, response, next) => {

    router.post('/sendData', (request, response) => {
    temperature = ArduinoDataTemp.List[ArduinoDataTemp.List.length -1];
    //luminosidade = ArduinoDataLuminosity.List[ArduinoDataLuminosity.List.length -1]

    var sql = "INSERT INTO clientes (cpf,status_cpf,nome_cliente,sobrenome_cliente,profissao,contato_celular,contato_residencial,contato_escritorio) VALUES ('temperatura',?)";

    db.query(sql,temperature, function(err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
      });

    response.sendStatus(200);
    })

});

module.exports = router;