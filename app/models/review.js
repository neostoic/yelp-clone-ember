import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  text: DS.attr('string'),
  ratings: DS.attr('number'),
  business: DS.belongsTo('business', {async: true})
});
