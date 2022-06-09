import { IHeaderStyleProps } from 'common/types';
import { FunctionComponent } from 'react';
import styled, { css } from 'styled-components';
import { MEDIA } from 'constants/items';
import useMenu from './useMenu';

const flexCenter = css`
  align-items: center;
  justify-content: center;
`;

const WrapperMain = styled.header<IHeaderStyleProps>`
  width: 100%;
  height: 150px;
  background-color: transparent;
  display: flex;
  justify-content: center;
  position: fixed;
`;

const ContaierMain = styled.nav`
  width: 1400px;
  padding: 0 20px;
  height: 100%;
  display: flex;
  ${flexCenter}
`;

const ListContainer = styled.ul`
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  ${flexCenter}
  ${MEDIA.XL} {
    gap: 20px;
  }
  ${MEDIA.XXL} {
    gap: 60px;
  }
  list-style-type: none;
`;

const ListItemWrapper = styled.li`
  height: 100%;
  width: fit-content;
  display: flex;
  ${flexCenter}
`;

const NavLinkWrapper = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.menu.text.normal};
  &:hover {
    color: ${({ theme }) => theme.menu.text.hover};
    cursor: pointer;
  }
  &.active {
    background-color: ${({ theme }) => theme.menu.text.selected};
  }
`;

const LanguageSection = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

const ButtonSection = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const Menu: FunctionComponent = (): JSX.Element => {
  const { items, fixedMenu } = useMenu();

  return (
    <WrapperMain>
      <ContaierMain>
        <LanguageSection />
        <ListContainer>
          {items.map(({ title, href }) => (
            <ListItemWrapper key={title}>
              <NavLinkWrapper href={href}>{title}</NavLinkWrapper>
            </ListItemWrapper>
          ))}
        </ListContainer>
        <ButtonSection />
      </ContaierMain>
    </WrapperMain>
  );
};

export default Menu;
