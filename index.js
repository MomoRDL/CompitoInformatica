const express = require('express');
const app = express();
const port = 3000;
//Loads the handlebars module
const handlebars = require('express-handlebars');
//instead of app.set('view engine', 'handlebars'); 
app.set('view engine', 'hbs');
//instead of app.engine('handlebars', handlebars({
    app.engine('hbs', handlebars({
        layoutsDir: __dirname + '/views/layouts',
        extname: 'hbs',
        defaultLayout: 'planB',
        //new configuration parameter
        partialsDir: __dirname + '/views/partials/'
        }));
app.use(express.static('public'))

fakeApi = () => {
    return [
      {
        name: 'Katarina',
        lane: 'midlaner'
      },
      {
        name: 'Jayce',
        lane: 'toplaner'
      },
      {
        name: 'Heimerdinger',
        lane: 'toplaner'
      },
      {
        name: 'Zed',
        lane: 'midlaner'
      },
      {
        name: 'Azir',
        lane: 'midlaner'
      }
    ];
  }
  app.get('/', (req, res) => {
  res.render('main', {layout: 'index', suggestedChamps: fakeApi(), listExists: true});
  });

 app.get('/ciao",(req,res)=>{
    const query = req.query
    const headers = req.headers.["User-Agent"]
         console.log(headers)
    res.send("ciao "+ req.query.name+"<br/>" + "il tuo user agent è"  +headers + req.query.surname+"<br/> + req.query.nation+"<br/>"  "  )
  });


app.listen(port, () => console.log(`App listening to port ${port}`));
