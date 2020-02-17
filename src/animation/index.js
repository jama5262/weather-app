import anime from 'animejs/lib/anime.es.js';

export const animateIcon = targets => {
  anime({
    targets,
    scale: [0, 1]
  });
}