import { GitHubRepo } from './model';
import { logging } from '../common/proxy';

const REPOS_URL = 'https://api.github.com/users/kpietraszkoGit/repos';
const RAW_URL = 'https://raw.githubusercontent.com/kpietraszkoGit/kpietraszkoGit.github.io/main/blog/en/';
const POSTS_SUB_URL = 'posts/';
const FILES_URL = 'https://api.github.com/repos/kpietraszkoGit/kpietraszkoGit.github.io/contents/blog/en/posts';
const FORBIDDEN_REPOS = ['ux'];
const POST_NAME = /(\d+)\.md/;


const convert = ({
    name,
    stargazers_count: stars,
    license,
    html_url: url
}) => logging(new GitHubRepo({
    name,
    stars,
    license: license ? license.spdx_id : '',
    url
}));

async function getRawFileContent(pathToFile) {
    try {
        const response = await fetch(`${RAW_URL}${pathToFile}`);
        if(response.ok) {
            return (await response.text());
        }
        throw Error('Response not 200');
    }catch(err) {
        console.warn(err);
        return '';
    }
}

export default async function getRepos() {
    try {
        const response = await fetch(REPOS_URL);
        if(response.ok) {
            return (await response.json())
         .filter(r => !FORBIDDEN_REPOS.includes(r.name))
         .map(convert); //mapuje na klase GitHubRepo
        }
        throw Error('Response not 200');
    }catch(err) {
        console.warn(err);
        return [];
    }
}

export async function getBlogPost(name = '0.md') {
    return getRawFileContent(`${POSTS_SUB_URL}${name}`);
}

export async function getAboutMe() {
    return getRawFileContent('about-me.md');
}

export async function getBlogPostNames() {
    console.trace();
    try {
        const response = await fetch(FILES_URL);
        if(response.ok) {
            return (await response.json())
                .filter(file => POST_NAME.test(file.name))
                .map(({ name }) => name.split('.')[0]); 
        }
        throw Error('Response not 200');
    }catch(err) {
        console.warn(err);
        return [];
    }
}
