import { redirect } from "react-router-dom";
import { deleteContact } from "../contacts"

export const action = async ({ request, params }: any) => {
  deleteContact(params.contactId)
  return redirect(`/contacts`);
}

export default function Destroy() {
  return (
    <div>destroyed</div>
  )
}