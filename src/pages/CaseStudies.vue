<template>
  <div class="bg-slate-50 min-h-[calc(100vh-4rem)]">
    <!-- Hero -->
    <section class="border-b border-slate-200 bg-white">
      <div
        class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-4"
      >
        <div class="space-y-2">
          <p
            class="text-[11px] font-semibold tracking-[0.18em] uppercase text-red-600"
          >
            case studies
          </p>
          <h1 class="text-xl sm:text-2xl font-semibold text-slate-900">
            ตัวอย่างเคสที่ TH8.AI ใช้แนวคิด Agentic AI &amp; Workflow
          </h1>
          <p class="text-sm text-slate-600 max-w-3xl leading-relaxed">
            ไม่ใช่ทุกเคสที่จะต้องใช้ AI, Agent หรือ RAG เสมอไป
            แต่สำหรับงานบางประเภทที่ “ซับซ้อน, ทำบ่อย, และกินเวลาคนเก่ง” การออกแบบ
            Workflow + Agent ให้ดีตั้งแต่ต้น สามารถเปลี่ยนวิธีทำงานทั้งทีมได้จริง
          </p>
        </div>

        <div class="rounded-2xl bg-slate-50 border border-slate-200 p-4">
          <h2 class="text-xs font-semibold text-slate-700 mb-2">
            เราเลือก 3 เคสตัวอย่างที่มักเจอในธุรกิจไทย:
          </h2>
          <ol class="list-decimal list-inside text-[13px] text-slate-700 space-y-1">
            <li>
              <span class="font-semibold text-slate-900">
                Logistics &amp; Fulfillment:
              </span>
              ศูนย์กระจายสินค้าระดับประเทศที่ต้องไล่เช็ก Stock / Order / Shipment
              จากหลายระบบ
            </li>
            <li>
              <span class="font-semibold text-slate-900">
                F&amp;B Chain:
              </span>
              ร้านอาหารหลายสาขาที่มีครัวกลาง ต้องวางแผนสั่งของแบบไม่ให้ของหมด / ไม่ให้ของเสีย
            </li>
            <li>
              <span class="font-semibold text-slate-900">
                Manufacturing:
              </span>
              โรงงานที่มี Log, Breakdown, Defect Report เยอะ แต่ไม่มีเวลานั่งอ่านเพื่อหา Pattern
            </li>
          </ol>
        </div>
      </div>
    </section>

    <!-- Case list -->
    <section class="border-b border-slate-200 bg-slate-50">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        <!-- Case 1: Logistics -->
        <article
          class="rounded-3xl border border-slate-200 bg-white px-4 sm:px-6 py-5 space-y-3"
        >
          <div class="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p class="text-[11px] font-semibold text-red-600 uppercase">
                case 01 · logistics & fulfillment
              </p>
              <h2 class="text-base sm:text-lg font-semibold text-slate-900">
                ศูนย์กระจายสินค้าระดับประเทศ · ลดงานไล่เช็ก Stock / Order ซ้ำซ้อน
              </h2>
            </div>
            <div
              class="text-[11px] text-slate-500 flex flex-wrap gap-2 items-center"
            >
              <span
                class="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5"
              >
                OMS / WMS / TMS
              </span>
              <span
                class="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5"
              >
                Agentic RAG
              </span>
              <span
                class="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5"
              >
                Vue + Tailwind
              </span>
            </div>
          </div>

          <div class="grid md:grid-cols-[1.4fr,0.9fr] gap-4 text-[13px]">
            <div class="space-y-2">
              <h3 class="text-xs font-semibold text-slate-700">
                1) ปัญหาก่อนเริ่มโปรเจกต์
              </h3>
              <ul class="list-disc list-inside space-y-1 text-slate-700">
                <li>
                  ทีมปฏิบัติการต้องเปิดหลายระบบ (WMS, Order, Excel) เพื่อไล่เช็กว่า
                  Order ไหนจัดแล้ว / ค้าง / ตกหล่น
                </li>
                <li>
                  เคส Stock mismatch / Order ติดค้าง
                  มักจะถูกเจอเมื่อมีปัญหาจริงแล้ว เช่น ลูกค้าตามของ หรือของหาย
                </li>
                <li>
                  ผู้บริหารเห็นเฉพาะ Dashboard รวม
                  แต่ไม่เห็นภาพเชิง “งานในแต่ละวัน” ว่าสิ่งที่ทีมต้องจัดการคืออะไร
                </li>
              </ul>

              <h3 class="text-xs font-semibold text-slate-700 mt-3">
                2) สิ่งที่ TH8.AI ทำ
              </h3>
              <ul class="list-disc list-inside space-y-1 text-slate-700">
                <li>
                  ออกแบบชุด Agent 4 ตัว: Daily Ops, Reconciliation, Exception &amp; SOP,
                  KPI &amp; Management (ตามหน้า Logistics Suite Mockup)
                </li>
                <li>
                  เชื่อมข้อมูลจาก WMS + Order system + Google Sheet ผ่าน API / ETL
                  เพื่อสร้างมุมมองข้อมูลเดียวสำหรับ Agent
                </li>
                <li>
                  สร้างหน้าจอ Vue + Tailwind ให้หัวหน้าโกดังและผู้บริหารใช้งาน
                  พร้อม Alert เคสเสี่ยงหลุด SLA
                </li>
              </ul>
            </div>
            <div
              class="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3 space-y-2"
            >
              <h3 class="text-xs font-semibold text-slate-700">
                3) ผลลัพธ์ที่ได้ (Benchmark)
              </h3>
              <ul class="space-y-1 text-slate-700">
                <li>• ลดเวลาประชุมเช้าไป ~30–40% (ทีมเห็นภาพเดียวกันเร็วขึ้น)</li>
                <li>
                  • เคส Stock mismatch / Order ติดค้าง ถูกเจอเร็วขึ้นภายในวัน
                  แทนที่จะรอถึงสิ้นเดือน
                </li>
                <li>
                  • ผู้บริหารใช้หน้าจอเดียวในการคุยกับทีมเรื่อง KPI และ Pain point
                  แทนการขอไฟล์แยกจากหลายฝ่าย
                </li>
              </ul>
              <RouterLink
                :to="{ name: 'logistics', hash: '#mockup' }"
                class="inline-flex items-center gap-1 text-[11px] text-red-600 hover:text-red-500 mt-1"
              >
                ดูหน้าจอ Logistics Suite Mockup →
              </RouterLink>
            </div>
          </div>
        </article>

        <!-- Case 2: F&B -->
        <article
          class="rounded-3xl border border-slate-200 bg-white px-4 sm:px-6 py-5 space-y-3"
        >
          <div class="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p class="text-[11px] font-semibold text-red-600 uppercase">
                case 02 · f&amp;b chain
              </p>
              <h2 class="text-base sm:text-lg font-semibold text-slate-900">
                ร้านอาหารหลายสาขา · สั่งของเข้าครัวกลางแม่นขึ้น ใช้เวลาน้อยลง
              </h2>
            </div>
          </div>

          <div class="grid md:grid-cols-[1.4fr,0.9fr] gap-4 text-[13px]">
            <div class="space-y-2">
              <h3 class="text-xs font-semibold text-slate-700">
                1) ปัญหาก่อนเริ่มโปรเจกต์
              </h3>
              <ul class="list-disc list-inside space-y-1 text-slate-700">
                <li>
                  แต่ละสาขาต้องกรอก Excel / Google Sheet ยาว ๆ
                  เพื่อส่งยอดสั่งของเข้าครัวกลางทุกวัน / ทุกสัปดาห์
                </li>
                <li>
                  ครัวกลางต้องใช้เวลาประเมินเองว่า “ยอดนี้สมเหตุสมผลไหม”
                  เพราะบางสาขามักสั่งเผื่อเยอะเกินไป
                </li>
                <li>
                  มักจะมีปัญหา “ขาดของยอดนิยม” หรือ “ของล้นสต๊อก”
                  เพราะการประเมินยอดไม่แม่น
                </li>
                <li>
                  เจ้าของต้องเปิดหลายไฟล์เพื่อตามว่าตกลงสาขาไหนสั่งอะไรไปแล้วบ้าง
                </li>
              </ul>

              <h3 class="text-xs font-semibold text-slate-700 mt-3">
                2) สิ่งที่ TH8.AI ทำ
              </h3>
              <ul class="list-disc list-inside space-y-1 text-slate-700">
                <li>
                  สร้าง Agent ช่วย Suggest ยอดสั่งของแต่ละสาขา
                  จากข้อมูลขายย้อนหลัง + เทศกาล + วันในสัปดาห์
                </li>
                <li>
                  ใช้ LINE OA / Web Form ให้สาขายืนยันหรือปรับยอด
                  แทนการนั่งกรอก Excel ยาว ๆ
                </li>
                <li>
                  รวมข้อมูลทั้งหมดให้ครัวกลางเห็นภาพรวมในหน้าจอเดียว
                  พร้อม Alert ถ้าสินค้าบางตัวเข้าใกล้จุดเสี่ยง
                </li>
              </ul>
            </div>
            <div
              class="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3 space-y-2"
          >
              <h3 class="text-xs font-semibold text-slate-700">
                3) ผลลัพธ์ที่ได้ (Benchmark)
              </h3>
              <ul class="space-y-1 text-slate-700">
                <li>• พนักงานหน้าร้านใช้เวลานับของน้อยลง ~20–30%</li>
                <li>
                  • ลดเคสของหมดสต๊อกในเมนูหลัก (Top menu) ลงอย่างชัดเจนในช่วง 2–3 เดือน
                </li>
                <li>
                  • เจ้าของร้านเห็นภาพรวมวัตถุดิบคงเหลือและยอดสั่งแต่ละสาขาแบบใกล้เคียง Real-time
                </li>
              </ul>
              <RouterLink
                :to="{ name: 'case-fnb' }"
                class="inline-flex items-center gap-1 text-[11px] text-red-600 hover:text-red-500 mt-1"
              >
                ดูหน้าจอ F&amp;B Central Kitchen Mockup →
              </RouterLink>
            </div>
          </div>
        </article>

        <!-- Case 3: Manufacturing -->
        <article
          class="rounded-3xl border border-slate-200 bg-white px-4 sm:px-6 py-5 space-y-3"
        >
          <div class="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p class="text-[11px] font-semibold text-red-600 uppercase">
                case 03 · manufacturing
              </p>
              <h2 class="text-base sm:text-lg font-semibold text-slate-900">
                โรงงานผลิต · ช่วยทีม Production &amp; Maintenance เห็นปัญหาซ้ำ ๆ เร็วขึ้น
              </h2>
            </div>
          </div>

          <div class="grid md:grid-cols-[1.4fr,0.9fr] gap-4 text-[13px]">
            <div class="space-y-2">
              <h3 class="text-xs font-semibold text-slate-700">
                1) ปัญหาก่อนเริ่มโปรเจกต์
              </h3>
              <ul class="list-disc list-inside space-y-1 text-slate-700">
                <li>
                  ข้อมูล Breakdown, Downtime, Defect, และการซ่อมบำรุง
                  กระจายอยู่ในหลายระบบ + Excel
                </li>
                <li>
                  การสรุปรายเดือนใช้เวลานาน และมักโฟกัสแค่ตัวเลขรวม
                  ไม่เห็น Pattern ปัญหาซ้ำ ๆ รายเครื่อง / รายไลน์
                </li>
              </ul>

              <h3 class="text-xs font-semibold text-slate-700 mt-3">
                2) สิ่งที่ TH8.AI ทำ
              </h3>
              <ul class="list-disc list-inside space-y-1 text-slate-700">
                <li>
                  สร้าง Agent ช่วยสรุป Insight จาก Log และ Report เดิมที่มีอยู่แล้ว
                  โดยไม่ต้องเปลี่ยนระบบทั้งก้อน
                </li>
                <li>
                  ทำ Dashboard แบบ “ถามตอบได้” เช่น ถามว่า
                  “เดือนนี้ปัญหาเครื่องไหนเยอะสุด เพราะอะไร”
                </li>
              </ul>
            </div>
            <div
              class="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3 space-y-2"
            >
              <h3 class="text-xs font-semibold text-slate-700">
                3) ผลลัพธ์ที่ได้ (Benchmark)
              </h3>
              <ul class="space-y-1 text-slate-700">
                <li>• ทีมเห็น Pattern ปัญหาซ้ำ ๆ ชัดขึ้น โดยไม่ต้องรื้อ Excel มือ</li>
                <li>
                  • ผู้บริหารมีภาพประกอบคำอธิบาย (Narrative) เวลาคุยในที่ประชุม
                  ไม่ใช่แค่ตัวเลข
                </li>
              </ul>
              <RouterLink
                :to="{ name: 'case-factory' }"
                class="inline-flex items-center gap-1 text-[11px] text-red-600 hover:text-red-500 mt-1"
              >
                ดูหน้าจอ Machine Log &amp; Defect Mockup →
              </RouterLink>
            </div>
          </div>
        </article>
      </div>
    </section>

    <!-- CTA -->
    <section class="bg-slate-900 text-slate-50">
      <div
        class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-9 flex flex-col md:flex-row items-center justify-between gap-6"
      >
        <div class="space-y-3">
          <p
            class="text-[11px] font-semibold tracking-[0.18em] uppercase text-red-300"
          >
            next step
          </p>
          <h2 class="text-lg sm:text-xl font-semibold">
            อยากรู้ว่า Use Case แบบนี้ทำได้ในธุรกิจคุณแค่ไหน?
          </h2>
          <p class="text-sm text-slate-200 max-w-xl">
            เราไม่ได้เริ่มจากการขายแพลตฟอร์ม แต่เริ่มจากการฟังว่า “ตอนนี้ทีมคุณเหนื่อยกับงานอะไรที่สุด”
            แล้วค่อยออกแบบ Workflow + Agent ให้เหมาะกับระบบเดิมที่มีอยู่แล้ว
          </p>
        </div>
        <div class="space-y-2 text-[12px]">
          <RouterLink
            :to="{ name: 'contact' }"
            class="inline-flex items-center justify-center rounded-full bg-red-500 text-white text-[12px] font-medium px-4 py-2 shadow-sm hover:bg-red-400 transition-colors"
          >
            นัดคุย Use Case ในองค์กรของคุณ
          </RouterLink>
          <p class="text-slate-400">
            * เราจะช่วยคุณแปลง “ปัญหาในงานประจำวัน” ให้กลายเป็น Agent + Workflow
            ที่มีโอกาสใช้ได้จริงในองค์กรของคุณ
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
