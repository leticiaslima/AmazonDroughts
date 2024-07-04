var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 600,
	speedAsDuration: true,
  easing: 'easeInOutQuart',
  updateURL: false,
  popstate: false,
});
