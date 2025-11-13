import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function TermsPage() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/#terms", { replace: true });
  }, [navigate]);

  return null;
}
