import React, { useContext } from 'react'
import { AccountContext } from './accountContext'
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from './common'
import { Marginer } from '../marginer'

export const LoginForm = () => {
  const { switchToSignUp } = useContext(AccountContext)
  return (
    <BoxContainer>
      <FormContainer>
        <Input type='email' placeholder='Email' />
        <Input type='password' placeholder='Password' />
      </FormContainer>
      <Marginer direction='vertical' margin={10} />
      <MutedLink href='#'>Forget your Password?</MutedLink>
      <Marginer direction='vertical' margin='1.6em' />
      <SubmitButton type='submit'>SignIn</SubmitButton>
      <Marginer direction='vertical' margin='1em' />
      <MutedLink href='#'>
        {' '}
        Don't have and account?{' '}
        <BoldLink href='#' onClick={switchToSignUp}>
          Signup
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  )
}
