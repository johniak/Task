var app = app || {};
var appView = null;

(function() {
	'use strict';

	// Todo Router
	// ----------

	var AppRouter = Backbone.Router.extend({
        routes: {
            "task/:id": "getTask",
            "": "defaultRoute" // Backbone will try match the route above first
        },
        initialize: function(){
        }
    });

	app.TodoRouter = new AppRouter();

    app.TodoRouter.on('route:getTask', function (id) {
        requirejs(["/assets/js/views/app.js"], function() {
            appView = new app.AppView(function(appView) {
                var list = app.Todos.getItem(id);
                if(list.length == 0) return;
                var model = list[0];
                appView.select(model.toJSON(), model.view);
            });
        });
    });
    app.TodoRouter.on('route:defaultRoute', function (actions) {
        requirejs(["/assets/js/views/app.js"], function() {
            appView = new app.AppView();
        });
    });

	Backbone.history.start();
}());
