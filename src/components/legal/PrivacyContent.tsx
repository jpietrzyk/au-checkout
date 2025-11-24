import { pStyle } from "../../pages/legal/styles";

export function PrivacyContent() {
  return (
    <>
      <p style={pStyle}>
        Niniejsza polityka prywatności opisuje zasady przetwarzania danych
        osobowych w serwisie. Dbamy o bezpieczeństwo oraz przejrzystość
        przetwarzania danych zgodnie z obowiązującymi przepisami.
      </p>

      <h2>§ 1 Administrator danych osobowych</h2>
      <p style={pStyle}>Administratorem Twoich danych osobowych jest:</p>
      <ul style={{ marginTop: 8, marginBottom: 12, paddingLeft: 20 }}>
        <li>Tuus Imago Michał Kowalski (lub wpisz dokładną nazwę firmy/jdg)</li>
        <li>[adres siedziby]</li>
        <li>NIP: [Twój NIP]</li>
        <li>e-mail: kontakt@tuusimago.com</li>
      </ul>
      <p style={pStyle}>(zwany dalej „Administratorem” lub „my”).</p>

      <h2>§ 2 W jakich celach przetwarzamy Twoje dane?</h2>
      <p style={pStyle}>
        Przetwarzamy dane osobowe wyłącznie w następujących celach:
      </p>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: 12,
          marginBottom: 12,
        }}
      >
        <thead>
          <tr>
            <th
              style={{
                border: "1px solid #e5e7eb",
                padding: "8px",
                textAlign: "left",
                backgroundColor: "#f9fafb",
              }}
            >
              Cel przetwarzania
            </th>
            <th
              style={{
                border: "1px solid #e5e7eb",
                padding: "8px",
                textAlign: "left",
                backgroundColor: "#f9fafb",
              }}
            >
              Podstawa prawna
            </th>
            <th
              style={{
                border: "1px solid #e5e7eb",
                padding: "8px",
                textAlign: "left",
                backgroundColor: "#f9fafb",
              }}
            >
              Okres przechowywania danych
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: "1px solid #e5e7eb", padding: "8px" }}>
              Zawarcie i realizacja umowy (wykonanie i wysyłka płótna)
            </td>
            <td style={{ border: "1px solid #e5e7eb", padding: "8px" }}>
              art. 6 ust. 1 lit. b RODO
            </td>
            <td style={{ border: "1px solid #e5e7eb", padding: "8px" }}>
              do 6 lat od końca roku realizacji zamówienia
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #e5e7eb", padding: "8px" }}>
              Wystawienie faktury i prowadzenie księgowości
            </td>
            <td style={{ border: "1px solid #e5e7eb", padding: "8px" }}>
              art. 6 ust. 1 lit. c RODO (obowiązek prawny)
            </td>
            <td style={{ border: "1px solid #e5e7eb", padding: "8px" }}>
              5 lat od końca roku podatkowego
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #e5e7eb", padding: "8px" }}>
              Obsługa reklamacji i zapytań
            </td>
            <td style={{ border: "1px solid #e5e7eb", padding: "8px" }}>
              art. 6 ust. 1 lit. b i f RODO
            </td>
            <td style={{ border: "1px solid #e5e7eb", padding: "8px" }}>
              do 3 lat od zakończenia sprawy
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #e5e7eb", padding: "8px" }}>
              Marketing własny (np. newsletter, przypomnienia o koszyku) – tylko
              jeśli wyrazisz zgodę
            </td>
            <td style={{ border: "1px solid #e5e7eb", padding: "8px" }}>
              art. 6 ust. 1 lit. a RODO
            </td>
            <td style={{ border: "1px solid #e5e7eb", padding: "8px" }}>
              do czasu wycofania zgody
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #e5e7eb", padding: "8px" }}>
              Obrona przed ewentualnymi roszczeniami
            </td>
            <td style={{ border: "1px solid #e5e7eb", padding: "8px" }}>
              art. 6 ust. 1 lit. f RODO (prawnie uzasadniony interes)
            </td>
            <td style={{ border: "1px solid #e5e7eb", padding: "8px" }}>
              do upływu terminu przedawnienia roszczeń (max 6 lat)
            </td>
          </tr>
        </tbody>
      </table>

      <h2>§ 3 Jakie dane zbieramy?</h2>
      <ul style={{ marginTop: 8, marginBottom: 12, paddingLeft: 20 }}>
        <li>Imię i nazwisko</li>
        <li>Adres e-mail</li>
        <li>Numer telefonu</li>
        <li>Adres dostawy</li>
        <li>Adres IP</li>
        <li>
          Dane płatności (przekazywane bezpośrednio do operatora płatności – my
          ich nie przechowujemy)
        </li>
        <li>
          Przesłane przez Ciebie zdjęcia/pliki graficzne (przechowywane tylko na
          czas realizacji zamówienia)
        </li>
      </ul>

      <h2>§ 4 Czy dane są przekazywane dalej?</h2>
      <p style={pStyle}>
        Tak, ale tylko zaufanym podmiotom i wyłącznie w niezbędnym zakresie:
      </p>
      <ul style={{ marginTop: 8, marginBottom: 12, paddingLeft: 20 }}>
        <li>
          firmy kurierskie (InPost, DPD, Poczta Polska – imię, nazwisko, adres,
          telefon, e-mail)
        </li>
        <li>
          operatorzy płatności (Przelewy24, PayU, Stripe itp. – dane płatności)
        </li>
        <li>dostawca hostingu i serwera (np. LH.pl, OVH, Zenbox)</li>
        <li>biuro księgowe</li>
        <li>
          narzędzie do wysyłki newslettera (jeśli włączysz – np. MailerLite,
          GetResponse)
        </li>
      </ul>
      <p style={pStyle}>
        Nie przekazujemy danych do państw trzecich (poza EOG) ani nie
        sprzedajemy ich nikomu.
      </p>

      <h2>§ 5 Twoje prawa związane z danymi osobowymi</h2>
      <p style={pStyle}>Masz prawo w dowolnym momencie:</p>
      <ul style={{ marginTop: 8, marginBottom: 12, paddingLeft: 20 }}>
        <li>dostępu do swoich danych</li>
        <li>sprostowania danych</li>
        <li>usunięcia danych („prawo do bycia zapomnianym”)</li>
        <li>ograniczenia przetwarzania</li>
        <li>przenoszenia danych</li>
        <li>wniesienia sprzeciwu wobec przetwarzania</li>
        <li>
          cofnięcia zgody (jeśli przetwarzanie odbywa się na podstawie zgody)
        </li>
        <li>
          wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych (PUODO)
        </li>
      </ul>
      <p style={pStyle}>Wystarczy napisać na: kontakt@tuusimago.com</p>

      <h2>§ 6 Cookies i technologie śledzące</h2>
      <ul style={{ marginTop: 8, marginBottom: 12, paddingLeft: 20 }}>
        <li>
          Serwis używa plików cookies do prawidłowego działania (koszyk,
          logowanie, edytor zdjęć).
        </li>
        <li>
          Używamy też cookies analitycznych (Google Analytics / Meta Pixel –
          jeśli włączysz) – możesz je wyłączyć w ustawieniach przeglądarki.
        </li>
        <li>
          Szczegóły w „Ustawieniach cookies” (wysuwana belka na dole strony).
        </li>
      </ul>

      <h2>§ 7 Bezpieczeństwo</h2>
      <ul style={{ marginTop: 8, marginBottom: 12, paddingLeft: 20 }}>
        <li>Wszystkie połączenia są szyfrowane (certyfikat SSL).</li>
        <li>Zdjęcia i dane przechowywane są na serwerach w Polsce/UE.</li>
        <li>
          Po zrealizowaniu zamówienia zdjęcia są automatycznie usuwane z
          serwerów w ciągu 30 dni (chyba że trwa reklamacja – wtedy do jej
          zakończenia).
        </li>
      </ul>

      <h2>§ 8 Kontakt w sprawach ochrony danych</h2>
      <p style={pStyle}>
        We wszystkich sprawach związanych z ochroną danych osobowych pisz na:
        kontakt@tuusimago.com Odpowiadamy maksymalnie w ciągu 14 dni (zazwyczaj
        szybciej).
      </p>

      <h2>§ 9 Zmiany polityki prywatności</h2>
      <p style={pStyle}>
        Ewentualne zmiany będą publikowane na tej stronie. Ważne zmiany
        dodatkowo powiadomimy mailem (jeśli mamy Twoją zgodę marketingową).
      </p>
    </>
  );
}
