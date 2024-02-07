const router = require("express").Router();
const withAuth = require('../../utils/auth');
const { Location, Tag, Comment, LocationTag, Category, LocationCategory, State } = require("../../models");

router.get("/", async (req, res) => {
  // find all locations
  try {
    const locationData = await Location.findAll({});
    res.status(200).json(locationData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", withAuth, async (req, res) => {
  // find a single location by its `id`
  try {
    const locationData = await Location.findByPk(req.params.id, {
      include: [{ model: Tag}, 
        {model: Category}, 
        {model: Comment },
        {model: State},
      ],
    });
    if (!locationData) {
      res.status(404).json({ message: "No Location found with that id!" });
      return;
    }
    res.status(200).json(locationData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/:id/comment', withAuth, async (req, res) => {
  try {
    const locationId = req.params.id;
    const newComment = await Comment.create({
      ...req.body,
      user_id: req.session.user_id,
      location_id: locationId,
    });

    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});
module.exports = router;
