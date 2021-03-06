import { useContext } from 'react';
import { IndexContext } from '../../context/index-context';
import { PrisionersContext } from '../../context/prisioner-context';

export function PrisionerImage() {
    const { index } = useContext(IndexContext);
    const { prisioners } = useContext(PrisionersContext);
    const prisioner = prisioners[index];

    return (
        <img
            className="img-prisioner"
            src={prisioners.length ? prisioner.mugshot : 'loading'}
            alt={prisioners.length ? prisioner.name : 'loading'}
        />
    );
}
