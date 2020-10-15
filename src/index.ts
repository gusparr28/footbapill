const app = require('./app');
require('./database');

// starting the server
app.listen(app.get('port'), () => {
    console.log('server listening on port', app.get('port'));
});