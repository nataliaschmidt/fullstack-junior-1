import { type NextRequest } from 'next/server';
import jobs from "../../database/jobs";
import { IJob } from '../../Interfaces/IJob';

export async function GET(req: NextRequest,
  { params }: { params: { id: string; }; }
) {

  const id = +params.id;

  try {
    const foundJobs = jobs.find((job: IJob) => job.id === id);
    if (!foundJobs) {
      return Response.json(
        { message: 'No job was found.' },
        { status: 404 }
      );
    }
    return Response.json(foundJobs);

  } catch (error) {
    return Response.json({
      error: `${error}`
    });
  }

}