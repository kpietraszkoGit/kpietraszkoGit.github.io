import {TOO_LESS, TOO_MUCH} from './constants';

export default (num, exported) => {
    if (num > exported) {
        alert(TOO_MUCH);
    } else {
        alert(TOO_LESS);
    }
}