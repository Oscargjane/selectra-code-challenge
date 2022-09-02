import React from 'react';
import { StyledForm, Label, Input } from './styles/Form.styled';
import { Button } from './styles/Button.styled';

function SubscriptionForm() {
  return (
    <StyledForm>
      <Label>
        <span>
          Name
          <i aria-hidden="true">*</i>
        </span>
        <Input type="text" aria-required="true" placeholder="Your name" />
      </Label>
      <Label>
        <span>
          Email
          <i aria-hidden="true">*</i>
        </span>
        <Input type="email" aria-required="true" placeholder="Your email" />
      </Label>
      <Label>
        <span>
          Phone
          <i aria-hidden="true">*</i>
        </span>
        <Input type="number" aria-required="true" placeholder="623456789" />
      </Label>
      <Button type="submit" disabled>
        Add subscription
      </Button>
    </StyledForm>
  );
}

export default SubscriptionForm;
