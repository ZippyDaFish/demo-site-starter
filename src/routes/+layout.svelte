<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="min-h-screen flex flex-col">
  <nav class="bg-blue-700 text-white p-4 flex gap-6 text-lg">
    <a href="/" class="hover:text-gray-300">Home</a>
    <a href="./about" class="hover:text-gray-300">About</a>
    <a href="./contact" class="hover:text-gray-300">Contact</a>
  </nav>

  <div class="p-8 flex-1 p-6 max-w-4xl mx-auto w-full">
	{@render children()}
  </div>
  
  <footer class="text-center text-gray-500 p-6 text-sm">
    © 2025 Small Manufacturing Co.
  </footer>
</div>
