import { ReactElement, useState } from 'react';
import { IndexContext } from './index-context';

export function IndexContextProvider({ children }: { children: ReactElement }) {
    const [index, setIndex] = useState(0);
    function forward() {
        if (index === 10) {
            setIndex(0);
            console.log(index);
        } else {
            setIndex(index + 1);
            console.log(index);
        }
        return index;
    }
    const context = { index, forward };

    return (
        <IndexContext.Provider value={context}>
            {children}
        </IndexContext.Provider>
    );
}
