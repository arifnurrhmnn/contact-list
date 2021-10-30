import React, { useEffect, useState } from "react";
import {
  addContact,
  getContactList,
  updateContact,
} from "../../actions/contactAction";
import { useAppState } from "../../contexts/appState";

export default function FormContact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [id, setId] = useState("");

  const [state, dispatch] = useAppState();
  const { addContactResult, detailContactResult, updateContactResult } = state;

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("1. Masuk handleSubmit");
    if (id) {
      // update contact
      updateContact(dispatch, { id: id, name: name, phone: phone });
    } else {
      // add contact
      addContact(dispatch, { name: name, phone: phone });
    }
  };

  useEffect(() => {
    if (addContactResult) {
      getContactList(dispatch);
      setName("");
      setPhone("");
      setId("");
    }
  }, [addContactResult, dispatch]);

  useEffect(() => {
    // console.log("3. UPDATE state name, phone from state global (reducer)");
    if (detailContactResult) {
      setName(detailContactResult.name);
      setPhone(detailContactResult.phone);
      setId(detailContactResult.id);
    }
  }, [dispatch, detailContactResult]);

  useEffect(() => {
    if (updateContactResult) {
      console.log("5. Get Contacct List");
      getContactList(dispatch);
      setName("");
      setPhone("");
      setId("");
    }
  }, [updateContactResult, dispatch]);

  return (
    <>
      <h4>{id ? "EDIT CONTACT" : "Add Contact"}</h4>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
