const express = require('express')
const router = express.Router()
const {posts } = require('../models/model.js')

router.post('/feed', async (request,response)=>{

    const post = new posts({
        name : request.body.name,
        title : request.body.title,
        data : request.body.data,
           
    })

    post.save()
    .then(data => {
        response.json(data)
    })
    .catch(error => {
        response.json(error)
    })
} )


router.get('/feed', async (req,res)=>{

    try {
        const pos = await posts.find();
        res.send(pos);
      } 
      catch (e) {
        res.status(400).send(e);
      }
       
    })

// router.delete('/newcentre/:id', async (req, res) => {
//   const _id = req.params.id;
//   try {
//     const cent = await cen.findByIdAndDelete(_id);
//     return !cent ? res.sendStatus(404) : res.send(cent);
//   } catch (e) {
//     return res.sendStatus(400);
//   }
// });





module.exports = router;

