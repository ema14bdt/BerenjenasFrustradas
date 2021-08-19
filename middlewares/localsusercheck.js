module.exports = (req,res,next) => {
    if(req.session.usuarios){
        res.locals.usuarios = req.session.usuarios
    }
    next()
}
