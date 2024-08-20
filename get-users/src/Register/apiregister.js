const express = require('express');
const router = express.Router();
const connection = require('../../modules/dbconect');


router.get('/', async (req, res) => {
    try {
        const query = 'SELECT * FROM users WHERE role = ?';
        connection.query(query, ['client'], (err, results) => {
            if (err) {
                console.log("ERROR " + err.message);
                return res.status(500).json({ error: err.message });
            }
            if (results.length > 0) {
                res.status(200).json(results);
            } else {
                res.status(404).json({ message: 'No users found with role client' });
            }
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});



module.exports = router;
