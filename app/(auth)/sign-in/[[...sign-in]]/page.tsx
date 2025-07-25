import { SignIn } from '@clerk/nextjs';


function SignInPage() {
  return (
     <main className="flex h-screen w-full items-center justify-center">
        <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
     </main>
  )
}

export default SignInPage;