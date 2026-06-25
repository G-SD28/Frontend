import { z } from 'zod/v4';

const UserSchema = z.object({
  id: z.number(),
  name: z.string().min(2),
  email: z.email(),
  isAdmin: z.boolean().default(false),
});

type User = z.infer<typeof UserSchema>;

const validData = {
  id: 1,
  name: 'Marinel',
  email: 'marinel@mail.com',
  isAdmin: true,
};

// safeParse => success, data, error
const result1 = UserSchema.safeParse(validData);
// console.log('Success:', result1.success); // true
// console.log('Data:', result1.data);

const invalidData = { id: 'abc', name: 'A', email: 'no-email' };
const result2 = UserSchema.safeParse(invalidData);
console.log('Success:', result2.success); // false

if (!result2.success) {
  console.log(z.prettifyError(result2.error));
}
