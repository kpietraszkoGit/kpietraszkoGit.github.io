import TO_FIND from './random';
import getNum from './input';
import success from './success';
import info from './userInfo';
import counter from './counter';

export default () => {
    alert('A number between 1-50 was drawn. Guess!');
    let num = getNum();
    counter.init();
    while(num !== TO_FIND) {
        info(num, TO_FIND);
        num = getNum();
        counter.increment();
    }
    success(counter.result);
}