/**
 * Created by erika on 9/29/15.
 */
// A silly little validator function. Just an example.

(function() {
    "use strict";

    var constants = require("./constants.js");

    exports.validateTextField = function validateTextField(field) {
        if (field.value) {
            field.removeAttribute("class");
        }
        else {
            field.setAttribute("class", constants.REQUIRED_FIELD_CLASS);
        }
    };

}());
