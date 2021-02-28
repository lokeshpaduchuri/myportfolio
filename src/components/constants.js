

export var SLIDE_INFO = [ ];

function importAll(r) {
    r.keys().forEach(elem => {
        SLIDE_INFO.push({name: elem})
    })
    return r.keys().map(r);
  }
  
  const images = importAll(require.context('../images/Portfolio', false, /\.(png|jpe?g|svg)$/));

  for(let i =0 ; i< SLIDE_INFO.length; i++){
      SLIDE_INFO[i].src = images[i];
  }