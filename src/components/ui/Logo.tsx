import { component$ } from "@builder.io/qwik";

export const Logo = component$(() => {
  return (
    <a href="/" class="flex items-center space-x-3 text-[#2D3748] hover:text-[#3182CE] transition-colors group">
      {/* Logo Icon */}
      <div class="w-10 h-10 bg-gradient-to-br from-[#3182CE] to-[#2B6CB0] rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>
      
      {/* Logo Text */}
      <div class="flex flex-col">
        <span class="text-xl font-bold leading-tight">TOP SHELF</span>
        <span class="text-xs font-medium tracking-[0.15em] -mt-0.5 text-[#4A5568]">ADVERTISING</span>
      </div>
    </a>
  );
});