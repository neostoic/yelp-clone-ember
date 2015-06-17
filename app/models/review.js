import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  text: DS.attr('string'),
  rating: DS.attr('number'),
  business: DS.belongsTo('business', {async: true})
});
