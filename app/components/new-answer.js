import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },
    save() {
      var params = {
        user: this.get('user'),
        reply: this.get('reply'),
        question: this.get('question'),
      };
      this.set('addNewAnswer', false);
      this.sendAction('save', params);
    }
  }
});
