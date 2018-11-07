<%@ page language="java" contentType="text/html; charset=UTF-8"
   pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page isELIgnored="false" %>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    <center>
        <h2>Edit Employee</h2>
        <form action="/employee/edit" method="GET">
           
                <b>employeeId</b>
                <input type="text" placeholder="Enter employeeId"name="employeeId"id="employeeId" value="<c:out value="${employee.employeeId}"/>"><br><br>  
                <b>age</b><input type="number" placeholder="Enter age" name="age" id="age"value="<c:out value="${employee.age}"/>"><br><br>
                <b>education</b><input type="text" placeholder="Enter education" name="education" id="education"value="<c:out value="${employee.education}"/>"><br><br>
                <b>firstName</b><input type="text" placeholder="Enter firstName" name="firstName" id="firstName"value="<c:out value="${employee.firstName}"/>"><br><br>
                <b>lastName</b><input type="text" placeholder="Enter lastName" name="lastName" id="lastName"value="<c:out value="${employee.lastName}"/>"><br><br>
                <b>salary</b><input type="text" placeholder="Enter salary" name="salary" id="salary"value="<c:out value="${employee.salary}"/>"><br>
                <br>
                <button type="submit">Update</button>
                </div>
    </center>
            
    </form>
</body>

</html>