import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#05204A', // Oxford Blue - primary color for headers and main elements
      light: '#384d6d',
      dark: '#020e33',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#B497D6', // Wisteria - accent color for buttons and highlights
      light: '#c5b1e0',
      dark: '#8c71b0',
      contrastText: '#000000',
    },
    background: {
      default: '#E1E2EF', // Lavender web - background color
      paper: '#ffffff',
    },
    text: {
      primary: '#02020A', // Black - primary text color
      secondary: '#05204A', // Oxford Blue - secondary text
    },
    neutral: {
      main: '#BFACAA', // Silver - neutral elements, borders, etc.
      light: '#d3c8c7',
      dark: '#a08f8d',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 500,
    },
    h3: {
      fontWeight: 500,
      marginBottom: '1rem',
      color: '#05204A', // Oxford Blue for headers
    },
    h5: {
      fontWeight: 400,
    },
    h6: {
      color: '#05204A', // Oxford Blue for subheadings
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#05204A', // Oxford Blue for AppBar
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
        contained: {
          backgroundColor: '#B497D6', // Wisteria color for buttons
          '&:hover': {
            backgroundColor: '#8c71b0', // Darker wisteria on hover
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          borderTop: '3px solid #B497D6', // Wisteria accent on cards
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        rounded: {
          borderRadius: 12,
        },
        elevation3: {
          boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
          borderLeft: '3px solid #BFACAA', // Silver accent on papers
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: '#BFACAA', // Silver for dividers
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: '#B497D6', // Wisteria for tab indicator
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            color: '#B497D6', // Wisteria for selected tab
          },
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="app">
          <Header />
          <Navigation />
          <main>
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/resume" element={<Resume />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App; 