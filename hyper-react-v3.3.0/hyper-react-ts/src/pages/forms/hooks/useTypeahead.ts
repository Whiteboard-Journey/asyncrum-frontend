import { useState } from 'react';
import 'react-bootstrap-typeahead/css/Typeahead.css';

type TypeaheadOption = string | Record<string, Object>;

export default function useTypeahead() {
    const [singleSelections, setSingleSelections] = useState<TypeaheadOption[]>([]);
    const [multiSelections, setMultiSelections] = useState<TypeaheadOption[]>([]);

    const options: Array<TypeaheadOption> = [
        { id: 1, value: 'chocolate', label: 'Chocolate' },
        { id: 2, value: 'strawberry', label: 'Strawberry' },
        { id: 3, value: 'vanilla', label: 'Vanilla' },
    ];

    const onChangeSingleSelection = (selected: TypeaheadOption[]) => {
        setSingleSelections(selected);
    };

    const onChangeMultipleSelection = (selected: TypeaheadOption[]) => {
        setMultiSelections(selected);
    };

    return {
        options,
        singleSelections,
        multiSelections,
        onChangeSingleSelection,
        onChangeMultipleSelection,
    };
}
