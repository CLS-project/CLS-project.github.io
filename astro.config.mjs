import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import icon from 'astro-icon'
import sitemap from '@astrojs/sitemap'
import robotsTxt from 'astro-robots-txt'
import svelte from '@astrojs/svelte'

// https://astro.build/config
export default defineConfig({
  site: 'https://www.CLS-project.github.io',
  outDir: './dist',
  integrations: [
    tailwind(),
    icon({
      include: {
        'fa6-solid': [
          'at',
          'briefcase',
          'check',
          'circle-arrow-right',
          'code-fork',
          'code-merge',
          'code-pull-request',
          'comment',
          'globe',
          'lightbulb',
          'newspaper',
          'star',
          'user',
          'xmark'
        ],
        'fa6-brands': ['dev', 'github', 'linkedin', 'x-twitter']
      }
    }),
    sitemap(),
    robotsTxt(),
    svelte()
  ],
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  }
})
