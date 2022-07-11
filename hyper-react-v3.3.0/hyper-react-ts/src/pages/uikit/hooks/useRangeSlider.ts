import { useState } from 'react';

type SelectedValsType = {
    [key: number]: { textValue: number; percent: number };
};

type SelectedRangesType = {
    [key: number]: string;
};

export default function useRangeSlider() {
    const [selectedVals, setSelectedVals] = useState<SelectedValsType>({
        '1': { textValue: 20, percent: 20 },
        '2': { textValue: 20, percent: 20 },
    });
    const [selectedRanges, setSelectedRanges] = useState<SelectedRangesType>({
        '1': '20-45',
        '2': '20-45',
    });

    const onSlide = (index: number, value: number[], percent: number[]) => {
        let selectedValues = { ...selectedVals };
        selectedValues[index] = {
            textValue: Number(value[0].toFixed(2)),
            percent: Number(percent[0].toFixed(2)),
        };
        setSelectedVals(selectedValues);
    };

    const onSlide2 = (index: number, value: number[]) => {
        let selectedRange = { ...selectedRanges };
        selectedRange[index] = value[0].toFixed(2) + '-' + value[1].toFixed(2);
        setSelectedRanges(selectedRange);
    };

    return {
        selectedVals,
        selectedRanges,
        onSlide,
        onSlide2,
    };
}
