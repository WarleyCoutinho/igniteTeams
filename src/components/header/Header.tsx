import * as C from '../header/styles';

import LogoImg from '../../assets/logo.png';

export const Header = () => {
  return (
    <C.Container>
      <C.Logo source={LogoImg} />
    </C.Container>
  );
};
