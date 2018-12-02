function makeGrid() {
  var rowspan = $("#input_height").val();
  var colspan = $("#input_width").val();

  var table = $("#pixelCanvas");

  table.children().remove();

  for (var i = 0; i < rowspan; i++) {
    table.append("<tr></tr>");

    for (var j = 0; j < colspan; j++) {
      table
        .children()
        .last()
        .append("<td></td>");
    }
  }
  table.on("click", "td", function() {
    var color = $("input[type='color']").val();
    //Apply color
    $(this).attr("bgcolor", color);
  });
}

$("input[type='submit']").click(function(e) {
  e.preventDefault();
  makeGrid();
});