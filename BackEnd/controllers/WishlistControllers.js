const {
  findByIdAndDelete,
  findByIdAndUpdate
} = require("./../models/Wishlist");
const wishlist = require("./../models/Wishlist");
const Product = require("./../models/Product");
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
        createdBy: req.user
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
      .find({ createdBy: req.user })
      .then((wishlist) => {
        console.log(wishlist);
        return res.status(200).json(wishlist);
      })
      .catch((err) => {
        return res.status(404).json({ message: err.message });
      });
  },
  DeleteWishList: async (req, res) => {
    console.log(req.params.id);
    await wishlist.findByIdAndDelete(req.params.id).then(async () => {
      await Product.deleteMany({ wishlist: req.params.id }).then((rt) => {
        console.log(rt);
      });
      return res.status(200).json({ message: "Wish List Deleted !" });
    });
  },
  updateWishList: async (req, res) => {
    await wishlist
      .findByIdAndUpdate(req.params.id, { name: req.body.name }, { new: true })
      .then((product) => {
        console.log(product);
        return res.json(product);
      })
      .catch((err) => {
        return res.status(400).json({ message: "Wish list doesn't updated !" });
      });
  }
};
module.exports = WishlistControllers;