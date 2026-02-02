import { Suspense } from "react";
import ResetPasswordClient from "./ResetPasswordClient";
import Loading from "./loading";
export default function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <ResetPasswordClient />
    </Suspense>
  );
}
