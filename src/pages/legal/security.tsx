import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function SecurityPage() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/#security", { replace: true });
  }, [navigate]);

  return null;
}
