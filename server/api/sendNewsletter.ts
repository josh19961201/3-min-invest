import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default defineEventHandler(async (event) => {
  try {
    // 取得前端傳來的參數
    const body = await readBody(event)

    // 從前端接收的參數
    const { name, email } = body

    const data = await resend.emails.send({
      from: '電子報訂閱 <adam@3-min-invest.com>',
      to: 'adam@3-min-invest.com',
      subject: '電子報訂閱測試',
      html: `<strong>${name} (${email}) 已訂閱電子報！</strong>` // 插入參數
    })

    return { success: true, data }
  } catch (error) {
    return { error }
  }
})
