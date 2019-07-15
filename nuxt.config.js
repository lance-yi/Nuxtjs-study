// 自定义nuxt配置
export default {
  head: {
    link: [
      { rel: 'icon', type: 'image/png', href: 'logo.png' }
    ]
  },
  css: [
    '~static/css/main.css'
  ],
  plugins: [
    { src: '~plugins/vue-notifications.js', ssr: false }
  ]
}