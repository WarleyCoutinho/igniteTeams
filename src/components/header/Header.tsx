import * as C from '../header/styles';

import LogoImg from '../../assets/logo.png';

type Props = {
  showBackButton?: boolean;
};

export const Header = ({ showBackButton = false }: Props) => {
  return (
    <C.Container>
      {showBackButton && (
        <C.BackButton>
          <C.BackIcon />
        </C.BackButton>
      )}
      <C.Logo source={LogoImg} />
    </C.Container>
  );
};
