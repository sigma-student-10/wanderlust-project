const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
    filename: {
        type: String,
    },
    url: {
        type: String,
        default: "https://stock.adobe.com/images/evening-view-from-a-hotel-balcony-overlooking-the-serene-sea/926892696",
        set: (v) =>
            v === ""
                ? "https://stock.adobe.com/images/evening-view-from-a-hotel-balcony-overlooking-the-serene-sea/926892696"
                : v,
    },
},
    price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;



