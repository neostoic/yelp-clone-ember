import Ember from 'ember';

export default Ember.Controller.extend({
  ratings: [1, 2, 3, 4, 5],
  needs: ['business'],
  needs: ['user'],
  
  actions: {
    rate: function() {
      var business = this.get('controllers.business.model');
      var newReview = this.store.createRecord('review', {
        name: this.get('name'),
        text: this.get('text'),
        rating: this.get('rating')
      });
      newReview.save().then(function() {
        business.get('reviews').pushObject(newReview);
        business.save();
      });

      this.setProperties({
        name: '',
        text: '',
        rating: 1
      });

      this.transitionToRoute('business', business.get('id'));
    }
  }
});
