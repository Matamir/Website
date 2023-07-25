import twentyfourgame from "./Demos/twentyfourgame.js";

(function ($) {
    $('#website').append(`
        <div style="margin-top: 100px">
            ${twentyfourgame()}
        </div>
      `);
})($);