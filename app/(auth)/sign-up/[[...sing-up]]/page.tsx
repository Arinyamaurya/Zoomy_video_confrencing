import { SignUp } from '@clerk/nextjs';


function SignUpPage() {
  return (
     <main className="flex h-screen w-full items-center justify-center">
         <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
     </main>
  )
}

export default SignUpPage;