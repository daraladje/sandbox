const members = require('../../Members');
const express = require('express');
const uuid = require('uuid');
const router = express.Router();
// Gets all members
router.get('/', (req, res) => res.json(members));

// Get single member
router.get('/:id', (req, res) => {
  const found = members.some((member) => member.id === parseInt(req.params.id));
  if (found) {
    res.json(members.filter((member) => member.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: 'Member not found!' });
  }
});

// Create Member
router.post('/', (req, res) => {
  const newMember = {
    id: uuid.v4(),
    name: req.body.name,
    email: req.body.email,
    status: 'Active',
  };

  if (!newMember.name) {
    return res.status(400).json({ msg: 'Missing Name!' });
  }
  members.push(newMember);
  // res.json(members);
  res.redirect('/');
});

// Update Members
router.put('/:id', (req, res) => {
  const found = members.some((member) => member.id === parseInt(req.params.id));
  if (found) {
    const update = req.body;
    members.forEach((m) => {
      if (m.id === parseInt(req.params.id)) {
        m.name = update.name || m.name;
      }
    });
    res.json({ msg: 'Member was updated' });
  } else {
    res.status(400).json({ msg: 'Member not found!' });
  }
});

// Delete Member
router.delete('/:id', (req, res) => {
  const found = members.some((member) => member.id === parseInt(req.params.id));
  if (found) {
    res.json({
      msg: 'Member Deleted',
      members: members.filter(
        (member) => member.id !== parseInt(req.params.id)
      ),
    });
  } else {
    res.status(400).json({ msg: 'Member not found!' });
  }
});

module.exports = router;
