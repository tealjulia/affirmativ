import { connectToDatabase } from '../../util/mongodb';

export default async (req, res) => {
  const { db } = await connectToDatabase();

  const affirmation = await db
    .collection('affirmations')
    .aggregate([{$sample:{size:1}}]);

  if (affirmation == null || affirmation == undefined) {
    res.json({err: 'no affirmations added'})
  }
  res.json(affirmation);

}

