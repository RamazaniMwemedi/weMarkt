import { phones } from '../../../Data/phone'

export default function handler(req, res) {
  res.status(200).json(phones)
}