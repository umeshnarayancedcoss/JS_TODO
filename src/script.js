let data_array = [];

function add() {
    // alert('ok');

    var item = document.getElementById('new-task').value;
    // alert(item);
    //object creation
    var object = { item: item, status: 'incomplete' };
    console.log(object);
    // pushing object values in an array
    data_array.push(object);

    
        //    showing result in table tag
        var str = "<ul>"
        data_array.forEach(element => {
            str += "<li><input type=checkbox><label>"+element.item+"</label><input type=text><button class=edit onclick='edit()'>Edit</button><button class=delete>Delete</button></li>"

            str += "</ul>"

            // console.log(str);
            document.getElementById('incomplete-tasks').innerHTML = str;
        })
        var item = document.getElementById('new-task').value=""; 

}
function edit() {
    //alert('edit');

    

}

