// Task 1 

// Creating class employee 
class Employee {
    constructor(name, id, department, salary) {
        this.name = name;
        this.id = id;
        this.department = department;
        this.salary = salary;
    };

    getDetails() { // Returning Employee details 
        return `Employee: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: ${this.salary}`;
    };

    calculateAnnualSalary() { // Calculating annual salary
        return this.salary * 12;
    };
    
};

const emp1 = new Employee('Isabela', 123, 'IT', 50000); // Creating object emp1

console.log(emp1.getDetails()); // Employee: Isabela
console.log(emp1.calculateAnnualSalary()); // 600000

// Task 2

// Creating class Manager
class Manager extends Employee{ //Creating class Mangager extending from Employee
    constructor(name, id, department, salary, teamSize) { // Specified properties
        super(name, id, department, salary); 
        this.teamSize = teamSize;
    };

    getDetails() { 
        return `Manager: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}, Team Size: ${this.teamSize}`; //Returning employee details
    };

    calculateBonus() { //Setting up calculateBonus
        return super.calculateAnnualSalary() * 0.1; //Calculating bonus 
    };

    calculateAnnualSalary() { // task 4 calculateAnnualSalary
        return super.calculateAnnualSalary() + this.calculateBonus() //Calculating annual salary
    };
}

const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5);
console.log(mgr1.getDetails());
// logging the output

console.log(mgr1.calculateBonus()); 
// Expected output: 9600

// Task 3
// Creating Company class

class Company {
    constructor(name, employees) {
        this.name = name;
        this.employees = employees;
    };

    addEmployee(employee) { // Adding employee to the company
        this.employees.push(employee);
    };

    listEmployees() { // Listing employees
        this.employees.forEach(employee => {console.log(employee.getDetails())});
    };

    calculateTotalPayroll() { // Task 4
        return this.employees.reduce((total, employee) => total + employee.calculateAnnualSalary(), 0);
    };

    promoteToManager (employee, teamSize) { //Task 5 - Add a method promoteToManager(employee, teamSize) in the Company class.
        const index = this.employees.indexOf(employee); //Finding employee position in employees array as index
        this.employees[index] = new Manager(employee.name, employee.id, employee.department, employee.salary, teamSize); //Creating a Manager with the properties of employee saved at index
    };

}

const company = new Company("TechCorp");
company.addEmployee(emp1);
company.addEmployee(mgr1);
company.listEmployees();

// Task 4
console.log(company.calculateTotalPayroll()); // Logging 

// Task 5
company.promoteToManager(emp1, 3); //Test case
company.listEmployees(); //Logging