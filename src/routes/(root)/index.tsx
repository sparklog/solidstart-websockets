import { clientOnly } from "@solidjs/start";

const WebSocketClient = clientOnly(() => import("../../components/ws-client"));

export default function Sockets() {
  return (
    <div class="grid place-items-center pt-10">
      <h1 class="text-md text-neutral-500 font-bold pb-2">SolidChat</h1>
      <WebSocketClient
        initialSocketUrl={
          import.meta.env.PROD
            ? `wss://${import.meta.env.DENO_DEPLOYMENT_ID}.deno.dev/ws`
            : "ws://localhost:3000/ws"
        }
      />
    </div>
  );
}
