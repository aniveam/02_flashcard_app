import { Form } from "@/components/Form";
import FadeInSection from "@/layout/FadeInSection";
import { Link } from "react-router-dom";

export function Login() {
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center bg-theme-light dark:bg-theme-dark">
      <FadeInSection>
        <Link to="/">
          <img src="/img/logo.png" width={300} />
        </Link>
      </FadeInSection>
      <Form formType="login" />
    </div>
  );
}
