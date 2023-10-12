function index(req, res) {
  res.render('index', { name: 'Sterling Archer', age: 35 });
}

function about(req, res) {
  const favoriteThings = ['raindrops on roses', 'brown paper packages tied up with strings', 'whiskers on kittens'];
  res.render('about', { favoriteThings });
}

function animals(req, res) {
  const animals = ['cats', 'pegasus', 'porcucine'];
  res.render('animals', { animals });
}

function foods(req, res) {
  const animals = ['beef', 'burgers', 'broccoli', 'ice cream', 'Klondike bars (dark)'];
  res.render('foods', { foods });
}

module.exports = { index, about, animals, foods };
