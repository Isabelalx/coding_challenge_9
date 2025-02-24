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



