module.exports = {

  user: function(req, res) {
    res.view({
      user: req.user
    });
  }
};