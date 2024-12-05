1. // Ability to Check Employee is present or Absent

function isPresent() {
    const attendance = Math.floor(Math.random() * 11)
    // console.log(attendance);

    if (attendance > 0.5) {
        var status = true
    }
    else{
        var status = false
    }

    return status;
    
}

2. //Ability to Calculate Daily Employee Wage based on part time or full time work

function getRandomValue() {
    const values = [0, 4, 8];
    const randomIndex = Math.floor(Math.random() * values.length);
    return values[randomIndex];
}

function employeeWage() {
    const time = getRandomValue()
    // console.log("Time Worked: " + time + " Hours");
    let salary = 0;

    switch (time) {
        case 4:
            salary = 4*20
            break;
        case 8: 
        salary = 8*20
    
        default:
            break;
    }

    return {salary, time}
}

// console.log("Salary get: $" + employeeWage());

3. //Refactor the Code to write a function to get work hours

function getWorkHours() {

    let {salary, time}= employeeWage()

    if (isPresent && time == 4){
        return "Employee is present for half day (" + time +  " hours) hence get, $" + salary
    }
    else if (isPresent &&  time == 8){
        return  "Employee is present for full day (" + time +  " hours) hence get, $" + salary
    }
    else if (isPresent && time == 0) {
        return "Employee is present but did not do any work, hence get $" + salary
    }
    else{ return "Employee Absent, $0" }
    
    }

    // console.log(getWorkHours());


4. //   Calculating Wages for a Month assuming 20 Working Days in a Month

function monthlyWages() {

    let totalSalary = 0
    let days = 0

    for(let i = 0; i< 20; i++){

        if (isPresent()) {
            var {salary, time}= employeeWage()
            totalSalary += salary
            days++;
        }
    }
    console.log("Employee Worked for "+ days + " days, hence total salary: " + totalSalary); 
}
// monthlyWages()git 

5. // Calculate Wages till a condition of total working hours of 160 or max days of 20 is reached for a month

function maxWages() {
    let totalSalary = 0;
    let days = 0
    totalTime = 0

    while (days < 20 && totalTime < 160) {
        if (isPresent) {
            days++;
            var {salary, time} = employeeWage()
            totalTime += time
            totalSalary += salary
        }
    }
    // console.log( ("Total Working Hours: " + totalTime + "Hours, Total Working days: " + days + ". Hence you get Salary: " + totalSalary));
    
    return {totalSalary, totalTime}
}

// console.log(maxWages());

6. //Calculate total Annual wage and display monthly

function annualwage(){

    let annualWage = 0
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let totalTimeInYear = 0

    for(let i =0; i<12; i++){
        let {totalSalary, totalTime} = maxWages()
        // console.log("Salary received during month of " + months[i] + ": " + salary)
        // console.log(" ");
        annualWage += totalSalary
        totalTimeInYear += totalTime
    }
    
    
    // console.log("Salary received during this year is: " + annualWage);
    return {annualWage, totalTimeInYear}
    

}

// annualwage()

7. // Function to calculate total working hours and salary for multiple employees

// function calculateForEmployees(numEmployees, employeeNames) {
//     for (let i = 0; i < numEmployees; i++) {
//         let {annualWage, totalTimeInYear} = annualwage();

//         console.log(`${employeeNames[i]} worked for about ${totalTimeInYear} hours in a year, hence get  $${annualWage}`);
//     }
// }

// // Example usage
// const numEmployees = 3; // Number of employees
// const employeeNames = ["Alice", "Bob", "Charlie"]; // Employee names

// calculateForEmployees(numEmployees, employeeNames);

function calculateForEmployees(numEmployees, employeeNames) {
    let employeeData = [];

    for (let i = 0; i < numEmployees; i++) {
        let {annualWage, totalTimeInYear} = annualwage();

        employeeData.push({
            name: employeeNames[i],
            hours: totalTimeInYear,
            wage: annualWage
        });
    }

    console.table(employeeData);
}

const numEmployees = 3; // Number of employees
const employeeNames = ["Alice", "Bob", "Charlie"]; // Employee names

calculateForEmployees(numEmployees, employeeNames);
