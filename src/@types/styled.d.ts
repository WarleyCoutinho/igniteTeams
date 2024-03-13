import 'styled-components/native';
import Theme from '../theme/Theme';

declare module 'styled-components/native' {
  type ThemeType = typeof Theme;

  export interface DefaultTheme extends ThemeType {}
}
