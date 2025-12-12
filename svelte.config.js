import adapter from '@sveltejs/adapter-static';

const dev = process.argv.includes('dev');
const config = {
  kit: {
    adapter: adapter({
      // default options are pages: 'build', assets: 'build', fallback: null
    }),
    paths: {
      base: dev ? '' : '/demo-site-starter',
    }
  }
};

export default config;
