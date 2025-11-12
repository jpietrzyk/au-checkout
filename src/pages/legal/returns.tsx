import { Layout } from "./layout";
import { pStyle } from "./styles";

export function ReturnsPage() {
  return (
    <Layout title="Zwroty i reklamacje">
      <p style={pStyle}>
        Przyjmujemy zwroty i rozpatrujemy reklamacje zgodnie z obowiązującymi
        przepisami i zasadami opisanymi w niniejszej sekcji. Szczegóły dotyczące
        terminów oraz procedury znajdziesz poniżej.
      </p>
      <p style={pStyle}>
        Aby zgłosić zwrot lub reklamację, przygotuj numer zamówienia oraz opis
        problemu. Dołożymy starań, aby jak najszybciej rozwiązać sprawę.
      </p>
    </Layout>
  );
}
