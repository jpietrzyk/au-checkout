import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function PrivacyPage() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/#privacy", { replace: true });
  }, [navigate]);

  return null;
}
