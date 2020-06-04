import { createTheming } from '@callstack/react-theme-provider'
import { defaults } from './default-config'

const theme = {
  ...defaults,
}

export const { ThemeProvider, withTheme, useTheme } = createTheming(
  theme
)
