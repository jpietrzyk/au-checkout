import { Layout } from "./layout";
import { pStyle } from "./styles";

export function TermsPage() {
  return (
    <Layout title="Regulamin">
      <p style={pStyle}>
        Regulamin określa zasady korzystania z serwisu, składania zamówień,
        płatności, dostawy oraz odpowiedzialności stron. Prosimy o zapoznanie
        się z niniejszym dokumentem przed skorzystaniem z usług.
      </p>
      <p style={pStyle}>
        Korzystając z serwisu, akceptujesz postanowienia regulaminu. Zastrzegamy
        sobie prawo do wprowadzania zmian z odpowiednim uprzedzeniem
        użytkowników.
      </p>
    </Layout>
  );
}
