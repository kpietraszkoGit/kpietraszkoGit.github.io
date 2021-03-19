import { getBlogPostNames } from './service';

const MAX_PARALLEL_POSTS = 5;

async function getPostNames() {
    return (await getBlogPostNames()).reverse();
}

export async function* getNextPosts() {
    const postNames = await getPostNames();
    let index = 0;
    while (index < postNames.length) {
        const result = postNames.slice(index, index + MAX_PARALLEL_POSTS);
        index += MAX_PARALLEL_POSTS;
        if (result.length < MAX_PARALLEL_POSTS) {
            return result;
        }
        yield result;
    }
}

export async function* getNextPost(name = '0') {
    const postNames = await getPostNames();
    let index = postNames.indexOf(name) +1;
    while (index < postNames.length - 1) {
        yield postNames[index];
        index += 1;
    }
    return postNames[index];
}