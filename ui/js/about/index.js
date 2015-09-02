require("../../sass/main.scss");
require("./about.scss");

require([
  "../components/navigation"
  ], (Navigation) => {
    new Navigation();
  });

console.log("About...");
