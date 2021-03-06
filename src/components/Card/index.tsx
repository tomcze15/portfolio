import { FunctionComponent } from 'react';
import styled, { css } from 'styled-components';

import { ICardPorps } from 'common/types';
import { MEDIA } from 'constants/items';
import { useTranslation } from 'react-i18next';

const flexCenter = css`
  justify-content: center;
  align-items: center;
`;

const CardContainer = styled.div`
  height: 335px;
  width: 300px;
  border-radius: 13px;
  overflow: hidden;
  transition: 0.5s;
  cursor: pointer;

  ${MEDIA.XXL} {
    height: 270px;
    width: 260px;
  }

  ${MEDIA.M} {
    height: 200px;
    width: 190px;
  }

  &:hover {
    transform: scale(1.1, 1.1);
    -webkit-box-shadow: 0px 0px 21px 7px ${({ theme }) => theme.card.shadow};
    -moz-box-shadow: 0px 0px 21px 7px ${({ theme }) => theme.card.shadow};
    box-shadow: 0px 0px 21px 7px ${({ theme }) => theme.card.shadow};
  }
`;

const IconWrapper = styled.div`
  height: 65%;
  width: 100%;
  display: flex;
  ${flexCenter}
  background-color: ${({ theme }) => theme.card.top.background};

  img,
  svg {
    max-height: 160px;
    max-width: 280px;

    ${MEDIA.XXL} {
      max-height: 120px;
      max-width: 210px;
    }

    ${MEDIA.M} {
      max-height: 80px;
      max-width: 150px;
    }
  }
`;

const TitleWrapper = styled.div`
  height: 35%;
  width: 100%;
  background-color: ${({ theme }) => theme.card.bottom.background};
  display: flex;
  text-align: center;
  ${flexCenter}

  & h5 {
    transition: 0.5s;
    font-size: 32px;
    color: ${({ theme }) => theme.card.bottom.text};

    ${MEDIA.XXL} {
      font-size: 28px;
    }

    ${MEDIA.M} {
      font-size: 21px;
    }
  }

  ${CardContainer}:hover & h5 {
    font-size: 37px;

    ${MEDIA.M} {
      font-size: 26px;
    }
  }
`;

const Card: FunctionComponent<ICardPorps> = (props): JSX.Element => {
  const typeOfIcon = typeof props.icon;
  const { t } = useTranslation();

  return (
    <CardContainer>
      <IconWrapper>
        {typeOfIcon === 'object' ? (
          <props.icon title={t('LOGO') + props.name} />
        ) : (
          <img src={props.icon as string} alt={t('LOGO') + props.name} />
        )}
      </IconWrapper>
      <TitleWrapper>
        <h5>{props.name}</h5>
      </TitleWrapper>
    </CardContainer>
  );
};

export default Card;
