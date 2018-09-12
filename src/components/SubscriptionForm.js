import React from 'react';
import styled from 'styled-components';

export default class SubscriptionForm extends React.PureComponent {
  state = { email: '' };

  handleEmailChange = event => {
    this.setState({
      email: event.target.value,
    });
  };
  render() {
    return (
      <Form
        onSubmit={event => {
          event.preventDefault();
          this.props.handleSubscription(this.state.email);
        }}
      >
        <EmailInput
          type="email"
          id="email"
          placeholder="Email"
          onChange={event =>
            this.setState({
              email: event.target.value,
            })
          }
          text={this.state.email}
        />
        <SubscribeButton type="submit">Subscribe</SubscribeButton>
      </Form>
    );
  }
}
const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const EmailInput = styled.input`
  background-color: transparent;
  border: 1px solid ${props => props.theme.secondaryColor};
  border-radius: 2px;
  outline: none;
  height: 3rem;
  width: 100%;
  font-size: 1rem;
  margin: 0 0 10px 0;
  box-shadow: none;
  width: 100%;
  transition: all 0.3s;
  padding: 0 20px;
  letter-spacing: 2px;
  min-width: 300px;
`;
const SubscribeButton = styled.button`
  background-color: ${props => props.theme.mainColor};
  box-shadow: none;
  border: none;
  display: inline-block;
  height: 36px;
  line-height: 36px;
  padding: 0 2rem;
  font-size: 1rem;
  width: 100%;
  height: 3rem;
  text-transform: uppercase;
  vertical-align: middle;
  letter-spacing: 1px;
  transition: 0.3s;
  color: #fff;
  border-radius: 2px;
  border: 1px solid transparent;
  &:hover {
    transition: 0.3s;
    cursor: pointer;
    background-color: #fff;
    color: ${props => props.theme.mainColor};
    border-color: ${props => props.theme.mainColor};
  }
  &:focus {
    background-color: darken(${props => props.theme.mainColor}, 10);
  }
  font-weight: 400;
  &.error {
    background-color: $red;
    color: $white;
  }
  i {
    line-height: inherit;
  }
`;
