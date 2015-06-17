import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about', {path: '/'});
  this.resource('businesses', function() {
    this.resource('new-business');
  });
  this.resource('business', {path: 'businesses/:id'}, function() {
    this.resource('new-review');
  });
  this.route('reviews');
});

export default Router;
