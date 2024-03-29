const router = require('express').Router();
const withAuth = require('../utils/auth');
const { State, Category, Location, LocationCategory, Tag, LocationTag, User, Comment } = require('../models');

router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll();
    const categories = categoryData.map((category) =>
      category.get({ plain: true }))
    const stateData = await State.findAll({
        include: [{model: Location, required: true}],
      });
    const states = stateData.map((state) =>
      state.get({ plain: true })
    );
      res.render('homepage', {
        states,
        categories,
        logged_in: req.session.logged_in 
      });
    } catch (err) {
    console.log(err);
    //res.status(500).json(err);
  }
});


// GET one state
router.get('/bystate/:id', async (req, res) => {
  try {
    const stateData = await State.findByPk(req.params.id)
    const locationData = await Location.findAll({
      where: {
        state_id: req.params.id,
      }
    });
    const locations = locationData.map((location)=>location.get({ plain: true }));
    const state = stateData.get({ plain: true });
    res.render('bystate', {
      locations,
     state
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//GET one Category
router.get('/bycategory/:id', async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{model: Location, through: LocationCategory}]
    })
    const category = categoryData.get({ plain: true });
    console.log(category);
    res.render('bystate', {
     category,
     locations: category.locations
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/location/:id', async (req, res) => {
  try {
    const locationData = await Location.findByPk(req.params.id, 
      {
      include: [
        { model: Comment, include: [{ model: User,  exclude: ['password']}] },
      ],
    }
    );
    const location = locationData.get({ plain: true });
    res.render('location'
    , {
      ...location,
      logged_in: req.session.logged_in
    }
    );
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.post('location/:id/comment', withAuth, async (req, res) => {
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