import { loadScript } from "./loadScript.js";
(function ($) {
  // use

  $(() => {
    $(".contants").load("a.html", () => {
      loadScript("b.js");
    });
  });

  //   $(() => {
  //     $(".contants").load("a.html", async () => {
  //       await import("./b.js").bye()
  //     });
  //   });
})(jQuery);
