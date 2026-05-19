// ----------------------------------------------------------------------
// * 1) Header + Navigation
// ----------------------------------------------------------------------
const headerHTML = `
  <header class="bg-white shadow-sm py-4">
    <nav class="max-w-6xl mx-auto px-4 flex items-center justify-between">
      <a href="#" class="text-xl font-bold text-zinc-800">Coffee Shop</a>
      <ul class="flex items-center gap-6">
        <li><a href="#" class="font-semibold text-zinc-700 hover:text-zinc-900 transition-colors">Home</a></li>
        <li><a href="#" class="font-semibold text-zinc-700 hover:text-zinc-900 transition-colors">Menu</a></li>
        <li><a href="#" class="font-semibold text-zinc-700 hover:text-zinc-900 transition-colors">About</a></li>
        <li><a href="#" class="font-semibold text-zinc-700 hover:text-zinc-900 transition-colors">Contact</a></li>
      </ul>
    </nav>
  </header>
`;

// ----------------------------------------------------------------------
// * 2) Hero Section
// ----------------------------------------------------------------------
const heroHTML = `
  <section
    class="relative flex items-center justify-center min-h-[560px] text-white text-center"
  >
    <div
      class="absolute inset-0 bg-[url('https://images.pexels.com/photos/2907301/pexels-photo-2907301.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1000&dpr=1')] bg-center bg-cover"
      aria-hidden="true"
    ></div>
    <div class="absolute inset-0 bg-black/40" aria-hidden="true"></div>

    <div class="relative max-w-2xl px-4 space-y-6">
      <h1 class="text-4xl md:text-5xl font-bold">Welcome to Our Coffee Shop</h1>
      <p class="text-lg md:text-xl text-zinc-200">
        Enjoy the best coffee in town.
      </p>
      <a
        href="#"
        class="inline-block bg-zinc-900 hover:bg-zinc-700 transition-colors text-white font-semibold px-6 py-3 rounded-md shadow-md"
      >
        Explore Our Menu
      </a>
    </div>
  </section>
`;

// ----------------------------------------------------------------------
// * 3) Footer
// ----------------------------------------------------------------------
const footerHTML = `
  <footer class="bg-zinc-900 text-zinc-100 text-center py-6 mt-auto">
    <p>&copy; 2024 Coffee Shop. All rights reserved.</p>
  </footer>
`;

// ----------------------------------------------------------------------
// * 4) Components zusammenfügen
// ----------------------------------------------------------------------
document.body.insertAdjacentHTML('afterbegin', headerHTML);
document.body.insertAdjacentHTML('beforeend', heroHTML);
document.body.insertAdjacentHTML('beforeend', footerHTML);
