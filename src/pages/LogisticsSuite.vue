<template>
  <div class="bg-slate-50 min-h-[calc(100vh-4rem)]">
    <!-- HERO -->
    <section
      class="border-b border-slate-200 bg-gradient-to-b from-rose-50 via-white to-slate-50"
      id="top"
    >
      <div
        class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10 flex flex-col gap-6"
      >
        <!-- Language switch -->
        <div class="flex justify-end">
          <div
            class="inline-flex items-center gap-1 text-[11px] rounded-full bg-white/80 border border-slate-200 px-2 py-1"
          >
            <span class="font-semibold text-red-600">TH</span>
            <span class="text-slate-400">/</span>
            <RouterLink
              :to="{ name: 'logistics-en' }"
              class="text-slate-500 hover:text-red-600"
            >
              EN
            </RouterLink>
          </div>
        </div>

        <div class="grid lg:grid-cols-[1.1fr,1.1fr] gap-6 items-start">
          <!-- Left: copy -->
          <div class="space-y-3">
            <p
              class="text-[11px] font-semibold tracking-[0.18em] uppercase text-red-600"
            >
              logistics &amp; fulfillment · agent suite
            </p>
            <h1
              class="text-xl sm:text-2xl lg:text-[26px] font-semibold text-slate-900 leading-snug"
            >
              หน้าจอเดียวที่ช่วยให้ทั้งคลังสินค้าและผู้บริหาร “เห็นภาพเดียวกัน”
            </h1>
            <p class="text-sm text-slate-600 leading-relaxed">
              หน้า mockup นี้ไว้ใช้เล่าในห้องประชุมง่าย ๆ ว่า  
              ถ้าเราเอา AI เข้าไปอยู่ในคลังสินค้าจริง ๆ มันจะช่วยตรงไหนบ้าง —
              โดยไม่ต้องอธิบายคำว่า LLM, Agentic, RAG ให้ทุกคนปวดหัว
            </p>
            <ul class="text-sm text-slate-700 space-y-1.5">
              <li>• หัวหน้าคลังสินค้า → ดูงานวันนี้, peak ช่วงไหน, เสริมคนตรงไหน</li>
              <li>• ทีมปฏิบัติการ → เห็นเคสที่ต้องรีบจัดการก่อน</li>
              <li>• ผู้บริหาร → เห็น KPI + ปัญหาซ้ำ ๆ ใน 1 หน้า</li>
            </ul>
            <p class="text-[11px] text-slate-500">
              ด้านล่างคือภาพตัวอย่าง 2 ส่วน:  
              ภาพรวม dashboard + ภาพ “1 วันถ้ามี TH8.AI อยู่ในคลังสินค้าคุณ”
            </p>
          </div>

          <!-- Right: Mock dashboard (vector-ish) -->
          <div
            class="rounded-3xl border border-rose-100 bg-white shadow-sm p-4 sm:p-5 space-y-3"
            id="mockup"
          >
            <!-- Top bar -->
            <div class="flex items-center justify-between mb-1">
              <div class="flex items-center gap-2">
                <div class="h-2 w-2 rounded-full bg-red-400"></div>
                <div class="h-2 w-2 rounded-full bg-amber-300"></div>
                <div class="h-2 w-2 rounded-full bg-emerald-400"></div>
                <span
                  class="ml-2 text-[11px] font-semibold text-slate-500"
                >
                  TH8.AI · Logistics Command Panel
                </span>
              </div>
              <div
                class="flex items-center gap-2 text-[11px] text-slate-500"
              >
                <span class="hidden sm:inline">DC: Central · วันนี้</span>
                <span
                  class="inline-flex items-center rounded-full bg-slate-100 px-2 py-0.5"
                >
                  09:45
                </span>
              </div>
            </div>

            <!-- Agent summary chips -->
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[10px]">
              <div
                class="rounded-2xl bg-red-50 border border-red-100 px-2.5 py-2"
              >
                <p
                  class="font-semibold text-[11px] text-red-700 mb-0.5"
                >
                  Daily Ops
                </p>
                <p class="text-slate-700">
                  Volume วันนี้ +18%<br />
                  เสริมคน Zone B
                </p>
              </div>
              <div
                class="rounded-2xl bg-emerald-50 border border-emerald-100 px-2.5 py-2"
              >
                <p
                  class="font-semibold text-[11px] text-emerald-700 mb-0.5"
                >
                  Reconcile
                </p>
                <p class="text-slate-700">
                  3 stock ไม่ตรง<br />
                  1 เคสเร่งด่วน
                </p>
              </div>
              <div
                class="rounded-2xl bg-sky-50 border border-sky-100 px-2.5 py-2"
              >
                <p
                  class="font-semibold text-[11px] text-sky-700 mb-0.5"
                >
                  Exception
                </p>
                <p class="text-slate-700">
                  2 เคสใช้ SOP พิเศษ<br />
                  มีตัวอย่างเคสเก่า
                </p>
              </div>
              <div
                class="rounded-2xl bg-slate-50 border border-slate-200 px-2.5 py-2"
              >
                <p
                  class="font-semibold text-[11px] text-slate-800 mb-0.5"
                >
                  KPI &amp; Mgmt
                </p>
                <p class="text-slate-700">
                  SLA 96%<br />
                  OT ลดลง 12%
                </p>
              </div>
            </div>

            <!-- Lower section -->
            <div class="grid md:grid-cols-[1.4fr,1.1fr] gap-3 pt-2">
              <!-- Left: workload -->
              <div
                class="rounded-2xl bg-slate-50 border border-slate-200 p-3 space-y-2"
              >
                <div class="flex items-center justify-between mb-1">
                  <p
                    class="text-[11px] font-semibold text-slate-700"
                  >
                    Workload วันนี้
                  </p>
                  <span class="text-[10px] text-slate-400">
                    Pick · Pack · Ship
                  </span>
                </div>
                <div
                  class="h-20 rounded-xl bg-gradient-to-r from-emerald-100 via-amber-100 to-rose-100 flex items-center justify-center text-[11px] text-slate-600"
                >
                  กราฟโหลดงานทั้งวัน (ต่อจริงใช้ chart จริงได้)
                </div>
                <ul
                  class="text-[11px] text-slate-600 space-y-1 pt-1"
                >
                  <li>• Peak: 11:00–13:00, 19:00–21:00</li>
                  <li>• แนะนำโยกคนจาก Zone A → B ช่วงเที่ยง</li>
                </ul>
              </div>

              <!-- Right: alerts -->
              <div
                class="rounded-2xl bg-slate-50 border border-slate-200 p-3 space-y-2"
              >
                <div class="flex items-center justify-between mb-1">
                  <p
                    class="text-[11px] font-semibold text-slate-700"
                  >
                    Alerts วันนี้
                  </p>
                  <span
                    class="text-[10px] text-red-500 font-medium"
                  >
                    4 เคสที่ควรจัดการก่อน
                  </span>
                </div>
                <div class="space-y-1.5 text-[11px]">
                  <div class="flex items-start gap-2">
                    <span
                      class="mt-[3px] h-2 w-2 rounded-full bg-red-500"
                    ></span>
                    <p class="text-slate-700">
                      Order #A10239 ส่งช้าเกิน 24 ชม. → แนะนำให้ฝ่ายบริการลูกค้าติดต่อ
                    </p>
                  </div>
                  <div class="flex items-start gap-2">
                    <span
                      class="mt-[3px] h-2 w-2 rounded-full bg-amber-400"
                    ></span>
                    <p class="text-slate-700">
                      SKU-XY21 stock ระบบมากกว่าของจริง 12 ชิ้น → แจ้งทีม inventory
                    </p>
                  </div>
                  <div class="flex items-start gap-2">
                    <span
                      class="mt-[3px] h-2 w-2 rounded-full bg-emerald-500"
                    ></span>
                    <p class="text-slate-700">
                      เคส “ที่อยู่เปลี่ยนระหว่างขนส่ง” → มี SOP แนะนำให้กดดู
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <p class="text-[10px] text-slate-500 pt-1">
              * ทั้งหมดนี้เป็น mockup เอาไว้เล่า — เวอร์ชันจริงสามารถต่อ API จาก WMS/ERP ของคุณได้
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ONE DAY STORY -->
    <section class="border-b border-slate-200 bg-white">
      <div
        class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10 space-y-5"
      >
        <div class="space-y-2">
          <h2 class="text-lg sm:text-xl font-semibold text-slate-900">
            1 วันในคลังสินค้า ถ้ามี TH8.AI อยู่จริง
          </h2>
          <p class="text-sm text-slate-600 max-w-3xl">
            ใช้ section นี้เล่าให้ทีมฟังในห้องประชุม ว่าเราคาดหวังอะไรจากระบบ
            ไม่ใช่ขายว่า “AI ทำได้ทุกอย่าง”
          </p>
        </div>

        <div class="grid md:grid-cols-4 gap-4 text-[13px]">
          <div
            class="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3 space-y-1.5"
          >
            <p
              class="text-[11px] font-semibold text-red-600 uppercase"
            >
              08:30 · เริ่มกะเช้า
            </p>
            <p class="font-semibold text-slate-900">
              หัวหน้าเห็นงานทั้งวันใน 1 หน้า
            </p>
            <p class="text-slate-700">
              Daily Ops Agent สรุปว่า Zone ไหนจะหนักกว่าปกติ
              และควรเสริมคนตรงไหนก่อน
            </p>
          </div>
          <div
            class="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3 space-y-1.5"
          >
            <p
              class="text-[11px] font-semibold text-red-600 uppercase"
            >
              11:00 · ระหว่าง peak
            </p>
            <p class="font-semibold text-slate-900">
              ระบบเตือนก่อนลูกค้าโทร
            </p>
            <p class="text-slate-700">
              Reconciliation Agent เจอ stock ไม่ตรง + order ติดค้าง
              แล้วจัดลำดับให้ทีมไปเคลียร์
            </p>
          </div>
          <div
            class="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3 space-y-1.5"
          >
            <p
              class="text-[11px] font-semibold text-red-600 uppercase"
            >
              14:00 · เคสแปลก ๆ
            </p>
            <p class="font-semibold text-slate-900">
              ไม่ต้องเดาเองทุกครั้ง
            </p>
            <p class="text-slate-700">
              Exception &amp; SOP Agent ดึง SOP + เคสเก่าที่คล้ายกันมาให้ดูใน 1 หน้า
            </p>
          </div>
          <div
            class="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3 space-y-1.5"
          >
            <p
              class="text-[11px] font-semibold text-red-600 uppercase"
            >
              17:00 · สรุปวัน
            </p>
            <p class="font-semibold text-slate-900">
              ผู้บริหารเห็นทั้ง KPI + Pain
            </p>
            <p class="text-slate-700">
              KPI &amp; Management Agent ส่งสรุปว่าช่วงนี้ควรโฟกัสอะไร  
              ไม่ใช่แค่ตัวเลขสวย ๆ
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- FOUR AGENTS (SHORT) -->
    <section class="border-b border-slate-200 bg-slate-50">
      <div
        class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10 space-y-5"
      >
        <div class="space-y-2">
          <h2 class="text-lg sm:text-xl font-semibold text-slate-900">
            สรุปสั้น ๆ: เราแบ่งความคิดออกเป็น 4 Agent ง่าย ๆ เท่านั้น
          </h2>
        </div>

        <div class="grid md:grid-cols-2 gap-4 text-[13px]">
          <div
            class="rounded-2xl border border-slate-200 bg-white px-4 py-4 space-y-2"
          >
            <div class="flex items-center gap-2">
              <div
                class="h-8 w-8 rounded-xl bg-red-100 flex items-center justify-center text-[16px]"
              >
                📦
              </div>
              <div>
                <p
                  class="text-[11px] font-semibold text-red-600 uppercase"
                >
                  01 · Daily Ops Agent
                </p>
                <p class="font-semibold text-slate-900">
                  ผู้ช่วยวางแผนงานแต่ละวัน
                </p>
              </div>
            </div>
            <p class="text-slate-700">
              ให้หัวหน้าเห็นงานวันนี้เทียบกับกำลังคน แล้วแนะนำการจัดทีมแบบง่าย ๆ
            </p>
          </div>

          <div
            class="rounded-2xl border border-slate-200 bg-white px-4 py-4 space-y-2"
          >
            <div class="flex items-center gap-2">
              <div
                class="h-8 w-8 rounded-xl bg-emerald-100 flex items-center justify-center text-[16px]"
              >
                🔍
              </div>
              <div>
                <p
                  class="text-[11px] font-semibold text-red-600 uppercase"
                >
                  02 · Reconciliation Agent
                </p>
                <p class="font-semibold text-slate-900">
                  ตัวจับผิด stock / order / shipment
                </p>
              </div>
            </div>
            <p class="text-slate-700">
              เชื่อมข้อมูลจากหลายระบบมาหา “สิ่งที่ไม่ควรปล่อยผ่านวันนี้”
            </p>
          </div>

          <div
            class="rounded-2xl border border-slate-200 bg-white px-4 py-4 space-y-2"
          >
            <div class="flex items-center gap-2">
              <div
                class="h-8 w-8 rounded-xl bg-sky-100 flex items-center justify-center text-[16px]"
              >
                📘
              </div>
              <div>
                <p
                  class="text-[11px] font-semibold text-red-600 uppercase"
                >
                  03 · Exception &amp; SOP Agent
                </p>
                <p class="font-semibold text-slate-900">
                  สมองรวม SOP + เคสเก่า
                </p>
              </div>
            </div>
            <p class="text-slate-700">
              เวลามีเคสแปลก ๆ ให้ถาม Agent แทนการวิ่งถามคนเดียวทั้งคลังสินค้า
            </p>
          </div>

          <div
            class="rounded-2xl border border-slate-200 bg-white px-4 py-4 space-y-2"
          >
            <div class="flex items-center gap-2">
              <div
                class="h-8 w-8 rounded-xl bg-slate-200 flex items-center justify-center text-[16px]"
              >
                📊
              </div>
              <div>
                <p
                  class="text-[11px] font-semibold text-red-600 uppercase"
                >
                  04 · KPI &amp; Management Agent
                </p>
                <p class="font-semibold text-slate-900">
                  แปลภาษาหน้างานให้ผู้บริหารเข้าใจ
                </p>
              </div>
            </div>
            <p class="text-slate-700">
              สรุป KPI + Insight เป็นภาษาคน ให้ใช้คุยใน meeting ได้ตรงประเด็น
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="bg-slate-900 text-slate-50">
      <div
        class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12 flex flex-col md:flex-row items-center justify-between gap-6"
      >
        <div class="space-y-3">
          <p
            class="text-[11px] font-semibold tracking-[0.20em] uppercase text-red-300"
          >
            next step
          </p>
          <h2 class="text-lg sm:text-xl font-semibold">
            ถ้าอยากลองให้ agent แบบนี้อยู่ในคลังสินค้าของคุณจริง ๆ
          </h2>
          <p class="text-sm text-slate-200 max-w-xl">
            เริ่มจากด้านเล็ก ๆ ด้านเดียวได้ เช่น stock, order, หรือ report รายวัน
            แล้วค่อยขยายทีหลัง — สำคัญคือ “ต้องมีคนหน้างานอยากใช้” ไม่ใช่แค่ผู้บริหารอยากลอง
          </p>
        </div>
        <div class="space-y-2 text-[12px]">
          <RouterLink
            :to="{ name: 'contact' }"
            class="inline-flex items-center justify-center rounded-full bg-red-500 text-white text-[12px] font-medium px-4 py-2 shadow-sm hover:bg-red-400 transition-colors"
          >
            นัดคุย Use Case Logistics ของคุณ
          </RouterLink>
          <p class="text-slate-400">
            * ใช้หน้านี้เป็นสไลด์เปิดใน meeting ได้เลย แล้วคุยต่อจาก pain จริงในองค์กรคุณ
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
