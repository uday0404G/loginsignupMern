const logisLoggedInin=(req,res,next)=>{
   if(req.body.token==="")return res.send({err:"youmust be login"})
    else{
        jwt.verify(req.cookie.token,"shh")
        req.user=data;
        next()
    }
}