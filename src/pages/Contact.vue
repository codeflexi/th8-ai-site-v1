<template>
  <div class="bg-slate-50 min-h-[calc(100vh-4rem)]">
    <!-- HERO CONTACT -->
    <section class="border-b border-slate-200 bg-white">
      <div
        class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 grid lg:grid-cols-[1.3fr,1fr] gap-8 items-center"
      >
        <!-- Left: Intro -->
        <div class="space-y-4">
          <p
            class="text-[11px] font-semibold tracking-[0.20em] uppercase text-th8-red"
          >
            contact th8.ai
          </p>
          <h1
            class="text-2xl sm:text-3xl lg:text-[32px] font-semibold text-slate-900 leading-snug"
          >
            เอาปัญหาจริงของคุณมาวางบนโต๊ะ<br />
            ที่เหลือให้เราช่วย map ว่า AI เข้าไปช่วยตรงไหนได้บ้าง
          </h1>
          <p class="text-sm text-slate-600 max-w-2xl leading-relaxed">
            คุณไม่จำเป็นต้องเตรียม BRD หรือ slide ยาว ๆ แค่เล่า
            <span class="font-medium text-slate-900">
              flow งานที่ปวดหัวที่สุดในตอนนี้
            </span>
            — เราจะช่วยดูให้ว่า
            “ตรงไหนที่ Agentic AI เข้าไปช่วยได้จริง โดยไม่ทำให้ทีมหน้างานต่อต้าน”
          </p>

          <ul class="text-[13px] text-slate-700 space-y-1.5">
            <li>• ไม่ยัดเยียดขาย — โฟกัสให้คุณเห็นภาพและความเป็นไปได้ก่อน</li>
            <li>• เข้าใจบริบทธุรกิจไทย ทั้ง operation หน้างานและระบบเดิมที่ใช้อยู่</li>
            <li>• คุณจะได้ rough roadmap กลับไปใช้คุยต่อกับทีมทันที</li>
          </ul>
        </div>

        <!-- Right: Illustration -->
        <div class="lg:pl-4">
          <div
            class="rounded-3xl border border-slate-200 bg-slate-50 shadow-sm p-4 sm:p-5 flex items-center justify-center"
          >
            <!-- src/assets/contact-meeting-consult.svg -->
            <img
              :src="contactIllustration"
              alt="Online consultation with TH8.AI"
              class="h-40 sm:h-48 w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- CONTACT OPTIONS -->
    <section class="border-b border-slate-200 bg-slate-50">
      <div
        class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12 space-y-6"
      >
        <div class="space-y-2">
          <h2 class="text-lg sm:text-xl font-semibold text-slate-900">
            เลือกวิธีติดต่อที่สะดวกสำหรับคุณ
          </h2>
          <p class="text-sm text-slate-600 max-w-3xl">
            จะทักมาคุยเล่น ๆ ก่อน หรือมาพร้อม use case จริงจังเลยก็ได้
            เลือกช่องทางที่เหมาะกับสไตล์การทำงานของคุณได้เลย
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-4 text-[13px]">
          <!-- Option 1: นัดคุย 30 นาที -->
          <div
            class="rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-sm flex flex-col gap-3"
          >
            <div class="flex items-center gap-3">
              <img
                :src="calendarIcon"
                alt=""
                class="h-7 w-7"
              />
              <div>
                <p class="text-[11px] font-semibold text-th8-red uppercase">
                  video call / meeting
                </p>
                <h3 class="font-semibold text-slate-900">
                  นัดคุย 30 นาที
                </h3>
              </div>
            </div>
            <p class="text-slate-700">
              เหมาะสำหรับผู้บริหาร / owner / หัวหน้าทีม
              ที่อยากเห็นภาพรวมก่อนว่าจะเริ่มจากจุดไหน
              และควรดึงใครในทีมเข้ามาคุยต่อ
            </p>
            <div class="mt-auto pt-1">
              <button
                type="button"
                class="inline-flex items-center justify-center rounded-full bg-th8-red text-white text-[12px] font-medium px-4 py-1.5 hover:bg-th8-red-dark transition-colors"
              >
                ขอ link นัดเวลา
              </button>
            </div>
          </div>

          <!-- Option 2: ทักแชตสั้น ๆ -->
          <div
            class="rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-sm flex flex-col gap-3"
          >
            <div class="flex items-center gap-3">
              <img
                :src="chatIcon"
                alt=""
                class="h-7 w-7"
              />
              <div>
                <p class="text-[11px] font-semibold text-th8-red uppercase">
                  line / chat
                </p>
                <h3 class="font-semibold text-slate-900">
                  ทักแชตสั้น ๆ ให้เราช่วยดู
                </h3>
              </div>
            </div>
            <p class="text-slate-700">
              สำหรับคนที่อยากส่ง pain point คร่าว ๆ ก่อน เช่น รูป flow, screenshot
              report, หรือข้อความสั้น ๆ ว่า “ตอนนี้ติดตรงไหนที่สุด”
            </p>
            <div class="mt-auto pt-1">
              <button
                type="button"
                class="inline-flex items-center justify-center rounded-full border border-slate-300 text-[12px] text-slate-700 px-4 py-1.5 hover:border-th8-red hover:text-th8-red transition-colors"
              >
                ดูตัวอย่างข้อความที่ใช้ทัก
              </button>
            </div>
          </div>

          <!-- Option 3: ส่งอีเมล / brief -->
          <div
            class="rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-sm flex flex-col gap-3"
          >
            <div class="flex items-center gap-3">
              <img
                :src="emailIcon"
                alt=""
                class="h-7 w-7"
              />
              <div>
                <p class="text-[11px] font-semibold text-th8-red uppercase">
                  email / brief
                </p>
                <h3 class="font-semibold text-slate-900">
                  ส่งรายละเอียดระบบ / use case
                </h3>
              </div>
            </div>
            <p class="text-slate-700">
              เหมาะสำหรับทีมที่มีระบบเดิมหลายตัว, ทำ slide / note ไว้แล้ว
              และอยากให้เราช่วยมองภาพรวมว่า
              “ถ้าเอา Agentic AI มาวาง จะเริ่มตรงไหนดี”
            </p>
            <div class="mt-auto pt-1">
              <button
                type="button"
                class="inline-flex items-center justify-center rounded-full border border-slate-300 text-[12px] text-slate-700 px-4 py-1.5 hover:border-th8-red hover:text-th8-red transition-colors"
              >
                ดู format email แนะนำ
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- TEMPLATE MESSAGE -->
    <section class="border-b border-slate-200 bg-slate-900 text-slate-50">
      <div
        class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12 grid md:grid-cols-[1.2fr,0.9fr] gap-8 items-start"
      >
        <!-- Left: Copy -->
        <div class="space-y-3">
          <p
            class="text-[11px] font-semibold tracking-[0.20em] uppercase text-red-300"
          >
            message template
          </p>
          <h2 class="text-lg sm:text-xl font-semibold">
            ไม่ถนัดเขียนยาว? ใช้ template นี้ได้เลย
          </h2>
          <p class="text-sm text-slate-200 max-w-xl leading-relaxed">
            หลายทีมรู้ว่าปัญหาอยู่ตรงไหน แต่ไม่แน่ใจว่าจะเล่ายังไงให้ “เป็นภาษาที่
            AI / ทีมเทคนิคเข้าใจ”
            เลยลองเตรียมโครงง่าย ๆ ให้คุณ copy ไปใช้ได้เลย
          </p>
          <ul class="text-[12px] text-slate-200 space-y-1.5">
            <li>• เติมช่องว่างไม่กี่จุด แล้วส่งมาหาเราได้เลย</li>
            <li>• ใช้ได้ทั้งใน LINE, Email, หรือ chat อื่น ๆ</li>
            <li>• ถ้าคุณมี flowchart / screenshot แนบเพิ่มได้เลย ยิ่งดี</li>
          </ul>
        </div>

        <!-- Right: Template card -->
        <div
          class="rounded-2xl border border-slate-700 bg-slate-800/60 p-4 sm:p-5 space-y-3 text-[13px]"
        >
          <p class="text-[12px] font-semibold text-slate-200">
            ตัวอย่างข้อความที่ลูกค้าส่วนใหญ่ใช้
          </p>
          <div
            class="rounded-xl bg-slate-900/60 border border-slate-700 p-3 space-y-2"
          >
            <p class="text-[12px] text-slate-300 leading-relaxed">
              “ตอนนี้บริษัทผมทำธุรกิจ… (เช่น 3PL, F&amp;B, โรงงานผลิต)<br />
              ปัญหาที่หนักที่สุดใน operation ตอนนี้คือ… (เช่น stock ไม่ตรง, order
              ค้าง, report ปิดช้า)<br />
              ทีมที่เกี่ยวข้องหลัก ๆ คือ… (เช่น โกดัง, บัญชี, ขาย, IT)<br />
              เราใช้ระบบ… อยู่แล้ว (เช่น ERP, WMS, Google Sheet, LINE กลุ่ม)<br />
              เลยอยากนัดคุยดูว่า ถ้าเริ่มเอา AI/Agentic เข้ามาช่วย
              ควรเริ่มจากตรงไหนดี ที่ทีมจะไม่ต่อต้าน และเห็นผลได้จริงใน 1–2 เดือน”
            </p>
          </div>
          <p class="text-[11px] text-slate-400">
            * ในเวอร์ชัน production
            คุณสามารถแทนที่ section นี้ด้วยฟอร์มติดต่อจริง หรือปุ่มลิงก์ไปยัง LINE /
            Email / Calendar ของคุณ
          </p>
        </div>
      </div>
    </section>

    <!-- FAQ / WHAT TO EXPECT -->
    <section class="bg-white">
      <div
        class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12 space-y-6"
      >
        <div class="space-y-2 max-w-3xl">
          <h2 class="text-lg sm:text-xl font-semibold text-slate-900">
            หลังจากติดต่อ TH8.AI แล้วจะเกิดอะไรขึ้น?
          </h2>
          <p class="text-sm text-slate-600 leading-relaxed">
            เราอยากให้การคุยเรื่อง AI เป็นบทสนทนาที่ตรงไปตรงมา
            ไม่ใช่การขาย solution ที่คุณไม่จำเป็นต้องใช้
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-4 text-[13px]">
          <div
            class="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 space-y-2"
          >
            <h3 class="font-semibold text-slate-900">
              1) เราฟังมากกว่าพูด
            </h3>
            <p class="text-slate-700">
              เราจะเริ่มจากการฟัง context ธุรกิจ, flow งาน, ระบบที่มีอยู่
              และ pain point ก่อนเสมอ
              ยังไม่รีบเสนอ solution หรือชื่อเทคโนโลยี
            </p>
          </div>

          <div
            class="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 space-y-2"
          >
            <h3 class="font-semibold text-slate-900">
              2) ได้ภาพร่าง use case &amp; roadmap
            </h3>
            <p class="text-slate-700">
              เมื่อเข้าใจภาพรวม เราจะเสนอ 1–2 use case ที่ควรเริ่มก่อน
              พร้อม rough roadmap ว่าควรเดินทีละขั้นยังไง
            </p>
          </div>

          <div
            class="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 space-y-2"
          >
            <h3 class="font-semibold text-slate-900">
              3) คุณเป็นคนตัดสินใจว่าจะไปต่อเมื่อไร
            </h3>
            <p class="text-slate-700">
              ไม่มีการปิดการขายทันที
              คุณเอาข้อมูลที่ได้กลับไปคุยกับทีมก่อนได้เต็มที่
              ถ้าพร้อมเมื่อไรค่อยกลับมาคุยกันต่อก็ได้
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import contactIllustration from '../assets/contact-meeting-consult.svg'

// ถ้าใช้ PNG ให้เปลี่ยนนามสกุล .svg เป็น .png ให้ตรงไฟล์จริง
import calendarIcon from '../assets/icon-contact-calendar.png'
import chatIcon from '../assets/icon-contact-chat.png'
import emailIcon from '../assets/icon-contact-email.png'
</script>
