import React, { useState } from 'react'
import Fade from 'react-reveal/Fade'
import styled from 'styled-components'
import { LoginForm } from './loginForm'
import { motion } from 'framer-motion'
import { AccountContext } from './accountContext'
import { SignUpForm } from './SignUpForm'
const BoxContainer = styled.div`
  width: 280px;
  min-height: 555px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: #fffffe;
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.8);
  position: relative;
  overflow: hidden;
`
const TopContainer = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: 5em;
`

const BackDrop = styled(motion.div)`
  width: 160%;
  height: 550px;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  top: -290px;
  left: -90px;
  transform: rotate(60deg);
  background: rgb(167, 134, 223);
  background: linear-gradient(
    60deg,
    rgba(167, 134, 223, 1) 20%,
    rgba(22, 22, 26, 1) 100%
  );
  z-index: 15;
`
const HeaderContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  z-index: 16;
`
const HeaderText = styled.h2`
  font-size: 30px;
  font-weight: 600;
  line-height: 1.24;
  margin: 0;
  color: #fffffe;
  z-index: 10;
`
const SmallText = styled.h5`
  color: #94a1b2;
  font-weight: 500;
  font-size: 11px;
  z-index: 10;

  margin: 0;
  margin-top: 7px;
`
const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  z-index: 10;
  padding: 0 1.8em;
`
const backdropVariants = {
  expanded: {
    width: '233%',
    height: '1050px',
    borderRadius: '20%',
    transform: 'rotate(60deg)',
  },
  collapsed: {
    width: '160%',
    height: '550px',
    borderRadius: '50%',
    transform: 'rotate(60deg)',
  },
}
const expandingTransition = {
  type: 'spring',
  duration: 2.3,
  stiffness: 30,
}
export function AccountBox(props) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [active, setActive] = useState('SignIn')
  const playExpandingAnimation = () => {
    setIsExpanded(true)
    setTimeout(() => {
      setIsExpanded(false)
    }, expandingTransition.duration * 1000 - 1500)
  }
  const switchToSignUp = () => {
    playExpandingAnimation()
    setTimeout(() => {
      setActive('SignUp')
    }, 400)
  }
  const switchToSignIn = () => {
    playExpandingAnimation()
    setTimeout(() => {
      setActive('SignIn')
    }, 400)
  }
  const contextValue = { switchToSignUp, switchToSignIn }
  return (
    <AccountContext.Provider value={contextValue}>
      <BoxContainer>
        <TopContainer>
          <BackDrop
            initial={false}
            variants={backdropVariants}
            animate={isExpanded ? 'expanded' : 'collapsed'}
            transition={expandingTransition}
          />
          {active === 'SignIn' && (
            <HeaderContainer>
              <Fade top>
                <HeaderText>Welcome</HeaderText>
                <HeaderText>Back</HeaderText>
                <SmallText>Please sign-in to continue!</SmallText>
              </Fade>
            </HeaderContainer>
          )}
          {active === 'SignUp' && (
            <HeaderContainer>
              <Fade top>
                <HeaderText>Create</HeaderText>
                <HeaderText>Account</HeaderText>
                <SmallText>Please sign-Up to continue!</SmallText>
              </Fade>
            </HeaderContainer>
          )}
        </TopContainer>
        <InnerContainer>
          {active === 'SignIn' && <LoginForm />}
          {active === 'SignUp' && <SignUpForm />}
        </InnerContainer>
      </BoxContainer>
    </AccountContext.Provider>
  )
}
