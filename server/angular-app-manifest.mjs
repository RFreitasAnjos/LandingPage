
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: [
  {
    "renderMode": 2,
    "route": "/https://RFreitasAnjos.github.io/LandingPage"
  }
],
  assets: new Map([
['index.csr.html', {size: 2284, hash: 'b44e9735648117f98fe257ad0e07ec5523e1f85abe5340568325dd8bf3d31bc3', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 1097, hash: 'b2b22a35ce7f290e7d7e86e9149a38535989e4699bce0bd5858186dbf45a406c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['index.html', {size: 63137, hash: '3ecb8ba23cf2c0a10e67c7665687b1711eafb863bb55318686ce98d742805f0e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)}], 
['styles-2JROZPAN.css', {size: 37341, hash: 'gjubKUc1eWI', text: () => import('./assets-chunks/styles-2JROZPAN_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
