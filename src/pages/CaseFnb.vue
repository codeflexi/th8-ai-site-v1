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
          case study · f&amp;b chain · central kitchen
        </p>
        <h1 class="text-xl sm:text-2xl font-semibold text-slate-900">
          เคส: ร้านอาหารหลายสาขา — วางแผนสั่งของเข้าครัวกลางจาก “ยอดขายจริง”
        </h1>
        <p class="text-sm text-slate-600 max-w-3xl leading-relaxed">
          ก่อนมี Agent คนต้องใช้เวลาเกือบทั้งเช้าไล่ดูยอดขาย + สต๊อกของแต่ละสาขา
          แล้วเดาเองว่าจะสั่งของเข้าครัวกลางเท่าไหร่ดี —  
          กลัวของหมดก็สั่งเผื่อ สุดท้ายก็เหลือ / หมดอายุ  
          หน้า mockup นี้คือ “หน้าควบคุมการสั่งของ” ที่ให้ทั้งทีมเห็นภาพเดียวกัน
        </p>
      </div>
    </section>

    <!-- USER JOURNEY LANE -->
    <section class="border-b border-slate-200 bg-slate-50">
      <div
        class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-4"
      >
        <div class="flex flex-wrap items-center justify-between gap-3">
          <h2 class="text-lg sm:text-xl font-semibold text-slate-900">
            User Journey: จากหน้าร้าน → ครัวกลาง → ฝ่ายการเงิน
          </h2>
          <p class="text-[11px] text-slate-500">
            ใช้เล่าให้ทีมฟังก่อนดูหน้าจอ mockup ด้านล่าง
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-4 text-[13px]">
          <!-- Branch manager -->
          <div
            class="rounded-2xl border border-slate-200 bg-white px-4 py-4 space-y-2"
          >
            <p class="text-[11px] font-semibold text-red-600 uppercase">
              role 1 · branch manager
            </p>
            <h3 class="font-semibold text-slate-900">
              ก่อน: ต้องเดาเองจากยอดขายเมื่อวาน
            </h3>
            <p class="text-slate-700">
              ทุกเช้าต้องเปิดยอดขาย, เหลือสต๊อก, แคมเปญที่กำลังวิ่ง —  
              แล้วเดาว่าวันนี้ควรสั่งวัตถุดิบเพิ่มเท่าไหร่
            </p>
          </div>

          <!-- Central kitchen planner -->
          <div
            class="rounded-2xl border border-slate-200 bg-white px-4 py-4 space-y-2"
          >
            <p class="text-[11px] font-semibold text-red-600 uppercase">
              role 2 · central kitchen planner
            </p>
            <h3 class="font-semibold text-slate-900">
              ก่อน: ถูกดันจากทุกสาขา แต่ไม่มีภาพรวมที่ชัด
            </h3>
            <p class="text-slate-700">
              รับออเดอร์จากหลายสาขาแบบกระจัดกระจาย  
              ไม่รู้ว่าสาขาไหนสั่งเผื่อ / สั่งน้อยเกินไป
            </p>
          </div>

          <!-- Finance / owner -->
          <div
            class="rounded-2xl border border-slate-200 bg-white px-4 py-4 space-y-2"
          >
            <p class="text-[11px] font-semibold text-red-600 uppercase">
              role 3 · finance / owner
            </p>
            <h3 class="font-semibold text-slate-900">
              ก่อน: เห็นแต่ยอดรวม ไม่รู้ของเสียมาจากไหน
            </h3>
            <p class="text-slate-700">
              เห็นแค่ต้นทุนรวมสูง แต่ไม่รู้ว่าเกิดจากการสั่งเกิน, ทำเกิน, หรือบริหารสต๊อกไม่ดี
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- MOCKUP UI: CENTRAL KITCHEN COCKPIT -->
    <section class="border-b border-slate-200 bg-white">
      <div
        class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-9 space-y-4"
      >
        <div class="flex flex-wrap items-center justify-between gap-3">
          <h2 class="text-lg sm:text-xl font-semibold text-slate-900">
            Mockup: หน้าจอ “Central Kitchen Planning Cockpit”
          </h2>
          <p class="text-[11px] text-slate-500">
            ด้านซ้าย: Flow การสั่ง / ด้านขวา: Suggestion + Demand Timeline
          </p>
        </div>

        <div
          class="rounded-3xl border border-rose-100 bg-gradient-to-br from-rose-50 via-white to-slate-50 p-4 sm:p-5 shadow-sm"
        >
          <div class="grid lg:grid-cols-[1.1fr,1.1fr] gap-4">
            <!-- Left: flow & branches -->
            <div class="space-y-3">
              <div class="flex items-center justify-between">
                <p
                  class="text-[11px] font-semibold text-slate-700"
                >
                  Today · Central Kitchen Overview
                </p>
                <span
                  class="text-[10px] inline-flex items-center rounded-full bg-slate-900 text-slate-50 px-2 py-0.5"
                >
                  Lunch Peak · Fri
                </span>
              </div>

              <!-- Step flow -->
              <div class="flex flex-wrap gap-2 text-[10px]">
                <div
                  class="inline-flex items-center gap-1 rounded-full bg-red-100 text-red-700 px-2.5 py-1"
                >
                  <span class="h-1.5 w-1.5 rounded-full bg-red-500"></span>
                  Collect sales &amp; stock
                </div>
                <div
                  class="inline-flex items-center gap-1 rounded-full bg-amber-100 text-amber-800 px-2.5 py-1"
                >
                  <span class="h-1.5 w-1.5 rounded-full bg-amber-500"></span>
                  Forecast demand
                </div>
                <div
                  class="inline-flex items-center gap-1 rounded-full bg-emerald-100 text-emerald-800 px-2.5 py-1"
                >
                  <span class="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                  Suggest purchase &amp; prep
                </div>
                <div
                  class="inline-flex items-center gap-1 rounded-full bg-slate-100 text-slate-700 px-2.5 py-1"
                >
                  <span class="h-1.5 w-1.5 rounded-full bg-slate-500"></span>
                  Confirm &amp; lock plan
                </div>
              </div>

              <!-- Branch list -->
              <div
                class="rounded-2xl border border-slate-200 bg-white p-3 space-y-2 text-[11px]"
              >
                <div class="flex items-center justify-between">
                  <p class="font-semibold text-slate-800">
                    Branch signals · 8 branches
                  </p>
                  <span class="text-slate-400">
                    Focus: Top variance vs plan
                  </span>
                </div>
                <div class="space-y-1.5">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-2">
                      <span
                        class="h-2 w-2 rounded-full bg-red-500"
                      ></span>
                      <span class="font-medium text-slate-800">
                        Branch A · CBD
                      </span>
                    </div>
                    <span class="text-red-600">
                      +32% vs last Fri
                    </span>
                  </div>
                  <p class="text-slate-600">
                    Lunch set &amp; delivery promo still running · Suggest +18% meat &amp; +20% sauce prep
                  </p>
                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-2">
                      <span
                        class="h-2 w-2 rounded-full bg-amber-400"
                      ></span>
                      <span class="font-medium text-slate-800">
                        Branch C · Office zone
                      </span>
                    </div>
                    <span class="text-amber-600">
                      +14% · salad side selling well
                    </span>
                  </div>
                  <p class="text-slate-600">
                    Suggest add 10% more fresh veg · monitor waste in the evening
                  </p>
                </div>
              </div>
            </div>

            <!-- Right: suggestions & timeline -->
            <div class="space-y-3">
              <div
                class="rounded-2xl border border-slate-200 bg-white p-3 space-y-2 text-[11px]"
              >
                <div class="flex items-center justify-between">
                  <p class="font-semibold text-slate-800">
                    Purchase &amp; prep suggestion (today)
                  </p>
                  <span
                    class="inline-flex items-center rounded-full bg-emerald-50 text-emerald-700 px-2 py-0.5"
                  >
                    Waste risk ↓ 18%
                  </span>
                </div>

                <div
                  class="rounded-xl border border-slate-200 bg-slate-50 p-2"
                >
                  <div
                    class="grid grid-cols-[1.4fr,0.8fr,0.8fr,0.8fr] gap-2 mb-1"
                  >
                    <p class="font-semibold text-slate-700">
                      Item
                    </p>
                    <p class="font-semibold text-slate-700">
                      Current
                    </p>
                    <p class="font-semibold text-slate-700">
                      Suggested
                    </p>
                    <p class="font-semibold text-slate-700">
                      Note
                    </p>
                  </div>
                  <div class="h-px bg-slate-200 mb-1"></div>

                  <div
                    class="grid grid-cols-[1.4fr,0.8fr,0.8fr,0.8fr] gap-2 mb-1"
                  >
                    <p class="text-slate-800">
                      Chicken breast (kg)
                    </p>
                    <p class="text-slate-600">
                      120
                    </p>
                    <p class="text-emerald-700">
                      142
                    </p>
                    <p class="text-slate-600">
                      Promo impact + lunch peak
                    </p>
                  </div>
                  <div
                    class="grid grid-cols-[1.4fr,0.8fr,0.8fr,0.8fr] gap-2 mb-1"
                  >
                    <p class="text-slate-800">
                      House salad mix (kg)
                    </p>
                    <p class="text-slate-600">
                      60
                    </p>
                    <p class="text-emerald-700">
                      68
                    </p>
                    <p class="text-slate-600">
                      Keep 5% buffer for evening
                    </p>
                  </div>
                </div>
              </div>

              <div
                class="rounded-2xl border border-slate-200 bg-white p-3 space-y-2 text-[11px]"
              >
                <div class="flex items-center justify-between">
                  <p class="font-semibold text-slate-800">
                    Demand vs prep timeline (mock)
                  </p>
                  <span class="text-slate-400">Lunch &amp; dinner peaks</span>
                </div>
                <div
                  class="h-24 rounded-xl bg-gradient-to-r from-sky-100 via-emerald-100 to-amber-100 flex items-center justify-center text-[11px] text-slate-600"
                >
                  Demand &amp; prep chart placeholder
                </div>
                <p class="text-slate-600">
                  Highlight: if we don’t adjust prep now, risk of stock-out at 19:00 in Branch A &amp; C.
                </p>
              </div>
            </div>
          </div>

          <p class="text-[10px] text-slate-500 mt-2">
            * หน้านี้ใช้เป็น mock ในห้องประชุม — เวอร์ชันจริงสามารถดึงยอดขายจริงจาก POS / BI / Excel / Data Warehouse ได้
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
              Dashboard สรุปผลที่คุยกับผู้บริหารได้ใน 5 นาที
            </h2>
            <p class="text-[12px] text-slate-300 max-w-xl">
              ไม่ต้องเปิด 10 report — เอาแค่ “สิ่งที่ควรตัดสินใจวันนี้” ให้ชัด
            </p>
          </div>
        </div>

        <div class="grid md:grid-cols-4 gap-4 text-[13px]">
          <div
            class="rounded-2xl bg-slate-800 border border-slate-700 px-4 py-4 space-y-2"
          >
            <p
              class="text-[11px] font-semibold text-red-300 uppercase"
            >
              food cost
            </p>
            <h3 class="text-lg font-semibold">
              -4.8%
            </h3>
            <p class="text-slate-300 text-[12px]">
              เทียบกับ 4 สัปดาห์ก่อน — จากการสั่งของตาม pattern จริง ไม่ใช่ตามความรู้สึก
            </p>
          </div>
          <div
            class="rounded-2xl bg-slate-800 border border-slate-700 px-4 py-4 space-y-2"
          >
            <p
              class="text-[11px] font-semibold text-red-300 uppercase"
            >
              waste
            </p>
            <h3 class="text-lg font-semibold">
              -18%
            </h3>
            <p class="text-slate-300 text-[12px]">
              ของเสียจากผักและโปรตีนหลัก ลดลงหลังเริ่มใช้ suggestion agent
            </p>
          </div>
          <div
            class="rounded-2xl bg-slate-800 border border-slate-700 px-4 py-4 space-y-2"
          >
            <p
              class="text-[11px] font-semibold text-red-300 uppercase"
            >
              planning time
            </p>
            <h3 class="text-lg font-semibold">
              -55%
            </h3>
            <p class="text-slate-300 text-[12px]">
              เวลาที่ผู้จัดการสาขาใช้ในการคิดสั่งของในแต่ละวัน
            </p>
          </div>
          <div
            class="rounded-2xl bg-slate-800 border border-slate-700 px-4 py-4 space-y-2"
          >
            <p
              class="text-[11px] font-semibold text-red-300 uppercase"
            >
              adoption
            </p>
            <h3 class="text-lg font-semibold">
              87%
            </h3>
            <p class="text-slate-300 text-[12px]">
              สาขาที่ใช้ suggestion และปรับแผนตาม agent อย่างน้อย 3 วัน/สัปดาห์
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
