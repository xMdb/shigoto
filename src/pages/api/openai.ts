import type { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
	content: string
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
	const { query } = req.query;
	if (!query) {
		return res.status(400).json({ content: 'Error: You must provide a query using ?query=' });
	}

	if (req.method !== 'GET') {
		return res.status(400).json({ content: 'Error: Request type must be GET' });
	}

	const content = "Yes"


	res.status(200).json({ content });
}
