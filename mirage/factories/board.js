import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  name(i){
    return `Example board ${i}`;
  },
  desc(i){
    return `This is example board #${i}`;
  },

  afterCreate(board, server){
    server.create('list', { board });
    server.create('list', { board });
    server.create('list', { board });
    server.create('list', { board });
  }
});
