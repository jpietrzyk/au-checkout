import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function ReturnsPage() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/#returns", { replace: true });
  }, [navigate]);

  return null;
}
