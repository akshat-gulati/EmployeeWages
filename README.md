# Employee Attendance and Wage Calculation

This project includes several JavaScript functions to simulate employee attendance and calculate their wages based on their working hours. Below is a detailed description of each function:

## 1. Check Employee Presence

The `isPresent` function simulates checking if an employee is present or absent.

```javascript
function isPresent() {
    const attendance = Math.floor(Math.random() * 11);
    // console.log(attendance);

    if (attendance > 5) {
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



# Employee Wage Calculator

This project calculates the total annual wage and monthly breakdown for employees. It also provides functionality to retrieve wage and time worked for a specific month.

## Functions

### `annualwage()`
Calculates the total annual wage and monthly breakdown for a single employee.

- **Returns:** An array of objects containing the month, wage, and time worked.

### `calculateForEmployees(numEmployees, employeeNames)`
Calculates the annual wage and monthly breakdown for multiple employees.

- **Parameters:**
  - `numEmployees` (number): The number of employees.
  - `employeeNames` (array): An array of employee names.

- **Returns:** An object where each key is an employee name and the value is the detailed wage breakdown.

### `getEmployeeDetails(name, month)`
Retrieves the wage and time worked for a specific employee in a particular month.

- **Parameters:**
  - `name` (string): The name of the employee.
  - `month` (string): The month for which details are required.

- **Returns:** An object containing the wage and time worked for the specified month, or an error message if the employee or month is not found.

## Usage

1. **Calculate Annual Wage:**
   ```javascript
   let details = annualwage();
   console.table(details);
Calculate for Multiple Employees:

const numEmployees = 3;
const employeeNames = ["Alice", "Bob", "Charlie"];
let employeeDetails = calculateForEmployees(numEmployees, employeeNames);
Get Employee Details for a Month:

console.table(getEmployeeDetails("Alice", "March"));
```