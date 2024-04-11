import { NextRequest } from "next/server";
import { IJobSubmit } from "../../Interfaces/IJobSubmit";
import { checkField, hasAllFields } from "../../validations/validations";

export async function POST(req: NextRequest) {

  const data: IJobSubmit = await req.json();

  const allFields = hasAllFields(data);
  if (!allFields) {
    return Response.json(
      { message: 'Incomplete request body. All fields are required.' },
      { status: 400 }
    );
  }

  try {
    const field = checkField(data);
    if (field) {
      return Response.json(
        { message: `Field ${field} is required` },
        { status: 400 }
      );
    }

    return Response.json({ message: `Thank you for your application, ${data.name}` },
      { status: 201 });
  }  catch (error) {
    return Response.json({
      message: `${error}`
    });
  }

}