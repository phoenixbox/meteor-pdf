Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() {
    return [Meteor.subscribe('notifications')]
  }
});

DashboardController = RouteController.extend({
	template: 'dashboard',
	data: function () {
		return {
			tickets: [
				{name: 'bug'},
				{name: 'chore'},
				{name: 'feature'}
			]
		}
	}
});

Router.route('/', {
  name: 'home',
  controller: DashboardController
});