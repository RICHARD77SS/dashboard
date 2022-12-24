import React from 'react'

import api from '../services/api';

import { useAxios } from '../hooks/useAxios';
import ModalAccountEdit from '../Components/ModalAccountEdit';

export const DocumentsContext = React.createContext();

export function DocumentsContextProvider({ children }) {
  const { data, mutate } = useAxios('documents');

  const [id, setId] = React.useState();
  const [name, setName] = React.useState('')
  const [description, setDescription] = React.useState('')

  function nameHandler(event) {
    setName(event.target.value);
  }
  function descriptionHandler(event) {
    setDescription(event.target.value);
  }

  function CloseModal() {
    setId('')
    setName('')
    setDescription('')
  }

  function handleSubmit(event) {
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
        documents: data.documents?.map((documents) => {
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
  function handleDelete(id) {
    api.delete(`documents/${id}`);
    window.alert('documents removido')
    const updatedDocuments = {
      documents: data.documents?.filter((documents) => documents._id !== id)
    };
    mutate(updatedDocuments, false)
  }

  function handleEdit(documentId, documentName, documentDescription) {
    setName(documentName);
    setDescription(documentDescription);
    setId(documentId);
  }
  return <DocumentsContext.Provider value={{
    name,
    description,
    nameHandler,
    descriptionHandler,
    handleSubmit,
    handleDelete,
    setId,
    id,
    setName,
    setDescription,
    handleEdit,
    CloseModal
  }}>
    {children}
  </DocumentsContext.Provider>
}