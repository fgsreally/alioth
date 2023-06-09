export default function () {
  return {
    rules: [
      ['l-border', {
        'border-style': 'solid',
        'border-color': 'rgba(82, 82, 111, 0.44)',
      }],
      [
        'l-filter', { 'backdrop-filter': 'blur(10px) saturate(190%) contrast(70%) brightness(80%)' },
      ],
      [
        'l-shadow', { 'box-shadow': 'rgba(0, 0, 0, 0.2) 0px 4px 24px' },
      ],
    ],
    shortcuts: {
      'l-flex': 'flex flex-col grow-1 shrink-1 min-w-min content-center justify-center flex-wrap',
      // shortcuts to multiple utilities
      'l-layer': 'l-filter  bg-s-container l-shadow l-shadow l-flex bg-s-container',
      'l-card': 'l-layer  rd-2 overflow-hidden l-border border-1   max-h-min  will-change-transform color-font-s',
      'l-btn': 'select-none inline-flex shrink-0 rd min-w-[32px]  h-[32px] content-center justify-center flex-wrap border-1 divide-solid  whitespace-nowrap',
      'l-btn-p': 'color-font-p bg-p hover:bg-on-p l-shadow l-btn border-p',
      'l-btn-n': ' text-left hover:bg-on-s bg-transparent border-transparent l-btn color-font-n hover:color-font-s',

    },
    theme: {
      colors: {
        font: {
          primray: 'rgb(255, 255, 255)',
          secondary: 'rgb(224, 225, 236)',
          tertiary: 'rgba(220, 216, 254, 0.2)',
          neutral: 'rgb(133, 134, 153)',
        },
        outline: 'rgba(82, 82, 111, 0.44)',
        onOutline: 'rgb(60, 61, 83)',
        primary: 'rgb(87, 91, 199)',
        primaryContainer: 'rgb(29, 30, 43)',
        onPrimary: 'rgb(102, 107, 226)',
        secondary: 'rgb(39, 41, 57)',
        secondaryContainer: 'rgba(29, 30, 43, 0.498)',
        onSecondary: 'rgb(43, 44, 68)',
        background: '#191a23',
        onBackground: 'rgb(38, 39, 54)',
      },
    },
    preflights: [
      {
        getCSS: ({ theme }) => ` .l-hover svg{
          color:${theme.colors.fontP}
        
          
      }`,
      },
    ],
  }
}
