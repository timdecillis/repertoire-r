import { redirect } from "react-router-dom";
import { deleteContact } from "../contacts"

export const action = async ({ request, params }: any) => {
  await deleteContact(params.contactId)
  return redirect("/");
}
