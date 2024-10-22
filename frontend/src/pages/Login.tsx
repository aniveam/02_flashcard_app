import { Form } from "@/components/Form";

export function Login() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-theme-light dark:bg-theme-dark">
      <Form formType="login" />
    </div>
  );
}
