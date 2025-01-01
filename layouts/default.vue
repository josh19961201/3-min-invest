<template>
  <div class="bg-gray-50">
    <header class="bg-white shadow-sm">
      <nav
        class="mx-auto flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div class="flex lg:flex-1">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">3 Min Invest</span>
            <img
              class="h-8 w-auto"
              src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </a>
        </div>
        <div class="flex lg:hidden">
          <button
            type="button"
            class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            @click="isShowMobileMenu = !isShowMobileMenu"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
              data-slot="icon"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <div class="hidden lg:flex lg:items-center lg:gap-x-12">
          <div v-for="(item, index) in menu" :key="index" class="">
            <NuxtLink v-if="item.to" :to="item.to">
              <button
                type="button"
                class="px-2.5 py-1.5 flex items-center gap-x-1 text-sm font-semibold text-gray-900"
                aria-expanded="false"
              >
                {{ item.label }}
              </button>
            </NuxtLink>

            <UPopover
              v-if="item.children && item.children.length > 0"
              :ui="{
                ring: 'ring-gray-100'
              }"
            >
              <UButton
                color="white"
                :label="item.label"
                trailing-icon="i-heroicons-chevron-down-20-solid"
                class="ring-0 shadow-none rounded-lg"
              />

              <template #panel>
                <NuxtLink
                  v-for="(child, childIndex) in item.children"
                  :key="childIndex"
                  to="/etfInvestmentCalculator"
                  class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm hover:bg-gray-50"
                >
                  <div
                    class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white"
                  >
                    <UIcon
                      :name="child.icon"
                      class="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                    />
                  </div>
                  <div class="flex-auto">
                    <a href="#" class="block font-semibold text-gray-900">
                      {{ child.label }}
                      <span class="absolute inset-0"></span>
                    </a>
                    <p class="mt-1 text-gray-600">{{ child.description }}</p>
                  </div>
                </NuxtLink>
              </template>
            </UPopover>
          </div>
        </div>

        <div
          class="hidden lg:flex lg:flex-1 lg:px-2.5 lg:py-1.5 lg:justify-end"
        >
          <a href="#" class="text-sm font-semibold text-gray-900">
            登入 <span aria-hidden="true">&rarr;</span></a
          >
        </div>
      </nav>

      <div>
        <USlideover v-model="isShowMobileMenu">
          <div class="lg:hidden bg-white py-6 px-6">
            <div class="flex items-center justify-between">
              <a href="#" class="-m-1.5 p-1.5">
                <span class="sr-only">Your Company</span>
                <img
                  class="h-8 w-auto"
                  src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
              <button
                type="button"
                class="-m-2.5 rounded-md p-2.5 text-gray-700"
                @click="isShowMobileMenu = false"
              >
                <span class="sr-only">Close menu</span>
                <svg
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div class="mt-6 flow-root">
              <div class="-my-6 divide-y divide-gray-500/10">
                <div class="space-y-2 py-6">
                  <div v-for="(item, index) in menu" :key="index" class="">
                    <NuxtLink v-if="item.to" :to="item.to">
                      <span
                        class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        >{{ item.label }}
                      </span>
                    </NuxtLink>

                    <UAccordion
                      v-if="item.children && item.children.length > 0"
                      :items="[item]"
                    >
                      <template #calculator>
                        <div></div>
                      </template>
                    </UAccordion>
                  </div>
                </div>
                <div class="py-6">
                  <a
                    href="#"
                    class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >登入</a
                  >
                </div>
              </div>
            </div>
          </div>
        </USlideover>
      </div>
    </header>
    <main>
      <NuxtPage />
    </main>
  </div>
</template>
<script setup>
import { ref } from 'vue'

const isShowMobileMenu = ref(false)
const menu = [
  {
    label: '關於我',
    description: '',
    slot: null,
    to: '/',
    icon: '',
    children: null
  },
  {
    label: '美股ETF',
    description: '',
    slot: null,
    to: '/',
    icon: '',
    children: null
  },
  {
    label: '計算機',
    description: '',
    slot: 'calculator',
    to: null,
    icon: '',
    children: [
      {
        label: '美股ETF - 定期定額投資',
        description: '一鍵計算年化報酬率、最終金額',
        to: '/etfInvestmentCalculator',
        icon: 'i-heroicons-presentation-chart-line',
        children: null
      }
    ]
  },
  {
    label: '課程',
    description: '',
    slot: null,
    to: '/',
    icon: '',
    children: null
  }
]
</script>
