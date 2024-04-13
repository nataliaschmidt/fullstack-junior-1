import { NextResponse, type NextRequest } from "next/server";
import jobs from "../database/jobs";
import { IJob } from "../Interfaces/IJob";
import { IMessage } from "../Interfaces/IMessage";

export async function GET(req: NextRequest): Promise<NextResponse<IJob[] | IJob | IMessage>> {
  const searchParams = req.nextUrl.searchParams;
  const query = searchParams.get("level")?.toLowerCase();

  try {
    if (query) {
      const foundQuery = jobs.filter(
        (job: IJob) => job.level.toLowerCase() === query,
      );
      return NextResponse.json(foundQuery);
    }
    return NextResponse.json(jobs);
  } catch (error) {
    return NextResponse.json({
      message: `${error}`,
    });
  }
}
