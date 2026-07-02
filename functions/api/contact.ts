import { Resend } from "resend";

type ContactPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
    },
  });

const sanitize = (value: unknown) => String(value ?? "").trim();

export const onRequestPost = async ({
  request,
  env,
}: {
  request: Request;
  env: { RESEND_API_KEY?: string };
}) => {
  if (!env.RESEND_API_KEY) {
    return json(
      { success: false, message: "RESEND_API_KEY tanimli degil." },
      500,
    );
  }

  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return json(
      { success: false, message: "Gecersiz istek govdesi." },
      400,
    );
  }

  const name = sanitize(payload.name);
  const email = sanitize(payload.email);
  const subject = sanitize(payload.subject);
  const message = sanitize(payload.message);

  if (!name || !email || !subject || !message) {
    return json(
      { success: false, message: "Tum alanlar zorunludur." },
      400,
    );
  }

  const resend = new Resend(env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: "Atylus <noreply@atylus.com>",
      to: ["info@atylus.com"],
      replyTo: email,
      subject: `[Iletisim Formu] ${subject}`,
      html: `
        <h2>Yeni iletisim formu mesaji</h2>
        <p><strong>Ad Soyad:</strong> ${name}</p>
        <p><strong>E-posta:</strong> ${email}</p>
        <p><strong>Konu:</strong> ${subject}</p>
        <p><strong>Mesaj:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    });

    return json({
      success: true,
      message: "Mesajiniz basariyla gonderildi.",
    });
  } catch (error) {
    console.error("Resend contact form error", error);

    return json(
      {
        success: false,
        message:
          "Mesaj gonderilirken bir hata olustu. Lutfen tekrar deneyin.",
      },
      500,
    );
  }
};
