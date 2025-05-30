const express = require('express');
const router = express.Router();
const { getAllMenuCategories,
    getMenuCategoryByid,
    addMenuCategory,
    updateMenuCategory,
    updateCategoriesOrder,
    deleteMenuCategory,
     } = require('../controllers/menucategories');

router.get('/menucategories', getAllMenuCategories)
router.get('/menucategories/:id', getMenuCategoryByid)
router.post('/menucategories', addMenuCategory)
router.put('/menucategories/order', updateCategoriesOrder)
router.put('/menucategories/:id', updateMenuCategory)
router.delete('/menucategories/:id', deleteMenuCategory)

module.exports = router;
