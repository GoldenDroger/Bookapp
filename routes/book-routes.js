const express=require('express')
const router=express.Router();
const Book=require('../model/Book')
const bookController=require("../controllers/book-controller" )



router.get("/",bookController.getAllBooks);
router.post("/",bookController.addBook);
router.get("/:id",bookController.getBookId)
router.put("/:id",bookController.updateBook)
router.delete("/:id",bookController.deleteById);


module.exports=router;