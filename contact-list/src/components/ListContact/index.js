import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  deleteContact,
  detailContact,
  getContactList,
} from "../../actions/contactAction";
import { useAppState } from "../../contexts/appState";
// import contact from "../../reducers/contact";
import { UilTrashAlt, UilPen } from "@iconscout/react-unicons";

import {
  CardBtn,
  CardBtnAction,
  CardContact,
  CardImage,
  CardSubtitle,
  CardTitle,
  ListContactCol,
  ListContactRow,
  ListContactSection,
} from "./Styles";

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
    <>
      <ListContactSection>
        {/* <h4>Liast Contact</h4> */}
        {getContactResult ? (
          <ListContactRow>
            {getContactResult.map((contact) => {
              return (
                <ListContactCol key={contact.id}>
                  <CardContact>
                    <CardImage />
                    <CardTitle>{contact.name}</CardTitle>
                    <CardSubtitle>{contact.phone}</CardSubtitle>
                    <CardBtnAction>
                      <Link to={"/update-contact/" + contact.id}>
                        <CardBtn
                          onClick={() => detailContact(dispatch, contact)}
                        >
                          <UilPen size="16" />
                        </CardBtn>
                      </Link>
                      <CardBtn
                        onClick={() => deleteContact(dispatch, contact.id)}
                      >
                        <UilTrashAlt size="16" />
                      </CardBtn>
                    </CardBtnAction>
                  </CardContact>
                </ListContactCol>
              );
            })}
          </ListContactRow>
        ) : getContactLoading ? (
          <p>Loading...</p>
        ) : (
          <p>{getContactError ? getContactError : "Data Kosong"}</p>
        )}
      </ListContactSection>
    </>
  );
}
