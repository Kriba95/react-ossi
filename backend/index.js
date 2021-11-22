const express = require('express')
const app = express()
const cors = require('cors');
const database = require('./config/database')
const PORT = process.env.PORT || 5005
//

database.connect((err) => {
    if (err) throw err;
}); 

app.use(cors()); //<-- CROSS ORIGIN


// EXPRESS TO JSON DATA
app.use(express.json());

app.use(express.urlencoded({
    extended: true
})); 

 app.post('/api/haku', (req, res) => {

  let post = req.body;
   console.log(post);
  
  
  
  //  SELECT count(*) FROM spdata 
  //  WHERE categoryNames LIKE :categoryNames
  
  //  SELECT * FROM spdata 
  //  WHERE categoryNames LIKE :categoryNames
  //  LIMIT $starting_limit,$perPage
  
  let sql = 'SELECT * FROM ossi_db.projektit WHERE prj_nimi REGEXP "' + post.haku + '"';
  
  database.query(sql, (err, result) => {
      if (err) {
        res.status(400).send(err);
      }
      if (result.length) res.json(result);
      else res.send(json(result));
      // console.log(result);

  });
});

app.get('/api/projekts', (req, res) => {
  let sql = 'SELECT * FROM projektit';
  
  database.query(sql, (err, result) => {
      if (err) {
        res.status(400).send(err);
        return;
      }
      if (result.length) res.json(result);
      else  res.send({});
  });
});




app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})