import React, { useEffect, useState } from "react";
import { addContact, getContactList } from "../../../actions/contactAction";
import { useAppState } from "../../../contexts/appState";
import { BtnForm, Form, InfoSection, InputForm, Title } from "../Styles";

export default function AddContact() {
  // console.log("props", props.match.params.id);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const [state, dispatch] = useAppState();
  const { addContactResult } = state;

  const handleSubmit = (e) => {
    e.preventDefault();

    addContact(dispatch, { name: name, phone: phone });
  };

  useEffect(() => {
    if (addContactResult) {
      // console.log("2");
      getContactList(dispatch);
      setName("");
      setPhone("");
    }
  }, [addContactResult, dispatch]);

  return (
    <>
      <Title>Add Contact</Title>
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
          <BtnForm type="submit">Add</BtnForm>
        </Form>
      </InfoSection>
    </>
  );
}
