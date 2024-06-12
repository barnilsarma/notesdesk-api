
const ensureAuth = (req, res, next) => {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect('/auth/google');
  };


const ensureGuest = (req, res, next) => {
    if (!req.isAuthenticated()) {
      return next();
    }
    res.redirect('/profile');
  };
  
  export {ensureAuth, ensureGuest};