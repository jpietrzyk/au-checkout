import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function ConsentsPage() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/#consents", { replace: true });
  }, [navigate]);

  return null;
}
