import { createGlobalTheme } from '@vanilla-extract/css'
import { rem } from './utils';

export const vars = createGlobalTheme(':root', {
    color: {
        black: '#1A1A1A',
        navy: '#1f2937',
        ivory: '#fffbeb'
    },

    typography: {
        fontFamily: 'monospace',
        fontSize: {
            sm: rem(14),
            base: rem(16),
            lg: rem(20),
            xl: rem(24),
        },
        fontWeight: {
            regular: '400',
            bold: '700',
        },
    },

    radii: {
        sm: rem(4),
        md: rem(8),
        lg: rem(12),
    },

    spacing: {
        xs: rem(4),
        sm: rem(8),
        md: rem(16),
        lg: rem(32),
        xl: rem(64),
    },

    image: {
        xs: rem(48),
        sm: rem(96),
        md: rem(128),
        lg: rem(256),
        xl: rem(512),
        full: '100%',
    },
})