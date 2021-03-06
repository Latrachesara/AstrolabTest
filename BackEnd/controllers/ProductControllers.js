const Product = require("./../models/Product");

const ProductControllers = {
  createProduct: async (req, res) => {
    console.log(req.file);
    const { name, Price, currency, description, status, wishlist } = req.body;
    const product = new Product({
      name,
      Price,
      currency,
      description,
      status,
      wishlist,
      createdBy: req.user,
      image: req.file.path
    });
    await product
      .save()
      .then((product) => {
        console.log(product);
        return res.status(201).json(product);
      })
      .catch((err) => {
        console.log(err);
        return res.status(400).json({ message: err.message });
      });
  },
  getProductByWishListId: async (req, res) => {
    const id = req.params.id;
    Product.find({ wishlist: id })
      .then((products) => {
        return res.status(200).json(products);
      })
      .catch((err) => {
        return res.status(400).json({ message: err.message });
      });
  },
  getAllProduct: async (req, res) => {
    await Product.find({ createdBy: req.user })
      .then((products) => {
        return res.status(200).json(products);
      })
      .catch((err) => {
        return res.status(404).json({ mesage: err.message });
      });
  },
  getProductById: async (req, res) => {
    await Product.findById(req.params.id)
      .then((Product) => {
        return res.status(200).json(Product);
      })
      .catch((err) => {
        return res.status(404).json({ mesage: err.message });
      });
  },
  deleteProduct: async (req, res) => {
    await Product.findByIdAndDelete(req.params.id)
      .then((data) => {
        if (!data) {
          return res.status(404).json({ mesage: err.message });
        } else {
          return res
            .status(204)
            .json({ message: " product deleted successfully" });
        }
      })
      .catch((err) => {
        return res.status(400).json({ mesage: err.message });
      });
  },
  updateProduct: async (req, res) => {
    if (!req.body) {
      return res.status(400).json({ mesage: "data is empty" });
    }
    if (req.file) {
      const { name, Price, currency, description, status, wishlist } = req.body;
      await Product.findByIdAndUpdate(
        req.params.id,
        {
          name,
          Price,
          currency,
          description,
          status,
          wishlist,
          createdBy: req.user,
          image: req.file.path
        },
        {
          new: true
        }
      )
        .then((data) => {
          return res.json(data);
        })
        .catch((err) => {
          return res.status(400).json({ mesage: err.message });
        });
    } else {
      await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true
      })
        .then((data) => {
          return res.json(data);
        })
        .catch((err) => {
          return res.status(400).json({ mesage: err.message });
        });
    }
  }
};

module.exports = ProductControllers;