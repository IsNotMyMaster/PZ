var d = document;
var opis;

function addRow()
{

    opis = d.getElementById('opis').value;

    var tbody = d.getElementById('tab1').getElementsByTagName('TBODY')[0];

    var row = d.createElement("TR");
    tbody.appendChild(row);

    var td1 = d.createElement("TD");

    row.appendChild(td1);

    td1.innerHTML = opis;
}