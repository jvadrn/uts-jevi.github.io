import User from '../models/usermodels'

export const getUser = async (req, res) => {
  try {
    const response = await User.findAll()
    res.status(200).json(response)
  } catch (err) {
    console.log(err.message)
  }
}
