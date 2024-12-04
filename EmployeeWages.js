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
let ans = isPresent()

// console.log("is present: " + ans);

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
    let day = 0

    for(let i = 0; i< 20; i++){

        if (isPresent()) {
            let {salary, time}= employeeWage()
            totalSalary += salary
            day++;
        }
    }
    console.log("Employee Worked for "+ day + " days, hence total salary: " + totalSalary);   
}
monthlyWages()