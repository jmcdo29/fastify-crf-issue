import Fastify from "fastify";
import fastifyCookie from "@fastify/cookie";
import fastifyCsrf from "@fastify/csrf-protection";

const bootstrap = async () => {
  const app = Fastify();
  await app.register(fastifyCookie);
  await app.register(fastifyCsrf, {
    sessionPlugin: "@fastify/cookie",
    cookieOpts: {
      secure: false,
    },
  });
  app.get("/", (req, res) => res.send("Hello World!"));
  await app.listen({ port: 3030 });
};

bootstrap();
