import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,
  actions: {
    updateQuestionForm() {
      this.set('updateQuestionForm', true);
    },
    update(question) {
      var params = {
          content: this.get('content'),
          author: this.get('author'),
          notes: this.get('notes')
      };
      this.set('addNewQuestion', false);
      this.set('content', "");
      this.set('author', "");
      this.set('notes', "");
      this.sendAction("update", question, params);
    }
  }
});
