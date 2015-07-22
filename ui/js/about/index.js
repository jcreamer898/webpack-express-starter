require("../../sass/main.scss");

require([
  "../components/navigation"
  ], (Navigation) => {
    new Navigation();
  });

console.log("About...");