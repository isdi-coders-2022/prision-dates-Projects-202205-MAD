import { render, screen } from '@testing-library/react';
import { PrisionersContext } from '../../context/prisioner-context';
import { iPrisoner } from '../../interface/prisioner-interface';
import { InfoPrisioner } from './info-prisioner';

describe('Given the component InfoPrisioner', () => {
    describe('When is called', () => {
        const mockPrisioners: {
            prisioners: iPrisoner[];
            loadFiltered: () => void;
        } = {
            prisioners: [
                {
                    county_state: '',
                    name: 'Pepe',
                    charges: ['charges'],
                    id: 0,
                    source: 'Maricopa',
                    details: [
                        ['gender', 'male'],
                        ['3', 'brown'],
                        ['yes', 3],
                    ],
                    mugshot: ' string',
                    book_date: '',
                    source_id: '',
                    more_info_url: '',
                },
            ],
            loadFiltered: jest.fn(),
        };
        test('Then it sould details[0]', () => {
            render(
                <PrisionersContext.Provider value={mockPrisioners}>
                    <InfoPrisioner></InfoPrisioner>
                </PrisionersContext.Provider>
            );
            const display = screen.getByText(/male/i);
            expect(display).toBeInTheDocument();
        });
        test('Then it sould print details[1]', () => {
            render(
                <PrisionersContext.Provider value={mockPrisioners}>
                    <InfoPrisioner></InfoPrisioner>
                </PrisionersContext.Provider>
            );
            const display = screen.getByText(/brown/);
            expect(display).toBeInTheDocument();
        });
        test('Then it sould print details[2]', () => {
            render(
                <PrisionersContext.Provider value={mockPrisioners}>
                    <InfoPrisioner></InfoPrisioner>
                </PrisionersContext.Provider>
            );
            const display = screen.getByText(/yes/i);
            expect(display).toBeInTheDocument();
        });
    });
    describe('When is called with prisioners []', () => {
        const mockPrisioners: {
            prisioners: iPrisoner[];
            loadFiltered: () => void;
        } = {
            prisioners: [],
            loadFiltered: jest.fn(),
        };
        test('Then it sould loadin', () => {
            render(
                <PrisionersContext.Provider value={mockPrisioners}>
                    <InfoPrisioner></InfoPrisioner>
                </PrisionersContext.Provider>
            );
            const display = screen.getAllByText(/loading/i);
            expect(display).toHaveLength(3);
        });
    });
});
