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
            return 4*20
            break;
        case 8: 
        return 8*20
    
        default:
            break;
    }

    return salary;
}

// console.log("Salary get: $" + employeeWage());

3. //Refactor the Code to write a function to get work hours

function refact(params) {

    let wage = employeeWage()

    if (isPresent && wage == 80){
        return "Employee is present for half day hence get, $" + wage
    }
    else if (isPresent && wage == 160){
        return "Employee is present for full day hence get, $" + wage
    }
    else if (isPresent && wage == 0) {
        return "Employee is present but did not do any work, hence get $" + wage
    }
    else{ return "Employee Absent, $0" }
    
    }

    console.log(refact());
    