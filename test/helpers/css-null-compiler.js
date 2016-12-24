const noop = () => {
  return null;
};

require.extensions['.css'] = noop;
require.extensions['.png'] = noop;
require.extensions['.jpg'] = noop;
