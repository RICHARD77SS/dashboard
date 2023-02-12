import React from 'react'

import api from '../services/api';

import { useAxios } from '../hooks/useAxios';
import ModalAccountEdit from '../Components/ModalAccountEdit';
import { useContext } from '../Types/@types.useContext';
import { DocumentsTypes, initialValue } from '../Types/@types.documentsContext';

export const DocumentsContext = React.createContext<DocumentsTypes>(initialValue);

export function DocumentsContextProvider({ children }:useContext) {
  const { data, mutate } = useAxios('documents');

  const [id, setId] = React.useState(initialValue.id);
  const [name, setName] = React.useState(initialValue.name)
  const [description, setDescription] = React.useState(initialValue.description)

  function nameHandler(event:React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }
  function descriptionHandler(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setDescription(event.target.value);
  }

  function CloseModal() {
    setId(initialValue.id)
    setName(initialValue.name)
    setDescription(initialValue.description)
  }

  function handleSubmit(event: React.ChangeEvent<HTMLFormElement>) {
    event.preventDefault()
    CloseModal()
    const documents = {
      name,
      description
    }
    if (id) {
      api.put(`documents/${id}`, documents)
      window.alert('documents Editada')
      const updatedDocuments = {
        documents: data.documents?.map((documents:{_id:string}) => {
          if (documents._id === id) {
            return {
              ...documents,
              name,
              description
            };
          }
          return documents
        }),
      };
      mutate(updatedDocuments, false)
    } else {
      api.post('documents', documents);
      window.alert('documents adicionada')
      const updatedDocuments = {
        documents: [...data.documents, documents]
      }
      mutate(updatedDocuments, false)
    }
  }
  function handleDelete(id:string) {
    api.delete(`documents/${id}`);
    window.alert('documents removido')
    const updatedDocuments = {
      documents: data.documents?.filter((documents:{_id:string}) => documents._id !== id)
    };
    mutate(updatedDocuments, false)
  }

  function handleEdit(documentId: string, documentName: string, documentDescription: string) {
    setName(documentName);
    setDescription(documentDescription);
    setId(documentId);
  }
  return <DocumentsContext.Provider value={{
    name,
    description,
    setName,
    setDescription,
    nameHandler,
    descriptionHandler,
    handleSubmit,
    handleDelete,
    setId,
    id,
    handleEdit,
    CloseModal,
  }}>
    {children}
  </DocumentsContext.Provider>
}