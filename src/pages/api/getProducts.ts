// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export interface Data {
  products: Product[];
  count:    number;
}

export interface Product {
  id:          number;
  name:        string;
  brand:       string;
  description: string;
  price:       number;
}


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json
}
