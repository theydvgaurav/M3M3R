const express = require('express')
const router = express.Router()
const { posts } = require('../models/model.js')

router.post('/feed', async (request, response) => {

  const post = new posts({
    name: request.body.name,
    title: request.body.title,
    data: request.body.data,

  })

  post.save()
    .then(data => {
      response.json(data)
    })
    .catch(error => {
      response.json(error)
    })
})


router.get('/feed', async (req, res) => {

  try {
    const pos = await posts.find();
    res.send(pos);
  }
  catch (e) {
    res.status(400).send(e);
  }

})

router.get('/feed/:id', async (req, res) => {
  const _id = req.params.id;
  try {
    const pos = await posts.findById(_id);
    res.send(pos);
  }
  catch (e) {
    res.status(400).send(e);
  }

})

router.delete('/feed/:id', async (req, res) => {
  const _id = req.params.id;
  try {
    const item = await posts.findByIdAndDelete(_id);
    return !item ? res.sendStatus(404) : res.send(item);
  } catch (e) {
    return res.sendStatus(400);
  }
});

router.patch("/feed/:id", async (req, res) => {
  const _id = req.params.id;

  try {
    const pos = await posts
      .findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then((meme) => {
        if (!meme) {
          return res.status(404).send();
        }
        res.send(meme);
      });
    return !pos ? res.sendStatus(404) : res.send(pos);
  } catch (e) {
    res.status(400).send(e);
  }
});




module.exports = router;


