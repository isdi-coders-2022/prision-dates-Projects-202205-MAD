import { ReactElement, useEffect, useMemo, useReducer } from 'react';
import { localReducer } from '../reducers-local/local-reducer';
import { HttpStoreLocal } from '../services-local/http-store-local';
import { PrisionerLocalContext } from './local-context';
import * as actions from '../reducers-local/action-creator-local';
import { PrisionerModel } from '../models/prisioner-local';
import { useAuth0 } from '@auth0/auth0-react';

export function PrisionersLocalContextProvider({
    children,
}: {
    children: ReactElement;
}) {
    const [prisioners, dispatch] = useReducer(localReducer, []);
    const api = useMemo(() => new HttpStoreLocal(), []);
    const { user } = useAuth0();
    const nickname = user?.nickname;

    useEffect(() => {
        api.getPrisioners(nickname as string).then((resp) => {
            dispatch(actions.loadPrisionersAction(resp));
        });
    }, [api, nickname]);

    const addPrisioner = (prisioner: PrisionerModel) => {
        api.addPrisioner(prisioner).then((resp) =>
            dispatch(actions.addPrisionerAction(resp))
        );
    };

    const updatePrisioner = (prisioner: PrisionerModel) => {
        api.updatePrisioner(prisioner).then((resp) =>
            dispatch(actions.updatePrisionerAction(resp as PrisionerModel))
        );
    };

    const deletePrisioner = (prisioner: PrisionerModel) => {
        api.deletePrisioner(String(prisioner.id)).then((resp) =>
            dispatch(actions.deletePrisionerAction(prisioner))
        );
    };

    const context = {
        prisioners,
        addPrisioner,
        updatePrisioner,
        deletePrisioner,
    };
    return (
        <PrisionerLocalContext.Provider value={context}>
            {children}
        </PrisionerLocalContext.Provider>
    );
}

