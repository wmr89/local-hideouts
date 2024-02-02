const router = require('express').Router();
const { Location, Tag, Comment, Location_tag} = require('../../models');

router.get('/', async (req, res) => {
    // find all locations
    try {
      const locationData = await Location.findAll({});
      res.status(200).json(locationData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/:id', async (req, res) => {
    // find a single location by its `id`
    try {
      const locationData = await Location.findByPk(req.params.id, {
        include: [{model: Tag, model: Comment}],
      });
      if (!locationData) {
        res.status(404).strictContentLength({ message: 'No State found with that id!'});
        return;
      }
      res.status(200).json(locationData);
    } catch (err) {
      res.status(500).json(err);
    }
  });