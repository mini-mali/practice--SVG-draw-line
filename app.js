//
//  CONSTANTS
//
const STEP = 40;


//
//  variables
//
let minus = document.querySelector('.minus'),
    plus = document.querySelector('.plus'),
    play = document.querySelector('.play'),
    svg = document.querySelector('svg'),
    line = svg.querySelector('line'),
    x2 = parseInt( line.getAttribute('x2') );




//
//  Plus
//
plus.onclick = (e) => {
  x2 += STEP;
  line.setAttribute('x2', x2);
};


//
//  Minus
//
minus.onclick = (e) => {
  x2 -= STEP;
  line.setAttribute('x2', x2);
};


//
//  Play
//
play.onclick = (e) => {
	console.info('PLAY');
};







































