import { theme } from '../../theme/global-style'

export const sharedHeaderStyle = css`
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  margin-top: 3rem;
  margin-bottom: 1.5rem;
  line-height: 1;
`

export const fontSizes = {
  h1: theme.fontSize['4xl'],
  h2: theme.fontSize['3xl'],
  h3: theme.fontSize['2xl'],
  h4: theme.fontSize.xl,
  h5: theme.fontSize.lg,
  h6: theme.fontSize.base,
}
