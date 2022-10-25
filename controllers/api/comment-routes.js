const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

//Get all comments
router.get('/', (req, res) => {
    Comment.findAll({})
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//Create a comment
router.post('/', withAuth, (req, res) => {
    //Check the session
    if (req.session) {
        Comment.create({
            comment.text: req.body.comment_text,
            post_id: req.body.post_id,
            //use the id from the session
            user_id: req.session.user_id,
        })
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    }
});
//Update any comment
router.put('/', withAuth, (req, res) => {
    Comment.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    .then(dbCommentData => {
        if(!dbCommentData){
            res.status(404).json({ message: 'No comment found with this id' });
            return;
        }
        return res.json(dbCommentData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//Delete any comment
router.delete('/:id', withAuth, (req, res) => {
    Comment.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbCommentData => {
        if(!dbCommentData) {
            res.status(404).json({ message: 'No comment found with this id' });
            return;
        }
        res.json(dbCommentData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;
