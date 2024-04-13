import { NextResponse, type NextRequest } from "next/server";
import jobs from "../../database/jobs";
import { IJob } from "../../Interfaces/IJob";
import { IMessage } from "../../Interfaces/IMessage";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string; }; },
): Promise<NextResponse<IJob | IMessage>> {
  const id = +params.id;

  try {
    const foundJobs = jobs.find((job: IJob) => job.id === id);
    if (!foundJobs) {
      return NextResponse.json({ message: "No job was found." }, { status: 404 });
    }
    return NextResponse.json(foundJobs);
  } catch (error) {
    return NextResponse.json({
      message: `${error}`,
    });
  }
}
