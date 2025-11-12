import { Layout } from "./layout";
import { pStyle } from "./styles";

export function SecurityPage() {
  return (
    <Layout title="Bezpieczeństwo i weryfikacja">
      <p style={pStyle}>
        Dbamy o bezpieczeństwo płatności oraz ochronę danych. Współpracujemy z
        zaufanymi dostawcami usług płatniczych i stosujemy odpowiednie środki
        techniczne oraz organizacyjne.
      </p>
      <p style={pStyle}>
        W niektórych przypadkach możemy przeprowadzać weryfikację zamówień w
        celu ochrony przed nadużyciami.
      </p>
    </Layout>
  );
}
