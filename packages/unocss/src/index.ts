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
        'l-shadow', { 'box-shadow': '0px 0px 12px rgba(0, 0, 0, 0.12)' },
      ],
    ],
    shortcuts: {
      'l-flex': 'flex flex-col grow-1 shrink-1 min-w-min content-center justify-center flex-wrap',
      // shortcuts to multiple utilities
      'l-layer': 'l-filter  bg-s-container l-shadow l-shadow  bg-s-container',
      'l-card': 'l-layer  rd-2 overflow-hidden l-border border-1   max-h-min  will-change-transform color-font-s p-5',
      'l-btn': 'select-none inline-flex shrink-0 rd min-w-[32px]  h-[32px] content-center justify-center flex-wrap border-1 divide-solid  whitespace-nowrap',
      'l-btn-p': 'color-font-p bg-p hover:bg-on-p l-shadow l-btn border-p',
      'l-btn-n': ' text-left hover:bg-on-s bg-transparent border-transparent l-btn color-font-n hover:color-font-s',

    },
    theme: {
      colors: {
        ol: 'rgba(82, 82, 111, 0.44)',
        onOl: 'rgb(60, 61, 83)',
        fontP: 'rgb(255, 255, 255)',
        fontS: 'rgb(224, 225, 236)',
        fontT: 'rgba(220, 216, 254, 0.2)',
        fontN: 'rgb(133, 134, 153)',
        p: 'rgb(87, 91, 199)',
        pContainer: 'rgb(29, 30, 43)',
        onP: 'rgb(102, 107, 226)',
        s: 'rgb(39, 41, 57)',
        sContainer: 'rgba(29, 30, 43, 0.498)',
        onS: 'rgb(43, 44, 68)',
        bg: '#191a23',
        onB: 'rgb(38, 39, 54)',
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
