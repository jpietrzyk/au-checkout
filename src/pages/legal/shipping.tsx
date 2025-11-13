import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function ShippingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/#shipping", { replace: true });
  }, [navigate]);

  return null;
}
