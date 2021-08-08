const wishlist = require("./../models/Wishlist");
const WishlistControllers = {
  CreationWishlist: async (req, res) => {
    const { name } = req.body;
    try {
      if (!name) {
        return res
          .status(400)
          .json({ error: "Plase add name to your Wishlist" });
      }
      const newWishlist = await new wishlist({
        name,
      });
      newWishlist.save().then((result) => {
        res.status(201).json(result);
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: error.message });
    }
  },
  AllWishlist: async (req, res) => {
    await wishlist
      .find()
      .then((wishlist) => {
        console.log(wishlist);
        return res.status(200).json(wishlist);
      })
      .catch((err) => {
        return res.status(404).json({ message: err.message });
      });
  },
};
module.exports = WishlistControllers;
