const router = require("express").Router();
const { Location, Category, LocationCategory } = require("../../models");

router.get("/", async (req, res) => {
  // find all Category
  try {
    const categoryData = await Category.findAll({});
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  // find a single category by its `id`
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Location }],
    });
    if (!categoryData) {
      res.status(404).json({ message: "No category found with that id!" });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
