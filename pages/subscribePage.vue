<template>
  <div>
    <div
      class="relative min-h-screen w-full flex justify-center items-center isolate overflow-hidden bg-gradient-to-t from-gray-700 via-gray-900 to-black py-10 sm:py-12 lg:py-16"
    >
      <div
        class="mx-auto max-w-5xl px-6 lg:px-8 space-y-14 lg:space-y-16 flex flex-col justify-center items-center"
      >
        <div class="w-full flex flex-col gap-8 justify-center items-center">
          <h2
            class="flex flex-col md:flex-row justify-center items-center w-full font-semibold tracking-tight text-white"
          >
            <span class="text-5xl md:text-5xl lg:text-6xl"> 新手必學！ </span>
            <span class="text-3xl md:text-5xl lg:text-6xl mt-4 md:mt-0">
              美股ETF投資精華解密
            </span>
          </h2>
          <div
            class="bg-white/10 px-6 py-4 rounded-lg border border-amber-500 leading-normal text-gray-300 text-center"
          >
            <p class="font-semibold text-xl lg:text-2xl">
              不只是台股，更大的世界等你發現！
              透過美股ETF，投資世界級資產一次上手
            </p>

            <p class="text-lg lg:text-xl mt-3 lg:mt-6">
              房地產、黃金、科技股 ... 全球資產任你配
            </p>
          </div>
        </div>
        <div class="w-full flex flex-col gap-6">
          <div class="flex flex-col lg:flex-row gap-6">
            <input
              type="text"
              class="h-16 flex-auto rounded-md bg-white/10 px-3.5 py-2 text-lg text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-white focus:outline-2 focus:-outline-offset-2 focus:outline-amber-500 sm:text-lg/6"
              placeholder="您的稱呼..."
              v-model="subscribeData.name"
            />
            <input
              type="email"
              class="h-16 flex-auto rounded-md bg-white/10 px-3.5 py-2 text-lg text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-white focus:outline-2 focus:-outline-offset-2 focus:outline-amber-500 sm:text-lg/6"
              placeholder="您最常用的 Email ..."
              v-model="subscribeData.email"
            />
          </div>

          <button
            class="w-full flex flex-col justify-center items-center py-4 bg-amber-500 text-white rounded-lg"
            @click="sendEmail"
          >
            <span
              class="text-2xl lg:text-3xl text-center font-semibold flex space-x-1 items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-6 lg:size-8"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.25 9a6.75 6.75 0 0 1 13.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 0 1-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 1 1-7.48 0 24.585 24.585 0 0 1-4.831-1.244.75.75 0 0 1-.298-1.205A8.217 8.217 0 0 0 5.25 9.75V9Zm4.502 8.9a2.25 2.25 0 1 0 4.496 0 25.057 25.057 0 0 1-4.496 0Z"
                  clip-rule="evenodd"
                />
              </svg>

              立即訂閱電子報！
            </span>

            <span class="text-sm lg:text-lg font-normal text-center">
              （您可以隨時取消訂閱）
            </span>
          </button>
        </div>
        <dl
          class="flex flex-col sm:flex-row gap-8 sm:justify-between w-full gap-y-10 lg:pt-2"
        >
          <div class="w-auto flex flex-col items-start">
            <dt
              class="mt-4 text-3xl font-semibold text-amber-200 flex items-center space-x-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span> 如果你是... </span>
            </dt>
            <dd class="mt-2 text-lg/7 text-gray-100">
              <ul>
                <li>對未來焦慮的小資族</li>
                <li>想擺脫低薪困境的青年</li>
                <li>想給小孩創造更多財富的父母</li>
              </ul>
            </dd>
          </div>
          <div class="w-auto flex flex-col items-start">
            <dt
              class="mt-4 text-3xl font-semibold text-amber-200 flex space-x-1 items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-6"
              >
                <path
                  d="M12 .75a8.25 8.25 0 0 0-4.135 15.39c.686.398 1.115 1.008 1.134 1.623a.75.75 0 0 0 .577.706c.352.083.71.148 1.074.195.323.041.6-.218.6-.544v-4.661a6.714 6.714 0 0 1-.937-.171.75.75 0 1 1 .374-1.453 5.261 5.261 0 0 0 2.626 0 .75.75 0 1 1 .374 1.452 6.712 6.712 0 0 1-.937.172v4.66c0 .327.277.586.6.545.364-.047.722-.112 1.074-.195a.75.75 0 0 0 .577-.706c.02-.615.448-1.225 1.134-1.623A8.25 8.25 0 0 0 12 .75Z"
                />
                <path
                  fill-rule="evenodd"
                  d="M9.013 19.9a.75.75 0 0 1 .877-.597 11.319 11.319 0 0 0 4.22 0 .75.75 0 1 1 .28 1.473 12.819 12.819 0 0 1-4.78 0 .75.75 0 0 1-.597-.876ZM9.754 22.344a.75.75 0 0 1 .824-.668 13.682 13.682 0 0 0 2.844 0 .75.75 0 1 1 .156 1.492 15.156 15.156 0 0 1-3.156 0 .75.75 0 0 1-.668-.824Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span> 我們能夠告訴你... </span>
            </dt>
            <dd class="mt-2 text-base/7 text-gray-100">
              <ul>
                <li>
                  <b>秘密 1：</b> 如何資產配置美股指數ETF，穩健創造長期報酬？
                </li>
                <li><b>秘密 2：</b>如何用 ETF 打造全球投資組合？</li>
                <li>
                  <b>秘密 3：</b>用ETF輕鬆投資美國房地產、科技股、黃金、債券
                </li>
                <li>
                  <b>秘密 4：</b>如何透過指數化投資，勝過 90%
                  的專業基金？（實證研究）
                </li>
                <li>
                  <b>秘密 5：</b>最強ETF篩選術！用投資工具找出最適合你的ETF
                </li>
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </div>
    <UModal v-model="isShowVerifyError">
      <div class="p-4">
        <div v-if="!subscribeData.name.replace(/\s+/g, '')">請輸入暱稱</div>
        <div
          v-if="
            !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
              subscribeData.email.replace(/\s+/g, '')
            )
          "
        >
          請輸入正確的 Email
        </div>
      </div>
    </UModal>
  </div>
</template>
<script setup>
import { reactive, ref } from 'vue'
definePageMeta({
  layout: 'fullScreen' // 指定使用 layouts/fullScreen.vue
})

const subscribeData = reactive({
  name: '',
  email: ''
})

const name = ref('')
const email = ref('')

const isShowVerifyError = ref(false)

const sendEmail = async () => {
  if (
    !subscribeData.name.replace(/\s+/g, '') ||
    !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
      subscribeData.email.replace(/\s+/g, '')
    )
  ) {
    isShowVerifyError.value = true
    return
  }
  try {
    const response = await $fetch('/api/send', {
      method: 'POST',
      body: { name: subscribeData.name, email: subscribeData.email } // 送出表單資料
    })

    console.log('Email sent:', response)
    alert('訂閱成功！')
  } catch (error) {
    console.error('Failed to send email:', error)
    alert('發送失敗，請稍後再試')
  }
}
</script>
