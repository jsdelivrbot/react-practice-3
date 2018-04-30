//create global request animation frame function that React 16 depends on
const requestAnimationFrame = global.requestAnimationFrame = callback => {
  setTimeout(callback, 0);
};
 
export default requestAnimationFrame;