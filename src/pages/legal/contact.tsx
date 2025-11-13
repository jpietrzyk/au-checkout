import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function ContactPage() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/#contact", { replace: true });
  }, [navigate]);

  return null;
}
