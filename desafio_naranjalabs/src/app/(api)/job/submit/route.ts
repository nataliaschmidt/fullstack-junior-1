import { NextRequest, NextResponse } from "next/server";
import { IJobSubmit } from "../../Interfaces/IJobSubmit";
import { checkField, checkTypesField, hasAllFields } from "../../validations/validations";
import { IMessage } from "../../Interfaces/IMessage";



export async function POST(req: NextRequest): Promise<NextResponse<IMessage>> {
  const data: IJobSubmit = await req.json();

  const allFields = hasAllFields(data);
  if (!allFields) {
    return NextResponse.json(
      { message: "Incomplete request body. All fields are required." },
      { status: 400 },
    );
  }

  const checkTypeFileds = checkTypesField(data);
  if (checkTypeFileds) {
    return NextResponse.json(
      { message: checkTypeFileds },
      { status: 400 },
    );
  }


  try {
    const field = checkField(data);
    if (field) {
      return NextResponse.json(
        { message: `Field ${field} is required` },
        { status: 400 },
      );
    }

    return NextResponse.json(
      { message: `Thank you for your application, ${data.name}` },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json({
      message: `${error}`,
    });
  }
}
