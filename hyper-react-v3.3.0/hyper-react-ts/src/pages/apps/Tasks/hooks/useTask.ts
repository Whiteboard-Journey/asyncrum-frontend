import React, { useState, useEffect } from 'react';
import { EditorState, ContentState } from 'draft-js';
import htmlToDraft from 'html-to-draftjs';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { ListTaskItem } from '../types';

export default function useTask(task: ListTaskItem) {
    const [completed, setCompleted] = useState<boolean>(task.stage === 'Done');

    const [editorState, setEditorState] = useState<EditorState>();

    useEffect(() => {
        const html = `<p class="m-0">This is a task description with markup support</p> <ul> <li>Select a text to reveal the toolbar.</li> <li>Edit rich document on-the-fly, so elastic!</li> </ul> <p>End of air-mode area</p>`;
        const contentBlock = htmlToDraft(html);
        if (contentBlock) {
            const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
            setEditorState(EditorState.createWithContent(contentState));
        }
    }, []);

    /**
     * On editor body change
     */
    const onEditorStateChange = (editorStates: EditorState) => {
        setEditorState(editorStates);
    };

    /*
     * mark completd on selected task
     */
    const markCompleted = (e: React.ChangeEvent<HTMLInputElement>, callback?: (task: ListTaskItem) => void) => {
        setCompleted(e.target.checked);
        if (callback) callback(task);
    };

    return {
        completed,
        editorState,
        onEditorStateChange,
        markCompleted,
    };
}
