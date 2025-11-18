<template>
  <div class="bg-slate-50 min-h-[calc(100vh-4rem)]">
    <!-- HERO ABOUT -->
    <section class="border-b border-slate-200 bg-white">
      <div
        class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 grid lg:grid-cols-[1.3fr,1fr] gap-8 items-center"
      >
        <!-- Left: Intro copy -->
        <div class="space-y-4">
          <p
            class="text-[11px] font-semibold tracking-[0.18em] uppercase text-th8-red"
          >
            about th8.ai
          </p>
          <h1
            class="text-2xl sm:text-3xl lg:text-[32px] font-semibold text-slate-900 leading-snug"
          >
            TH8.AI — ทีมเล็ก ๆ ที่เริ่มจาก “ความเหนื่อยของคนในองค์กร”
          </h1>
          <p class="text-sm text-slate-600 max-w-3xl leading-relaxed">
            เราไม่ได้เริ่มจากคำว่า “อยากทำ AI ให้ดูล้ำ”
            แต่เริ่มจากการนั่งฟังคนในทีม Operation, IT, Accounting, Warehouse
            เล่าว่า…
            <span class="font-medium text-slate-900">
              งานไหนที่ใช้เวลามากเกินไป, ต้องไล่ตามข้อมูลเอง,
              และไม่มีเวลาไปโฟกัสงานที่สร้างมูลค่าจริง ๆ
            </span>
          </p>
          <p class="text-sm text-slate-600 max-w-3xl leading-relaxed">
            TH8.AI เลยเลือกโฟกัสที่
            <span class="font-medium text-slate-900">
              “Agentic AI สำหรับงานหลังบ้าน” ในธุรกิจไทย
            </span>
            — ตั้งแต่โกดัง, F&amp;B, โรงงาน, จนถึงทีมที่ต้องดู report ทุกวัน
          </p>

          <!-- mini facts -->
          <div class="grid sm:grid-cols-3 gap-3 text-[12px] text-slate-700">
            <div
              class="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3"
            >
              <p class="text-[11px] font-semibold text-slate-500 uppercase">
                background
              </p>
              <p>ทีมจากสาย IT, Digital Banking, Data &amp; Operations</p>
            </div>
            <div
              class="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3"
            >
              <p class="text-[11px] font-semibold text-slate-500 uppercase">
                focus
              </p>
              <p>Agentic AI ที่ต่อกับระบบเดิม — ERP, CRM, POS, Data</p>
            </div>
            <div
              class="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3"
            >
              <p class="text-[11px] font-semibold text-slate-500 uppercase">
                style
              </p>
              <p>เริ่มจากของจริง ไม่เริ่มจาก deck หรือ buzzword</p>
            </div>
          </div>
        </div>

        <!-- Right: Illustration -->
        <div class="lg:pl-4">
          <div
            class="rounded-3xl border border-slate-200 bg-slate-50 shadow-sm p-4 sm:p-5 flex items-center justify-center"
          >
            <!-- src/assets/about-hero-team-ops.svg -->
            <img
              :src="aboutHeroIllustration"
              alt="TH8.AI team working with data and operations"
              class="h-40 sm:h-48 w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION: เราเห็นอะไรในองค์กรไทย -->
    <section class="border-b border-slate-200 bg-slate-50">
      <div
        class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12 grid lg:grid-cols-[1.3fr,1fr] gap-8 items-start"
      >
        <!-- Left: Text -->
        <div class="space-y-4">
          <h2 class="text-lg sm:text-xl font-semibold text-slate-900">
            สิ่งที่เห็นเหมือนกันเกือบทุกองค์กรในไทย
          </h2>
          <p class="text-sm text-slate-600 leading-relaxed max-w-3xl">
            ไม่ว่าจะเป็นโลจิสติกส์, F&amp;B, โรงงาน หรือบริการต่าง ๆ
            สิ่งที่คล้ายกันมากคือ
            <span class="font-medium text-slate-900">
              “ระบบเยอะ, data กระจาย, คนต้องมานั่งเชื่อมเอง”
            </span>
          </p>

          <ul class="space-y-2 text-sm text-slate-700">
            <li>• ข้อมูลขายอยู่ในอีกระบบ, stock อยู่ในอีกระบบ, shipment อยู่ในอีก dashboard</li>
            <li>• ฝ่ายบัญชีต้องรอเอกสารจากหลายทีม กว่าจะออก report ได้ก็เกือบสิ้นเดือน</li>
            <li>• ผู้บริหารอยากได้ภาพรวมง่าย ๆ แต่ทีมงานต้องย่อยข้อมูลเองทุกครั้ง</li>
          </ul>

          <p class="text-sm text-slate-600 leading-relaxed max-w-3xl">
            เราเลยออกแบบ TH8.AI ให้เป็น
            <span class="font-medium text-slate-900">
              ชั้นเชื่อมระหว่าง “ระบบที่คุณมีอยู่แล้ว” กับ “คำถามที่คนในทีมถามทุกวัน”
            </span>
            มากกว่าจะเป็นระบบใหม่ที่ทุกคนต้องเรียนรู้จากศูนย์
          </p>
        </div>

        <!-- Right: Illustration -->
        <div class="lg:pl-4">
          <div
            class="rounded-3xl border border-slate-200 bg-white shadow-sm p-4 sm:p-5 flex items-center justify-center"
          >
            <!-- src/assets/about-observation-workflow.svg -->
            <img
              :src="aboutObservationIllustration"
              alt="Workflow and systems overview illustration"
              class="h-40 sm:h-48 w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION: เราโฟกัสใครเป็นพิเศษ -->
    <section class="border-b border-slate-200 bg-white">
      <div
        class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12 space-y-6"
      >
        <div class="space-y-2">
          <h2 class="text-lg sm:text-xl font-semibold text-slate-900">
            เราโฟกัสธุรกิจแบบไหนเป็นพิเศษ
          </h2>
          <p class="text-sm text-slate-600 max-w-3xl">
            ส่วนใหญ่ลูกค้าที่มาคุยกับเรา จะมี pattern ใกล้เคียงกันคือ
            <span class="font-medium text-slate-900">
              มีระบบเดิมอยู่แล้ว, ทีมหน้างานเก่งมาก, แต่ “เวลาหมดไปกับงานเชื่อมข้อมูล”
            </span>
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-4 text-[13px]">
          <div
            class="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 space-y-2"
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
              ตั้งแต่ inbound, picking, outbound, shipment
              เราช่วยให้ทีมเห็นงานเสี่ยงก่อนสายเกินไป
              โดยไม่ต้องเปิดหลายจอพร้อมกัน
            </p>
          </div>

          <div
            class="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 space-y-2"
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
              ช่วยสั่งของเข้าครัว, กันของขาด, ดู pattern การขายตามฤดูกาล
              และให้ผู้จัดการเห็นภาพรวมแบบไม่ต้องรื้อ Excel ทุกสัปดาห์
            </p>
          </div>

          <div
            class="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 space-y-2"
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
              เอา log, breakdown, defect, maintenance มาวิเคราะห์ให้เห็น
              ว่าปัญหาซ้ำ ๆ เกิดจากตรงไหน และควรโฟกัสเครื่อง / line ไหนก่อน
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION: หลักคิดเวลาทำงานกับลูกค้า -->
    <section class="border-b border-slate-200 bg-slate-50">
      <div
        class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12 space-y-6"
      >
        <div class="space-y-2 max-w-3xl">
          <h2 class="text-lg sm:text-xl font-semibold text-slate-900">
            หลักคิดเวลาเราทำงานกับลูกค้า
          </h2>
          <p class="text-sm text-slate-600 leading-relaxed">
            เราไม่ได้มองตัวเองเป็น “ทีม AI” อย่างเดียว
            แต่เป็นทีมที่ช่วยต่อภาพระหว่าง
            <span class="font-medium text-slate-900">
              คนหน้างาน, ข้อมูลในระบบ, และการตัดสินใจของผู้บริหาร
            </span>
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-4 text-[13px]">
          <div
            class="rounded-2xl border border-slate-200 bg-white px-4 py-4 space-y-2"
          >
            <div class="flex items-center gap-2 mb-1.5">
              <img
                :src="valueInsightIcon"
                alt=""
                class="h-5 w-5"
              />
              <p class="text-[11px] font-semibold text-th8-red uppercase">
                start from reality
              </p>
            </div>
            <h3 class="font-semibold text-slate-900">
              เริ่มจากของจริง ไม่เริ่มจาก deck
            </h3>
            <p class="text-slate-700">
              เราชอบนั่งคุยกับคนหน้างาน, ดูกลุ่ม LINE, ดู report จริง
              มากกว่าดู flowchart สวย ๆ เพราะ pain จริงซ่อนอยู่ในรายละเอียดพวกนี้
            </p>
          </div>

          <div
            class="rounded-2xl border border-slate-200 bg-white px-4 py-4 space-y-2"
          >
            <div class="flex items-center gap-2 mb-1.5">
              <img
                :src="valuePragmaticIcon"
                alt=""
                class="h-5 w-5"
              />
              <p class="text-[11px] font-semibold text-th8-red uppercase">
                small, clear wins
              </p>
            </div>
            <h3 class="font-semibold text-slate-900">
              เริ่มเล็ก แต่ impact ชัดเจน
            </h3>
            <p class="text-slate-700">
              เราชอบเริ่มจาก 1–2 use case ที่เห็นผลในไม่กี่สัปดาห์
              มากกว่าทำ master plan ใหญ่ ๆ ที่ใช้เวลานานจนทีมหน้างานเริ่มล้า
            </p>
          </div>

          <div
            class="rounded-2xl border border-slate-200 bg-white px-4 py-4 space-y-2"
          >
            <div class="flex items-center gap-2 mb-1.5">
              <img
                :src="valueSafetyIcon"
                alt=""
                class="h-5 w-5"
              />
              <p class="text-[11px] font-semibold text-th8-red uppercase">
                respect data &amp; risk
              </p>
            </div>
            <h3 class="font-semibold text-slate-900">
              เคารพข้อมูลและความเสี่ยงของธุรกิจ
            </h3>
            <p class="text-slate-700">
              เราออกแบบให้ข้อมูลสำคัญอยู่ใน boundary ที่เหมาะสม
              และวางเรื่องสิทธิ์เข้าถึงตั้งแต่วันแรก
              เพื่อให้ AI กลายเป็นตัวช่วย ไม่ใช่ความเสี่ยงใหม่
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION: ทำไมชื่อ TH8.AI -->
    <section class="bg-white">
      <div
        class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12 space-y-4"
      >
        <div class="space-y-2 max-w-3xl">
          <h2 class="text-lg sm:text-xl font-semibold text-slate-900">
            ทำไมชื่อ TH8.AI? — 8 ตัวอักษรของคำว่า “THAILAND”
          </h2>
          <p
            class="text-sm text-slate-600 max-w-3xl leading-relaxed"
          >
            TH8 มาจาก <span class="font-medium text-slate-900">8 ตัวอักษรของคำว่า THAILAND</span>
            เพราะเราอยากทำ AI ที่ “โตไปพร้อมกับธุรกิจในประเทศไทย”
            ไม่ใช่แค่เอาโซลูชันจากต่างประเทศมาวางทับ
          </p>
          <p class="text-sm text-slate-600 leading-relaxed">
            เป้าหมายของเราง่าย ๆ คือ
            <span class="font-medium text-slate-900">
              ทำให้ทีมในองค์กรไทย “เหนื่อยน้อยลง แต่เห็นภาพมากขึ้น”
            </span>
            ด้วย Agentic AI ที่ต่อกับระบบและข้อมูลที่คุณมีอยู่แล้ว
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import aboutHeroIllustration from '../assets/about-hero-team-ops.svg'
import aboutObservationIllustration from '../assets/about-observation-workflow.svg'

// ถ้าอยากใช้ภาพ consult เพิ่มใน section ใหม่ สามารถ import ได้เช่นกัน
// import aboutConsultingIllustration from '../assets/about-consulting.svg'

// icons อุตสาหกรรม (ใช้ซ้ำกับหน้า Home)
import logisticsIcon from '../assets/icon-logistics-outline.png' // หรือ .svg
import fnbIcon from '../assets/icon-fnb-outline.png'
import manufacturingIcon from '../assets/icon-manufacturing-outline.png'

// icons หลักคิด / values
import valueInsightIcon from '../assets/icon-value-insight.png'
import valuePragmaticIcon from '../assets/icon-value-pragmatic.png'
import valueSafetyIcon from '../assets/icon-value-safety.png'
</script>
