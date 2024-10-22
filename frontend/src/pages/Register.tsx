import { Form } from "@/components/Form";

export function Register() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-theme-light dark:bg-theme-dark">
      <Form formType="register" />
    </div>
  );
}
