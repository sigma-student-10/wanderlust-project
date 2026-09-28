const mongoose = require("mongoose");

const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

async function main() {
    await mongoose.connect(MONGO_URL);
    console.log("connected to DB");

    await Listing.deleteMany({});

    initData.data = initData.data.map((obj) => ({
        ...obj,
        owner: "6ab4969087938c44b055102e",
        geometry: {
            type: "Point",
            coordinates: listing.geometry.coordinates, //[91.868706, 24.894918]
        }
    }));

    await Listing.insertMany(initData.data);

    console.log("data was initialized");

    await mongoose.connection.close();
}

main().catch((err) => {
    console.log(err);
});


// const mongoose = require("mongoose");
// const initData = require("./data.js");
// const Listing = require("../models/listing.js");

// const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

// main()
// .then(() => {
//     console.log("connected to DB");
// })
// .catch((err) => {
//     console.log(err);
// });

// async function main() {
//     await mongoose.connect(MONGO_URL);
// }

// const initDB = async () => {
//     await Listing.deleteMany({});
//     initData.data = initData.data.map((obj) => ({...obj, owner:"6ab4969087938c44b055102e"}));
//     await Listing.insertMany(initData.data);
//     console.log("data was initialized");
// };

// initDB();