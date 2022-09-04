import { React, useState } from 'react';
import useInput from '../hooks/use-input';
import {
  StyledForm,
  Label,
  Input,
  AlertMessage,
} from '../styles/UserForm.styled';
import { Button } from '../styles/Button.styled';

function SubscriptionForm(props) {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
    reset: resetNameInput,
  } = useInput(value => value.trim() !== '');

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: resetEmailValue,
  } = useInput(value => value.includes('@'));

  const {
    value: enteredPhone,
    isValid: enteredPhoneIsValid,
    hasError: phoneInputHasError,
    valueChangeHandler: phoneChangeHandler,
    inputBlurHandler: phoneInputBlurHandler,
    reset: resetPhoneValue,
  } = useInput(value => value.length === 9 && value[0] === '6');

  let formIsValid = false;
  if (enteredNameIsValid && enteredEmailIsValid && enteredPhoneIsValid)
    formIsValid = true;

  const formSubmissionHandler = event => {
    event.preventDefault();

    if (!enteredNameIsValid && !enteredEmailIsValid && !enteredPhoneIsValid) {
      return;
    }

    const userData = {
      userName: enteredName,
      userEmail: enteredEmail,
      userPhone: enteredPhone,
    };

    props.onSaveUserData(userData);

    resetNameInput();
    resetEmailValue();
    resetPhoneValue();

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
          type="text"
          aria-required="true"
          placeholder="Your name"
          onChange={nameChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
          invalid={nameInputHasError}
          valid={enteredNameIsValid}
        />

        {nameInputHasError && (
          <AlertMessage>Name not must be empty.</AlertMessage>
        )}
      </Label>
      <Label>
        <span>
          Email
          <i aria-hidden="true">*</i>
        </span>
        <Input
          type="email"
          aria-required="true"
          placeholder="Your email"
          onChange={emailChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
          invalid={emailInputHasError}
        />
        {emailInputHasError && (
          <AlertMessage>Please enter a valid email.</AlertMessage>
        )}
      </Label>
      <Label>
        <span>
          Phone
          <i aria-hidden="true">*</i>
        </span>
        <Input
          type="number"
          aria-required="true"
          placeholder="623456789"
          onChange={phoneChangeHandler}
          onBlur={phoneInputBlurHandler}
          value={enteredPhone}
          invalid={phoneInputHasError}
        />
        {emailInputHasError && (
          <AlertMessage>
            Please enter a valid phone number{' '}
            <i>(must start with 6 and contain 9 digits)</i>.
          </AlertMessage>
        )}
      </Label>
      <Button type="submit" disabled={!formIsValid}>
        Add subscription
      </Button>
    </StyledForm>
  );
}

export default SubscriptionForm;
