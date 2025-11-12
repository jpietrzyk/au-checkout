import { Layout } from "./layout";
import { pStyle } from "./styles";

export function ShippingPage() {
  return (
    <Layout title="Dostawa i płatności">
      <p style={pStyle}>
        Oferujemy różne metody dostawy i płatności, aby ułatwić Ci złożenie
        zamówienia. Koszty i czas dostawy mogą się różnić w zależności od
        wybranej metody oraz adresu doręczenia.
      </p>
      <p style={pStyle}>
        Szczegółowe informacje o dostępnych formach płatności oraz dostawy
        znajdują się w tej sekcji.
      </p>
    </Layout>
  );
}
