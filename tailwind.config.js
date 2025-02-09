/*
    Template Name: Quarter
    Description: Real Estate HTML Template
    Version: 1.0.0
    Author: Kamrul Hasan
    Email:786hasankamrul96@gmail.com
*/


/**************************************************************

	Start Tailwind Custom Style Indexing
	|
	|___screens
  |
	|___colors
  |
	|___area
  | |___width 
  | |___height
  | |___max width 
  | |___max height 
	|
  |___spacing
  | |___gap 
  | |___padding
  | |___margin 
  |
  |___typography
  | |___font family 
  | |___font size
  | |___line-height 
  | |___letter spacing  
  |
	|___background
	|
	|___box shadows
  |
	|___gradiants
  |
	|___postion
  |
	|___transform
  | |___tranlate 
	|
	|___ border
  | |___width 
  | |___radius 
	|
	|___animation
  |
	|___components
  | |___containers 
 

***************************************************************/

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./quarter/**/*.{html,js}","./quarter-rtl/**/*.{html,js}",],
  theme: {
    screens: {
      // Breakpoint
      xxs: "320px",
      // => @media (min-width: 320px) { ... }
      xs: "480px",
      // => @media (min-width: 320px) { ... }
      sm: "576px",
      // => @media (min-width: 576px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "992px",
      // => @media (min-width: 992px) { ... }

      xl: "1200px",
      // => @media (min-width: 1200px) { ... }

      "2xl": "1300px",
      // => @media (min-width: 1366px) { ... }

      "3xl": "1400px",
      // // => @media (min-width: 1600px) { ... }
      "4xl": "1600px",
      // // => @media (min-width: 1600px) { ... }

      "5xl": "1800px",
      // // => @media (min-width: 1920px) { ... }
    },
    extend: {
      // colors
      colors: {
        black: "#000000",
        "black-2": "#22355B",
        lightBlack: "rgba(0,0,0,.7)",
        white: "#fff",
        "white-2": "#F2F6F7",
        "white-3": "#e8edee",
        "white-4": "#e6ecf0",
        "white-5": "#f0f4f7",
        "white-6": "#f1f1f1",
        "white-7": "#F7F7F7",
        "white-8": "#FAFAFA",
        "white-9": "#F2F7FA",
        "white-10": "#EDEDED",
        red: "#FF0000",
        "red-2": "#f34f3f",
        "red-3": "#DB483B",
        silver: "#C0C0C0",
        gray: "#808080",
        gray1: "#7e7e7e",
        maroon: "#800000",
        yellow: "#FFFF00",
        olive: "#808000",
        lime: "#00FF00",
        green: "#77C720",
        "green-2": "#008000",
        aqua: "#00FFFF",
        teal: "#008080",
        blue: "#0000FF",
        navy: "#000080",
        fuchsia: "#B13BFF",
        purple: "#800080",
        pink: "#FFC0CB",
        nude: "#ebc8b2",
        orange: "#ffa500",
        ratings: "#FFB800",
        /* social media colors */
        facebook: "#365493",
        twitter: "#3CF",
        linkedin: "#0077B5",
        pinterest: "#c8232c",
        dribbble: "#ea4c89",
        behance: "#131418",
        "google-plus": "#dd4b39",
        instagram: "#e4405f",
        vk: "#3b5998",
        wechat: "#7bb32e",
        youtube: "#CB2027",
        email: "#F89A1E",
        "color-1": "#8cb2b2",
        "color-2": "#ACD2D8",
        "color-3": "#A3BCC0",
        "color-4": "#84A2A6",
        "color-5": "#5C727D",
        "color-6": "#F5DFDC",
        "color-7": "#212529",
        "primary-color": "#000000",
        "primary-color-2": "#041113",
        "primary-color-3": "#133236",
        "secondary-color": "#FF5A3C",
        "secondary-color-2": "#cb3421",
        "secondary-color-3": "#fb412a",
        "heading-color": "#071c1f",
        "paragraph-color": "#5C727D",
        "section-bg-1": "#F2F6F7",
        "section-bg-2": "#171B2A",
        "section-bg-5": "#FFF2F0",
        "section-bg-6": "#0B2C3D",
        "section-bg-7": "#282b38",
        "table-bg": "#f7f8fa",
        "border-primary": "#eee",
        "border-color-1": "#e5eaee",
        "border-color-2": "#1e2021",
        "border-color-3": "#5C617F",
        "border-color-4": "#eb6954",
        "border-color-5": "#bc3928",
        "border-color-6": "#103034",
        "border-color-7": "#d1dae0",
        "border-color-8": "#f6f6f6",
        "border-color-9": "#e4ecf2",
        "border-color-10": "#ebeeee",
        "border-color-11": "#ededed",
        "border-color-12": "#e1e6ff",
        "border-color-13": "#f1f8ff",
        "border-color-14": "#576466",
        "border-color-15": "#f4faff",
        "border-color-16": "#93959E",
        "border-color-17": "rgb(222, 226, 230)",
        "border-color-18": "#203336",
        "border-dashed": "#ddd",
        "overlay-primary": "rgba(7, 28, 31)",
        overlay: "rgba(7, 28, 31, 0.6)",
        overlay2: "rgba(7, 28, 31, 0.9)",
      },
      // area
      width: {
        "1px": "1px",
        "10px": "10px",
        "15px": ".9375rem",
        "30px": "1.875rem",
        "42px": "2.625rem",
        "45px": "2.8125rem",
        "50px": "3.125rem",
        "60px": "3.75rem",
        "70px": "4.375rem",
        "78px": "4.875rem",
        "90px": "5.625rem",
        "100px": "6.25rem",
        "114px": "7.125rem",
        "125px": "7.8125rem",
        "130px": "8.125rem",
        "140px": "8.75rem",
        "150px": "9.375rem",
        "190px": "11.875rem",
        50: "12.5rem",
        "250px": "15.625rem",
        dropdown: "14.375rem",
        "300px": "18.75rem",
        100: "25rem",
        "500px": "31.25rem",
        "2000px": "2000px",
      },
      height: {
        "1px": "1px",
        "10px": "10px",
        "30px": "1.875rem",
        "45px": "2.8125rem",
        "50px": "3.125rem",
        "60px": "3.75rem",
        "65px": "4.0625rem",
        "68px": "4.25rem",
        "100px": "6.25rem",
        "140px": "8.75rem",
        50: "12.5rem",
        "350px": "21.875rem",
        "360px": "22.5rem",
      },
      maxWidth: {
        "350px": "21.875rem",
        "450px": "28.125rem",
        "500px": "31.25rem",
        "980px": "61.25rem",
      },
      minHeight: {
        "350px": "21.875rem",
      },
      // spacing
      // gap
      gap: {
        "5px": ".3125rem",
        "10px": "10px",
        "11px": "11px",
        "13px": ".8125rem",
        "15px": ".9375rem",
        "18px": "1.125rem",
        "23px": "1.4375rem",
        "25px": "1.5625rem",
        "30px": "1.875rem",
        "35px": "2.1875rem",
        "37px": "2.3125rem",
        "22px": "1.375rem",
        "50px": "3.125rem",
        15: "3.75rem",
      },
      // padding
      padding: {
        "1px": "1px",
        "3px": "3px",
        "5px": ".3125rem",
        "6px": ".375rem",
        "7px": ".4375rem",
        "9px": ".5625rem",
        "10px": ".625rem",
        "11px": ".6875rem",
        "13px": ".8125rem",
        "14px": ".875rem",
        "15px": ".9375rem",
        "17px": "1.0625rem",
        4.5: "1.125rem",
        "18px": "1.125rem",
        "19px": "1.1875rem",
        "21px": "1.3125rem",
        "22px": "1.375rem",
        "23px": "1.4375rem",
        "25px": "1.5625rem",
        "26px": "1.625rem",
        "30px": "1.875rem",
        "33px": "2.0625rem",
        "35px": "2.1875rem",
        "37px": "2.3125rem",
        "39px": "2.4375rem",
        "43px": "2.6875rem",
        "45px": "2.8125rem",
        "47px": "2.9375rem",
        "55px": "3.4375rem",
        "50px": "3.125rem",
        "60px": "3.75rem",
        "65px": "4.0625rem",
        "70px": "4.375rem",
        "74px": "4.625rem",
        "90px": "5.625rem",
        "100px": "6.25rem",
        "110px": "6.875rem",
        "115px": "7.1875rem",
        "130px": "8.125rem",
        "135px": "8.4375rem",
        "140px": "8.75rem",
        30: "7.5rem",
        35: "8.75rem",
        "145px": "9.0625rem",
        "150px": "9.375rem",
        "154px": "9.625rem",
        "155px": "9.6875rem",
        40.5: "10.125rem",
        "170px": "10.625rem",
        "175px": "10.9375rem",
        "180px": "11.25rem",
        "187px": "11.6875rem",
        50: "12.5rem",
        "205px": "12.8125rem",
        "250px": "15.625rem",
        "300px": "18.75rem",
      },
      // margin
      margin: {
        "5px": ".3125rem",
        "6px": ".375rem",
        "7px": ".4375rem",
        "10px": ".625rem",
        "14px": ".875rem",
        "15px": ".9375rem",
        4.5: "1.125rem",
        "18px": "1.125rem",
        "22px": "1.375rem",
        "25px": "1.5625rem",
        "26px": "1.625rem",
        "27px": "27px",
        "30px": "1.875rem",
        "35px": "2.1875rem",
        "43px": "2.6875rem",
        "45px": "2.8125rem",
        "50px": "3.125rem",
        "55px": "3.4375rem",
        "60px": "3.75rem",
        "65px": "4.0625rem",
        "76px": "4.75rem",
        22: "5.5rem",
        "90px": "5.625rem",
        "95px": "5.9375rem",
        30: "7.5rem",
        "110px": "6.875rem",
        "130px": "8.125rem",
        "150px": "9.375rem",
        "187px": "11.6875rem",
      },

      // typography
      // font family
      fontFamily: {
        nunito: '"Nunito Sans", sans-serif',
        poppins: '"Poppins", sans-serif',
        fontawesome: "'Font Awesome 5 Free'",
        icomoon: "icomoon",
      },
      //  font size
      fontSize: {
        "10px": ".625rem",
        "11px": ".6875rem",
        "12px": ".75rem",
        "13px": ".8125rem",
        "15px": ".9375rem",
        "17px": "1.0625rem",
        "19px": "1.1875rem",
        "21px": "1.3125rem",
        "22px": "1.375rem",
        "23px": "1.4375rem",
        "25px": "1.5625rem",
        "26px": "1.625rem",
        "28px": "1.75rem",
        "32px": "2rem",
        "34px": "2.125rem",
        "35px": "2.1875rem",
        "38px": "2.375rem",
        "40px": "2.5rem",
        "42px": "2.625rem",
        "44px": "2.75rem",
        "45px": "2.8125rem",
        "47px": "2.9375rem",
        "50px": "3.125rem",
        "55px": "3.4375rem",
        "58px": "3.625rem",
        "65px": "4.0625rem",
        "75px": "4.6875rem",
        "80px": "5rem",
        "90px": "5.625rem",
        "100px": "6.25rem",
        "140px": "8.75rem",
        "150px": "9.375rem",
        "200px": "12.5rem",
        "autopx-xl": "calc(1.325rem + .9vw)",
      },

      // line-height
      lineHeight: {
        1: 1,
        1.2: 1.2,
        1.3: 1.3,
        1.24: 1.24,
        1.25: 1.25,
        1.45: 1.45,
        1.5: 1.5,
        1.67: 1.67,
        1.8: 1.8,
        "14px": ".875rem",
        "25.2px": "1.575rem",
        "28.8px": "1.8rem",
        4.5: "1.125rem",
        "13px": "13px",
        "15px": ".9375rem",
        "19px": "1.1875rem",
        "21px": "1.3125rem",
        "22px": "1.375rem",
        "23px": "1.4375rem",
        "25px": "1.5625rem",
        "26px": "1.625rem",
        "27px": "1.6875rem",
        "29px": "1.8125rem",
        "30px": "1.875rem",
        "34px": "2.125rem",
        "35px": "2.1875rem",
        "38px": "2.375rem",
        "37px": "2.3125rem",
        10.5: "2.625rem",
        "41px": "41px",
        11: "2.75rem",
        "42px": "2.625rem",
        "43px": "2.6875rem",
        "45px": "2.8125rem",
        "46px": "46px",
        12: "3rem",
        "50px": "3.125rem",
        "52px": "3.25rem",
        "55px": "3.4375rem",
        "60px": "3.75rem",
        "65px": "4.0625rem",
        "69.44px": "69.44px",
        "70px": "4.375rem",
        xl: "3.875rem",
        "2xl": "3.375rem",
        13.5: "3.375rem",
        14: "3.5rem",
        14.5: "3.625rem",
        15: "3.75rem",
        16: "4rem",
        18: "4.5rem",
        "78px": "4.875rem",
        "90px": "5.625rem",
        20: "5rem",
        "110px": "6.875rem",
        24: "6rem",
      },
      // letter spacing
      letterSpacing: {
        "5px": "5px",
        half: ".5px",
      },
      borderWidth: {
        "3px": "3px",
      },
      borderRadius: {
        "100%": "100%",
        "10px": ".625rem",
      },

      // box shadows
      boxShadow: {
        "box-shadow-1": "0 16px 32px 0 rgba(7, 28, 31, 0.1)",
        "box-shadow-2": "0 0 4px rgba(0, 0, 0, 0.1)",
        "box-shadow-3": "0 1px 6px 0 rgba(32, 33, 36, .28)",
        "box-shadow-4": "0 5px 20px 0 rgba(23, 44, 82, 0.1)",
        "box-shadow-5": "0 8px 16px 0 rgba(93, 93, 93, 0.1)",
        "box-shadow-6": "0 0 25px 2px rgba(93, 93, 93, 0.2)",
        "box-shadow-7": "0 0 10px 0px rgba(93, 93, 93, 0.2)",
      },
      // gradiants
      backgroundImage: {
        "gradient-color-1":
          "linear-gradient(90deg, rgba(242,139,194,1) 0%, rgba(216,177,242,1) 50%)",
        "gradient-color-2":
          "linear-gradient(to top, rgba(7,28,31,0) 0%, rgba(7,28,31,1) 90%)",
        "gradient-color-3":
          "linear-gradient(to bottom, rgba(7,28,31,0) 0%, rgba(7,28,31,1) 90%)",
        "gradient-color-4":
          "linear-gradient(to top, rgba(242,246,247,0) 0%, rgba(242,246,247,1) 90%)",
        "gradient-color-5":
          "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 70%)",
      },
      // postion
      zIndex: {
        "-1": "-1",
        1: "1",
        xxsmall: "9999",
        xsmall: "99999",
        small: "999999",
        medium: "9999999",
        high: "99999999",
        xl: "999999999",
        xxl: "9999999999",
      },
      // transform
      // tranlate
      translate: {
        "5px": "5px",
        "50px": "3.125rem",
        "30px": "1.875rem",
      },
      //animation
      keyframes: {
        pulse1: {
          "0%": {
            "box-shadow": "0 0 0 0 rgba(255,255,255, 0.6)",
          },
          "70%": {
            "box-shadow": "0 0 0 15px rgba(255,255,255, 0)",
          },
          "100%": {
            "box-shadow": "0 0 0 0 rgba(255,255,255, 0)",
          },
        },

        pulse2: {
          "0%": {
            "box-shadow": "0 0 0 0 rgba(255, 90, 60, 0.6)",
          },
          "70%": {
            "box-shadow": "0 0 0 15px rgba(255, 90, 60, 0)",
          },
          "100%": {
            "box-shadow": "0 0 0 0 rgba(255, 90, 60, 0)",
          },
        },
      },
      animation: {
        pulse1: "pulse1 1s infinite",
        pulse2: "pulse2 1s infinite",
      },
    },
  },
  // components
  corePlugins: {
    container: false,
  },
  plugins: [
    // containers
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          paddingLeft: "15px",
          paddingRight: "15px",
          margin: "0px auto",

          "@screen sm": {
            maxWidth: "33.75rem",
          },
          "@screen md": {
            maxWidth: "45rem",
          },
          "@screen lg": {
            maxWidth: "60rem",
          },
          "@screen xl": {
            maxWidth: "75rem",
          },
          // "@screen 2xl": {
          //   maxWidth: "75rem",
          // },
        },
      });
      addComponents({
        ".container-2": {
          maxWidth: "100%",
          paddingLeft: "15px",
          paddingRight: "15px",
          margin: "0 auto",

          "@screen md": {
            maxWidth: "45rem",
          },
          "@screen lg": {
            maxWidth: "60rem",
          },
          "@screen xl": {
            maxWidth: "75rem",
          },
          // "@screen 2xl": {
          //   maxWidth: "75rem",
          // },
        },
      });
      addComponents({
        ".container-3": {
          maxWidth: "100%",
          paddingLeft: "15px",
          paddingRight: "15px",

          "@screen 3xl": {
            paddingLeft: "2%",
            paddingRight: "2%",
          },
          "@screen 4xl": {
            paddingLeft: "7%",
            paddingRight: "7%",
          },
        },
      });
    },
  ],
};
