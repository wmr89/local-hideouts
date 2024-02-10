const router = require('express').Router();
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
    const categoryData = await Category.findByPk(req.params.id)
    const locationCategoryData = LocationCategory.findAll({
      where: {
        category_id: req.params.id,
      }
    });
    const locationCategories = locationCategoryData.get({ plain: true });

    const locationData = await Location.findAll({
      where: {
        location_id: locationCategories.location_id,
      }
    });
    const locations = locationData.map((location)=>location.get({ plain: true }));
    const category = categoryData.get({ plain: true });
    res.render('bystate', {
      locations,
     category
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

// router.get("/location/:id", async (req, res) => {
//   // find a single location by its `id`
//   try {
//     const locationData = await Location.findByPk(req.params.id, {
//       include: [{ model: Tag}, 
//         {model: Category}, 
//         {
//           model: Comment, 
//           include: [ {model:User }],
//         },
//         {model: State},
//       ],
//     });
//     if (!locationData) {
//       res.status(404).json({ message: "No Location found with that id!" });
//       return;
//     }
//     res.status(200).json(locationData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});


// // GET one painting
// router.get('/painting/:id', async (req, res) => {
//   try {
//     const dbPaintingData = await Painting.findByPk(req.params.id);

//     const painting = dbPaintingData.get({ plain: true });

//     res.render('painting', {
//       painting,
//       // We are not incrementing the 'countVisit' session variable here
//       // but simply sending over the current 'countVisit' session variable to be rendered
//       countVisit: req.session.countVisit,
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

module.exports = router;