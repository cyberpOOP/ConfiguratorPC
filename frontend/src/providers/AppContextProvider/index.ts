import { combineComponents } from 'utils/combineComponents';
import { ThemeProvider } from '../ThemeProvider';

const providers = [
    ThemeProvider
]

export const AppContextProvider = combineComponents(providers);