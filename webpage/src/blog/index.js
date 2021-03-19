import { library } from '@fortawesome/fontawesome-svg-core';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { BlogPost, Body, Header, Navigation, Footer } from '../blog/component';

export default () => {
    library.add(faSpinner);
    customElements.define('blog-header', Header); //webcomponent
    customElements.define('blog-nav', Navigation);
    customElements.define('blog-body', Body);
    customElements.define('blog-footer', Footer);

    customElements.define('blog-post', BlogPost);
};