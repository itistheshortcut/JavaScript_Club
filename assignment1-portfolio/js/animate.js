$(function() {
  var state = true;
  $(".skills-text").on("click", function() {
    if (state) {
      $(".skills-rating").animate(
        {
          backgroundColor: "#ddd",
          color: "#fff",
          width: 200
        },
        1000
      );
    } else {
      $(".skills-rating").animate(
        {
          backgroundColor: "#fff",
          color: "#ddd",
          width: 50
        },
        1000
      );
    }
    state = !state;
  });
});
