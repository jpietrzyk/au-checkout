import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function CookiesPage() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/#cookies", { replace: true });
  }, [navigate]);

  return null;
}
