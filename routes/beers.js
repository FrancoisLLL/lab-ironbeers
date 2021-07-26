const express = require("express");
const router = express.Router();
const PunkAPIWrapper = require("punkapi-javascript-wrapper");
const punkAPI = new PunkAPIWrapper();


router.get("/beers", (req, res, next) => {
    punkAPI
        .getBeers()
        .then(beersFromApi => {
            console.log('Beers from the database: ', beersFromApi)
            res.render("beers.hbs", {
                beers: beersFromApi,
            })

        })
        .catch(error => console.log(error))
})


router.get("/random-beer", (req, res, next) => {
    punkAPI
        .getRandom()
        .then(randomBeer => {
            console.log('Random beer: ', randomBeer)
            res.render("random-beer.hbs", {
                beer: randomBeer[0],
            })

        })
        .catch(error => console.log(error))
})




module.exports = router;