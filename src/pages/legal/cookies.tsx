import { Layout } from "./layout";
import { pStyle } from "./styles";

export function CookiesPage() {
  return (
    <Layout title="Polityka plików cookie">
      <p style={pStyle}>
        Serwis wykorzystuje pliki cookie w celu zapewnienia prawidłowego
        działania, analizy ruchu oraz personalizacji treści. Pliki cookie można
        kontrolować za pomocą ustawień przeglądarki.
      </p>
      <p style={pStyle}>
        Szczegółowe informacje dotyczące rodzajów plików cookie oraz sposobów
        zarządzania nimi znajdują się w niniejszym dokumencie.
      </p>
    </Layout>
  );
}
