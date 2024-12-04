1. // Ability to Check Employee is present or Absent

function calculateAttendance() {
    const attendance = Math.floor(Math.random() * 11)
    console.log(attendance);

    if (attendance > 0.5) {
        var status = "Present"
    }
    else{
        var status = "Absent"
    }

    return status;
    
}
let ans = calculateAttendance()

console.log(ans);

2. //Ability to Calculate Daily Employee Wage based on part time or full time work

function getRandomValue() {
    const values = [0, 4, 8];
    const randomIndex = Math.floor(Math.random() * values.length);
    return values[randomIndex];
}

function employeeWage() {
    const time = getRandomValue()
    console.log("Time Worked: " + time + " Hours");
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

console.log("Salary get: $" + employeeWage());
    