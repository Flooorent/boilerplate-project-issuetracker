const app = require('./server')

var runner = require('./test-runner');

const port = process.env.PORT || 3000

app.listen(port, function () {
    console.log("Listening on port " + port);

    if(process.env.NODE_ENV === 'test-runner') {
      console.log('Running Tests...');
      
      setTimeout(function () {
        try {
          runner.run();
        } catch(e) {
          var error = e;
            console.log('Tests are not valid:');
            console.log(error);
        }
      }, 3500);
    }
});
  