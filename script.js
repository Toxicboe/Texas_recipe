function onFormSubmit(){
var formData = readFormData();
insertNewRecord(forData)
}

function readFormData(){
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["address"] = document.getElementById("address").value;
    formData["contact"] = document.getElementById("contact").value;
    formData["message"] = document.getElementById("message").value;

}

function insertNewRecord(data){
    var table = document.getElementById("costumerlist").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.address;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.contact;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.message;
    cell = newRow.insertCell(4);
    cell4.innerHTML = `<a>Edit</a>
                        <a>Delete</a>`;
}
