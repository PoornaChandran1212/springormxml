var ara = new function () {
    var result;
    var employee = [];
   
    var mode = "";
    var updateidx;

    this.FetchAll = function () {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == XMLHttpRequest.DONE) {
                result = xhr.responseText;
                console.log(result);
                employee = JSON.parse(result);
            }
        }
        xhr.open('GET', '/hello', true);
        xhr.send(null);
        // console.log(countries);
    }

    this.getAllEmployee = function () {
        console.log(employee);
        this.el = document.getElementById("employee");
        var table_body = '<table border="1" id="example"><thead><tr><th>employeeId</th><th>firstName</th><th>lastName</th><th>education</th><th>age</th><th>salary</th></tr></thead><tbody>';
        for (var i in employee) {
            table_body += '<tr>';
            table_body += '<td>';
            table_body += employee[i].employeeId;
            table_body += '</td>';
            table_body += '<td>';
            table_body += employee[i].firstName;
            table_body += '</td>';
            table_body += '<td>';
            table_body += employee[i].lastName;
            table_body += '</td>';
            table_body += '<td>';
            table_body += employee[i].education;
            table_body += '</td>';
            table_body += '<td>';
            table_body += employee[i].age;
            table_body += '</td>';
            table_body += '<td>';
            table_body += employee[i].salary;
            table_body += '</td>';
            table_body += '<td><button onclick="ara.editEmployee(' + employee[i].employeeid + ')">Edit</button></td>';
            table_body += '<td><button onclick="ara.deleteEmployee(' +  employee[i].employeeid + ')">Delete</button></td>';
            table_body += '</tr>';
        }
        this.el.innerHTML = table_body;

        // this.el = document.getElementById('countries');
        // //console.log("getAllCountries");
        // var data = '';
        // if (countries.length > 0) {

        //     for (i = 0; i < countries.length; i++) {

        //         data += '<tr>';
        //         data += '<tr>';
        //         data += '<td>' + countries[i].countryid + '</td>';
        //         data += '<td>' + countries[i].countryname + '</td>';
        //         data += '<td><button onclick="ara.editCountry(' + countries[i].countryid + ')">Edit</button></td>';
        //         data += '<td><button onclick="ara.deleteCountry(' + countries[i].countryid + ')">Delete</button></td>';
        //         data += '</tr>';

        //     }
        // }

        // this.el.innerHTML = data;
    };


    // this.insertCountry = function () {
        //console.log("insertCountry");
    // }

    // this.getCountry = function (countryid) {
        //console.log("getCountry");
    // }

    // this.editCountry = function (countryid) {
        //console.log("editCountry " + countryid);
        // mode = "edit";
        // document.getElementById('btn').innerHTML = "Update";
        // for (let in/dex = 0; index < country.length; index++) {
            // const element = array[index];
            //console.log(countries[index].countryid);
            // if (country[index].countryid == countryid) {
                //console.log(countries[index].countryid);
                // updateidx = index;
                // document.getElementById("countryid").value = country[index].countryid;
                // document.getElementById("countryname").value = country[index].countryname;
                // document.getElementById('countryid').readOnly = true;

            // }
// 
        // }
    // }

//     this.deleteCountry = function (countryid) {

//         console.log("delete called " + countryid);
//         var url = "/hello";
// var xhr = new XMLHttpRequest();
// xhr.open("DELETE", url+'/?countryid='+countryid, true);
// xhr.onload = function () {
	// var users = JSON.parse(xhr.responseText);
	// if (xhr.readyState == 4 && xhr.status == "200") {
		// console.table(users);
// 	} else {
// 		// console.error(users);
// 	}
// }
// xhr.send(null);
        //  var countryid = document.getElementById("countryid").value;
        // var countryname = document.getElementById('countryname').value;
        // countries.pop();
        //console.log("tobedeleted " + countryid);

        // for (let index = 0; index < countries.length; index++) {
        //     // const element = array[index];
        //     //console.log(countries[index].countryid);
        //     if (countries[index].countryid == countryid) {
        //         //console.log(countries[index]);
        //         countries.splice(index, 1);
        //     }

        // }

        // countries.splice(countries.indexOf(countryid), 1);
        //console.log(countries);
    //     this.getAllCountries();

    // }

    // this.saveorupdate = function (countryid) {
        //console.log("saveorupdate");
        // var countryid = document.getElementById("countryid").value;
        // var countryname = document.getElementById('countryname').value;
        //console.log(countryid + "-->" + countryname);
        // if (mode == "") {


        //     var newcountry = { "countryid": countryid, "countryname": countryname };
            //console.log(newcountry);
            // .push({"01": nieto.label, "02": nieto.value});
            // country.push(newcountry);
            //console.log(JSON.stringify(countries));

        // }
        // else {
        //     //console.log("update called " + countryid);
            // var updatecountry = { "countryid": countryid, "countryname": countryname };
            //console.log(updatecountry);
            // .push({"01": nieto.label, "02": nieto.value});
            // countries.push(updatecountry);
            //console.log("updateidx " + updateidx);
    //         country.splice(updateidx, 1, updatecountry);
    //         document.getElementById('btn').innerHTML = "Add";

    //     }
    //     document.getElementById("countryid").value = "";
    //     document.getElementById("countryname").value = "";
    //     this.getAllCountries();
    // }

};