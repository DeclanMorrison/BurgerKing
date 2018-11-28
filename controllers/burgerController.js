const express = require('express');
const router = express.Router();
const ORM = require('../config/orm');

const convertToObject = obj => {
  let handlebarsObject = {burgers: []}
  obj.forEach((value, index) => {
    const tempObj = {
      id: value.id,
      burger_name: value.burger_name,
      devoured: value.devoured
    };
    handlebarsObject.burgers.push(tempObj);
  });
  return handlebarsObject;
};

router.get("/", (req, res) => {
  ORM.all(function(data){
    const renderObj = convertToObject(data);
    res.render('index', renderObj);
  });
});

router.get("/devour/:id", (req, res) => {
  ORM.update(req.params.id, function(data){
    ORM.all(function(data){
      const renderObj = convertToObject(data);
      res.render('index', renderObj);
    });
  });
});

router.get("/add/:burgerName", (req, res) => {
  ORM.create(req.params.burgerName, function(data){
    ORM.all(function(data){
      const renderObj = convertToObject(data);
      res.render('index', renderObj);
    });
  });
});

module.exports = router;