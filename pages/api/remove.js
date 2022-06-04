import dbConnect from '../../utils/db.js'
import Task from '../../models/Task.js'

export default async function handler(req, res) {
  if (req.method == 'POST'){
    try{
      await dbConnect()
      const newTask = await Task.findByIdAndDelete(req.body.id)
      res.status(200).json(newTask)
    }catch(e){
      console.log(e)
      res.status(500).json({success: false, message:`Internal Server Error.`})
    }
  }else{
    res.status(405).json({success: false, message:`Cannot ${req.method}`})
  }
}
