const axios = require("axios");
const router = require("express").Router();

request.get({
    url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
    qs: {
      'api-key': "207bf67506434fe6b2f63dd08c39bd41",
      'q': "barack obama",
      'begin_date': "20020101",
      'end_date': "20031231",
      'page': 5
    },
  }, function(err, response, body) {
    body = JSON.parse(body);
    console.log(body);
  })

router.get("/recipes", (req, res) => {
  axios
    .get("http://www.recipepuppy.com/api/", { params: req.query })
    .then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));
});

module.exports = router;