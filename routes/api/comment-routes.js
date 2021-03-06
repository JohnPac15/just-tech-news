const router = require("express").Router();
const sequelize = require("../../config/connection");
const { Comment, User } = require("../../models");
const { rawAttributes, increment } = require("../../models/Comment");

router.get("/", (req, res) => {
    Comment.findAll({
        
    })
    .then(dbCommentData => res.json(dbCommentData))
});

router.post("/", (req, res) => {
  Comment.create({
    comment_text: req.body.comment_text,
    user_id: req.body.user_id,
    post_id: req.body.post_id,
  })
    .then((dbCommentData) => res.json(dbCommentData))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.delete("/:id", (req, res) => {
    Comment.destroy({
        where: {
            id: req.params.id,
        }
    })
    .then(dbCommentData => res.json(dbCommentData))
});

module.exports = router;
