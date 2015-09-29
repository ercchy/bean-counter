/**
 * Created by erika on 9/29/15.
 */
(function () {
    "use strict";

    var startTime = Date.now();

    task("default", function () {
        var elspsedSeconds = (Date.now() - startTime) / 1000;
        console.log("\n\nBUILD OK (" + elspsedSeconds.toFixed(2) + "s)");
    });

}());