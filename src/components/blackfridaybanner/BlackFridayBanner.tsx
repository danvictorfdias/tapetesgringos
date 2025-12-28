import { memo } from 'react';

function BlackFridayBanner() {
    // Get current date and format as "5 de dezembro"
    const today = new Date();
    const day = today.getDate();
    const monthNames = [
        'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
        'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'
    ];
    const currentDate = `${day} de ${monthNames[today.getMonth()]}`;

    return (
        <div className="absolute top-0 left-0 right-0 bg-black z-50 py-2 md:py-3 px-4">
            <div className="container mx-auto text-center">
                <p className="text-white text-xs md:text-sm lg:text-base leading-tight">
                    Último dia com preço especial. Somente{' '}
                    <span className="font-bold text-[#FDD835]">HOJE</span>,{' '}
                    <span className="font-bold text-[#FDD835]">{currentDate}</span>.
                </p>
            </div>
        </div>
    );
}

export default memo(BlackFridayBanner);
