
import initMd from 'markdown-element';
import startGame from './game/index';
import startJoke from './joke/index';
import initInfo from './about-me/index';
import initBlog from './blog/index';
import initGHRepos from './github/index';


initInfo();
initBlog();
initGHRepos();

window.controls = {
    startGame,
    startJoke
};
