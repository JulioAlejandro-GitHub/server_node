
const http = require('http');



http.createServer( (request, response) => {

    console.log(request);

    /*
    //archivo csv
    response.setHeader('Content-Disposition','attachment; filename=lista.csv');
    response.writeHead(200, {'Content-Type':'application/csv'});
    response.write('id, nombre\n'); response.write('1, nombre 1\n');
    */
    response.end();

})
.listen(8080);