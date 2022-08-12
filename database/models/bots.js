const mongoose = require("mongoose");

let hm = new mongoose.Schema({
    ownerID: String,
    ownerName: String,
    botID: String,
    username: String,
    discrim: String,
    avatar: String,
    prefix: String,
    invite: String,
    longDesc: String,
    shortDesc: String,
    tags: Array,
    uptimerate: {
        type: Number,
        default: 0
    },
    coowners: Array,
    premium: String,
    status: String,
    website: String,
    github: String,
    support: String,
    backURL: String,
    Date: {
        type: Date,
        default: null
    },
    certificate: String,
    votes: {
        type: Number,
        default: 0
    },
    token: String,
    serverCount: Number,
    shardCount: Number,
    analytics: Object,
    analytics_visitors: Number,
    analytics_invites: Number,
    country: Object,
    rates: Object,
});

module.exports = mongoose.model("bots", hm);