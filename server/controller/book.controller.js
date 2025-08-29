const { Book } = require("../model/book.model");
const handleBookStoreController = async (req, res) => {
  try {
    const body = req.body;
    if (
      !body.BookName ||
      !body.BookTitle ||
      !body.Author ||
      !body.SellingPrice ||
      !body.PublishDate
    ) {
      return res
        .status(400)
        .json({ message: "All field's are not required", Success: false });
    }
    const bookAdd = await Book.create(body);
    return res.status(201).json({
      message: "Data created successfully",
      Success: true,
      Id: bookAdd._id,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message, Success: false });
  }
};

const handleBookListController = async (req, res) => {
  try {
    const bookList = await Book.find({});
    return res
      .status(200)
      .json({
        Message: "All books fetched successfully",
        Success: true,
        TotalCount: bookList.length,
        BookList: bookList,
      });
  } catch (error) {
    return res.status(400).json({ Message: error.message, Success: false });
  }
};

const handleBookDeleteController = async (req, res) => {
  const body = req.body;
  try {
    const deleted = await Book.deleteOne({ _id: body.Id });
    console.log("deleted", deleted);
    if (deleted.acknowledged) {
      return res.json({
        Message: "Book deleted successfully!",
        Success: true,
      });
    }
  } catch (error) {
    return res.status(400).json({ Message: error.message, Success: false });
  }
};

//update data
// const handleBookUpdateController=async(req,res)=>{
//     try{
//         const body=req.body;
//         const updating=await Book.updateOne({
//             _id:body?._id},{$set:body})
//         if(updating?.acknowledged){
//             return res.json({
//                 Message:'Book updated successfully!',
//                 Success:true
//             })
//         }
//     }catch(error){

//     }
// }
const handleBookUpdateController = async (req, res) => {
  try {
    const { Id, ...updateFields } = req.body;   // ✅ Extract Id
    const updating = await Book.updateOne(
      { _id: Id },
      { $set: updateFields }
    );

    if (updating.modifiedCount > 0) {
      return res.json({
        Message: "Book updated successfully!",
        Success: true,
      });
    } else {
      return res.json({
        Message: "No changes made or book not found",
        Success: false,
      });
    }
  } catch (error) {
    return res.status(400).json({ Message: error.message, Success: false });
  }
};

module.exports = { handleBookStoreController, handleBookListController,handleBookDeleteController,handleBookUpdateController };
