require("../../sass/main.scss");
require("./contact.scss");

require([
  "../components/navigation"
  ], (Navigation) => {
    new Navigation();
  });

setTimeout(() => {
  $(".alert").remove();
}, 4000);

console.log("Contact...");
