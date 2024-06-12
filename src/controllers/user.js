const getProfile = (req, res) => {
    if (req.isAuthenticated()) {
      res.json({
        success: true,
        data: {
          id: req.user.id,
          name: req.user.name,
          email: req.user.email,
        },
      });
    } else {
      res.status(401).json({
        success: false,
        message: "User not authenticated",
      });
    }
  };

  export default getProfile;
  