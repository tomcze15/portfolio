import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import styled, { css } from 'styled-components';

import {
  ImageCarNavi,
  ImageCar,
  ImageClock,
  ImageEarth,
  ImageList,
  ImageScreen,
} from 'assets';
import { SVGType } from 'common/types';
import { PageTitle, BoxTitle } from 'components';
import { MEDIA, TECHNOLOGIES } from 'constants/items';

const MainWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 21px;
  gap: 200px;
  max-width: 1400px;
  padding-bottom: 250px;

  ${MEDIA.XXL} {
    max-width: 1100px;
    gap: 100px;
    padding-bottom: 150px;
  }

  ${MEDIA.L} {
    padding-bottom: 100px;
  }
`;

const ImagesContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;

  & img {
    max-height: 230px;

    ${MEDIA.XXL} {
      max-height: 180px;
    }

    ${MEDIA.S} {
      max-height: 180px;
    }
  }

  & svg {
    max-height: 285px;

    ${MEDIA.XXL} {
      max-height: 200px;
    }

    ${MEDIA.L} {
      display: none;
    }
  }
`;

const Description = styled.p`
  text-align: justify;
`;

const InfoImageContainer = styled.div`
  width: 100%;
  padding-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 75px;

  & img {
    height: 200px;
    width: 200px;

    ${MEDIA.XXL} {
      height: 160px;
      width: 160px;
    }
  }

  & ul {
    padding-left: 35px;
  }

  ${MEDIA.L} {
    flex-direction: column;
    gap: 25px;
    padding-bottom: 50px;

    & ul {
      padding-left: 0px;
    }
  }
`;

const SmallInfoImageContainer = styled(InfoImageContainer)`
  gap: 30px;

  & img {
    height: 100px;
    width: 100px;

    ${MEDIA.XXL} {
      height: 70px;
      width: 70px;
    }
  }

  ${MEDIA.L} {
    padding-bottom: 0px;
  }
`;

const TasksContainer = styled.div`
  max-width: 470px;

  ${MEDIA.L} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & span {
      padding-bottom: 30px;
      font-weight: bold;

      ${MEDIA.L} {
        text-align: center;
      }
    }
  }
`;

const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;

  ${MEDIA.L} {
    text-align: center;
    list-style-type: none;
    gap: 10px;
  }
`;

const TechContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 40px;
  padding-top: 100px;

  & span {
    text-align: center;
    width: 100%;
  }

  ${MEDIA.XXL} {
    gap: 15px;
    padding-top: 40px;
  }

  ${MEDIA.L} {
    gap: 70px;
    padding-top: 30px;
    padding-bottom: 50px;
  }
`;

const TechsSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 120px;

  ${MEDIA.XXL} {
    gap: 80px;
  }

  ${MEDIA.L} {
    align-items: center;
    flex-direction: column;
    gap: 20px;
  }
`;

const LogosContainer = styled.div`
  display: flex;
  gap: 30px;

  & img,
  & svg {
    height: 100px;

    ${MEDIA.XXL} {
      height: 60px;
    }
  }

  ${MEDIA.L} {
    flex-direction: column;
  }
`;

const animHover = css`
  transition: 0.3s;
  transform: translateY(0px);

  &:hover {
    transform: translateY(-15px);
  }
`;

const ImgWrapper = styled.img`
  ${animHover}
`;

const SVGWrapper = styled.div`
  height: fit-content;
  width: fit-content;
  ${animHover}
`;

const Experience: FunctionComponent = (): JSX.Element => {
  const { t } = useTranslation();
  const TasksProject2: string[] = t('PROJECTS.SECOND.LIST.ITEMS', {
    returnObjects: true,
  });
  const TasksProject1: string[] = t('PROJECTS.FIRST.LIST.ITEMS', {
    returnObjects: true,
  });

  return (
    <MainWrapper>
      <PageTitle title={t('EXPERIENCE')} />
      <BoxTitle title={t('PROJECTS.SECOND.TITLE')}>
        <Description>{t('PROJECTS.SECOND.DESCRIPTION')}</Description>
        <ImagesContainer>
          <img src={ImageScreen} alt={t('CAR_PANEL')} />
          <ImageCar />
        </ImagesContainer>
        <InfoImageContainer>
          <TasksContainer>
            <span>{t('PROJECTS.SECOND.LIST.DESCRIPTION')}</span>
            <ListContainer>
              {TasksProject2.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ListContainer>
          </TasksContainer>
          <img src={ImageList} alt={t('LIST')} />
        </InfoImageContainer>
        <SmallInfoImageContainer>
          <img src={ImageClock} alt={t('CLOCK')} />
          <span>8 {t('PROJECTS.SECOND.PERIOD')}</span>
        </SmallInfoImageContainer>
      </BoxTitle>
      <BoxTitle title={t('PROJECTS.FIRST.TITLE')}>
        <Description>{t('PROJECTS.FIRST.DESCRIPTION')}</Description>
        <ImagesContainer>
          <img src={ImageEarth} alt={t('EARTH')} />
          <ImageCarNavi title={t('CAR')} />
        </ImagesContainer>
        <InfoImageContainer>
          <TasksContainer>
            <span>{t('PROJECTS.FIRST.LIST.DESCRIPTION')}</span>
            <ListContainer>
              {TasksProject1.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ListContainer>
          </TasksContainer>
          <img src={ImageList} alt={t('LIST')} />
        </InfoImageContainer>
        <TechContainer>
          <span>{t('PROJECTS.FIRST.TECHNOLOGIES')}</span>
          {TECHNOLOGIES.map((row, index) => (
            <TechsSection key={index}>
              {row.map((LogosGroup, i) => (
                <LogosContainer key={i}>
                  {LogosGroup.map((Logo: string | SVGType, index) =>
                    typeof Logo === 'string' ? (
                      <ImgWrapper
                        key={index}
                        src={Logo}
                        alt={t('TECHNOLOGY')}
                      />
                    ) : (
                      <SVGWrapper key={index}>
                        <Logo title={t('TECHNOLOGY')} />
                      </SVGWrapper>
                    )
                  )}
                </LogosContainer>
              ))}
            </TechsSection>
          ))}
        </TechContainer>
        <SmallInfoImageContainer>
          <img src={ImageClock} alt={t('CLOCK')} />
          <span>3 {t('PROJECTS.FIRST.PERIOD')}</span>
        </SmallInfoImageContainer>
      </BoxTitle>
    </MainWrapper>
  );
};

export default Experience;
