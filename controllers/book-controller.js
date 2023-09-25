const Book=require('../model/Book')

//-------------------------------------------------------------------
const getAllBooks=async (req,res,next)=>{
    let books;
    try{
        books=await Book.find();

    }catch(err){
            console.log(err);
    }

    if(!books)
    {
        return res.status(404).json({message:"no product found"})
    }
    return res.status(200).json({books})
}

// -------------------------------------------------------------------------------

const getBookId=async(req,res,next)=>{
    const id=req.params.id;
    let book;
    try{
        book=await Book.findById(id);
    }catch(err){
        console.log(err);
    }
    if(!book){
        return res.status(404).json({message:"No book found"})
    }
    return res.status(200).json({book});

}


// -------------------------------------------------------------------------------

const addBook=async(req,res,next)=>{
    let book;
    const {name,author,description,price,available,image}=req.body;
    try{
            book=new Book(
                {
                name,
                author,
                description,
                price,
                available,
                image
                }
            );
            await book.save();

        }catch(err){
            console.log(err);
        }
    
        if(!book){
            return res.status(404).json({message:"unable to add"})
        }
        return res.status(202).json({book});
    }




// ----------------------------------------------------------------------------
const updateBook=async(req,res,next)=>{
    const id=req.params.id;
    const {name,author,description,price,available,image}=req.body;
    let book;
    try{
        book=Book.findByIdAndUpdate(id,{
            name,
            author,
            description,
            price,
            available,
            image
    })
    book=await book.save();
    }catch(err){
        console.log(err);
    }
    if(!book){
        return res.status(404).json({message:"Unable to update by this id"})
    }
    return res.status(200).json({book});
}
    
// -------------------------------------------------------------------------------------
const deleteById=async(req,res,next)=>{
    const id=req.params.id;
    let book;
    try{
        book=await Book.findByIdAndRemove(id);
    }catch(err){
        console.log(err);
    }
    if(!book){
        return res.status(404).json({message:"Unable to delete by this ID"})
    }
    return res.status(200).json({ message: "Product Successfully Deleted" });
}

exports.getAllBooks=getAllBooks;
exports.addBook=addBook;
exports.getBookId=getBookId;
exports.updateBook=updateBook;
exports.deleteById=deleteById;

