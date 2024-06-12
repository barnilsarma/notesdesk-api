import express from 'express';
import passport from 'passport';
import {ensureGuest} from "../middlewares/authValidation.js"


const router = express.Router();

router.get('/google', ensureGuest, passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }), (req, res) => {
  res.redirect('/');
});

router.get('/logout', (req, res) => {
  req.logout(err => {
    if (err) return next(err);
    res.redirect('/');
  });
});

export default router;
