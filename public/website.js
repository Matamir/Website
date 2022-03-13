import ProjectList from "./Projects/index.js";

(function ($) {
  $('#wd-explore').append(`
        <div>
            ${ProjectList()}
        </div>
    `);
})($);
