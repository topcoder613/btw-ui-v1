import storageKeys from './constants/storageKeys';

export const loadState = () => {
    
    try {
        const serializedState = localStorage.getItem(storageKeys.state);
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
}

export const saveState = (state) => {

    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem(storageKeys.state, serializedState);
    } catch (err) {

    }
}