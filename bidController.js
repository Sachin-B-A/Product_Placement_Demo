const Bid = require('../models/Bid');

// Create a new bid
exports.createBid = async (req, res) => {
  const { filmId, bidAmount } = req.body;

  try {
    const bid = new Bid({
      film: filmId,
      advertiser: req.user._id,
      bidAmount,
    });
    await bid.save();

    res.status(201).json(bid);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Get bids for a film
exports.getBids = async (req, res) => {
  try {
    const bids = await Bid.find({ film: req.params.filmId }).populate('advertiser', 'name');
    res.json(bids);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};
