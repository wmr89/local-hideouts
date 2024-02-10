const router = require('express').Router();
const { State, Category, Location, LocationCategory } = require('../models');

// GET all galleries for homepage
router.get('/', async (req, res) => {
  try {
    const stateData = await State.findAll({
        include: [{model: Location, required: true}],
      });
      res.status(200).json(stateData);

    const statesList = stateData.map((states) =>
      states.get({ plain: true })
    );
      res.render('homepage', {
        states,
      });
    } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one state
router.get('/state/:id', async (req, res) => {
  try {
    const stateData = await State.findByPk(req.params.id, {
        include: [{model: Location}],
      });
    const statesList = stateData.get({ plain: true });
    res.render('states', {
      statesList,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one painting
router.get('/painting/:id', async (req, res) => {
  try {
    const dbPaintingData = await Painting.findByPk(req.params.id);

    const painting = dbPaintingData.get({ plain: true });

    res.render('painting', {
      painting,
      // We are not incrementing the 'countVisit' session variable here
      // but simply sending over the current 'countVisit' session variable to be rendered
      countVisit: req.session.countVisit,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;