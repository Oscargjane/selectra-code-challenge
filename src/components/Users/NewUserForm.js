import { React, useState } from 'react';
import { StyledForm, Label, Input } from '../styles/UserForm.styled';
import { Button } from '../styles/Button.styled';

function SubscriptionForm(props) {
  const [userInput, setUserInput] = useState({
    enteredName: '',
    enteredEmail: '',
    enteredPhone: '',
  });

  const nameInputChangeHandler = event => {
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        enteredName: event.target.value,
      };
    });
  };

  const emailInputChangeHandler = event => {
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        enteredEmail: event.target.value,
      };
    });
  };

  const phoneInputChangeHandler = event => {
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        enteredPhone: event.target.value,
      };
    });
  };

  const formSubmissionHandler = event => {
    event.preventDefault();

    const userData = {
      userName: userInput.enteredName,
      userEmail: userInput.enteredEmail,
      userPhone: userInput.enteredPhone,
    };

    props.onSaveUserData(userData);

    setUserInput({
      enteredName: '',
      enteredEmail: '',
      enteredPhone: '',
    });

    return userData;
  };

  return (
    <StyledForm onSubmit={formSubmissionHandler}>
      <Label>
        <span>
          Name
          <i aria-hidden="true">*</i>
        </span>
        <Input
          onChange={nameInputChangeHandler}
          type="text"
          value={userInput.enteredName}
          aria-required="true"
          placeholder="Your name"
        />
      </Label>
      <Label>
        <span>
          Email
          <i aria-hidden="true">*</i>
        </span>
        <Input
          onChange={emailInputChangeHandler}
          type="email"
          value={userInput.enteredEmail}
          aria-required="true"
          placeholder="Your email"
        />
      </Label>
      <Label>
        <span>
          Phone
          <i aria-hidden="true">*</i>
        </span>
        <Input
          onChange={phoneInputChangeHandler}
          type="number"
          value={userInput.enteredPhone}
          aria-required="true"
          placeholder="623456789"
        />
      </Label>
      <Button type="submit">Add subscription</Button>
    </StyledForm>
  );
}

export default SubscriptionForm;
