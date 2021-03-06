import { ITheme, Theme } from 'common/types';
import COLORS from 'constants/colors';
import GRADIENT from 'constants/gradient';
import SHADOW from 'constants/shadow';

const DarkTheme: ITheme = {
  id: Theme.DARK,
  background: COLORS.COLOR_1,
  text: COLORS.COLOR_5,
  hello: COLORS.COLOR_4,
  burgerButton: {
    background: COLORS.COLOR_4,
  },
  button: {
    background: COLORS.COLOR_3,
    text: COLORS.COLOR_1,
    hoverBg: COLORS.COLOR_4,
    shadow: SHADOW.SHADOW_2,
  },
  searchButton: {
    text: COLORS.COLOR_1,
    background: COLORS.COLOR_5,
    shadow: SHADOW.SHADOW_1,
    placeholder: COLORS.COLOR_3,
  },
  mobileMenu: {
    background: COLORS.DIMMED,
    buttonBg: COLORS.COLOR_4,
  },
  menu: {
    text: {
      normal: COLORS.COLOR_5,
      selected: COLORS.COLOR_4,
      hover: COLORS.COLOR_4,
    },
    background: {
      normal: COLORS.COLOR_2,
      transparent: COLORS.TRANSPARENT,
    },
    shadow: SHADOW.SHADOW_3,
  },
  circles: {
    left: GRADIENT.LINEAR_1,
    right: GRADIENT.LINEAR_2,
  },
  box: {
    text: COLORS.COLOR_5,
    background: COLORS.COLOR_2,
  },
  boxTitle: {
    text: COLORS.COLOR_1,
    background: COLORS.COLOR_3,
    title: {
      text: COLORS.COLOR_5,
      background: COLORS.COLOR_2,
    },
  },
  contact: {
    text: COLORS.COLOR_4,
  },
  card: {
    top: {
      background: COLORS.COLOR_5,
    },
    bottom: {
      background: COLORS.COLOR_2,
      text: COLORS.COLOR_4,
    },
    shadow: SHADOW.SHADOW_3,
  },
  footer: {
    title: COLORS.COLOR_4,
    text: {
      normal: COLORS.COLOR_5,
      selected: COLORS.COLOR_4,
      hover: COLORS.COLOR_4,
    },
    icon: {
      normal: COLORS.COLOR_3,
      hover: COLORS.COLOR_4,
    },
  },
};

export { DarkTheme };
