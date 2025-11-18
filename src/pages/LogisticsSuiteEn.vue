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
            <RouterLink
              :to="{ name: 'logistics' }"
              class="text-slate-500 hover:text-red-600"
            >
              TH
            </RouterLink>
            <span class="text-slate-400">/</span>
            <span class="font-semibold text-red-600">EN</span>
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
              One screen where warehouse teams and management finally see the same picture
            </h1>
            <p class="text-sm text-slate-600 leading-relaxed">
              This mockup is what we use in real meetings to explain  
              “What if we put AI inside your warehouse operations?” —  
              without talking about LLM, Agentic, RAG, or any buzzwords.
            </p>
            <ul class="text-sm text-slate-700 space-y-1.5">
              <li>• Warehouse leads → see today’s workload, peaks, and staffing needs</li>
              <li>• Operations teams → know which cases to fix first</li>
              <li>• Management → see KPI + repeated pains on a single page</li>
            </ul>
            <p class="text-[11px] text-slate-500">
              Below: high-level dashboard view + a “One Day with TH8.AI Agent Suite” story
            </p>
          </div>

          <!-- Right: Mock dashboard -->
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
                <span class="hidden sm:inline">DC: Central · Today</span>
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
                  Today’s volume +18%<br />
                  Add staff to Zone B
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
                  3 stock mismatches<br />
                  1 urgent case
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
                  2 orders require SOP<br />
                  Past cases attached
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
                  OT down 12%
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
                    Today’s workload
                  </p>
                  <span class="text-[10px] text-slate-400">
                    Pick · Pack · Ship
                  </span>
                </div>
                <div
                  class="h-20 rounded-xl bg-gradient-to-r from-emerald-100 via-amber-100 to-rose-100 flex items-center justify-center text-[11px] text-slate-600"
                >
                  Workload chart placeholder (connect real charts later)
                </div>
                <ul
                  class="text-[11px] text-slate-600 space-y-1 pt-1"
                >
                  <li>• Peaks: 11:00–13:00, 19:00–21:00</li>
                  <li>• Suggest: move staff from Zone A → B at noon</li>
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
                    Alerts for today
                  </p>
                  <span
                    class="text-[10px] text-red-500 font-medium"
                  >
                    4 cases to fix first
                  </span>
                </div>
                <div class="space-y-1.5 text-[11px]">
                  <div class="flex items-start gap-2">
                    <span
                      class="mt-[3px] h-2 w-2 rounded-full bg-red-500"
                    ></span>
                    <p class="text-slate-700">
                      Order #A10239 delayed &gt; 24 hours → suggest CS call customer
                    </p>
                  </div>
                  <div class="flex items-start gap-2">
                    <span
                      class="mt-[3px] h-2 w-2 rounded-full bg-amber-400"
                    ></span>
                    <p class="text-slate-700">
                      SKU-XY21: system stock &gt; physical stock by 12 units → notify inventory
                    </p>
                  </div>
                  <div class="flex items-start gap-2">
                    <span
                      class="mt-[3px] h-2 w-2 rounded-full bg-emerald-500"
                    ></span>
                    <p class="text-slate-700">
                      “Address changed during delivery” → relevant SOP and past cases available
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <p class="text-[10px] text-slate-500 pt-1">
              * This is a storytelling mockup — the real version can be wired to your WMS/ERP APIs.
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
            One day in your DC with TH8.AI
          </h2>
          <p class="text-sm text-slate-600 max-w-3xl">
            Use this as a storyboard in your internal meeting to explain expectations —
            not to oversell that “AI can do everything”.
          </p>
        </div>

        <div class="grid md:grid-cols-4 gap-4 text-[13px]">
          <div
            class="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3 space-y-1.5"
          >
            <p
              class="text-[11px] font-semibold text-red-600 uppercase"
            >
              08:30 · Shift start
            </p>
            <p class="font-semibold text-slate-900">
              Leads see the whole day in one view
            </p>
            <p class="text-slate-700">
              Daily Ops Agent highlights which zones are overloaded vs. staff on schedule.
            </p>
          </div>
          <div
            class="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3 space-y-1.5"
          >
            <p
              class="text-[11px] font-semibold text-red-600 uppercase"
            >
              11:00 · Mid-day peak
            </p>
            <p class="font-semibold text-slate-900">
              Fixing issues before customers call
            </p>
            <p class="text-slate-700">
              Reconciliation Agent finds stuck orders / mismatches and pushes them to the team.
            </p>
          </div>
          <div
            class="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3 space-y-1.5"
          >
            <p
              class="text-[11px] font-semibold text-red-600 uppercase"
            >
              14:00 · Odd cases
            </p>
            <p class="font-semibold text-slate-900">
              No more guessing alone
            </p>
            <p class="text-slate-700">
              Exception &amp; SOP Agent surfaces the right SOP + similar past cases in one place.
            </p>
          </div>
          <div
            class="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3 space-y-1.5"
          >
            <p
              class="text-[11px] font-semibold text-red-600 uppercase"
            >
              17:00 · End of day
            </p>
            <p class="font-semibold text-slate-900">
              Management sees KPI + real pains
            </p>
            <p class="text-slate-700">
              KPI &amp; Management Agent translates ops data into a one-page summary with focus points.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- FOUR AGENTS -->
    <section class="border-b border-slate-200 bg-slate-50">
      <div
        class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10 space-y-5"
      >
        <div class="space-y-2">
          <h2 class="text-lg sm:text-xl font-semibold text-slate-900">
            In short: we split the thinking into 4 simple agents
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
                  The daily planning assistant
                </p>
              </div>
            </div>
            <p class="text-slate-700">
              Helps leads understand today’s volume vs. staffing and suggests simple adjustments.
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
                  The mismatch &amp; exception hunter
                </p>
              </div>
            </div>
            <p class="text-slate-700">
              Connects multiple systems to find records that “should have moved but didn’t”.
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
                  The central brain for SOP &amp; past cases
                </p>
              </div>
            </div>
            <p class="text-slate-700">
              When a weird case comes in, staff can ask the agent instead of guessing or chasing one expert.
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
                  Translating ops into management language
                </p>
              </div>
            </div>
            <p class="text-slate-700">
              Summarises KPI + insights into human-readable context for discussions, not just dashboards.
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
            Want an agent suite like this inside your warehouse?
          </h2>
          <p class="text-sm text-slate-200 max-w-xl">
            We typically start with one focused area — stock, orders, or daily reports —
            then expand. The key is: <span class="font-medium">frontline teams must want to use it</span>,
            not just management.
          </p>
        </div>
        <div class="space-y-2 text-[12px]">
          <RouterLink
            :to="{ name: 'contact' }"
            class="inline-flex items-center justify-center rounded-full bg-red-500 text-white text-[12px] font-medium px-4 py-2 shadow-sm hover:bg-red-400 transition-colors"
          >
            Book a 30-min logistics use case discussion
          </RouterLink>
          <p class="text-slate-400">
            * Use this page as a visual in your next steering meeting, then map it to your own flows.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
