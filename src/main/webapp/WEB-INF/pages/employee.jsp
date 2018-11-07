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
               <h2>ADD</h2>
               <form action="/employee/add" method="GET">
                 employeeId::<input type="text" name="emplooyeeId" id="employeeeId"><br><br>
                 age ::<input type="number" name="age" id="age"><br><br>
                 education::<input type="text" name="education" id="education"><br><br>
                 firstname:<input type="text" name="firstName" id="firstName"><br><br>
                 lastname::<input type="text" name="lastName" id="lastName"><br><br>
                 salary::<input type="number" name="salary" id="salary"><br>
                 <br>
                 <button type="text">SUBMIT</button>
                 </div>
            
             <br>
             <br>

       <table class="empTable"  table border="1" cellpadding="5">
               <tr>
                   <th width="80">ID</th>

                   <th width="120">Age</th>
                   <th width="120">Education</th>
                   <th width="120">First Name</th>
                   <th width="120">Last Name</th>
                   <th width="120">Salary</th>
                   <th width="60">Edit</th>
                   <th width="60">Delete</th>
               </tr>

               <c:forEach items="${employeeList}" var="employee">
                   <tr>
                           <td><c:out value="${employee.employeeId}" /></td>
                           <td><c:out value="${employee.age}" /></td>
                             <td><c:out value="${employee.education}" /></td>
                           <td><c:out value="${employee.firstName}" /></td>
                           <td><c:out value="${employee.lastName}" /></td>

                           <td><c:out value="${employee.salary}" /></td>

                       <td><a href="<c:url value='/employee/edit/${employee.employeeId}' />" >Edit</a></td>
                       <td><a href="<c:url value='employee/remove/${employee.employeeId}' />" >Delete</a></td>
       </tr>
   </c:forEach>
   </table>

</center>

</body>
</html>