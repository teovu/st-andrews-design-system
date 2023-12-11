import React, { useEffect } from 'react';
import docsearch from '@docsearch/js';
import '@docsearch/css';

function DocSearchReact() {
  useEffect(() => {
    docsearch({
      container: '#docsearch',
      appId: '0Y2FDJDCFA',
      indexName: 'st-andrews-design-system-astro',
      apiKey: 'deedb52e969ddde03b8a3d1d2d0887e8',
    });
  }, []);

  return (
    <div id="docsearch"></div>
  );
}

export default DocSearchReact;
