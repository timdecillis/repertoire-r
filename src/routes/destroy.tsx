import { redirect } from "react-router-dom";
import { deleteContact } from "../contacts";

export async function action({ params }: any) {
  await deleteContact(params.contactId);
  console.log('destroying:', params.contactId)
  return redirect("/");
}
