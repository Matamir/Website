import ProjectList from "./Projects/index.js";

(function ($) {
    $('#website').append(`
        <div>
            ${ProjectList()}
        </div>
    `);
})($);
