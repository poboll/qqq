import { getHighlighter, setCDN } from 'shiki'

export const renderCodeHighlighter = async (
  code: string,
  lang: string,
  theme: string, // theme 参数是一个字符串
) => {
  setCDN('https://jsd.onmicrosoft.cn/npm/shiki@0.14.5/') // 设置 Shiki CDN 地址
  // 使用映射函数将字符串主题转换为 Shiki 主题
  return await getHighlighter({
    langs: [lang as any],
    theme, // 传递转换后的主题参数
  }).then((highlighter) => {
    return highlighter.codeToHtml(code.trim(), {
      lang,
    })
  })
}
