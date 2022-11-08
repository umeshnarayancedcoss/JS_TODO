let data_array = []; //Declaring data array for todo
//------------------- Add Function-------------
function add() {
    var item = document.getElementById('new-task').value;
    if (item == "") { //checking input field is blank or not---
        var msg = "Can't Add Blank Field.!!";
        document.getElementById('msg').innerHTML = msg;
    } else {
        var object = { item: item, status: 'incomplete' }; //array object creation---
        data_array.push(object); //pushing data into array------
        document.getElementById('new-task').value = "";
        document.getElementById('msg').innerText = "";
        display();
    }
}
// Display function for showing ToDo----
function display() {
    var str = "<ul id='incomplete-tasks'>"
    for (var index = 0; index < data_array.length; index++) {
        if (data_array[index].status == "incomplete") { //For incompleted status task----
            str += "<li><input type='checkbox' id=" + index + " onclick='checkbox(this)'><label>" + data_array[index].item + "</label><button  id=" + index + " onclick='edit(this)'>Edit</button><button id=" + index + " onclick='del(this)'>Delete</button></li>"
            str += "</ul>"
        }
    }
    var strr = " <h3>Completed</h3>"
    strr += "<ul id='completed-tasks'>"
    for (var index = 0; index < data_array.length; index++) {
        if (data_array[index].status == "complete") { //For complted status task----
            strr += "<li><input type='checkbox'  id=" + index + " onclick='checkbox(this)' checked><label>" + data_array[index].item + "</label><button id=" + index + "  onclick='edit(this)'>Edit</button><button id=" + index + " onclick='del(this)'>Delete</button></li>"
            strr += "</ul>"
        }
    }
    document.getElementById('todo').innerHTML = str + strr;
}
// -----------Checkbox Function for updating Task Status-------
function checkbox(res) {
    var id = res.id;
    if (data_array[id].status == "incomplete") { //changing status 'incomplete' to 'complete'
        data_array[id].status = "complete";
        display();
    }
    else { //changing status 'complete' to 'incomplete'
        data_array[id].status = "incomplete";
        display();
    }
}
// ---------Delete Function For Deleting Task---------------
function del(res) {
    var index = res.id;
    data_array.splice(index, 1); //Deleteing data with index id--
    display();
}
// -----Edit Function for edit an task-----------------
function edit(res) {
    var index = res.id;
    var task_name = data_array[index].item;
    document.getElementById('new-task').value = task_name;
    document.getElementById("add").style.display = 'none'; //Hiding Add Button
    document.getElementById("update").style.display = 'block'; // Displaying Update Button
    document.getElementById("update").setAttribute('value', index); //Seting Value Attribute on Update Button
}
// ----------Update Function for Set new value on clicked index-----------
function update(res) {
    var index = res.value;
    var item = document.getElementById('new-task').value;
    data_array[index].item = item;
    document.getElementById("add").style.display = 'block'; //Displaying Add Button
    document.getElementById("update").style.display = 'none'; //Hiding Update Button
    document.getElementById('new-task').value = "";
    display();
}
