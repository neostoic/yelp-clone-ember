import Ember from 'ember';

export default Ember.Controller.extend({
  ratings: [1, 2, 3, 4, 5],
  needs: ['business'],

  actions: {
    rate: function() {
      var newReview = this.store.createRecord('review', {
        name: this.get('name'),
        text: this.get('text')
      });
      newReview.save();

      var business = this.get('controllers.business.model');
      business.get('reviews').pushObject(newReview);
      var rating = this.get('rating');

      business.get('ratings').pushObject(rating);
      business.save();

      this.setProperties({
        name: '',
        text: ''
      });
    }
  }
});
