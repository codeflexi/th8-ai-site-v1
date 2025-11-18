import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './assets/main.css'

import Home from './pages/Home.vue'
import About from './pages/About.vue'
import WhatWeDo from './pages/WhatWeDo.vue'
import Contact from './pages/Contact.vue'
import LogisticsSuite from './pages/LogisticsSuite.vue'
import LogisticsSuiteEn from './pages/LogisticsSuiteEn.vue'
import CaseStudies from './pages/CaseStudies.vue'

// ⭐ ต้อง import เพิ่มสองไฟล์เคสใหม่
import CaseFnb from './pages/CaseFnb.vue'
import CaseFactory from './pages/CaseFactory.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/about', name: 'about', component: About },
  { path: '/what-we-do', name: 'what-we-do', component: WhatWeDo },
  { path: '/contact', name: 'contact', component: Contact },
  { path: '/logistics-suite', name: 'logistics', component: LogisticsSuite },
  { path: '/logistics-suite-en', name: 'logistics-en', component: LogisticsSuiteEn },
  { path: '/case-studies', name: 'case-studies', component: CaseStudies },

  // เคสใหม่ 2 หน้า
  { path: '/case/fnb-central-kitchen', name: 'case-fnb', component: CaseFnb },
  { path: '/case/factory-defect-logs', name: 'case-factory', component: CaseFactory },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0 }
  },
})

createApp(App).use(router).mount('#app')
