tailwind.config = {
    theme: {
      extend: {
        backgroundImage: {
          'bgOne': "url('./images/hero-banner.jpg)",
          'footer-texture': "url('/img/footer-texture.png')",
        },
         container:{
          padding: {
            DEFAULT: '1rem',
            sm: '2rem',
            lg: '4rem',
            xl: '5rem',
            '2xl': '6rem',
          },
          center:true,
         },
        colors: {
          navbarbg: '#472522ed',
        }
      }
    }
  }