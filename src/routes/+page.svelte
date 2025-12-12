<script lang="ts">
  import { base } from '$app/paths';
</script>

<h1 class="text-4xl font-bold mb-4">Welcome to Small Manufacturing Co.</h1>
<p class="text-lg text-gray-700">
We provide precision‑crafted components for a wide range of industries.
Our commitment to quality and efficiency makes us a trusted partner.
</p>

<div class="mt-10 p-6 bg-gray-100 rounded-lg shadow-lg">
    <h2 class="text-3xl font-semibold mb-4">Our Services</h2>


    <div class="grid md:grid-cols-3 gap-6">
    <!-- Service Card Template: flex column + push CTA to bottom -->


    <!-- Service 1 -->
    <div class="p-4 bg-white rounded-lg shadow flex flex-col">
    <h3 class="text-xl font-semibold mb-2">Custom Metal Fabrication</h3>
    <p class="text-gray-700 mb-4 flex-1">High-precision metal components tailored to your specifications.</p>
    <a href="{base}/contact" class="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-600 inline-block mt-auto">Request a Quote</a>
    </div>


    <!-- Service 2 -->
    <div class="p-4 bg-white rounded-lg shadow flex flex-col">
    <h3 class="text-xl font-semibold mb-2">Machine Parts Production</h3>
    <p class="text-gray-700 mb-4 flex-1">Reliable production of machine parts for industrial applications.</p>
    <a href="{base}/about" class="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-600 inline-block mt-auto">Learn More</a>
    </div>


    <!-- Service 3 -->
    <div class="p-4 bg-white rounded-lg shadow flex flex-col">
    <h3 class="text-xl font-semibold mb-2">Assembly & Packaging</h3>
    <p class="text-gray-700 mb-4 flex-1">Smooth, efficient assembly and packaging for large or small runs.</p>
    <a href="{base}/contact" class="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-600 inline-block mt-auto">Start a Project</a>
    </div>


    <!-- Service 4 -->
    <div class="p-4 bg-white rounded-lg shadow flex flex-col">
    <h3 class="text-xl font-semibold mb-2">CNC Machining</h3>
    <p class="text-gray-700 mb-4 flex-1">Precision CNC milling, turning, and cutting for complex components.</p>
    <a href="{base}/contact" class="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-600 inline-block mt-auto">Get a Quote</a>
    </div>


    <!-- Service 5 -->
    <div class="p-4 bg-white rounded-lg shadow flex flex-col">
    <h3 class="text-xl font-semibold mb-2">Prototyping Services</h3>
    <p class="text-gray-700 mb-4 flex-1">Rapid prototypes to bring your concepts to life before full production.</p>
    <a href="{base}/about" class="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-600 inline-block mt-auto">Learn More</a>
    </div>


    <!-- Service 6 -->
    <div class="p-4 bg-white rounded-lg shadow flex flex-col">
    <h3 class="text-xl font-semibold mb-2">Quality Inspection</h3>
    <p class="text-gray-700 mb-4 flex-1">Comprehensive inspection processes ensuring industry-standard accuracy.</p>
    <a href="{base}/contact" class="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-600 inline-block mt-auto">Schedule Inspection</a>
    </div>
    </div>
</div>