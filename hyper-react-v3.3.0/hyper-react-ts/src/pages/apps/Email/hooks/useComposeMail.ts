import { useState } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

export default function useComposeMail(toggleComposeModal: () => void) {
    const [editorState, setEditorState] = useState<EditorState>(EditorState.createEmpty());

    /*
     * form validation schema
     */
    const schemaResolver = yupResolver(
        yup.object().shape({
            to: yup.string().required('Please specify to email').email('Please enter valid Email'),
            subject: yup.string().required('Please specify subject'),
        })
    );

    /**
     * Handles the save
     * @param {*} event
     * @param {*} values
     */
    const handleEmailSave = (value: Record<string, string>) => {
        const body = draftToHtml(convertToRaw(editorState.getCurrentContent()));
        console.log({ ...value, body });
        toggleComposeModal();
    };

    /**
     * On editor body change
     */
    const onEditorStateChange = (editorStates: EditorState) => {
        setEditorState(editorStates);
    };

    return {
        editorState,
        schemaResolver,
        handleEmailSave,
        onEditorStateChange,
    };
}
