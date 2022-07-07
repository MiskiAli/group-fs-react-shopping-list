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

router.post('/', (req, res) => {
    console.log('This is req.body', req.body);
    const item = req.body;
    
    const queryText = `INSERT INTO "items" (name, quantity, unit)
    VALUES ($1, $2, $3);
    `;
    pool.query(queryText, [item.name, item.quantity, item.unit])
        .then((result) => {
        console.log('item added to the DB', item)
        res.sendStatus(201);
    }).catch((error) => {
        console.log('Error making database query', error);
        res.sendStatus(200);
    })
})

module.exports = router;