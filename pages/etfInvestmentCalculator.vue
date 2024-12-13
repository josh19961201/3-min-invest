<template>
  <div
    class="w-full min-h-screen flex flex-col items-center gap-6 p-8 lg:p-12 text-base"
  >
    <h2 class="text-3xl text-center font-bold">美股ETF定期定額投資計算器</h2>
    <!-- 說明 -->
    <div
      class="w-full rounded-xl bg-white border shadow flex flex-col gap-6 p-6"
    >
      <h3 class="text-xl font-semibold">什麼是ETF？</h3>
      <p>
        ETF（交易所交易基金），提供簡單的方式來買進一籃子的股票（將雞蛋放在不同籃子內），並有較低的費用。
      </p>
      <h3 class="text-xl font-semibold">為什麼選擇定期定額投資？</h3>
      <ul class="list-disc pl-6 leading-7">
        <li>培養長期投資習慣</li>
        <li>避免情緒化交易</li>
        <li>使用平均成本法降低風險</li>
      </ul>
      <p class="text-red-700 font-medium">
        <span>
          請記住，這個計算器提供的是基於歷史數據的估算，實際投資結果可能會有所不同。</span
        >
        <br />
        <span> 投資前請務必進行充分的研究，並考慮諮詢專業的財務顧問。</span>
      </p>
    </div>
    <div class="w-full flex gap-6">
      <!-- 計算機 -->
      <div class="w-full rounded-xl bg-white border shadow overflow-hidden">
        <div
          class="w-full bg-gray-200 py-5 flex justify-center items-center text-xl font-medium"
        >
          計算機
        </div>
        <div class="flex flex-col gap-6 p-6">
          <div class="w-full flex flex-col gap-1.5">
            <h3 class="text-lg whitespace-nowrap">選擇ETF</h3>

            <select
              class="block w-full border px-3 py-3 text-base border-gray-300 focus:outline-none focus:ring-gray-500 focus:border-gray-500 rounded-md"
              v-model="calcInput.selectedETF"
            >
              <option :value="null" selected>選擇您想投資的ETF</option>
              <option v-for="etf in etfDataList" :key="etf.value" :value="etf">
                {{ etf.label }}
              </option>
            </select>
          </div>

          <div class="flex gap-6 justify-center">
            <div class="w-full flex flex-col gap-1.5">
              <h3 class="text-lg whitespace-nowrap">每月投資金額 （新台幣）</h3>
              <input
                class="block w-full border p-3 text-base border-gray-300 focus:outline-none focus:ring-gray-500 focus:border-gray-500 rounded-md"
                type="number"
                v-model="calcInput.monthlyInvestment"
                min="0"
              />
            </div>

            <div class="w-full flex flex-col gap-1.5">
              <h3 class="text-lg whitespace-nowrap">投資期間 （年）</h3>
              <input
                class="block w-full border p-3 text-base border-gray-300 focus:outline-none focus:ring-gray-500 focus:border-gray-500 rounded-md"
                type="number"
                v-model="calcInput.investmentPeriod"
                min="0"
              />
            </div>
          </div>
          <button
            class="bg-gray-800 text-white rounded-md py-3 text-lg font-semibold hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600"
            @click="submit"
          >
            計算
          </button>
        </div>
      </div>
      <!-- 計算結果 -->
      <div
        class="w-full rounded-xl bg-white border shadow flex flex-col overflow-hidden"
      >
        <div
          class="w-full bg-gray-200 py-5 flex justify-center items-center text-xl font-medium"
        >
          <h2>投資結果</h2>
        </div>
        <dl
          class="flex flex-col justify-between items-center h-full w-full divide-y text-base"
        >
          <div class="flex w-full h-full items-center justify-between px-6">
            <dt class="flex items-center">選擇的ETF</dt>
            <dd class="flex items-center">
              <span v-if="result.selectedETF">{{ result.selectedETF }}</span>
            </dd>
          </div>
          <div class="flex w-full h-full items-center justify-between px-6">
            <dt class="flex items-center">投資總額</dt>
            <dd class="flex items-center">
              <span v-if="result.totalInvested"
                >$ {{ result.totalInvested }}</span
              >
            </dd>
          </div>
          <div class="flex w-full h-full items-center justify-between px-6">
            <dt class="flex items-center">預估收益</dt>
            <dd class="flex items-center">
              <span v-if="result.interestEarned"
                >$ {{ result.interestEarned }}</span
              >
            </dd>
          </div>
          <div class="flex w-full h-full items-center justify-between px-6">
            <dt class="flex items-center">最終金額</dt>
            <dd class="flex items-center">
              <span v-if="result.futureValue">$ {{ result.futureValue }}</span>
            </dd>
          </div>
          <div class="flex w-full h-full items-center justify-between px-6">
            <dt class="flex items-center">年化報酬率</dt>
            <dd class="flex items-center">
              <span v-if="result.annualReturn">{{ result.annualReturn }}</span>
            </dd>
          </div>
        </dl>
      </div>
    </div>

    <!-- 表格 -->
    <div
      class="w-full block border border-gray-150 rounded-lg shadow overflow-hidden text-base"
    >
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-200 text-left">
          <tr>
            <th
              scope="col"
              class="truncate px-4 py-3 font-medium uppercase tracking-wider text-gray-700"
            >
              股票代號
            </th>
            <th
              scope="col"
              class="truncate px-4 py-3 font-medium uppercase tracking-wider text-gray-700"
            >
              中文名稱
            </th>
            <th
              scope="col"
              class="truncate px-4 py-3 font-medium uppercase tracking-wider text-gray-700"
            >
              費用率
            </th>

            <th
              scope="col"
              class="truncate px-4 py-3 font-medium uppercase tracking-wider text-gray-700"
            >
              年化報酬率
            </th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200 bg-white">
          <tr
            v-for="etf in etfDataList"
            :key="etf.value"
            class="hover:bg-gray-50 cursor-pointer"
          >
            <td class="whitespace-nowrap px-4 py-3">
              {{ etf.value }}
            </td>
            <td class="whitespace-nowrap px-4 py-3">
              {{ etf.label }}
            </td>
            <td class="whitespace-nowrap px-4 py-3">
              {{ (etf.expense * 100).toFixed(2) + '%' }}
            </td>
            <td class="whitespace-nowrap px-4 py-3">
              {{ (etf.annualReturn * 100).toFixed(2) + '%' }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'

const etfDataList = ref([
  {
    value: 'VT',
    label: 'Vanguard Total World Stock ETF（全球股票市場指數）',
    annualReturn: 0.0943,
    expense: 0.0007
  },
  {
    value: 'VTI',
    label: 'Vanguard Total Stock Market ETF（全美國股市指數）',
    annualReturn: 0.1023,
    expense: 0.0003
  },
  {
    value: 'VOO',
    label: 'Vanguard S&P 500 ETF（追蹤標準普爾500指數）',
    annualReturn: 0.1131,
    expense: 0.0003
  },
  {
    value: 'VIG',
    label: '	Vanguard Dividend Appreciation ETF（股息增長指數）',
    annualReturn: 0.0972,
    expense: 0.0006
  },
  {
    value: 'QQQ',
    label: 'Invesco QQQ Trust（納斯達克科技股指數）',
    annualReturn: 0.1568,
    expense: 0.002
  },
  {
    value: 'SMH',
    label: 'VanEck Semiconductor ETF（追蹤半導體產業）',
    annualReturn: 0.1723,
    expense: 0.0035
  },
  {
    value: 'AOA',
    label: 'iShares Core Aggressive Allocation ETF（積極股債配置）',
    annualReturn: 0.0912,
    expense: 0.0015
  }
])
const calcInput = reactive({
  monthlyInvestment: 0,
  investmentPeriod: 0,
  selectedETF: null
})
const result = reactive({
  selectedETF: null,
  totalInvested: '',
  interestEarned: '',
  futureValue: '',
  annualReturn: ''
})

function submit() {
  // 驗證
  if (!calcInput.monthlyInvestment) {
    alert('請輸入每月投資金額')
    return
  }
  if (!calcInput.investmentPeriod) {
    alert('請輸入投資期間')
    return
  }
  if (!calcInput.selectedETF) {
    alert('請選擇ETF')
    return
  }
  const monthlyInvestment = calcInput.monthlyInvestment
  const investmentPeriod = calcInput.investmentPeriod
  const selectedETF = calcInput.selectedETF

  const annualReturn = selectedETF.annualReturn - selectedETF.expense
  const monthlyRate = annualReturn / 12
  const totalMonths = investmentPeriod * 12

  const futureValue =
    monthlyInvestment *
    ((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate) *
    (1 + monthlyRate)

  const totalInvested = monthlyInvestment * totalMonths
  const interestEarned = futureValue - totalInvested

  result.selectedETF = selectedETF.value
  result.totalInvested = Math.round(totalInvested).toLocaleString()
  result.interestEarned = Math.round(interestEarned).toLocaleString()
  result.futureValue = Math.round(futureValue).toLocaleString()
  result.annualReturn = (annualReturn * 100).toFixed(2)
}
</script>
