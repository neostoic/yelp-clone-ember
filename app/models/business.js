import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  address: DS.attr('string'),
  phone: DS.attr('string'),
  description: DS.attr('string'),
  ratings: DS.attr(),
  reviews: DS.hasMany('review', {async: true})
});
