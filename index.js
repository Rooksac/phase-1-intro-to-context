function createEmployeeRecord(array) {
    let Obj = {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return Obj;
}

function createEmployeeRecords(array) {
    let newArr = []
    array.forEach(element => {
        newArr.push(createEmployeeRecord(element))
        
    })
    return newArr;
}
    
