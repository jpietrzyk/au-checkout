import React from "react";

const baseStyle: React.CSSProperties = {
  minHeight: "calc(100vh - 56px)",
  padding: "4rem 1.25rem 6rem",
  maxWidth: 920,
  margin: "0 auto",
  color: "#111827",
};

const titleStyle: React.CSSProperties = {
  fontSize: "clamp(1.75rem, 4vw, 2.25rem)",
  fontWeight: 800,
  margin: 0,
};

const pStyle: React.CSSProperties = {
  marginTop: 12,
  lineHeight: 1.75,
  color: "#374151",
  fontSize: "clamp(0.95rem, 2vw, 1.05rem)",
};

const backLinkStyle: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
  marginTop: 24,
  padding: "10px 16px",
  borderRadius: 10,
  textDecoration: "none",
  color: "#374151",
  background: "#ffffff",
  border: "1px solid #e5e7eb",
  fontWeight: 600,
};

export function Layout({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <main style={{ background: "#f3f4f6", minHeight: "100vh" }}>
      <section style={baseStyle}>
        <h1 style={titleStyle}>{title}</h1>
        <div style={{ marginTop: 16 }}>{children}</div>
        <div>
          <a href="/" style={backLinkStyle}>Wróć na stronę główną</a>
        </div>
      </section>
    </main>
  );
}

export function PrivacyPage() {
  return (
    <Layout title="Polityka prywatności">
      <p style={pStyle}>
        Niniejsza polityka prywatności opisuje zasady przetwarzania danych osobowych w serwisie. Dbamy o bezpieczeństwo oraz przejrzystość przetwarzania danych zgodnie z obowiązującymi przepisami.
      </p>
      <p style={pStyle}>
        W ramach serwisu możemy przetwarzać m.in. dane przekazywane podczas składania zamówień, kontaktu oraz korzystania z funkcji serwisu. Zakres, cel i podstawa przetwarzania są zawsze jasno określone.
      </p>
    </Layout>
  );
}

export function TermsPage() {
  return (
    <Layout title="Regulamin">
      <p style={pStyle}>
        Regulamin określa zasady korzystania z serwisu, składania zamówień, płatności, dostawy oraz odpowiedzialności stron. Prosimy o zapoznanie się z niniejszym dokumentem przed skorzystaniem z usług.
      </p>
      <p style={pStyle}>
        Korzystając z serwisu, akceptujesz postanowienia regulaminu. Zastrzegamy sobie prawo do wprowadzania zmian z odpowiednim uprzedzeniem użytkowników.
      </p>
    </Layout>
  );
}

export function CookiesPage() {
  return (
    <Layout title="Polityka plików cookie">
      <p style={pStyle}>
        Serwis wykorzystuje pliki cookie w celu zapewnienia prawidłowego działania, analizy ruchu oraz personalizacji treści. Pliki cookie można kontrolować za pomocą ustawień przeglądarki.
      </p>
      <p style={pStyle}>
        Szczegółowe informacje dotyczące rodzajów plików cookie oraz sposobów zarządzania nimi znajdują się w niniejszym dokumencie.
      </p>
    </Layout>
  );
}

export function ConsentsPage() {
  return (
    <Layout title="Zarządzanie zgodami">
      <p style={pStyle}>
        W tym miejscu możesz zapoznać się z udzielonymi zgodami, ich zakresem oraz w każdej chwili zarządzać preferencjami. Masz prawo do wycofania zgody bez wpływu na zgodność z prawem przetwarzania przed jej wycofaniem.
      </p>
      <p style={pStyle}>
        Jeśli chcesz zaktualizować swoje zgody lub uzyskać więcej informacji, skontaktuj się z nami.
      </p>
    </Layout>
  );
}

export function ReturnsPage() {
  return (
    <Layout title="Zwroty i reklamacje">
      <p style={pStyle}>
        Przyjmujemy zwroty i rozpatrujemy reklamacje zgodnie z obowiązującymi przepisami i zasadami opisanymi w niniejszej sekcji. Szczegóły dotyczące terminów oraz procedury znajdziesz poniżej.
      </p>
      <p style={pStyle}>
        Aby zgłosić zwrot lub reklamację, przygotuj numer zamówienia oraz opis problemu. Dołożymy starań, aby jak najszybciej rozwiązać sprawę.
      </p>
    </Layout>
  );
}

export function ShippingPage() {
  return (
    <Layout title="Dostawa i płatności">
      <p style={pStyle}>
        Oferujemy różne metody dostawy i płatności, aby ułatwić Ci złożenie zamówienia. Koszty i czas dostawy mogą się różnić w zależności od wybranej metody oraz adresu doręczenia.
      </p>
      <p style={pStyle}>
        Szczegółowe informacje o dostępnych formach płatności oraz dostawy znajdują się w tej sekcji.
      </p>
    </Layout>
  );
}

export function SecurityPage() {
  return (
    <Layout title="Bezpieczeństwo i weryfikacja">
      <p style={pStyle}>
        Dbamy o bezpieczeństwo płatności oraz ochronę danych. Współpracujemy z zaufanymi dostawcami usług płatniczych i stosujemy odpowiednie środki techniczne oraz organizacyjne.
      </p>
      <p style={pStyle}>
        W niektórych przypadkach możemy przeprowadzać weryfikację zamówień w celu ochrony przed nadużyciami.
      </p>
    </Layout>
  );
}

export function ContactPage() {
  return (
    <Layout title="Kontakt">
      <p style={pStyle}>
        Masz pytania dotyczące zamówień, dostawy lub personalizacji? Skontaktuj się z nami. Odpowiemy najszybciej jak to możliwe.
      </p>
      <p style={pStyle}>
        E-mail: kontakt@tuusimago.pl (przykładowy) | Godziny pracy: pn–pt 9:00–17:00
      </p>
    </Layout>
  );
}
