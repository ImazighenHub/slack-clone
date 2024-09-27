'use server';

import { SigninFormSchemaType } from '@/app/features/auth/validation/signin-form';

export async function submitSigninForm(data: SigninFormSchemaType) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  console.log(data);
}
