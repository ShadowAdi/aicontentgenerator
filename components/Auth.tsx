import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import React from 'react'


const Auth = () => {
  return (
    <>
        <SignedOut>
            <SignInButton/>
        </SignedOut>
        <SignedIn>
            <UserButton></UserButton>
        </SignedIn>
    </>
  )
}

export default Auth