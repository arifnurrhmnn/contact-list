import React, { useEffect } from "react";
import {
  deleteContact,
  detailContact,
  getContactList,
} from "../../actions/contactAction";
import { useAppState } from "../../contexts/appState";
import contact from "../../reducers/contact";

export default function ListContact() {
  const [state, dispatch] = useAppState();
  const {
    getContactResult,
    getContactLoading,
    getContactError,
    deleteContactResult,
  } = state;

  useEffect(() => {
    // console.log("1. Component Did Mount getContactList");
    getContactList(dispatch);
  }, [dispatch]);

  useEffect(() => {
    if (deleteContactResult) {
      getContactList(dispatch);
    }
  }, [dispatch, deleteContactResult]);

  return (
    <div>
      <h4>Liast Contact</h4>
      {getContactResult ? (
        getContactResult.map((contact) => {
          return (
            <p key={contact.id}>
              {contact.name} -{contact.phone} -
              <button onClick={() => deleteContact(dispatch, contact.id)}>
                Delete
              </button>
              <button onClick={() => detailContact(dispatch, contact)}>
                Edit
              </button>
            </p>
          );
        })
      ) : getContactLoading ? (
        <p>Loading...</p>
      ) : (
        <p>{getContactError ? getContactError : "Data Kosong"}</p>
      )}
    </div>
  );
}
