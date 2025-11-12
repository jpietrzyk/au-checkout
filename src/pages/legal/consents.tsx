import { Layout } from "./layout";
import { pStyle } from "./styles";

export function ConsentsPage() {
  return (
    <Layout title="Zarządzanie zgodami">
      <p style={pStyle}>
        W tym miejscu możesz zapoznać się z udzielonymi zgodami, ich zakresem
        oraz w każdej chwili zarządzać preferencjami. Masz prawo do wycofania
        zgody bez wpływu na zgodność z prawem przetwarzania przed jej
        wycofaniem.
      </p>
      <p style={pStyle}>
        Jeśli chcesz zaktualizować swoje zgody lub uzyskać więcej informacji,
        skontaktuj się z nami.
      </p>
    </Layout>
  );
}
