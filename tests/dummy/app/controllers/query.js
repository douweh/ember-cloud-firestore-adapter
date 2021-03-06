import Controller from '@ember/controller';

export default Controller.extend({
  loadMore() {
    const model = this.get('model');

    model.set('query.filter', (reference) => {
      return reference.orderBy('name').limit(5);
    });

    model.update();
  },
});
