let resturant = {
    name: 'KFC',
    guestCapacity: 50,
    guestCount: 0,
    checkAvailability: function (partySize) {    //A method is just an object property who's value is a function
        return partySize <= this.guestCapacity - this.guestCount
    },
    addParty: function (partySize) {
        this.guestCount += partySize
    },
    removeParty: function (partySize) {
        this.guestCount -= partySize
    }
}

resturant.addParty(50)
console.log(resturant.checkAvailability(5))
resturant.removeParty(5)
console.log(resturant.checkAvailability(5))