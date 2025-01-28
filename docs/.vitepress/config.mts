import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  homepage: 'https://philchrist-lc.github.io/lc-vitepress/',
  base: '',
  title: "LC-TOP Help",
  description: "LC-TOP Handwerker Software",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: 'Eigenes LV erstellen', link: '/eigenes-lv-erstellen' },
      { text: 'Bestellungen generieren', link: '/bestellungen-generieren' },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          { text: 'Test Artikel', link: '/eigenes-lv-erstellen' },
          { text: 'Bestellungen generieren', link: '/bestellungen-generieren' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
