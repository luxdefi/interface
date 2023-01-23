import { styled } from 'stitches.config'

const Button = styled('button', {
  outline: 'none',
  fontWeight: 700,
  fontSize: 16,
  fontFamily: '$button',
  //transition: 'background-color 100ms linear', // this is annoying
  gap: '$space$2',
  display: 'inline-flex',
  alignItems: 'center',
  lineHeight: '20px',

  /* No special focus behavior TODO: accessibility issue
  $$focusColor: '$colors$gray12',
  '&:focus-visible': {
    boxShadow: '0 0 0 2px $$focusColor',
  },
  */

  '&:disabled': {
    backgroundColor: '$gray8',
    color: '$gray11',
  },
  '&:disabled:hover': {
    backgroundColor: '$gray8',
    color: '$gray11',
  },
  variants: {
    
    color: {
      primary: {
        color: '$primary12',
        backgroundColor: '$primary3',
        border: '1.5px solid $primary3',
        '&:hover': {
          color: '$primary3',
          backgroundColor: '$primary12',
        },
          // pressed
        '&:active': {
          color: '$primary3',
          backgroundColor: '$secondary5', // subtler than #primary11
        },
          
      },
      secondary: {
        backgroundColor: '$secondary2',
        border: '1.5px solid $secondary11',
        color: '$secondary11',
        '&:hover': {
          color: '$secondary12',
          borderColor: '$secondary12',
        },
          // pressed
        '&:active': {
          color: '$secondary12',
          borderColor: '$secondary12',
          backgroundColor: '$secondary4',
        },
      },
      gray3: {
        backgroundColor: '$gray3',
        color: '$gray12',
        '&:hover': {
          backgroundColor: '$gray5',
        },
      },
      gray4: {
        backgroundColor: '$gray4',
        color: '$gray12',
        '&:hover': {
          backgroundColor: '$gray6',
        },
      },
      ghost: {
        backgroundColor: 'transparent',
        color: '$gray1',
        p: 0,
      },
    },
    corners: {
      square: {
        borderRadius: 0,
      },
      rounded: {
        borderRadius: 10,
      },
      pill: {
        borderRadius: 99999,
      },
      circle: {
        borderRadius: '99999px',
        alignItems: 'center',
        justifyContent: 'center',
      },
    },
    size: {
      xs: {
        p: '$space$3',
        lineHeight: '16px',
        minHeight: 40,
      },
      small: {
        px: '$space$3',
        py: '$space$4',
        lineHeight: '12px',
        minHeight: 44,
      },
      medium: {
        px: '$space$5',
        py: '$space$3',
        minHeight: 44,
      },
      large: {
        px: '$space$5',
        py: '$space$4',
        minHeight: 52,
      },
    },
  },
  compoundVariants: [
    {
      size: 'xs',
      corners: 'circle',
      css: {
        height: 40,
        width: 40,
        p: 0,
      },
    },
    {
      size: 'small',
      corners: 'circle',
      css: {
        height: 44,
        width: 44,
        p: 0,
      },
    },
    {
      size: 'medium',
      corners: 'circle',
      css: {
        height: 44,
        width: 44,
        p: 0,
      },
    },
    {
      size: 'large',
      corners: 'circle',
      css: {
        height: 52,
        width: 52,
        p: 0,
      },
    },
  ],
  defaultVariants: {
    color: 'primary',
    corners: 'rounded',
    size: 'medium',
  },
})

export default Button
