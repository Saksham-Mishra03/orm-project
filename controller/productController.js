const db = require("../models");

// create main model
const Products = db.products;

// create product
const addProducts = async (req, res) => {
  // validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // create a product
  let productInfo = {
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
    published: req.body.published ? req.body.published : false,
  };

  // save Product in the database
  try {
    const product = await Products.create(productInfo);
    res.status(200).send(product);
    console.log(product);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Error occurred while creating the Product",
    });
  }
};

// get all products
const getAllProducts = async (req, res) => {
  // let products = await Product.findAll({
  //     attributes: [
  //         'title',
  //         'price'
  //     ]
  // });

  let products = await Products.findAll({});
  res.status(200).send(products);
  console.log(products);
};

// get single products
const getSingleProduct = async (req, res) => {
  const id = req.params.id;
  const product = await Products.findOne({ where: { id: id } });
  res.status(200).send(product);
};

// update a product
const updateProduct = async (req, res) => {
  let id = req.params.id;
  const product = await Products.update(req.body, { where: { id: id } });
  res.status(200).send('Product is Updated');
};

// delete a product
const deleteProduct = async (req, res) => {
  let id = req.params.id;
  await Products.destroy({ where: { id: id } });
  res.status(200).send("Product is deleted");
};

// get published product
const getPublishedProduct = async (req, res) => {
  const products = await Products.findAll({ where: { published: true } });
  res.status(200).send(products);
};

module.exports = {
  addProducts,
  getAllProducts,
  getPublishedProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};