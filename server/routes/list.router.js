const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...
router.get('/', (req, res) => {
    // !!!!!!!Will have to change later to combine Quantity and UNIT !!!!!!!!!
    const queryText = `SELECT * FROM "items" ORDER BY "name";`;
    pool.query(queryText)
        .then((result) => {
            console.log('Heres what your getting from the db:', result);
            res.send(result.rows);    
        })
        .catch((error) => {
            console.log(`ERROR IN ROUTER GET REQUEST QUERY: ${queryText}`, error);
            res.sendStatus(500);
    })
})

module.exports = router;