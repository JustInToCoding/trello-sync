import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  name(i) {
    return `List #${i}`;
  },
  afterCreate(list, server) {
    server.create('card', { list });
    server.create('card', { list });
    server.create('card', { list });
  }
});
