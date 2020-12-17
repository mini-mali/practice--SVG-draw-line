//
//  CONSTANTS
//
const STEP = 40;


//
//  variables
//
let plus = document.querySelector('.plus'),
    minus = document.querySelector('.minus'),
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
