$(document).ready(function() {
  console.log('ready!');
  const code = decodeURIComponent(window.location.hash.substring(1));
  var viz = new Viz();

  viz
    .renderSVGElement(code)
    .then(function(element) {
      document.body.appendChild(element);
    })
    .catch(error => {
      // Create a new Viz instance (@see Caveats page for more info)
      viz = new Viz();

      // Possibly display the error
      console.error(error);
    });
