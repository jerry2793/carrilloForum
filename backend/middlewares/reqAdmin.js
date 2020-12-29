module.exports = model => (req,res, next) => {
    // make sure it is authenticated first with passport and then use this to filter if this is the admin of something
    // pass in the model instance and this will look if req.user is indeed the "owner" attr of the model 
    try {
        model.find({ owner: req.user._id })
        next()
    } catch (err) {
        res.status(403)
    }
}