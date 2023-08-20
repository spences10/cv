import type { PlaywrightTestConfig } from '@playwright/test'

const config: PlaywrightTestConfig = {
	webServer: {
    command: 'pnpm run build && pnpm run preview',
    port: 4173,
    timeout: 3 * 60 * 1000,
  },
	testDir: 'tests',
}

export default config
