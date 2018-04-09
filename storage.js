// Define the database as an object
const HomeInventoryDatabase = {}

// Define the arrays (a.k.a. tables) in the database to store each type of items
HomeInventoryDatabase.furniture = []
HomeInventoryDatabase.instruments = []
HomeInventoryDatabase.electronics = []

const markVAmp = {
    name: "Mesa Boogie Mark V Guitar Amp",
    location: "studio",
    description: "My first tube amplifier I owned"
}
HomeInventoryDatabase.electronics.push(markVAmp)

const archTopBanjo = {
    name: "1912 Gibson Arch Top banjo",
    location: "studio",
    description: "My oldest instrument, rumored to have previously been owned by banjo virtuoso Noam Pickelny"
}
HomeInventoryDatabase.instruments.push(archTopBanjo)

const gamingStation = {
    name: "Gaming Desktop Computer",
    location: "bedroom",
    description: "The current iteration of my gaming pc I started building years ago and have upgraded and iterated on ever since"
}
HomeInventoryDatabase.electronics.push(gamingStation)

const acousticGuitar = {
    name: "Collings D2h dreadnaught guitar",
    location: "studio",
    description: "one of my favorite instruments I own, it's back and sides are made of solid Brazillian Rosewood, which is now illegal to import into the US"
}
HomeInventoryDatabase.instruments.push(acousticGuitar)

const lesPaul = {
    name: "Les Paul '59 Reissue",
    location: "studio",
    description: "my favorite electric guitar, it is a '59 reissue bought from the gibson showcase which used to be in the opry mills mall"
}
HomeInventoryDatabase.instruments.push(lesPaul)

const iMac = {
    name: "apple iMac desktop computer",
    location: "studio",
    description: "my apple iMac which is used exclusively for recording, and other music related projects"
}
HomeInventoryDatabase.electronics.push(iMac)

const tenorSax = {
    name: "selmer markVI tenor saxophone",
    location: "studio",
    description: "a vintage selmer saxophone, often hailed as one of the best saxophone models ever produced"
}
HomeInventoryDatabase.instruments.push(tenorSax)

const strat = {
    name: "Fender american stratocaster",
    location: "studio",
    description: "A strat which has undergone many iterations as I have swapped out the pickups, currently using the same pickups as one of my favorite guitarists, Andy Timmons."
}
HomeInventoryDatabase.instruments.push(strat)

const recordingStation = {
    name: "Recording Desk",
    location: "studio",
    description: "A desk I bought along with my iMac to be the foundation for my recording station"
}
HomeInventoryDatabase.furniture.push(recordingStation)

const bookshelf = {
    name: "bookshelf",
    location: "bedroom",
    description: "A gift from my mom when my bookshelf I had throughout college began to fall apart."
}
HomeInventoryDatabase.furniture.push(bookshelf)


//function to save database to local storage
const saveDatabase = function (databaseObject, localStorageKey) {
    /*
        Convert the Object into a string.
    */
    const stringifiedDatabase = JSON.stringify(databaseObject)

    /*
        Create a key in local storage, and store the string
        version of your inventory database as the value
    */
    localStorage.setItem(localStorageKey, stringifiedDatabase)
}

saveDatabase(HomeInventoryDatabase, "inventory")