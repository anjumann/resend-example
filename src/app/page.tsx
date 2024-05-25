import NewsLetterForm from "@/components/NewsLetterForm";
import { sendConfirmationMail } from "./action";

export default function Home() {
  return (
    <>
      <NewsLetterForm handleSendEmail={sendConfirmationMail} />
    </>
  );
}
