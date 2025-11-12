import { Layout, pStyle } from "./layout";

export function PrivacyPage() {
  return (
    <Layout title="Polityka prywatności">
      <p style={pStyle}>
        Niniejsza polityka prywatności opisuje zasady przetwarzania danych
        osobowych w serwisie. Dbamy o bezpieczeństwo oraz przejrzystość
        przetwarzania danych zgodnie z obowiązującymi przepisami.
      </p>
      <p style={pStyle}>
        W ramach serwisu możemy przetwarzać m.in. dane przekazywane podczas
        składania zamówień, kontaktu oraz korzystania z funkcji serwisu. Zakres,
        cel i podstawa przetwarzania są zawsze jasno określone.
      </p>
    </Layout>
  );
}
