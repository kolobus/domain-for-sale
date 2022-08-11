import mailchannelsPlugin from "@cloudflare/pages-plugin-mailchannels";

export const onRequest = mailchannelsPlugin({
  personalizations: [
    {
      to: [{ name: env.MAIL_TO_NAME, email: env.MAIL_TO_ADDRESS }],
    },
  ],
  from: { name: env.MAIL_FROM_NAME, email: env.MAIL_FROM_ADDRESS },
  respondWith: () =>
    new Response(null, {
      status: 302,
      headers: { Location: env.MAIL_REDIRECT },
    }),
});
