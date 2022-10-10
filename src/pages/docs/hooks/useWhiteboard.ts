import React, { useEffect, useState, useCallback } from 'react';
import { TDDocument, TDFile, TldrawApp } from '@krapi0314/tldraw';
import { useToggle, useRedux } from 'hooks';
import {
  createWhiteboard as createWhiteboardAPI,
  readWhiteboard as readWhiteboardAPI,
  readAllWhiteboard as readAllWhiteboardAPI,
  uploadWhiteboard as uploadWhiteboardAPI,
  deleteWhiteboard as deleteWhiteboardAPI,
  updateWhiteboard as updateWhiteboardAPI,
} from 'helpers';
import { Whiteboard } from '../types';

const useWhiteboard = () => {
  const [whiteboards, setWhiteboards] = useState<Whiteboard[]>([]);
  const [whiteboardLoading, setWhiteboardLoading] = useState<boolean>(true);
  const [whiteboardPageNumber, setWhiteboardPageNumber] = useState<number>(1);
  const [numberOfWhiteboards, setNumberOfWhiteboards] = useState<number>(0);
  const [isCreateWhiteboardOpen, toggleCreateWhiteboard] = useToggle();
  const { appSelector } = useRedux();

  const { user } = appSelector((state) => ({
    user: state.Auth.user,
  }));

  const scope = 'team';
  const teamId = user.currentTeam?.id;
  const whiteboardPageURL = '/whiteboard?url=';

  const readAllWhiteboard = useCallback(async (pageIndex: number) => {
    const readAllWhiteboardAPIResponse = await readAllWhiteboardAPI({ teamId, scope, pageIndex });
    
    const whiteboards = readAllWhiteboardAPIResponse.data.whiteboards.map((whiteboard): Whiteboard => {
      return {
        id: whiteboard.id,
        title: whiteboard.title,
        description: whiteboard.description,
        createdDate: whiteboard.createdDate,
        lastModifiedDate: whiteboard.lastModifiedDate,
        scope: whiteboard.scope,
        author: whiteboard.member.fullname,
        authorProfileImageUrl: whiteboard.member.profileImageUrl,
        whiteboardFileUrl: whiteboard.whiteboardUrl,
      }
    });

    setWhiteboards(whiteboards);
    setNumberOfWhiteboards(readAllWhiteboardAPIResponse.data.size_ALL_PAGE);
    setWhiteboardLoading(false);
  }, [teamId]);

  useEffect(() => {
    const pageIndex = whiteboardPageNumber - 1;
    readAllWhiteboard(pageIndex);
  }, [whiteboardPageNumber, readAllWhiteboard]);

  const onCreateWhiteboard = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const title = ((event.target as HTMLFormElement).elements.namedItem('title') as HTMLInputElement).value;
    const description = ((event.target as HTMLFormElement).elements.namedItem('description') as HTMLInputElement).value;

    const createWhiteboardAPIResponse = await createWhiteboardAPI({ title, description, scope, teamId });
    const { id, preSignedURL } = createWhiteboardAPIResponse.data;
    const formData = createWhiteboardFormData(id, title);
    await uploadWhiteboardAPI(preSignedURL, formData);
    const readWhiteboardAPIResponse = await readWhiteboardAPI(id);
    window.location.href = whiteboardPageURL + readWhiteboardAPIResponse.data.whiteboardUrl + '&id=' + id;
  };

  const createWhiteboardFormData = (whiteboardID: string, title: string) => {
    const document: TDDocument = {
      id: whiteboardID,
      name: title,
      version: TldrawApp.version,
      pages: {
        page: {
          id: 'page',
          name: 'Page 1',
          childIndex: 1,
          shapes: {},
          bindings: {},
        },
      },
      pageStates: {
        page: {
          id: 'page',
          selectedIds: [],
          camera: {
            point: [0, 0],
            zoom: 1,
          },
        },
      },
      assets: {},
    };

    const file: TDFile = {
      name: document.name || 'New Document',
      fileHandle: null,
      document,
      assets: {},
    };

    const json = JSON.stringify(file, null, 2);

    const blob = new Blob([json], {
      type: 'application/vnd.Tldraw+json',
    });

    const fileToUpload = new File([blob], title);

    const formData = new FormData();
    formData.append('data', fileToUpload);

    return formData;
  };

  const onEditWhiteboard = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const id = ((event.target as HTMLFormElement).elements.namedItem('id') as HTMLInputElement).value;
    const title = ((event.target as HTMLFormElement).elements.namedItem('title') as HTMLInputElement).value;
    const description = ((event.target as HTMLFormElement).elements.namedItem('description') as HTMLInputElement).value;

    await updateWhiteboardAPI(id, { title, description, scope });
    const pageIndex = whiteboardPageNumber - 1;
    readAllWhiteboard(pageIndex);
  };

  const onDeleteWhiteboard = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const id = ((event.target as HTMLFormElement).elements.namedItem('id') as HTMLInputElement).value;
    await deleteWhiteboardAPI(id);
    const pageIndex = whiteboardPageNumber - 1;
    readAllWhiteboard(pageIndex);
  };

  const onPageNumberClick = (e: React.MouseEvent<HTMLElement>) => {
    setWhiteboardPageNumber(parseInt((e.target as HTMLLIElement).innerText));
  };

  return {
    isCreateWhiteboardOpen,
    whiteboards,
    whiteboardLoading,
    whiteboardPageNumber,
    numberOfWhiteboards,
    setWhiteboards,
    setWhiteboardPageNumber,
    readAllWhiteboard,
    onCreateWhiteboard,
    onEditWhiteboard,
    onDeleteWhiteboard,
    onPageNumberClick,
    toggleCreateWhiteboard,
  };
};

export default useWhiteboard;
