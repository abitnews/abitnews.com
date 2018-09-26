import React from 'react';
import styled from 'styled-components';

export default class SubscriptionForm extends React.PureComponent {
  state = { email: '', emailBot: '' };

  handleEmailChange = event => {
    this.setState({
      email: event.target.value,
    });
  };
  render() {
    return (
      <div id="mc_embed_signup">
        <Form
          action="https://abitcompany.us17.list-manage.com/subscribe/post?u=0fefed5f87ff20de347b84135&amp;id=f437b31b87"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          target="_blank"
        >
          <EmailContainer>
            <EmailInput
              type="email"
              value={this.state.value}
              onChange={event => this.setState({ email: event.target.value })}
              name="EMAIL"
              // placeholder="Email"
              id="mce-EMAIL"
            />
            <EmailLabel htmlFor="mce-EMAIL">Email</EmailLabel>
          </EmailContainer>
          <div id="mce-responses">
            <div id="mce-error-response" style={{ display: 'none' }} />
            <div id="mce-success-response" style={{ display: 'none' }} />
          </div>
          <div
            style={{ position: 'absolute', left: '-5000px' }}
            aria-hidden="true"
          >
            <input
              type="text"
              name="b_0fefed5f87ff20de347b84135_f437b31b87"
              tabIndex="-1"
              value={this.state.emailBot}
              onChange={event =>
                this.setState({ email: event.target.emailBot })
              }
            />
          </div>
          <SubscribeButton
            type="submit"
            value="Subscribe"
            name="subscribe"
            id="mc-embedded-subscribe"
          />
        </Form>
      </div>
    );
  }
}

const EmailLabel = styled.label`
  position: absolute;
  bottom: 24px;
  left: 21px;
  transition: 0.3s;
`;
const EmailContainer = styled.div`
  position: relative;
  margin: 10px 0;
  width: 100%;
`;
const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 380px;
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
  transition: 0.3s;
  &:focus {
    border: 1px solid ${props => props.theme.mainColor};
    transition: 0.3s;
    & + label {
      transition: 0.3s;
      transform: scale(0.8, 0.8) translate(-30px, -50px);
    }
  }
`;
const SubscribeButton = styled.input`
  background-color: ${props => props.theme.mainColor};
  /* background: linear-gradient(45deg, #80deea 0%, #05c3b6 100%); */
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
  /* transition: 0.3s; */
  color: #fff;
  border-radius: 2px;
  border: 1px solid transparent;
  letter-spacing: 2px;
  &:hover {
    transition: 0.3s;
    letter-spacing: 3px;
    cursor: pointer;
    background-color: #fff;
    /* background: linear-gradient(60deg, #fff 0%, #fff 100%); */
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
