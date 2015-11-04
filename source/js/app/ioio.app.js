// Author: Tamio Patrick Honma <tamio@honma.de>
// Licence: MIT

// just rename `ioioApp` to your app's name in the whole object.
window.ioioApp = {

    Config: {
        // constants and other configuration objects.
    },

    Event: {
        init: function() {
            // ensure, the document is ready for JavaScript.
            $(document).ready(this.onDocumentReady);
        },
        onDocumentReady: function() {
            // add event listeners for the document here
        }
        // add your `on event` methods here
    },

    View: {
        init: function() {
            this.$body = $('body');
            // add jQuery objects or DOM objects here
        }
        // add your view methods here
    },

    Controller: {
        // add your controller methods here
    },

    init: function() {
        ioioApp.Event.init();
    }

};
ioioApp.init();
