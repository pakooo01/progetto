const {getProduct, getFavoriteProducts, addToFavorites, removeFavoriteProduct} = require('../controllers/productController')

const router=require('express').Router();

router.get('/getAllProducts', getProduct)
router.get('/getFavoriteProducts/:userId', getFavoriteProducts)
router.post('/addToFavorite/:userId/:productId', addToFavorites)
router.delete('/removeFavoriteProduct/:userId/:productId', removeFavoriteProduct);

module.exports = router;