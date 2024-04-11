import { type NextRequest } from 'next/server';
import jobs from "../database/jobs";
import { IJob } from '../Interfaces/IJob';

export async function GET(req: NextRequest) {

  const searchParams = req.nextUrl.searchParams;
  const query = searchParams.get('level')?.toLowerCase();

  try {
    if (query) {
      const foundQuery = jobs.filter((job: IJob) => job.level.toLowerCase()  === query);
      return Response.json(foundQuery);
    }
    return Response.json(jobs);

  } catch (error) {
    return Response.json({
      message: `${error}`
    });
  }

}