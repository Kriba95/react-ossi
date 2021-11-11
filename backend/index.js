const express = require('express')
const app = express()
const cors = require('cors');
const database = require('./config/database')
const PORT = process.env.PORT || 3003
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



app.get('/api/data', (req, res) => {
  let sql = 'SELECT * FROM spdata';
  d
  database.query(sql, (err, result) => {
      if (err) {
        res.status(400).send(err);
        return;
      }
      if (result.length) res.json(result);
      else res.json({});
  });
});




app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})