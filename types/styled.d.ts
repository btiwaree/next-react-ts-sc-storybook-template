import type { CSSProp } from 'styled-components';
import 'styled-components';

declare module 'react' {
  interface Attributes {
    css?: CSSProp | CSSObject;
  }
}
