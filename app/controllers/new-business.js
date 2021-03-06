import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addBusiness: function() {
      var newBusiness = this.store.createRecord('business', {
        name: this.get('name'),
        address: this.get('address'),
        phone: this.get('phone'),
        description: this.get('description'),
        image: this.get('image')
      });
      newBusiness.save();
      this.setProperties({
        name: '',
        address: '',
        phone: '',
        description: '',
        image: ''
      });
      this.transitionToRoute('businesses');
    }
  }
});
