const productController = require("../controller/productController");

const router = require("express").Router();

router.post('/', productController.addProducts);
router.get('/', productController.getAllProducts);
router.get("/published", productController.getPublishedProduct);
router.get("/:id", productController.getSingleProduct);
router.put("/:id", productController.updateProduct);
router.delete("/:id", productController.deleteProduct);

module.exports = router;