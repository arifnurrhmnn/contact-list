import React, { useEffect, useState } from "react";
import { getContactList, updateContact } from "../../../actions/contactAction";
import { useAppState } from "../../../contexts/appState";
import { BtnForm, Form, InfoSection, InputForm, Title } from "../Styles";

export default function UpdateContact() {
  //   console.log("props", props);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [id, setId] = useState("");

  const [state, dispatch] = useAppState();
  const { detailContactResult, updateContactResult } = state;

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("1. Masuk handleSubmit");
    updateContact(dispatch, { id: id, name: name, phone: phone });
  };

  useEffect(() => {
    console.log("3. UPDATE state name, phone from state global (reducer)");
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
      <Title>Update Contact</Title>
      <InfoSection>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <InputForm
            type="text"
            name="name"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <InputForm
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <BtnForm type="submit">Update</BtnForm>
        </Form>
      </InfoSection>
    </>
  );
}
