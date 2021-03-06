import { PrisionerModel } from '../../models/prisioner-local';

export function SuperFavButton({
    updatePrisioner,
    prisioner,
}: {
    updatePrisioner(id: PrisionerModel['id']): void;
    prisioner: PrisionerModel;
}) {
    const handleChange = () => {
        updatePrisioner(prisioner.id);
    };
    return (
        <>
            {prisioner.isFav ? (
                <img
                    className="isFav"
                    src="./svg/heart-arrow-free-icon-font.svg"
                    alt="Super favorit button"
                    role={'button'}
                    onClick={handleChange}
                />
            ) : (
                <img
                    className="isFav"
                    src="./svg/heart-arrow-void.svg"
                    alt="Super favorit button"
                    role={'button'}
                    onClick={handleChange}
                />
            )}
        </>
    );
}
