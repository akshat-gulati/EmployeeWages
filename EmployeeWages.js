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