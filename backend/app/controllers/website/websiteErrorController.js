const websiteErrorController = {
  error404(_, res) {
    res.status(404).render('404');
  },
};

module.exports = websiteErrorController;
