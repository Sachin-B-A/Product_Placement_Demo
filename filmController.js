const Film = require('../models/Film');

// Create a new film
exports.createFilm = async (req, res) => {
  const { title, description, releaseDate, productPlacementOpportunities } = req.body;

  try {
    const film = new Film({
      filmmaker: req.user._id,
      title,
      description,
      releaseDate,
      productPlacementOpportunities,
    });
    await film.save();

    res.status(201).json(film);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Get all films
exports.getFilms = async (req, res) => {
  try {
    const films = await Film.find().populate('filmmaker', 'name');
    res.json(films);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};
