// DATA
// Below data will hold all of the friends.
// Initially we just set it equal to a "dummy" friend.
// But you could have it be an empty array as well.
// ===============================================================================

var friendsData = [
    {
        "name": "Lauren Young",
        "photo": "http://www.medialink.com/team/lauren-young/",
        "scores": [25, 25, 25, 25, 25, 25, 25, 25, 25, 25]
    },

    {
        "name": "Nellie Boff",
        "photo": "http://www.medialink.com/team/nellie-boff-3/",
        "scores": [25, 25, 25, 25, 25, 25, 25, 25, 25, 25]
    },

    {
        "name": "Margot Shumann",
        "photo": "http://www.medialink.com/team/margot-shumann/",
        "scores": [50, 50, 10, 10, 10, 50, 10, 10, 10, 10]
    },

    {
        "name": "Caitlin Kelly",
        "photo": "http://www.medialink.com/team/caitlin-kelly/",
        "scores": [10, 50, 10, 10, 10, 50, 50, 50, 50, 50]
    },

    {
        "name": "Brian Offutt",
        "photo": "http://www.medialink.com/team/brian-offutt/",
        "scores": [50, 25, 50, 50, 50, 25, 50, 50, 50, 50]
    },

    {
        "name": "Anne Bishop",
        "photo": "http://www.medialink.com/team/anne-bishop/",
        "scores": [10, 10, 90, 90, 10, 90, 10, 90, 90, 90]
    },

    {
        "name": "Donna Sharp",
        "photo": "http://www.medialink.com/team/donna-sharp/",
        "scores": [25, 25, 50, 50, 50, 90, 90, 10, 1, 10]
    }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsData;