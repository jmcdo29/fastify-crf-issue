# fastify/csrf-protection type error Issue #133

This is a simple reproduction to show that issue #133 is not related to NestJS
but is rather an issue with the Typescript types for the options of the plugin.

To reproduce, simply clone, install the deps, and run `build` or `start`, either
will trigger the error.

## Current Error

```
> fastify-csrf-issue@1.0.0 build ~
> tsc

src/index.ts(9,5): error TS2769: No overload matches this call.
  Overload 1 of 3, '(plugin: FastifyPluginCallback<FastifyCsrfProtectionOptions, http.Server, FastifyTypeProviderDefault, FastifyBaseLogger>, opts?: FastifyRegisterOptions<...> | undefined): FastifyInstance<...> & PromiseLike<...>', gave the following error.
    Type '"@fastify/cookie"' is not assignable to type '"@fastify/secure-session"'.
  Overload 2 of 3, '(plugin: FastifyPluginAsync<FastifyCsrfProtectionOptions, http.Server, FastifyTypeProviderDefault, FastifyBaseLogger>, opts?: FastifyRegisterOptions<...> | undefined): FastifyInstance<...> & PromiseLike<...>', gave the following error.
    Type '"@fastify/cookie"' is not assignable to type '"@fastify/secure-session"'.
  Overload 3 of 3, '(plugin: FastifyPluginCallback<FastifyCsrfProtectionOptions, http.Server, FastifyTypeProviderDefault, FastifyBaseLogger> | FastifyPluginAsync<...> | Promise<...> | Promise<...>, opts?: FastifyRegisterOptions<...> | undefined): FastifyInstance<...> & PromiseLike<...>', gave the following error.
    Type '"@fastify/cookie"' is not assignable to type '"@fastify/secure-session"'.
 ELIFECYCLE  Command failed with exit code 2.
```

## Expected OUtcome

No errors and the server should start up just fine.