
const runReactionTest = (function() {
  let first_press = true;
  let time_initated = undefined;
  const elem = document.getElementById("reaction_test");
  async function turnButtonGreen(elem){
    setTimeout(() => {
      if(!first_press) {
        elem.style.backgroundColor = "green";
        elem.innerHTML = "Go!";
        time_initated = new Date();
      }
    }, 2000 + (5000 * Math.random()));
  }
  return function() {
    if (first_press) {
      elem.style.backgroundColor = "red";
      elem.innerHTML = "Get Ready.";
      first_press = false;
      turnButtonGreen(elem);
    }
    else {
      first_press = true;
      if(time_initated != undefined) {
        let time_finished = new Date();
        let time_taken = (time_finished - time_initated);
        elem.innerHTML = `Reaction Speed: ${time_taken} ms.`;
      } else {
        elem.innerHTML = "Too Early :(";
      }
    }
  }
})();


window.onload = function() {
  const button = document.querySelector( 'button' );
  button.onclick = runReactionTest;
}