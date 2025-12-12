import adapter from '@sveltejs/adapter-static';

const dev = process.argv.includes('dev');
const config = {
  kit: {
    adapter: adapter({
      fallback: 'index.html'
    }),
    paths: {
      base: dev ? '' : '/demo-site-starter',
    }
  }
};

export default config;
