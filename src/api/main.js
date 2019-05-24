
import Http from './base';

class Main extends Http{
    constructor(){
        super()
        this.prefix = '/v1'
    }

    getUserData(){
      return this.get(this.prefix + '/topics')
    }
}

export default new Main();
