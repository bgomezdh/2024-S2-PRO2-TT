const controller = {
    index: function(req, res, next) {
        res.render('index', { titulo: 'Brian' });
      }
}

module.exports = controller;