import { z } from 'zod/v4';
import { ProductSchema } from '../schemas';

type Product2 = {
  id: number;
  title: string;
  price: number;
};

const WithoutZod = () => {
  const fakeApiResponse = [{ id: 1, title: 'Product', price: 'free' }];

  // without zod
  const products = fakeApiResponse as unknown as Product2[];
  console.log(products[0].price * 1.5);

  // with ZOD
  const { success, error } = z.array(ProductSchema).safeParse(fakeApiResponse);
  console.log(success);
  if (!success) console.log(z.prettifyError(error));

  return (
    <div>
      <h2>Without ZOD</h2>
    </div>
  );
};

export default WithoutZod;
