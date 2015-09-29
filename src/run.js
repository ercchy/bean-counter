/**
 * Created by erika on 9/29/15.
 */
(function() {
    "use strict";

    var path = require("path");
    var server = require("./server/server.js");

    var port = process.argv[2];

    server.start(port, path.resolve(__dirname, "./client"), function() {
        console.log("Server started on port " + port);
    });
}());