import Ember from 'ember';

export default Ember.Controller.extend({
  isEditing: false,
  needs: ['review'],
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
      var reviews = business.get('reviews');

      var x = [];
      reviews.forEach(function(review){
        x.push(review.get('id'));
      });

      var allReviews = this.store.find('review').then(function(allReviewsCallback) {
        x.forEach(function(id){
          allReviewsCallback.forEach(function(aReview){
            if(id === aReview.get('id')) {
              aReview.destroyRecord();
            }
          });
        });
        business.destroyRecord();
      });

      this.transitionToRoute('businesses');
    }
  }
});
