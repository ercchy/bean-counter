/**
 * Created by erika on 9/29/15.
 */

// Lists commonly-used directories. They're all relative to the project root.

(function() {
    "use strict";

    module.exports = {
        generatedDir: "generated",
        testDir: "generated/test",
        distDir: "generated/dist",
        clientDistDir: "generated/dist/client",

        clientDir: "src/client",
        clientEntryPoint: "src/client/example.js",
        clientDistBundle: "generated/dist/client/bundle.js",

        serverDir: "src/server",
        serverEntryPoint: "src/run.js"
    };

}());
