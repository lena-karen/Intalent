import { createContext, useState, useMemo } from 'react';
import { createTheme } from '@mui/material';
import { purple } from '@mui/material/colors'
declare module '@mui/material/styles' {
	interface Theme {
	  status: {
		danger: string;
	  };
	}
	// allow configuration using `createTheme`
	interface ThemeOptions {
	  status?: {
		danger?: string;
	  };
	}
  }
  
export const tokens = (mode: string) => ({
	...(mode === 'dark' 
	? {
		primary: {
			DEFAULT: '#000000',
			600: '#292929',
			800: '#525252',
		},
		white: {
			DEFAULT: '#FFFFFF',
			100: '#F7F7F7',
		},
		gray: {
			DEFAULT: '#3C3C3C',
		},
		accentMain: '#0F0E0E',
		borderColor: '#3C3C3C',

		action: {
			active: purple[600],
			activeOpacity: 1,
			hover: purple[800],
			hoverOpacity: 0.7,
			focus: purple[600],
			focusOpacity: 1,
			selected: purple[300],
			selectedOpacity: 1
		  },
	}
  : {
		primary: {
			DEFAULT: '#FFFFFF',
			600: '#F7F7F7',
			800: '#D1D1D1'
		},
		// secondary: {
		// 	DEFAULT: '#7C7C7C',
		// },
		// black: {
		// 	DEFAULT: '#000000',
		// 	100: '#525252',
		// 	200: '#3D3D3D',
		// 	300: '#292929',
		// 	400: '#141414',
		// },
		gray: {
			DEFAULT: '#3C3C3C',
		},
		accentMain: '#F7F7F7',
		borderColor: '#D1D1D1',
		action: {
			active: purple[600],
			activeOpacity: 1,
			hover: purple[800],
			hoverOpacity: 0.7,
			focus: purple[600],
			focusOpacity: 1,
			selected: purple[300],
			selectedOpacity: 1
		  },
	})
})

export const themeSettings: any = (mode: string) => {
	const colors = tokens(mode)
	return {
		palette: {
			mode: mode,
			...(mode === 'dark' 
			? {
				primary: {
					main: colors.primary.DEFAULT,
				},
				// secondary: {
				// 	main: colors.secondary.DEFAULT,
				// },
				// neutral: {
				// 	dark: colors.black[500],
				// 	light: colors.white[100],
				// },
				text: colors.gray
			} 
			: {
				primary: {
					main: colors.primary.DEFAULT,
				},
				text: colors.gray
				// secondary: {
				// 	main: colors.secondary.DEFAULT,
				// },
				// neutral: {
				// 	dark: colors.black[500],
				// 	light: colors.white[100],
				// },
			})
		},
		typography: {
			fontFamily: ['Poppins', 'sans-serif'].join(','),
			fontSize: 14,
			fontWeight: 500,

			h1: {
				fontFamily: ['Poppins', 'sans-serif'].join(','),
				fontSize: 28,
				fontWeight: 600,
				color: colors.gray
			},
			h2: {
				fontFamily: ['Poppins', 'sans-serif'].join(','),
				fontSize: 20,
				fontWeight: 600,
				color: colors.gray
			},
			h3: {
				fontFamily: ['Poppins', 'sans-serif'].join(','),
				fontSize: 18,
				fontWeight: 600,
				color: colors.gray
			},
			p: {
				fontFamily: ['Poppins', 'sans-serif'].join(','),
				fontSize: 14,
				fontWeight: 500,
				color: 'red'
			},
			a: {
				color: 'red'
			},
			input: {
				backgroundColor: colors.primary[600],
				borderColor: colors.borderColor
			}
		}
	}
}

export const ColorModeContext = createContext({
    toggleColorMode: () => {},
})

export const useMode = () => {
    const [mode, setMode] = useState('dark')

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () =>
                setMode((prev) => (prev === 'light' ? 'dark' : 'light')),
        }),
        [],
    )

    const theme: any = useMemo(() => createTheme(themeSettings(mode)), [mode])

    return [theme, colorMode]
}

