import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider, createTheme } from '@mui/material';
import AppRouter from './components/AppRouter/AppRouter';
import Layout from './components/Layout/Layout';
import { BrowserRouter, Routes } from 'react-router-dom';
import store from './store';

function App() {
   const theme = createTheme({
      typography: {
         fontFamily: [
            "Noto Sans",
            '-apple-system',
            'BlinkMacSystemFont',
            'Segoe UI', 'Roboto',
            'Oxygen', 'Ubuntu',
            'Helvetica',
            'Neue',
         ].join(','),
      },

      palette: {
         primary: {
            main: '#e21a1a',
            dark: '#882121',
            light: '#e08d8d',
            contrastText: '#ffffff',
         }
      },

      components: {
         MuiInputLabel: {
            styleOverrides: {
               root: {
                  fontSize: '1.6rem'
               }
            }
         },

         MuiSvgIcon: {
            styleOverrides: {
               root: {
                  fontSize: '1.6rem'
               }
            }
         },

         MuiAutocomplete: {
            styleOverrides: {
               option: {
                  fontSize: '1.6rem'
               }
            }
         },

         MuiMenuItem: {
            styleOverrides: {
               root: {
                  fontSize: '1.6rem'
               }
            }
         },

         MuiMenu: {
            styleOverrides: {
               list: {
                  maxHeight: '450px'
               }
            }
         },

         MuiInput: {
            styleOverrides: {
               root: {
                  fontSize: '1.6rem'
               },

               input: {
                  fontSize: '1.6rem'
               }
            }
         },

         MuiInputBase: {
            styleOverrides: {
               root: {
                  fontSize: '1.6rem'
               },
            }
         }
      }
   });

   theme.typography.button = {
      fontSize: '1.6rem',
      fontWeight: '500'
   }

   return (
      <ThemeProvider theme={theme}>
         <BrowserRouter>
            <Provider store={store}>
               <Layout>
                  <AppRouter />
               </Layout>
            </Provider>
         </BrowserRouter>
      </ThemeProvider>
   );
}

export default App;
