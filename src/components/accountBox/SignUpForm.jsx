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
export const SignUpForm = () => {
  const { switchToSignIn } = useContext(AccountContext)
  return (
    <BoxContainer>
      <FormContainer>
        <Input type='text' placeholder='Full Name' />
        <Input type='email' placeholder='Email' />
        <Input type='password' placeholder='Password' />
        <Input type='password' placeholder='Confirm Password' />
      </FormContainer>

      <Marginer direction='vertical' margin='1.6em' />
      <SubmitButton type='submit'>SignUp</SubmitButton>
      <Marginer direction='vertical' margin='1em' />
      <MutedLink href='#'>
        {' '}
        Already Have an account?{' '}
        <BoldLink href='#' onClick={switchToSignIn}>
          Sign Un
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  )
}
