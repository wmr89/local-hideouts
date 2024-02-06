const router = require('express').Router();
const { State, Location} = require('../../models');

router.get('/', async (req, res) => {
    // find all states
    try {
      const stateData = await State.findAll({
        include: [{model: Location, required: true}],
      });
      res.status(200).json(stateData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/:id', async (req, res) => {
    // find a single state by its `id`
    try {
      const stateData = await State.findByPk(req.params.id, {
        include: [{model: Location}],
      });
      if (!stateData) {
        res.status(404).strictContentLength({ message: 'No State found with that id!'});
        return;
      }
      res.status(200).json(stateData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;