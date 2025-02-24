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
}

const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5);
console.log(mgr1.getDetails());
// logging the output

console.log(mgr1.calculateBonus()); 
// Expected output: 9600
