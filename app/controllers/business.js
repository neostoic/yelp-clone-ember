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
    },
    delete: function() {
      var business = this.get('model');
      var reviews = this.get('reviews'),
        list = reviews.toArray();
      list.forEach(function(review){
        review.destroyRecord();
        reviews.removeObject(review);
      });
      // var reviews = this.get('controllers.review.model');
      business.destroyRecord();
      this.transitionToRoute('businesses');
    }
  }
});
