import anime from 'animejs/lib/anime.es.js';

const animateIcon = targets => {
  anime({
    targets,
    scale: [0, 1]
  });
}

export default animateIcon