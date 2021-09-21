const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';

const Colors = {
  light: {
    text: '#000',
    background: '#fff',
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#fff',
    background: '#000',
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
  },
  background: '#1A0938',

  primary: '#ED1A3',
  secondary: '#361E60',
  accent: '#22DDF2',
  grey0: '#393e42',
  grey1: '#090909',
  grey2: '#464646',
  grey3: '#A7A7A7',
  grey4: '#E7E7E7',
  grey5: '#FFFFFF',
  greyOutline: '#bbb',
  success: '#52c41a',
  error: '#ff190c',
  warning: '#faad14',
  disabled: 'hsl(208, 8%, 90%)',

  black: '#000000',
  white: '#ffffff',

  border: 'rgb(216, 216, 216)',
  card: 'rgb(255, 255, 255)',
  notification: 'rgb(255, 59, 48)',
  text: 'rgb(28, 28, 30)',

  linearGradient1: ['#D91193','#22DDF2'],
  linearGradient2: ['#22DDF2','#D91193'],

  transparent: 'rgba(0,0,0,0)',

  transparentBlack: 'rgba(0,0,0, 0.6)',
  transparentBlackHard: 'rgba(0,0,0, 0.9)',

  platform: {
    ios: {
      primary: '#007aff',
      secondary: '#5856d6',
      success: '#4cd964',
      error: '#ff3b30',
      warning: '#ffcc00',
    },
    android: {
      primary: '#2196f3',
      secondary: '#9C27B0',
      success: '#4caf50',
      error: '#f44336',
      warning: '#ffeb3b',
    },
  },

};

export default Colors;
