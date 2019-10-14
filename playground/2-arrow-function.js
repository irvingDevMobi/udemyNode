/* const square = function(x) {
    return x * x
}
 */

/*  const square = (x) => {
    return x * x
} */

//const square = (x) => x * x

//console.log(square(3))

/* const event = {
    name: 'Birthday Party',
    printGuestList: function () {
        console.log('Guest lis for ' + this.name)
    }
} */

const event = {
    name: 'Birthday Party',
    guestList: ['Andrew', 'Jen', 'Mike'],
    printGuestList() {
        console.log('Guest lis for ' + this.name)
        /* this.guestList.forEach(function (guest) {
            console.log(guest + ' is attending ' + this.name)
        }) */ 
        // this in standar function is no accessible. We  use an arrow fuction to resolve the problem
        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        })
    }
}

event.printGuestList()
