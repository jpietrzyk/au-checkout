import { Layout, pStyle } from "./layout";

export function ContactPage() {
  return (
    <Layout title="Kontakt">
      <p style={pStyle}>
        Masz pytania dotyczące zamówień, dostawy lub personalizacji? Skontaktuj
        się z nami. Odpowiemy najszybciej jak to możliwe.
      </p>
      <p style={pStyle}>
        E-mail: kontakt@tuusimago.pl (przykładowy) | Godziny pracy: pn–pt
        9:00–17:00
      </p>
    </Layout>
  );
}
