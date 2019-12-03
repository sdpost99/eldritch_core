import "./styles.css";

Chars();
function Chars() {
  var node_table = document.getElementById("main_table");

  for (var row = 0; row < 9; row++) {
    var node_tr = document.createElement("tr");
    node_table.appendChild(node_tr);

    var node_th = document.createElement("th");
    node_th.setAttribute("scope", "row");
    node_tr.appendChild(node_th);

    var node_check_div_BS = document.createElement("div");
    node_check_div_BS.setAttribute("class", "btn-group-toggle");
    node_check_div_BS.setAttribute("data-toggle", "buttons");

    var node_check_label_BS = document.createElement("label");
    node_check_label_BS.setAttribute("class", "btn btn-outline-secondary");

    var node_check_label_text_BS = document.createTextNode(
      "Player" + (row + 1)
    );
    node_check_label_BS.appendChild(node_check_label_text_BS);

    var node_check_input_BS = document.createElement("input");
    node_check_input_BS.setAttribute("type", "checkbox");
    node_check_input_BS.setAttribute("name", "player" + (row + 1));
    node_check_input_BS.setAttribute("value", "player" + (row + 1));

    node_check_label_BS.appendChild(node_check_input_BS);
    node_check_div_BS.appendChild(node_check_label_BS);
    node_th.appendChild(node_check_div_BS);

    var node_check = document.createElement("input");
    node_check.setAttribute("type", "checkbox");
    node_check.setAttribute("name", "player" + (row + 1));
    node_check.setAttribute("value", "player" + (row + 1));
    // node_th.appendChild(node_check);

    var node_check_label = document.createElement("label");
    var node_check_text = document.createTextNode("Player " + (row + 1));
    node_check_label.appendChild(node_check_text);
    // node_th.appendChild(node_check_label);

    var node_dropdown = document.createElement("select");
    node_dropdown.setAttribute("id", "player" + (row + 1) + "_char");
    for (var item = 0; item < 8; item++) {
      var option = document.createElement("option");
      option.text = item;
      node_dropdown.add(option);
    }
    var node_td = document.createElement("td");
    node_td.appendChild(node_dropdown);
    node_tr.appendChild(node_td);
  }
}

$(".alert").alert();
