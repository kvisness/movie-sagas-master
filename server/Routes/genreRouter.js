const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
    // return all categories
    const queryText = `SELECT "movies"."id", array_agg("genres"."name") AS "movie_genres" FROM "movies"
                    JOIN "junction" ON "movies"."id" = "junction"."movie_id"
                    JOIN "genres" ON "junction"."genre_id" = "genres"."id"
                    GROUP BY "movies"."id";`;
    pool.query(queryText)
        .then((result) => {
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error on query ${error}`);
            res.sendStatus(500);
        });
});

module.exports = router;
