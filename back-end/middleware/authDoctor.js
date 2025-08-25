import jwt from 'jsonwebtoken'

//Doctor authentication middleware

const authDoctor = async (req,res,next)=>{
  
  try {

    const {dtoken}=req.headers
    
    if(!dtoken){
      return res.status(401).json({success:false,message:'Not Authorized Login Again'})
    }
    const token_decode = jwt.verify(dtoken,process.env.JWT_SECRET)
    // console.log(req.body);
    req.docId=token_decode.id
    
    
    // if(token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD){
    //     return res.status(401).json({success:false,message:'Not Authorized Login Again'})

    // }
    next()
    
  } catch (error) {
    console.log(error)
    res.json({success:false,message:error.message})   
    
  }
}

export default authDoctor