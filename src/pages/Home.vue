<template>
  <div class="bg-slate-50 min-h-[calc(100vh-4rem)]">
    <!-- HERO -->
    <section class="border-b border-slate-200 bg-white">
      <div
        class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 grid lg:grid-cols-[1.3fr,1fr] gap-8 items-center"
      >
        <!-- Left: Copy -->
        <div class="space-y-4">
          <p
            class="text-[11px] font-semibold tracking-[0.18em] uppercase text-th8-red"
          >
            agentic ai for thai operations
          </p>
          <h1
            class="text-2xl sm:text-3xl lg:text-[32px] font-semibold text-slate-900 leading-snug"
          >
            ถ้าในบริษัทคุณยังมีประโยคนี้ทุกวัน…<br />
            แปลว่าคุณพร้อมใช้ AI แล้ว
          </h1>
          <ul class="text-sm text-slate-700 space-y-1.5">
            <li>• “ของหายอีกแล้ว ใครยิงผิด?”</li>
            <li>• “ยอดไม่ตรง ใครแก้ไฟล์ล่าสุด?”</li>
            <li>• “ลูกค้าถาม ทำไม order ค้างตั้งแต่เมื่อวาน?”</li>
          </ul>
          <p class="text-sm text-slate-600 leading-relaxed">
            TH8.AI ไม่ได้เริ่มจากคำว่า “ทำ AI ให้ตาม Trend”<br />
            เราเริ่มจากคำถามง่าย ๆ ว่า
            <span class="font-medium text-slate-900">
              “งานน่าเบื่อ งานซ้ำ ๆ ในคลังสินค้า / F&amp;B / โรงงาน… อันไหนให้ AI
              ทำแทนได้บ้าง แล้วคนจะเบาลงจริงไหม?”
            </span>
          </p>

          <div class="flex flex-wrap items-center gap-3 pt-1">
            <RouterLink
              to="/logistics-suite"
              class="inline-flex items-center justify-center rounded-full bg-th8-red text-white text-[12px] sm:text-[13px] font-medium px-5 py-2 shadow-sm hover:bg-red-700 transition-colors"
            >
              ดูตัวอย่างหน้าจอ Logistics Suite
            </RouterLink>
            <RouterLink
              to="/#contact"
              class="inline-flex items-center justify-center rounded-full border border-slate-300 text-[12px] sm:text-[13px] text-slate-700 px-4 py-2 hover:border-red-300 hover:text-th8-red transition-colors"
            >
              นัดคุย Use Case ของคุณ
            </RouterLink>
          </div>

          <!-- Industry strip -->
          <div
            class="flex flex-wrap items-center gap-4 pt-3 text-[11px] text-slate-500"
          >
            <div class="flex items-center gap-1.5">
              <img
                :src="logisticsIcon"
                alt=""
                class="h-4 w-4"
              />
              <span>Logistics &amp; Fulfillment</span>
            </div>
            <div class="flex items-center gap-1.5">
              <img
                :src="fnbIcon"
                alt=""
                class="h-4 w-4"
              />
              <span>F&amp;B &amp; Retail Chain</span>
            </div>
            <div class="flex items-center gap-1.5">
              <img
                :src="manufacturingIcon"
                alt=""
                class="h-4 w-4"
              />
              <span>Manufacturing</span>
            </div>
          </div>

          <p class="text-[11px] text-slate-500 pt-1">
            เขียนโดยคนไทยที่เคยอยู่ในฝั่ง IT / Operation จริง ๆ — ไม่ใช่
            ที่ทำมาโชว์ ว๊าว POC อย่างเดียว
          </p>
        </div>

        <!-- Right: Visual + Day-in-the-life -->
        <div class="lg:pl-4">
          <div
            class="rounded-3xl border border-rose-100 bg-white shadow-sm p-4 sm:p-5 space-y-3"
          >
            <!-- Illustration block (unDraw) -->
            <div
              class="rounded-2xl bg-slate-50 border border-rose-100 flex items-center justify-center mb-3 px-4 py-3"
            >
              <!-- ใช้ไฟล์จาก src/assets/home-hero-ops-dashboard.svg -->
              <img
                :src="heroIllustration"
                alt="Operational dashboard assisting Thai operations"
                class="h-32 sm:h-36 w-auto object-contain"
              />
            </div>

            <p class="text-[11px] font-semibold text-slate-600">
              1 วันถ้ามี TH8.AI อยู่ในระบบคุณ
            </p>
            <div class="space-y-2 text-[12px] text-slate-700">
              <div class="flex gap-2">
                <div class="mt-[3px] h-2 w-2 rounded-full bg-emerald-500"></div>
                <p>
                  <span class="font-semibold">08:30</span> — ระบบสรุปงานวันนี้ให้หัวหน้าคลังสินค้า:
                  งานมากกว่าปกติ +18% ใน Zone B → แนะนำโยกคนตั้งแต่เช้า
                </p>
              </div>
              <div class="flex gap-2">
                <div class="mt-[3px] h-2 w-2 rounded-full bg-amber-400"></div>
                <p>
                  <span class="font-semibold">11:00</span> — Agent จับเคส stock ไม่ตรง 3 รายการ
                  + บอกแหล่งที่มาชัดเจน → ทีมแก้ก่อนลูกค้าโทรมาบ่น
                </p>
              </div>
              <div class="flex gap-2">
                <div class="mt-[3px] h-2 w-2 rounded-full bg-sky-500"></div>
                <p>
                  <span class="font-semibold">14:00</span> — เจอเคส “ที่อยู่เปลี่ยนระหว่างขนส่ง”
                  → Agent เปิด SOP + ตัวอย่างเคสเก่าให้ดูในหน้าเดียว
                </p>
              </div>
              <div class="flex gap-2">
                <div class="mt-[3px] h-2 w-2 rounded-full bg-slate-700"></div>
                <p>
                  <span class="font-semibold">17:00</span> — ผู้บริหารได้สรุป 1 หน้า:
                  KPI + ปัญหาซ้ำ ๆ + สิ่งที่ควรโฟกัสพรุ่งนี้
                </p>
              </div>
            </div>
            <p class="text-[11px] text-slate-500">
              * ทั้งหมดนี้เริ่มจากระบบเดิมที่คุณมีอยู่แล้ว — เราแค่เอา AI
              ไปวางในจุดที่มันช่วยได้จริง
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- WHO WE HELP -->
    <section class="border-b border-slate-200 bg-slate-50" id="about">
      <div
        class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12 space-y-5"
      >
        <div class="space-y-2">
          <h2 class="text-lg sm:text-xl font-semibold text-slate-900">
            TH8.AI คือใคร และเราโฟกัสใคร
          </h2>
          <p class="text-sm text-slate-600 max-w-3xl">
            ทีมมาจากสาย IT, Digital Banking, FMCG
            และเคยลงไปทำงานกับระบบ ERP, CRM, POS, Data และ Automation
            สิ่งที่เห็นเหมือนกันแทบทุกองค์กรคือ…
            <span class="font-medium text-slate-900">
              ระบบเยอะ แต่ข้อมูลยัง “กระจายกันหลายที่”
              ทำให้คนทำงานต้องรวมและตรวจสอบเองเกือบทั้งหมด
            </span>
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-4 text-[13px]">
          <div
            class="rounded-2xl border border-slate-200 bg-white px-4 py-4 space-y-2"
          >
            <div class="flex items-center gap-2 mb-1">
              <img
                :src="logisticsIcon"
                alt=""
                class="h-5 w-5"
              />
              <p class="text-[11px] font-semibold text-th8-red uppercase">
                logistics &amp; fulfillment
              </p>
            </div>
            <h3 class="font-semibold text-slate-900">
              ศูนย์กระจายสินค้า / 3PL / eCommerce
            </h3>
            <p class="text-slate-700">
              ลดงานเช็ก stock, order, shipment ที่กระจายหลายระบบ ให้เหลือ
              dashboard + agent ที่คอยเตือนงานเสี่ยง
            </p>
          </div>
          <div
            class="rounded-2xl border border-slate-200 bg-white px-4 py-4 space-y-2"
          >
            <div class="flex items-center gap-2 mb-1">
              <img
                :src="fnbIcon"
                alt=""
                class="h-5 w-5"
              />
              <p class="text-[11px] font-semibold text-th8-red uppercase">
                f&amp;b &amp; retail chain
              </p>
            </div>
            <h3 class="font-semibold text-slate-900">
              ร้านหลายสาขา / ครัวกลาง / คลังสินค้า
            </h3>
            <p class="text-slate-700">
              ช่วยสั่งของเข้าครัว, ตามยอด, ป้องกันของหมดสต๊อก
              โดยใช้ข้อมูลขายจริง + pattern พฤติกรรมลูกค้า
            </p>
          </div>
          <div
            class="rounded-2xl border border-slate-200 bg-white px-4 py-4 space-y-2"
          >
            <div class="flex items-center gap-2 mb-1">
              <img
                :src="manufacturingIcon"
                alt=""
                class="h-5 w-5"
              />
              <p class="text-[11px] font-semibold text-th8-red uppercase">
                manufacturing
              </p>
            </div>
            <h3 class="font-semibold text-slate-900">
              โรงงานผลิต / ทีม Production &amp; Maintenance
            </h3>
            <p class="text-slate-700">
              เอา log, breakdown, defect, maintenance มาทำเป็น insight
              ให้เห็นปัญหาซ้ำ ๆ โดยไม่ต้องรื้อ Excel ทุกเดือน
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- WHAT WE DO -->
    <section class="border-b border-slate-200 bg-white" id="what-we-do">
      <div
        class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12 space-y-6"
      >
        <div class="grid lg:grid-cols-[1.4fr,1fr] gap-6 items-start">
          <!-- Left: steps -->
          <div class="space-y-5">
            <div class="space-y-2">
              <h2 class="text-lg sm:text-xl font-semibold text-slate-900">
                เราไม่ได้เริ่มจาก “ทำ AI อะไรดี” — เราเริ่มจาก “ทำไมคนถึงเหนื่อย”
              </h2>
              <p class="text-sm text-slate-600 max-w-3xl">
                โฟลว์การทำงานของเราเรียบง่าย เพื่อให้ใช้ได้จริงในบริษัทไทย
                ไม่ว่าจะเป็นทีม Operation, IT หรือฝ่ายบริหาร
              </p>
            </div>

            <div class="grid md:grid-cols-3 gap-4 text-[13px]">
              <div
                class="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 space-y-2"
              >
                <div class="flex items-center gap-2 mb-1">
                  <div
                    class="h-6 w-6 rounded-full bg-red-50 flex items-center justify-center text-[11px] font-semibold text-th8-red"
                  >
                    1
                  </div>
                  <p class="text-[11px] font-semibold text-th8-red uppercase">
                    step 1 · audit &amp; walk-through
                  </p>
                </div>
                <h3 class="font-semibold text-slate-900">
                  เดินดูของจริงก่อนแตะ AI
                </h3>
                <p class="text-slate-700">
                  นั่งคุยกับคนหน้างาน, เดิน flow, ดู Excel, ดู LINE กลุ่ม
                  และระบบที่ใช้จริง เพื่อหาว่า
                  “ตรงไหนคือจุดเหนื่อยที่ซ้ำ ๆ”
                </p>
              </div>
              <div
                class="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 space-y-2"
              >
                <div class="flex items-center gap-2 mb-1">
                  <div
                    class="h-6 w-6 rounded-full bg-red-50 flex items-center justify-center text-[11px] font-semibold text-th8-red"
                  >
                    2
                  </div>
                  <p class="text-[11px] font-semibold text-th8-red uppercase">
                    step 2 · small pilot agent
                  </p>
                </div>
                <h3 class="font-semibold text-slate-900">
                  เริ่มจาก agent เล็ก ๆ ก่อน
                </h3>
                <p class="text-slate-700">
                  ไม่ทำทั้งองค์กรในทีเดียว เริ่มจาก 1–2 agent
                  ที่แก้ปัญหาชัดเจน เช่น stock, order หรือ report รายวัน
                </p>
              </div>
              <div
                class="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 space-y-2"
              >
                <div class="flex items-center gap-2 mb-1">
                  <div
                    class="h-6 w-6 rounded-full bg-red-50 flex items-center justify-center text-[11px] font-semibold text-th8-red"
                  >
                    3
                  </div>
                  <p class="text-[11px] font-semibold text-th8-red uppercase">
                    step 3 · roll-out &amp; refine
                  </p>
                </div>
                <h3 class="font-semibold text-slate-900">
                  ปรับจาก feedback หน้างานจริง
                </h3>
                <p class="text-slate-700">
                  เก็บ feedback จากคนใช้จริง ปรับ prompt / rule / workflow
                  จนกลายเป็นส่วนหนึ่งของงานประจำวัน
                </p>
              </div>
            </div>
          </div>

          <!-- Right: Illustration card -->
          <div class="flex justify-center mt-4 lg:mt-0">
            <div
              class="max-w-xs w-full rounded-3xl border border-slate-200 bg-slate-50 p-4 flex flex-col items-center gap-3"
            >
              <!-- ใช้ไฟล์จาก src/assets/home-what-we-do-process.svg -->
              <img
                :src="processIllustration"
                alt="Agentic workflow process illustration"
                class="h-32 w-auto object-contain"
              />
              <p
                class="text-[12px] text-slate-600 text-center leading-relaxed"
              >
                ภาพรวมของโปรเจกต์ส่วนใหญ่:
                เริ่มจาก 1–2 flow ที่ชัดเจน → ทำ pilot → ปรับจากการใช้งานจริง →
                ค่อยขยายไปแผนกอื่น
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- MINI CASES -->
    <section class="border-b border-slate-200 bg-slate-50">
      <div
        class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-4"
      >
        <div class="flex flex-wrap items-center justify-between gap-3">
          <div class="space-y-1">
            <div class="flex items-center gap-2">
              <img
                :src="caseStudyIcon"
                alt=""
                class="h-5 w-5"
              />
              <h2 class="text-lg sm:text-xl font-semibold text-slate-900">
                อยากเห็นเคสจริงมากกว่านี้?
              </h2>
            </div>
            <p class="text-sm text-slate-600">
              ผมสรุปเคสตัวอย่างแบบไม่เปิดชื่อบริษัทไว้ให้ดูแนวทาง
              — เผื่อคุณเห็นจุดที่คล้ายกัน
            </p>
          </div>
          <RouterLink
            :to="{ name: 'case-studies' }"
            class="inline-flex items-center justify-center rounded-full border border-slate-300 text-[12px] text-slate-700 px-4 py-1.5 hover:border-red-300 hover:text-th8-red transition-colors"
          >
            เปิดดู Case Studies →
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- CONTACT -->
    <section class="bg-slate-900 text-slate-50" id="contact">
      <div
        class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12 grid md:grid-cols-[1.2fr,0.9fr] gap-8 items-start"
      >
        <div class="space-y-3">
          <p
            class="text-[11px] font-semibold tracking-[0.20em] uppercase text-red-300"
          >
            let&apos;s talk
          </p>
          <h2 class="text-lg sm:text-xl font-semibold">
            ลองคุยกัน 30 นาที — เอาปัญหาจริงของคุณมาวางบนโต๊ะ
          </h2>
          <p class="text-sm text-slate-200 max-w-xl">
            ไม่ต้องทำ BRD ยาว ๆ แค่เอา flow ง่าย ๆ ที่คุณปวดหัวที่สุดในตอนนี้มาเล่า
            เดี๋ยวเราช่วย map ให้ว่าตรงไหนเอา AI/Agentic เข้ามาช่วยได้บ้าง
          </p>
          <ul class="text-[12px] text-slate-200 space-y-1.5">
            <li>• ไม่บังคับซื้อ ไม่ปิดการขายในครั้งแรก</li>
            <li>• โฟกัสที่ “เริ่มตรงไหนแล้วทีมไม่ต่อต้าน”</li>
            <li>• ได้ rough roadmap คร่าว ๆ กลับไปคุยในทีม</li>
          </ul>
        </div>

        <div class="space-y-3">
          <div class="flex justify-center">
            <img
              :src="contactMeetingIllustration"
              alt="Online consultation"
              class="h-20 sm:h-24 w-auto object-contain"
            />
          </div>

          <div
            class="rounded-2xl border border-slate-700 bg-slate-800/60 p-4 sm:p-5 space-y-3 text-[13px]"
          >
            <p class="text-[12px] font-semibold text-slate-200">
              ส่งข้อความสั้น ๆ มาได้เลย (ใช้ template นี้ก็ได้)
            </p>
            <div
              class="rounded-xl bg-slate-900/60 border border-slate-700 p-3 space-y-2"
            >
              <p class="text-[12px] text-slate-300">
                “ตอนนี้บริษัทผมเป็นธุรกิจ…<br />
                ปัญหาที่หนักที่สุดใน operation คือ…<br />
                เราใช้ระบบ… อยู่แล้ว และอยากรู้ว่าพอจะเริ่มเอา AI/Agentic
                เข้ามาช่วยตรงไหนได้บ้าง”
              </p>
            </div>
            <p class="text-[11px] text-slate-400">
              * ช่องทางติอ — ทางทีมจะมี LINE, Email, หรือ Form ให้กรอกค่ะ
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'

// รูป illustration จาก unDraw
import heroIllustration from '../assets/home-hero-ops-dashboard.svg'
import processIllustration from '../assets/home-what-we-do-process.svg'
import contactMeetingIllustration from '../assets/contact-meeting-consult.svg'

// icons จาก Flaticon (แบบ outline)
import logisticsIcon from '../assets/icon-logistics-outline.png'
import fnbIcon from '../assets/icon-fnb-outline.png'
import manufacturingIcon from '../assets/icon-manufacturing-outline.png'
import caseStudyIcon from '../assets/icon-case-study-outline.png'
</script>
