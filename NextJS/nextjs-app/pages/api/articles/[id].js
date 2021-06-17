import { articles } from '../../../data';

// Graph QL APIS in here today
// Accessible from apis/articles
export default function handler({ query: { id } }, res) {
  const filtered = articles.filter((a) => a.id == id);
  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res.status(404).json({ message: `Article ${id} not found!` });
  }
}
