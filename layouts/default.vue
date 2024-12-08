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
          <NuxtLink to="/">
            <button
              type="button"
              class="px-2.5 py-1.5 flex items-center gap-x-1 text-sm font-semibold text-gray-900"
              aria-expanded="false"
            >
              關於我
            </button>
          </NuxtLink>

          <button
            type="button"
            class="px-2.5 py-1.5 flex items-center gap-x-1 text-sm font-semibold text-gray-900"
            aria-expanded="false"
          >
            美股ETF
          </button>

          <!-- 計算機 -->
          <UPopover
            :ui="{
              ring: 'ring-gray-100'
            }"
          >
            <UButton
              color="white"
              label="計算機"
              trailing-icon="i-heroicons-chevron-down-20-solid"
              class="ring-0 shadow-none rounded-lg"
            />

            <template #panel>
              <NuxtLink
                to="/etfInvestmentCalculator"
                class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm hover:bg-gray-50"
              >
                <div
                  class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white"
                >
                  <svg
                    class="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
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
                      d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605"
                    />
                  </svg>
                </div>
                <div class="flex-auto">
                  <a href="#" class="block font-semibold text-gray-900">
                    美股ETF - 定期定額投資
                    <span class="absolute inset-0"></span>
                  </a>
                  <p class="mt-1 text-gray-600">一鍵計算年化報酬率、最終金額</p>
                </div>
              </NuxtLink>
            </template>
          </UPopover>

          <button
            type="button"
            class="px-2.5 py-1.5 flex items-center gap-x-1 text-sm font-semibold text-gray-900"
            aria-expanded="false"
          >
            課程
          </button>
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
          <div class="lg:hidden" role="dialog" aria-modal="true">
            <div
              class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
            >
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
                    <div class="-mx-3">
                      <button
                        type="button"
                        class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        aria-controls="disclosure-1"
                        aria-expanded="false"
                      >
                        Product

                        <svg
                          class="h-5 w-5 flex-none"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          data-slot="icon"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </button>

                      <div class="mt-2 space-y-2" id="disclosure-1">
                        <a
                          href="#"
                          class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >Analytics</a
                        >
                        <a
                          href="#"
                          class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >Engagement</a
                        >
                        <a
                          href="#"
                          class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >Security</a
                        >
                        <a
                          href="#"
                          class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >Integrations</a
                        >
                        <a
                          href="#"
                          class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >Automations</a
                        >
                        <a
                          href="#"
                          class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >Watch demo</a
                        >
                        <a
                          href="#"
                          class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >Contact sales</a
                        >
                      </div>
                    </div>
                    <a
                      href="#"
                      class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >Features</a
                    >
                    <a
                      href="#"
                      class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >Marketplace</a
                    >
                    <a
                      href="#"
                      class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >Company</a
                    >
                  </div>
                  <div class="py-6">
                    <a
                      href="#"
                      class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >Log in</a
                    >
                  </div>
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
</script>
