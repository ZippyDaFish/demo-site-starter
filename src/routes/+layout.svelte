<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
  import { page } from '$app/stores';
  import { base } from '$app/paths';
	
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="min-h-screen flex flex-col">
  <header class="sticky top-0 z-50">
  <div class="bg-gradient-to-r from-blue-700 to-blue-600 text-white shadow-md">
    <div class="mx-auto flex items-center p-4">

      <!-- Company Name -->
      <div class="text-2xl font-bold tracking-wide mr-auto">
        Manufacturing Co.
      </div>

      <!-- Centered Navigation -->
      <nav class="absolute left-1/2 transform -translate-x-1/2 flex gap-8 text-lg">
        <a
          href={`${base}/`}
          class="transition-colors duration-200 hover:text-gray-200 
          { $page.url.pathname === '/' ? 'font-semibold border-b-2 border-white pb-1' : '' }"
        >
          Home
        </a>
        <a
          href={`${base}/about`}
          class="transition-colors duration-200 hover:text-gray-200
          { $page.url.pathname === '/about' ? 'font-semibold border-b-2 border-white pb-1' : '' }"
        >
          About
        </a>
        <a
          href={`${base}/contact`}
          class="transition-colors duration-200 hover:text-gray-200
          { $page.url.pathname === '/contact' ? 'font-semibold border-b-2 border-white pb-1' : '' }"
        >
          Contact
        </a>
      </nav>

    </div>
  </div>
</header>

  <div class="p-8 flex-1 p-6 max-w-4xl mx-auto w-full">
	{@render children()}
  </div>
  
  <footer class="text-center text-gray-500 p-6 text-sm">
    © 2025 Small Manufacturing Co.
  </footer>
</div>
