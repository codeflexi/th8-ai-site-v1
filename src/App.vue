<template>
  <div class="min-h-screen flex flex-col">
    <header
      class="fixed top-0 inset-x-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur"
    >
      <div
        class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4"
      >
        <!-- Logo -->
        <div class="flex items-center gap-2">
          <div
            class="h-9 w-9 rounded-2xl bg-red-600 flex items-center justify-center text-xs font-semibold tracking-wider text-white shadow-sm"
          >
            TH8
          </div>
          <div class="flex flex-col">
            <span
              class="text-[11px] font-semibold uppercase tracking-[0.18em] text-red-600"
            >
              TH8.AI
            </span>
            <span class="text-[11px] text-slate-500">
              Thailand-First Agentic AI & Workflow
            </span>
          </div>
        </div>

        <!-- Desktop nav -->
        <nav
          class="hidden md:flex items-center gap-6 text-[13px] font-medium text-slate-600"
        >
          <RouterLink
            :to="{ name: 'home' }"
            class="hover:text-red-600 transition-colors"
            :class="{ 'text-red-600': $route.name === 'home' }"
          >
            Home
          </RouterLink>
          <RouterLink
            :to="{ name: 'about' }"
            class="hover:text-red-600 transition-colors"
            :class="{ 'text-red-600': $route.name === 'about' }"
          >
            About
          </RouterLink>
          <RouterLink
            :to="{ name: 'what-we-do' }"
            class="hover:text-red-600 transition-colors"
            :class="{ 'text-red-600': $route.name === 'what-we-do' }"
          >
            What we do
          </RouterLink>
          
          <RouterLink
            :to="{ name: 'case-studies' }"
            class="hover:text-red-600 transition-colors"
            :class="{ 'text-red-600': $route.name === 'case-studies' }"
          >
            Case Studies
          </RouterLink>
          <RouterLink
            :to="{ name: 'contact' }"
            class="hover:text-red-600 transition-colors"
            :class="{ 'text-red-600': $route.name === 'contact' }"
          >
            Contact
          </RouterLink>
        </nav>

        <!-- Desktop CTA -->
        <RouterLink
          :to="{ name: 'contact' }"
          class="hidden md:inline-flex rounded-full bg-red-600 text-white text-[11px] sm:text-xs font-medium px-4 py-1.5 shadow-sm hover:bg-red-700 transition-colors"
        >
          นัดคุย Use Case ฟรี
        </RouterLink>

        <!-- Mobile: hamburger -->
        <button
          type="button"
          class="md:hidden inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-3 py-1.5 text-slate-700 shadow-sm"
          @click="isOpen = !isOpen"
          aria-label="Toggle navigation menu"
        >
          <span class="text-[11px] mr-2">เมนู</span>
          <span class="flex flex-col gap-[3px]">
            <span
              class="block h-[2px] w-4 rounded-full bg-slate-700 transition-transform"
              :class="{ 'translate-y-[5px] rotate-45': isOpen }"
            ></span>
            <span
              class="block h-[2px] w-4 rounded-full bg-slate-700 transition-opacity"
              :class="{ 'opacity-0': isOpen }"
            ></span>
            <span
              class="block h-[2px] w-4 rounded-full bg-slate-700 transition-transform"
              :class="{ '-translate-y-[5px] -rotate-45': isOpen }"
            ></span>
          </span>
        </button>
      </div>

      <!-- Mobile menu dropdown -->
      <div
        v-if="isOpen"
        class="md:hidden border-t border-slate-200 bg-white/95 backdrop-blur"
      >
        <div class="max-w-6xl mx-auto px-4 pb-3 pt-2 flex flex-col gap-1 text-[13px] font-medium text-slate-700">
          <RouterLink
            :to="{ name: 'home' }"
            class="py-1.5 flex items-center justify-between hover:text-red-600"
            :class="{ 'text-red-600': $route.name === 'home' }"
            @click="closeMenu"
          >
            <span>Home</span>
          </RouterLink>

          <RouterLink
            :to="{ name: 'about' }"
            class="py-1.5 flex items-center justify-between hover:text-red-600"
            :class="{ 'text-red-600': $route.name === 'about' }"
            @click="closeMenu"
          >
            <span>About</span>
          </RouterLink>

          <RouterLink
            :to="{ name: 'what-we-do' }"
            class="py-1.5 flex items-center justify-between hover:text-red-600"
            :class="{ 'text-red-600': $route.name === 'what-we-do' }"
            @click="closeMenu"
          >
            <span>What we do</span>
          </RouterLink>

    
          <RouterLink
            :to="{ name: 'case-studies' }"
            class="py-1.5 flex items-center justify-between hover:text-red-600"
            :class="{ 'text-red-600': $route.name === 'case-studies' }"
            @click="closeMenu"
          >
            <span>Case Studies</span>
          </RouterLink>

          <RouterLink
            :to="{ name: 'contact' }"
            class="py-1.5 flex items-center justify-between hover:text-red-600"
            :class="{ 'text-red-600': $route.name === 'contact' }"
            @click="closeMenu"
          >
            <span>Contact</span>
          </RouterLink>

          <RouterLink
            :to="{ name: 'contact' }"
            class="mt-2 inline-flex items-center justify-center rounded-full bg-red-600 text-white text-[11px] font-medium px-4 py-1.5 shadow-sm hover:bg-red-700 transition-colors"
            @click="closeMenu"
          >
            นัดคุย Use Case ฟรี
          </RouterLink>
        </div>
      </div>
    </header>

    <main class="flex-1 pt-16">
      <RouterView />
    </main>

    <footer class="border-t border-slate-200 bg-white">
      <div
        class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap items-center justify-between gap-3"
      >
        <p class="text-[11px] text-slate-500">
          © TH8.AI — Thailand-First Agentic AI & Workflow Automation.
        </p>
        <p class="text-[11px] text-slate-500">
          Built from real-world Thai operations, not just demo slides.
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'

const isOpen = ref(false)
const route = useRoute()

const closeMenu = () => {
  isOpen.value = false
}
</script>
