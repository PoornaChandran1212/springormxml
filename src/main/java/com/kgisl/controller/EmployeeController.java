package com.kgisl.controller;

import com.kgisl.model.Employee;
import com.kgisl.service.EmployeeService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

@Controller
@RequestMapping(value = "/")
public class EmployeeController<employeeService> {
   
    @Autowired
    private EmployeeService employeeService;
 
    @RequestMapping(value = "/employees", method = RequestMethod.GET)
    public String listemployees(Model model) {
        model.addAttribute("employee", "new Employee()");
        model.addAttribute("employeeList", employeeService.listEmployees());
        System.out.println("*********************");
        System.out.println(employeeService.listEmployees());
        System.out.println("***************");
        return "employee";
    }
 
    // Same method For both Add and Update Employee
    @RequestMapping(value = "/employee/add", method = RequestMethod.GET)
    public String addemployee(@ModelAttribute("employee") Employee employee) {
 
        if (employee.getEmployeeId()==null || employee.getEmployeeId() == 0) {
            // new employee, add it
            employeeService.addEmployee(employee);
        } else {
            // existing employee, call update
            employeeService.updateEmployee(employee);
            System.out.println("updateeee");
        }
 
        return "redirect:/employees";
 
    }
    @RequestMapping(value = "/employee/edit", method = RequestMethod.GET)
    public String editemployee(@ModelAttribute("employee") Employee employee) {
 
      
            // existing employee, call update
            employeeService.updateEmployee(employee);
            System.out.println("updateeee");
    
        return "redirect:/employees";
 
    }

    


 
    @RequestMapping("/employee/remove/{id}")
    public String removeemployee(@PathVariable("id") int id) {
 
        employeeService.removeEmployee(id);
        return "redirect:/employees";
    }
 
    @RequestMapping("/employee/edit/{id}")
    public String editemployee(@PathVariable("id") int id, Model model) {
        model.addAttribute("employee", employeeService.getEmployeeById(id));
        model.addAttribute("employeeList", employeeService.listEmployees());
        return "employeecrud";
    }
}