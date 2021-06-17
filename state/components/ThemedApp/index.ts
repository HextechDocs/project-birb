import { atom } from 'recoil';

const ThemeState = atom({
    key: 'ThemeState', // unique ID (with respect to other atoms/selectors)
    default: 'dark', // default value (aka initial value)
});

export { ThemeState };
