// Your code here
function createEmployeeRecord (array) {
    return {
        firstName: array[0],   
        familyName: array[1],   
        title: array[2], 
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
     }
    }

function createEmployeeRecords(arrayOfArrays) {
    return array.map ((record) => createEmployeeRecord(record))
}

const createTimeInEvent = function (dateStamp){
    const [date, hour] = dateStamp.split(" ");
    const inEvent = {
        type: "TimeIn",
        hour: parseInt (hour),
        date: date,
    }
    this.timeInEvents.push (inEvent); 
    return this;
}