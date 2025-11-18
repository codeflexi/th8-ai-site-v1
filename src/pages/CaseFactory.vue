<template>
  <div class="bg-slate-50 min-h-[calc(100vh-4rem)]">
    <!-- HERO -->
    <section class="border-b border-slate-200 bg-white">
      <div
        class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-9 lg:py-10 space-y-4"
      >
        <p
          class="text-[11px] font-semibold tracking-[0.18em] uppercase text-red-600"
        >
          case study · manufacturing · defect &amp; logs
        </p>
        <h1 class="text-xl sm:text-2xl font-semibold text-slate-900">
          เคส: โรงงานผลิต — ใช้ Agent อ่าน machine log + defect report แทนคน
        </h1>
        <p class="text-sm text-slate-600 max-w-3xl leading-relaxed">
          ก่อนมี Agent ทีมวิศวกรมี log เยอะมาก, defect report เยอะมาก  
          แต่ไม่มีเวลานั่งอ่านและจับ pattern จริง ๆ — ส่วนใหญ่เห็นปัญหาตอนมันใหญ่แล้ว  
          mockup นี้คือ “หน้าจอสรุปเครื่องจักรและ defect” ที่คน production, maintenance, และ management แชร์ร่วมกัน
        </p>
      </div>
    </section>

    <!-- USER JOURNEY -->
    <section class="border-b border-slate-200 bg-slate-50">
      <div
        class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-4"
      >
        <h2 class="text-lg sm:text-xl font-semibold text-slate-900">
          User Journey: จากเสียงเตือนเครื่อง → Log → Defect → การตัดสินใจ
        </h2>

        <div class="grid md:grid-cols-3 gap-4 text-[13px]">
          <div
            class="rounded-2xl border border-slate-200 bg-white px-4 py-4 space-y-2"
          >
            <p class="text-[11px] font-semibold text-red-600 uppercase">
              production supervisor
            </p>
            <h3 class="font-semibold text-slate-900">
              สังเกตเครื่อง “งอแง” แต่ไม่มีเวลาขุด log
            </h3>
            <p class="text-slate-700">
              เห็น downtime เพิ่ม, reject เพิ่ม แต่ log แต่ละเครื่องยาวเกินกว่าจะอ่านทุกวัน
            </p>
          </div>
          <div
            class="rounded-2xl border border-slate-200 bg-white px-4 py-4 space-y-2"
          >
            <p class="text-[11px] font-semibold text-red-600 uppercase">
              maintenance engineer
            </p>
            <h3 class="font-semibold text-slate-900">
              แก้ตามเคสที่ถูกเรียก แต่ไม่เห็นภาพรวม
            </h3>
            <p class="text-slate-700">
              มีทั้ง PM, CM, และ break-fix แยกกันไป — ไม่มีเครื่องมือช่วย highlight ว่า “ควรโฟกัสตัวไหนก่อน”
            </p>
          </div>
          <div
            class="rounded-2xl border border-slate-200 bg-white px-4 py-4 space-y-2"
          >
            <p class="text-[11px] font-semibold text-red-600 uppercase">
              plant manager
            </p>
            <h3 class="font-semibold text-slate-900">
              เห็นแต่ OEE / defect รวม แต่ไม่รู้ต้องคุยกับทีมเรื่องอะไร
            </h3>
            <p class="text-slate-700">
              dashboard มี แต่ไม่รู้ว่าปัญหาหลักมาจากเครื่องไหน, shift ไหน, หรือ defect ชนิดไหน
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- MOCKUP: LOG & DEFECT ANALYZER -->
    <section class="border-b border-slate-200 bg-white">
      <div
        class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-9 space-y-4"
      >
        <div class="flex flex-wrap items-center justify-between gap-3">
          <h2 class="text-lg sm:text-xl font-semibold text-slate-900">
            Mockup: หน้าจอ “Machine Log &amp; Defect Analyzer”
          </h2>
          <p class="text-[11px] text-slate-500">
            ซ้าย: log &amp; defect timeline / ขวา: agent สรุป insight เป็นภาษาคน
          </p>
        </div>

        <div
          class="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-emerald-50 p-4 sm:p-5 shadow-sm"
        >
          <div class="grid lg:grid-cols-[1.2fr,1.1fr] gap-4">
            <!-- Left: timeline & map -->
            <div class="space-y-3 text-[11px]">
              <div class="flex items-center justify-between">
                <p class="font-semibold text-slate-800">
                  Line A · Machine M-04 (Filler)
                </p>
                <span
                  class="inline-flex items-center rounded-full bg-red-50 text-red-700 px-2 py-0.5"
                >
                  Focus: Defect spike past 7 days
                </span>
              </div>

              <!-- Defect timeline (placeholder) -->
              <div
                class="h-20 rounded-xl bg-gradient-to-r from-rose-100 via-amber-100 to-emerald-100 flex items-center justify-center text-[11px] text-slate-600"
              >
                Defect &amp; downtime timeline placeholder
              </div>

              <!-- Log snippets -->
              <div
                class="rounded-2xl border border-slate-200 bg-slate-50 p-3 space-y-2"
              >
                <div class="flex items-center justify-between mb-1">
                  <p class="font-semibold text-slate-800">
                    Sample logs &amp; events
                  </p>
                  <span class="text-slate-400">
                    Filter: last 48 hours · critical
                  </span>
                </div>
                <div class="space-y-1.5">
                  <p class="font-mono text-[11px] text-slate-700 truncate">
                    [2025-11-10 11:24:02] WARN · Pressure deviation +12% above spec
                  </p>
                  <p class="font-mono text-[11px] text-slate-700 truncate">
                    [2025-11-10 11:26:17] INFO · Auto-correction triggered (VALVE-3)
                  </p>
                  <p class="font-mono text-[11px] text-slate-700 truncate">
                    [2025-11-10 14:03:51] ERROR · Short-stop &gt; 5 min, cause: SENSOR-7 noise
                  </p>
                  <p class="font-mono text-[11px] text-slate-700 truncate">
                    [2025-11-11 09:15:03] DEFECT · Underfill &gt; 3% of batch #A41
                  </p>
                </div>
              </div>
            </div>

            <!-- Right: agent insight -->
            <div class="space-y-3 text-[11px]">
              <div
                class="rounded-2xl border border-slate-200 bg-white p-3 space-y-2"
              >
                <div class="flex items-center justify-between mb-1">
                  <p class="font-semibold text-slate-800">
                    Agent summary · M-04 (last 14 days)
                  </p>
                  <span
                    class="inline-flex items-center rounded-full bg-amber-50 text-amber-700 px-2 py-0.5"
                  >
                    Attention: repeat pattern
                  </span>
                </div>
                <ul class="space-y-1.5 text-slate-700">
                  <li>
                    • Defect type <span class="font-semibold">“underfill”</span> เพิ่มขึ้น
                    และส่วนใหญ่เกิดใน
                    <span class="font-semibold">Shift B (14:00–22:00)</span>
                  </li>
                  <li>
                    • เกิดร่วมกับเหตุการณ์
                    <span class="font-semibold">pressure deviation + sensor noise</span>
                    บ่อยครั้ง
                  </li>
                  <li>
                    • เมื่อมี short-stop เกิน 5 นาที โอกาสเกิด defect ใน batch ถัดไปสูงขึ้น ~
                    <span class="font-semibold">23%</span>
                  </li>
                </ul>
              </div>

              <div
                class="rounded-2xl border border-slate-200 bg-white p-3 space-y-2"
              >
                <p class="font-semibold text-slate-800">
                  Suggested focus for next maintenance discussion
                </p>
                <ul class="space-y-1.5 text-slate-700">
                  <li>
                    1. ตรวจสอบ calibration ของ SENSOR-7 + VALVE-3 สำหรับ line A, machine M-04
                  </li>
                  <li>
                    2. ทบทวน SOP หลัง short-stop &gt; 5 นาที โดยเฉพาะใน Shift B
                  </li>
                  <li>
                    3. ตั้ง rule ให้ agent แจ้งเตือนทันทีเมื่อ pattern นี้เริ่มเกิดซ้ำ
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <p class="text-[10px] text-slate-500 mt-2">
            * หน้านี้สามารถต่อกับ historian / SCADA / MES / Excel defect report ได้ในเวอร์ชัน production
          </p>
        </div>
      </div>
    </section>

    <!-- WOW DASHBOARD -->
    <section class="bg-slate-900 text-slate-50">
      <div
        class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-9 lg:py-10 space-y-4"
      >
        <div class="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 class="text-lg sm:text-xl font-semibold">
              Dashboard ที่บอกได้ชัดว่า “โรงงานดีขึ้นตรงไหน”
            </h2>
            <p class="text-[12px] text-slate-300 max-w-xl">
              ไม่ได้ดูแค่ OEE รวม แต่แยกว่า “เพราะอะไร” ให้เห็นภาพแบบพูดคุยกันได้ในห้องประชุม
            </p>
          </div>
        </div>

        <div class="grid md:grid-cols-4 gap-4 text-[13px]">
          <div
            class="rounded-2xl bg-slate-800 border border-slate-700 px-4 py-4 space-y-2"
          >
            <p class="text-[11px] font-semibold text-red-300 uppercase">
              defect rate
            </p>
            <h3 class="text-lg font-semibold">
              -12.3%
            </h3>
            <p class="text-slate-300 text-[12px]">
              เทียบกับ quarter ก่อน หลังเริ่ม monitor pattern defect จริงจัง
            </p>
          </div>
          <div
            class="rounded-2xl bg-slate-800 border border-slate-700 px-4 py-4 space-y-2"
          >
            <p class="text-[11px] font-semibold text-red-300 uppercase">
              unplanned downtime
            </p>
            <h3 class="text-lg font-semibold">
              -9.7%
            </h3>
            <p class="text-slate-300 text-[12px]">
              จากการเห็นเครื่องที่ “งอแงซ้ำ” ก่อนจะล้มจริง
            </p>
          </div>
          <div
            class="rounded-2xl bg-slate-800 border border-slate-700 px-4 py-4 space-y-2"
          >
            <p class="text-[11px] font-semibold text-red-300 uppercase">
              insight speed
            </p>
            <h3 class="text-lg font-semibold">
              &lt; 1 day
            </h3>
            <p class="text-slate-300 text-[12px]">
              จากเดิมต้องรอรายงานปลายสัปดาห์ → ตอนนี้เห็น pattern ได้ในวันถัดไป
            </p>
          </div>
          <div
            class="rounded-2xl bg-slate-800 border border-slate-700 px-4 py-4 space-y-2"
          >
            <p class="text-[11px] font-semibold text-red-300 uppercase">
              engineering focus
            </p>
            <h3 class="text-lg font-semibold">
              3–5 จุดชัดเจน
            </h3>
            <p class="text-slate-300 text-[12px]">
              แทนที่จะไล่ดู log ทั้งหมด agent สรุปให้ว่า “ควรโฟกัสเครื่อง / shift / defect ไหนก่อน”
            </p>
          </div>
        </div>

        <div class="pt-2">
          <RouterLink
            :to="{ name: 'case-studies' }"
            class="inline-flex items-center justify-center rounded-full bg-slate-100 text-slate-900 text-[12px] font-medium px-4 py-2 hover:bg-white transition-colors"
          >
            ← กลับไปหน้า Case Studies
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
