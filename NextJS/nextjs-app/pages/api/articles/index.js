import { articles } from '../../../data';

// Graph QL APIS in here today
// Accessible from apis/articles
export default function handler(req, res) {
  res.status(200).json(articles);
}
