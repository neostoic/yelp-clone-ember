import Ember from 'ember';

export default Ember.Controller.extend({
  isEditing: false,

  actions: {
    edit: function() {
      this.set('isEditing', true);
    },
    save: function() {
      var business = this.get('model');
      business.set('name', this.get('model.name'));
      business.set('address', this.get('model.address'));
      business.set('phone', this.get('model.phone'));
      business.set('description', this.get('model.description'));
      business.save();
      this.set('isEditing', false);
    }
  }
});
