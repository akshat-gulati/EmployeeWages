# Employee Attendance and Wage Calculation

This project includes several JavaScript functions to simulate employee attendance and calculate their wages based on their working hours. Below is a detailed description of each function:

## 1. Check Employee Presence

The `isPresent` function simulates checking if an employee is present or absent.

```javascript
function isPresent() {
    const attendance = Math.floor(Math.random() * 11);
    // console.log(attendance);

    if (attendance > 0.5) {
        var status = true;
    } else {
        var status = false;
    }

    return status;
}
let ans = isPresent();
// console.log("is present: " + ans);
```

- **Purpose**: Randomly determines if an employee is present.
- **Logic**: Generates a random number between 0 and 10. If the number is greater than 0.5, the employee is considered present (`true`), otherwise absent (`false`).

## 2. Calculate Daily Employee Wage

The `employeeWage` function calculates the daily wage of an employee based on part-time or full-time work.

```javascript
function getRandomValue() {
    const values = [0, 4, 8];
    const randomIndex = Math.floor(Math.random() * values.length);
    return values[randomIndex];
}

function employeeWage() {
    const time = getRandomValue();
    // console.log("Time Worked: " + time + " Hours");
    let salary = 0;

    switch (time) {
        case 4:
            salary = 4 * 20;
            break;
        case 8:
            salary = 8 * 20;
            break;
        default:
            break;
    }

    return { salary, time };
}
// console.log("Salary get: $" + employeeWage());
```

- **Purpose**: Calculates the wage based on hours worked.
- **Logic**: Randomly selects work hours (0, 4, or 8). Calculates salary at a rate of $20 per hour.

## 3. Get Work Hours

The `getWorkHours` function refactors the code to determine the work hours and corresponding salary.

```javascript
function getWorkHours() {
    let { salary, time } = employeeWage();

    if (isPresent() && time == 4) {
        return "Employee is present for half day (" + time + " hours) hence get, $" + salary;
    } else if (isPresent() && time == 8) {
        return "Employee is present for full day (" + time + " hours) hence get, $" + salary;
    } else if (isPresent() && time == 0) {
        return "Employee is present but did not do any work, hence get $" + salary;
    } else {
        return "Employee Absent, $0";
    }
}
// console.log(getWorkHours());
```

- **Purpose**: Provides a detailed message about the employee's work hours and salary.
- **Logic**: Checks if the employee is present and returns a message based on the hours worked.

## 4. Calculate Monthly Wages

The `monthlyWages` function calculates the total wages for a month, assuming 20 working days.

```javascript
function monthlyWages() {
    let totalSalary = 0;
    let days = 0;

    for (let i = 0; i < 20; i++) {
        if (isPresent()) {
            var { salary, time } = employeeWage();
            totalSalary += salary;
            days++;
        }
    }
    console.log("Employee Worked for " + days + " days, hence total salary: " + totalSalary);
}
// monthlyWages();
```

- **Purpose**: Calculates the total salary for 20 working days.
- **Logic**: Iterates over 20 days, checks presence, and sums up the daily wages.

## 5. Calculate Wages with Conditions

The `maxWages` function calculates wages until a condition of total working hours of 160 or a maximum of 20 days is reached.

```javascript
function maxWages() {
    let totalSalary = 0;
    let days = 0;
    let totalTime = 0;

    while (days < 20 && totalTime < 160) {
        if (isPresent()) {
            days++;
            var { salary, time } = employeeWage();
            totalTime += time;
            totalSalary += salary;
        }
    }
    return "Total Working Hours: " + totalTime + " Hours, Total Working days: " + days + ". Hence you get Salary: " + totalSalary;
}
console.log(maxWages());
```

- **Purpose**: Calculates the total salary based on a maximum of 160 working hours or 20 days.
- **Logic**: Uses a while loop to sum up the hours and salary until one of the conditions is met.