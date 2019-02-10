// Required Dependencies 
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Load the Post Model
const Post = require('../../models/Post');

// Load the Profile Model
const Profile = require('../../models/Profile');

// Route:       GET api/posts/test
// Description: Tests post route
// Access:      Public
router.get('/test', (req, res) => res.json({ msg: "Posts works just fine" }));

// Route:       GET api/posts
// Description: Get posts 
// Access:      Public
router.get('/', (req, res) => {
    // Find all the posts
    Post.find().sort({ date: - 1 })
        .then(posts => res.json(posts))
        .catch(err => res.status(404).json({ nopostsfound: 'No posts found'}));
});

// Route:       GET api/posts/:id
// Description: Get posts by the user id 
// Access:      Public
router.get('/:id', (req, res) => {
    Post.findById(req.params.id)
        .then(post => res.json(post))
        .catch(err =>
            res.status(404).json({ nopostfound: 'No post found by that id'})
        );
});

// Route:       Post api/posts
// Description: Create a post by user
// Access:      Private
router.post('/', passport.authenticate('jwt', { session: false }), (req,res) => {
    // An object to handle errors in the post
    const { errors, isValid } = validatePostInput(req.body);

    // Check validation if any errors are present send the correct response
    if (!isValid) {
        return res.status(400).json(errors);
    }

    // Build the post object for newPost
    const newPost = new Post({
        text: req.body.text,
        name: req.body.name,
        avatar: req.body.avatar,
        user: req.user.id
    });

    // Save the newPost into the database
    newPost.save().then(post => res.json(post));
});

// Route:       Delete api/posts/:id
// Description: Delete posts by the user id 
// Access:      Private
router.delete('/:id', passport.authenticate('jwt', { session: false }), (req, res ) => {
    // Find the profile by the user id and then remove the post
    Profile.findOne({ user: req.user.id }).then(profile => {
        Post.findById(req.params.id).then(post => {
            if (post.user.toString() !== req.user.id) {
                return res.status(401).json({ notauthorized: 'User not authorized'});
            }
            // Removes the post
            post.remove().then(() => res.json({ success: true }));
        })
        .catch(err => res.status(404).json({ postnofound: 'No post found' }));
    });
});

// Route:       Post api/posts/like/:id
// Description: Like posts by the user id 
// Access:      Private
router.post('/like/:id', passport.authenticate('jwt', {session: false }), (req, res) => {
    // Find the profile by user id and like the post 
    Profile.findOne({ user: req.user.id }).then(profile => {
        Post.findById( req.params.id).then(post => {
            if (post.likes.filter(like => like.user.toString() ===  req.user.id).length > 0) {
                return res.status(400).json({ alreadyliked: 'User already liked this post' });
            }
  
            // Add user id to the likes array for certain posts
            post.likes.unshift({ user: req.user.id });
            
            // Save the post changes for the user id
            post.save().then(post => res.json(post));
        })
        .catch(err => res.status(404).json({ postnotfound: 'No post found' }));
    });
});

// Route:       Post api/posts/unlike/:id
// Description: Unlike a posts by the user id 
// Access:      Private
router.post('/unlike/:id', passport.authenticate('jwt', { session: false }),(req, res) => {
    // Find the post a user likes and unlike that post if they change their mind
    Profile.findOne({ user: req.user.id }).then(profile => {
        Post.findById(req.params.id).then(post => {
            if (post.likes.filter(like => like.user.toString() === req.user.id).length === 0) {
              return res.status(400).json({ notliked: 'You have not yet liked this post' });
            }
  
            // Remove the index
            const removeIndex = post.likes.map(item => item.user.toString()).indexOf(req.user.id);
  
            // Splice the liked post out of array
            post.likes.splice(removeIndex, 1);
  
            // Save the changes to the post profile
            post.save().then(post => res.json(post));
        })
        .catch(err => res.status(404).json({ postnotfound: 'No post found' }));
    });
});

// Route:       Post api/posts/comment/:id
// Description: Add comments to a posts by the user id 
// Access:      Private
router.post('/comment/:id',passport.authenticate('jwt', { session: false }),(req, res) => {
    // An object to handle the errors in post 
    const { errors, isValid } = validatePostInput(req.body);
  
    // Check validation if there are any errors post the correct error
    if (!isValid) {
        return res.status(400).json(errors);
    }
    
    // Find the post by the user id
    Post.findById(req.params.id).then(post => {
         
        // Build a comment object 
        const newComment = {
            text: req.body.text,
            name: req.body.name,
            avatar: req.body.avatar,
            user: req.user.id
        };
  
        // Add to comments to the newComment array
        post.comments.unshift(newComment);
  
        // Save the post changes 
        post.save().then(post => res.json(post));
    })
    .catch(err => res.status(404).json({ postnotfound: 'No post found' }
    ));
});

// Route:       Delete api/posts/comment/:id/:comment_id
// Description: Remove comments to a posts by the user id 
// Access:      Private
router.delete('/comment/:id/:comment_id',passport.authenticate('jwt', { session: false }),(req, res) => {
     
    // Find the id of the user and delete comments by user if one exist
    Post.findById(req.params.id).then(post => {
        /// Check to see if comment exists
        if (post.comments.filter(comment => comment._id.toString() === req.params.comment_id).length === 0) {
            return res.status(404).json({ commentnotexists: 'Comment does not exist' });
        }
  
        // Get the index to remove the post comment
        const removeIndex = post.comments.map(item => item._id.toString()).indexOf(req.params.comment_id);
  
        // Splice the comment out of array
        post.comments.splice(removeIndex, 1);
          
        // Save changes to the post 
        post.save().then(post => res.json(post));
    })
    .catch(err => res.status(404).json({ postnotfound: 'No post found' }
    ));
});
module.exports = router;