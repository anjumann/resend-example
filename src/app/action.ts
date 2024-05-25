"use server";

import EmailTemplate from "@/components/EmailTemplate";
import { Resend } from "resend";

export const sendConfirmationMail = async (email: string) => {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { data, error } = await resend.emails.send({
      from: "Onboarding <onboarding@updates.anjuman.site>",
      to: [email],
      subject: "Happy joing our newsletter ",
      react: EmailTemplate(email),
    });

    if (error) {
      console.log("Error", error);
    }
    console.log("success");
  } catch (error) {
    console.log("Error", error);
  }
};
