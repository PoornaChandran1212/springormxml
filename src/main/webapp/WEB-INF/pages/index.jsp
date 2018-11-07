<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="empaja.js"></script>
</head>

<body onload="ara.getAllEmployee()">
    <!-- <form action="/country.html" method="POST" onsubmit="ara.saveorupdate()"> -->
        <label>Employee id:</label>
        <input type="text" name="employeeId" id="employeeId" >
        <br>
        <label>Employee name: </label>
        <input type="text" name="firstName" id="firstName" >
        <!-- <button type="submit" name="submit" id="submit">Add</button> -->
        <button id="btn">Add</button>
       </form>
    <hr>
    
    <p id="counter"></p>
    <table id="employee">
        <!-- <button onclick="ara.getAllCountries()">dataload</button>   -->
    </table>   
       
    
    <hr>
</body>


</html>