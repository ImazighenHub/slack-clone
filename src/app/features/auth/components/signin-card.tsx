import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { SubmitHandler, useForm } from 'react-hook-form';
import { SigninFormSchemaType, signinFormSchema } from '@/app/features/auth/validation/signin-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { submitSigninForm } from '@/app/features/auth/actions/signin-form';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

interface SigninCardProps {
  onSignin: () => void;
  onSignup: () => void;
}

const SigninCard = ({ onSignin, onSignup }: SigninCardProps) => {
  const form = useForm<SigninFormSchemaType>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(signinFormSchema),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = form;

  const onSubmitForm: SubmitHandler<SigninFormSchemaType> = async (data) => {
    await submitSigninForm(data);
  };

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">Login</CardTitle>
        <CardDescription>Enter your email and password to login to your account</CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
        <div className="space-y-4">
          <form onSubmit={handleSubmit(onSubmitForm)} noValidate>
            <div className="mb-4">
              <Label htmlFor="email">Email</Label>
              <Input
                {...register('email')}
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                error={errors.email?.message}
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="password">Password</Label>
              <Input
                {...register('password')}
                id="password"
                type="password"
                required
                error={errors.password?.message}
              />
            </div>
            <Button type="submit" className="size-lg w-full font-semibold" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <AiOutlineLoading3Quarters className="mr-2 h-4 w-4 animate-spin" />
                  Logging in...
                </>
              ) : (
                'Login'
              )}
            </Button>
          </form>
          <div className="flex items-center gap-4">
            <Separator className="flex-1" />
            <span className="text-xs uppercase text-muted-foreground">Or continue with</span>
            <Separator className="flex-1" />
          </div>
          <Button type="button" className="w-full font-semibold" variant="outline">
            <FcGoogle className="mr-2 size-5" />
            Google
          </Button>
          <Button type="button" className="relative w-full font-semibold" variant="outline">
            <FaGithub className="mr-2 size-5" />
            Github
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">
          Don&apos;t have an account?
          <Button
            type="button"
            variant="link"
            className="ml-2 text-sky-700"
            size="icon"
            onClick={onSignup}
          >
            Sign up
          </Button>
        </p>
      </CardContent>
    </Card>
  );
};

export default SigninCard;
