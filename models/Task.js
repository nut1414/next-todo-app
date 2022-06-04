import mongoose from 'mongoose'

const taskSchema = new mongoose.Schema({
  name: { type: String, required: true },
  done: { type: Boolean, required: true }
})

export default mongoose.models.Task || mongoose.model('Task',taskSchema)