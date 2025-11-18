<template>
  <div class="bg-slate-50 min-h-[calc(100vh-4rem)]">
    <!-- HERO SECTION -->
    <section class="border-b border-slate-200 bg-white">
      <div
        class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14 grid lg:grid-cols-[1.2fr,1fr] gap-8 items-center"
      >
        <!-- Left: copy -->
        <div class="space-y-4">
          <p
            class="text-[11px] font-semibold tracking-[0.18em] uppercase text-red-600"
          >
            what we do
          </p>
          <h1
            class="text-[1.6rem] sm:text-[1.9rem] leading-snug font-semibold text-slate-900"
          >
            เราออกแบบ
            <span class="text-red-600">Agentic AI</span>
            ให้เข้าไปอยู่ “ระหว่างคนกับระบบเดิม”
            เพื่อให้ทีมทำงานง่ายขึ้น ไม่ใช่แทนทุกอย่าง
          </h1>
          <p class="text-sm text-slate-600 max-w-xl leading-relaxed">
            ทีม TH8.AI มอง Agent ไม่ใช่แค่ Chatbot แต่คือ “สมาชิกทีมดิจิทัล”
            ที่ช่วยยกของหนักให้คน — โดยเริ่มจากงานจริงของหน้างาน
            เชื่อมกับระบบเดิม แล้วค่อยเลือกเทคโนโลยีที่เหมาะสม
          </p>

          <!-- Quick value bullets -->
          <div class="grid sm:grid-cols-3 gap-3 text-[12px]">
            <div
              class="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3 space-y-1"
            >
              <p class="text-[11px] font-semibold text-slate-500 uppercase">
                focus
              </p>
              <p class="font-semibold text-slate-900">
                งานที่กินเวลา &amp; ความรู้
              </p>
              <p class="text-slate-600">
                เช่น planning, reconciliation, reporting, exception case
              </p>
            </div>
            <div
              class="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3 space-y-1"
            >
              <p class="text-[11px] font-semibold text-slate-500 uppercase">
                style
              </p>
              <p class="font-semibold text-slate-900">
                เสริมทีม ไม่แทนทีม
              </p>
              <p class="text-slate-600">
                Agent เข้าไปอยู่ใน flow เดิมที่คนคุ้นเคย เช่น dashboard, LINE, web app
              </p>
            </div>
            <div
              class="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3 space-y-1"
            >
              <p class="text-[11px] font-semibold text-slate-500 uppercase">
                outcome
              </p>
              <p class="font-semibold text-slate-900">
                วัดผลได้จริง
              </p>
              <p class="text-slate-600">
                ลดเวลางาน routine, ลด error, เพิ่ม visibility ให้ผู้บริหาร
              </p>
            </div>
          </div>
        </div>

        <!-- Right: illustration (hero) -->
        <div class="relative">
          <div
            class="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-red-100/50 via-slate-50 to-slate-100 blur-2xl"
          ></div>
          <div
            class="relative rounded-[1.75rem] border border-slate-200 bg-slate-900 text-slate-50 px-4 py-4 sm:px-5 sm:py-5 shadow-[0_18px_45px_rgba(15,23,42,0.35)]"
          >
            <div class="flex items-center justify-between mb-3">
              <p class="text-[11px] font-semibold uppercase tracking-[0.18em]">
                th8.ai · agentic cockpit
              </p>
              <span
                class="inline-flex items-center rounded-full bg-slate-800 text-[10px] px-2 py-0.5"
              >
                live workflow view
              </span>
            </div>

            <!-- mini dashboard -->
            <div class="space-y-3 text-[11px]">
              <div class="grid grid-cols-3 gap-2">
                <div
                  class="rounded-xl bg-slate-800/70 border border-slate-700 px-3 py-2 space-y-1"
                >
                  <p class="text-[10px] text-slate-300 uppercase">
                    today · handled by agents
                  </p>
                  <p class="text-lg font-semibold">124</p>
                  <p class="text-[10px] text-emerald-300">
                    68% routine tasks offloaded
                  </p>
                </div>
                <div
                  class="rounded-xl bg-slate-800/70 border border-slate-700 px-3 py-2 space-y-1"
                >
                  <p class="text-[10px] text-slate-300 uppercase">
                    operations time saved
                  </p>
                  <p class="text-lg font-semibold">-37%</p>
                  <p class="text-[10px] text-slate-300">
                    จากการใช้ workflow + agent
                  </p>
                </div>
                <div
                  class="rounded-xl bg-slate-800/70 border border-slate-700 px-3 py-2 space-y-1"
                >
                  <p class="text-[10px] text-slate-300 uppercase">
                    satisfaction
                  </p>
                  <p class="text-lg font-semibold">4.6</p>
                  <p class="text-[10px] text-slate-300">
                    avg. user rating (pilot)
                  </p>
                </div>
              </div>

              <div
                class="rounded-xl bg-slate-800/70 border border-slate-700 px-3 py-3 space-y-2"
              >
                <p class="text-[10px] text-slate-300 uppercase">
                  agent timeline (mock)
                </p>
                <div
                  class="h-20 rounded-lg bg-gradient-to-r from-red-400/60 via-emerald-300/70 to-sky-300/70 flex items-center justify-center text-[10px] text-slate-900 font-medium"
                >
                  F&amp;B · Logistics · Factory · Back-office
                </div>
              </div>
            </div>

            <!-- Illustration image (hero-agentic-ai.svg) -->
            <div class="mt-4 rounded-xl bg-slate-800/80 border border-slate-700 p-3">
              <div class="flex items-center justify-between mb-2">
                <p class="text-[10px] text-slate-300 uppercase">
                  illustration
                </p>
                <span class="text-[10px] text-slate-400">
                  undraw · artificial intelligence
                </span>
              </div>
              <div
                class="h-24 rounded-lg bg-slate-900/80 flex items-center justify-center overflow-hidden"
              >
                <!-- ให้เซฟไฟล์เป็น public/img/hero-agentic-ai.svg -->
                <img
                  src="/img/hero-agentic-ai.svg"
                  alt="Agentic AI and dashboard illustration"
                  class="h-full w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 3-STEP APPROACH -->
    <section class="border-b border-slate-200 bg-slate-50">
      <div
        class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10 space-y-4"
      >
        <div class="flex flex-wrap items-center justify-between gap-3">
          <div class="space-y-1">
            <h2 class="text-lg sm:text-xl font-semibold text-slate-900">
              วิธีทำงานของเราในโปรเจกต์ Agentic AI
            </h2>
            <p class="text-[13px] text-slate-600 max-w-2xl">
              ไม่เริ่มจากเลือกโมเดล แต่เริ่มจาก
              “งานจริงของคน” → “ระบบที่มีอยู่” → “Agent ที่เข้าไปช่วย”
            </p>
          </div>
        </div>

        <div class="grid md:grid-cols-3 gap-4 text-[13px]">
          <!-- STEP 1 -->
          <div
            class="rounded-2xl border border-slate-200 bg-white px-4 py-4 space-y-2"
          >
            <div class="flex justify-center mb-3">
              <!-- public/img/step-audit.svg -->
              <img
                src="/img/step-audit.svg"
                alt="Audit & walk-through"
                class="h-24 w-auto opacity-90"
              />
            </div>
            <p class="text-[11px] font-semibold text-red-600 uppercase">
              step 1 · audit &amp; walk-through
            </p>
            <h3 class="font-semibold text-slate-900">
              เดิน flow จริงก่อนแตะโค้ด
            </h3>
            <p class="text-slate-700">
              ลงไปคุยกับคนหน้างาน ดูเอกสาร, Excel, LINE, ระบบเดิม
              ว่าตอนนี้ทุกคน “ต่อเรื่องงาน” กันอย่างไร แล้ว mark จุดที่ AI/Agent
              ช่วยยกของแทนได้
            </p>
          </div>

          <!-- STEP 2 -->
          <div
            class="rounded-2xl border border-slate-200 bg-white px-4 py-4 space-y-2"
          >
            <div class="flex justify-center mb-3">
              <!-- public/img/step-pilot-agent.svg -->
              <img
                src="/img/step-pilot-agent.svg"
                alt="Pilot agent"
                class="h-24 w-auto opacity-90"
              />
            </div>
            <p class="text-[11px] font-semibold text-red-600 uppercase">
              step 2 · small pilot agent
            </p>
            <h3 class="font-semibold text-slate-900">
              เริ่มจาก agent ตัวเล็กที่แก้ปัญหาชัดเจน
            </h3>
            <p class="text-slate-700">
              เช่น agent ช่วยจับยอดผิดปกติ, agent สรุปรายวันให้หัวหน้า,
              agent ดึง SOP ให้ตอนเจอเคสแปลก — ทุกตัวต้องตอบได้ว่า
              “ทำให้ทีมไหนเบาลง”
            </p>
          </div>

          <!-- STEP 3 -->
          <div
            class="rounded-2xl border border-slate-200 bg-white px-4 py-4 space-y-2"
          >
            <div class="flex justify-center mb-3">
              <!-- public/img/step-rollout.svg -->
              <img
                src="/img/step-rollout.svg"
                alt="Roll-out & refine"
                class="h-24 w-auto opacity-90"
              />
            </div>
            <p class="text-[11px] font-semibold text-red-600 uppercase">
              step 3 · roll-out &amp; refine
            </p>
            <h3 class="font-semibold text-slate-900">
              ขยายแบบไม่ทำให้คนต่อต้าน
            </h3>
            <p class="text-slate-700">
              เก็บ feedback, ปรับ workflow / rule / prompt,
              สื่อสารให้ทีมเข้าใจบทบาทของ agent ก่อนขยายไปส่วนอื่นของธุรกิจ
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- SERVICE LINES -->
    <section class="bg-white border-b border-slate-200">
      <div
        class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-9 lg:py-11 space-y-5"
      >
        <div class="flex flex-wrap items-end justify-between gap-3">
          <div class="space-y-1">
            <h2 class="text-lg sm:text-xl font-semibold text-slate-900">
              บริการหลักของ TH8.AI
            </h2>
            <p class="text-[13px] text-slate-600 max-w-2xl">
              ออกแบบมาให้เริ่มได้ทั้งแบบ
              “ทดลองในส่วนเล็ก” ไปจนถึง “วางโครง Agentic AI ระดับองค์กร”
            </p>
          </div>
        </div>

        <div class="grid md:grid-cols-2 gap-4 text-[13px]">
          <!-- 01 · discovery -->
          <div
            class="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 space-y-2"
          >
            <div class="flex justify-center mb-3">
              <!-- public/img/service-discovery.svg -->
              <img
                src="/img/service-discovery.svg"
                alt="Agentic discovery & blueprint"
                class="h-20 w-auto opacity-90"
              />
            </div>
            <p class="text-[11px] font-semibold text-red-600 uppercase">
              01 · agentic discovery &amp; blueprint
            </p>
            <h3 class="font-semibold text-slate-900">
              เวิร์กช็อปออกแบบ Agentic AI สำหรับองค์กรคุณ
            </h3>
            <p class="text-slate-700">
              2–3 session เพื่อ map งานจริง, pain point, data, และระบบเดิม
              แล้วแปลงเป็น blueprint ว่า agent ควรเกิดตรงไหน, ใช้ข้อมูลอะไร,
              วัดผลอย่างไร
            </p>
            <ul class="list-disc list-inside text-slate-700 space-y-1">
              <li>Process &amp; pain-point mapping</li>
              <li>AI / Agent opportunity matrix</li>
              <li>Roadmap 3–6 เดือนแรก</li>
            </ul>
          </div>

          <!-- 02 · integration -->
          <div
            class="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 space-y-2"
          >
            <div class="flex justify-center mb-3">
              <!-- public/img/service-integration.svg -->
              <img
                src="/img/service-integration.svg"
                alt="Pilot build & integration"
                class="h-20 w-auto opacity-90"
              />
            </div>
            <p class="text-[11px] font-semibold text-red-600 uppercase">
              02 · pilot build &amp; integration
            </p>
            <h3 class="font-semibold text-slate-900">
              สร้างและเชื่อม Agent ตัวแรกเข้ากับระบบจริง
            </h3>
            <p class="text-slate-700">
              ใช้ tech stack เช่น LangGraph / LangChain + FastAPI + Vue
              เชื่อมกับ WMS, ERP, Data Warehouse, หรือระบบที่มีอยู่แล้ว
            </p>
            <ul class="list-disc list-inside text-slate-700 space-y-1">
              <li>ออกแบบ workflow + tool usage ของ agent</li>
              <li>เชื่อมต่อ API / Database / File system</li>
              <li>ตั้งค่า guardrail &amp; monitoring เบื้องต้น</li>
            </ul>
          </div>

          <!-- 03 · co-pilot -->
          <div
            class="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 space-y-2"
          >
            <div class="flex justify-center mb-3">
              <!-- public/img/service-copilot.svg -->
              <img
                src="/img/service-copilot.svg"
                alt="Operations co-pilot"
                class="h-20 w-auto opacity-90"
              />
            </div>
            <p class="text-[11px] font-semibold text-red-600 uppercase">
              03 · operations co-pilot
            </p>
            <h3 class="font-semibold text-slate-900">
              ทำให้ Agent กลายเป็น “ผู้ช่วยประจำทีม” จริง ๆ
            </h3>
            <p class="text-slate-700">
              ฝัง agent เข้าไปในเครื่องมือที่ทีมใช้อยู่แล้ว เช่น LINE OA, Web
              Portal, Dashboard หรือ Ticketing system
            </p>
            <ul class="list-disc list-inside text-slate-700 space-y-1">
              <li>ออกแบบ UX การคุยกับ agent ให้เหมาะกับบริบทงาน</li>
              <li>ตั้ง rule, exception, escalation path</li>
              <li>วงรอบปรับปรุงจาก feedback ของผู้ใช้จริง</li>
            </ul>
          </div>

          <!-- 04 · training -->
          <div
            class="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 space-y-2"
          >
            <div class="flex justify-center mb-3">
              <!-- public/img/service-training.svg -->
              <img
                src="/img/service-training.svg"
                alt="Training & handover"
                class="h-20 w-auto opacity-90"
              />
            </div>
            <p class="text-[11px] font-semibold text-red-600 uppercase">
              04 · training, playbook &amp; handover
            </p>
            <h3 class="font-semibold text-slate-900">
              ส่งต่อให้ทีมคุณดูแลต่อได้ในระยะยาว
            </h3>
            <p class="text-slate-700">
              ทำให้ทีม Internal สามารถดูแล / ขยาย Agentic workflow ได้เอง
              โดยไม่ต้องพึ่ง vendor ตลอดเวลา
            </p>
            <ul class="list-disc list-inside text-slate-700 space-y-1">
              <li>Playbook การใช้งานและดูแล agent</li>
              <li>Prompt / Tool / SOP documentation</li>
              <li>Knowledge transfer ให้ทีม IT / Data / Operation</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- WHO IS THIS FOR -->
    <section class="bg-slate-900 text-slate-50">
      <div
        class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-9 lg:py-10 space-y-4"
      >
        <div class="flex flex-wrap items-center justify-between gap-3">
          <div class="space-y-1">
            <p
              class="text-[11px] font-semibold tracking-[0.18em] uppercase text-red-300"
            >
              who we work best with
            </p>
            <h2 class="text-lg sm:text-xl font-semibold">
              เหมาะกับองค์กรแบบไหน?
            </h2>
          </div>
        </div>

        <div class="grid md:grid-cols-3 gap-4 text-[13px]">
          <div
            class="rounded-2xl bg-slate-800 border border-slate-700 px-4 py-4 space-y-2"
          >
            <h3 class="font-semibold">
              ทีมที่มีระบบอยู่แล้ว แต่คนยังเหนื่อยกับงานต่อข้อมูล
            </h3>
            <p class="text-slate-300">
              เช่น F&amp;B, Logistics, Warehouse, Manufacturing,
              หรือ Back-office ที่ต้องเปิดหลายระบบเพื่อ “ประกอบภาพ” ให้ผู้บริหาร
            </p>
          </div>
          <div
            class="rounded-2xl bg-slate-800 border border-slate-700 px-4 py-4 space-y-2"
          >
            <h3 class="font-semibold">
              ผู้บริหารที่อยากเริ่ม AI แบบ “ทดลองเล็ก ๆ แต่มีของจริง”
            </h3>
            <p class="text-slate-300">
              ไม่อยากเริ่มจากโปรเจกต์ใหญ่เกินไป แต่อยากเห็นตัวอย่าง Agentic
              workflow ที่จับต้องได้ใน 4–8 สัปดาห์
            </p>
          </div>
          <div
            class="rounded-2xl bg-slate-800 border border-slate-700 px-4 py-4 space-y-2"
          >
            <h3 class="font-semibold">
              ทีม IT / Data ที่อยากมีพาร์ตเนอร์คุยภาษาระบบรู้เรื่อง
            </h3>
            <p class="text-slate-300">
              ทำงานร่วมกันได้ทั้งฝั่ง Business, Operation และทีมเทคนิค
              โดยคุยกันบนพื้นฐานระบบจริงและข้อจำกัดที่มี
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
