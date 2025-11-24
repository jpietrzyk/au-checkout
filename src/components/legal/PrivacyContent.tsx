import { pStyle, ulStyle } from "../../pages/legal/styles";

export function PrivacyContent() {
  return (
    <>
      <p>
        Niniejsza polityka prywatności opisuje zasady przetwarzania danych
        osobowych w serwisie. Dbamy o bezpieczeństwo oraz przejrzystość
        przetwarzania danych zgodnie z obowiązującymi przepisami.
      </p>

      <h2>§ 1 Administrator danych osobowych</h2>
      <p>Administratorem Twoich danych osobowych jest:</p>
      <ul style={ulStyle}>
        <li>Tuus Imago Michał Kowalski (lub wpisz dokładną nazwę firmy/jdg)</li>
        <li>[adres siedziby]</li>
        <li>NIP: [Twój NIP]</li>
        <li>e-mail: kontakt@tuusimago.com</li>
      </ul>
      <p>(zwany dalej „Administratorem” lub „my”).</p>

      <h2>§ 2 W jakich celach przetwarzamy Twoje dane?</h2>
      <p>Przetwarzamy dane osobowe wyłącznie w następujących celach:</p>
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
      <ul style={ulStyle}>
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
      <ul style={ulStyle}>
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
      <ul style={ulStyle}>
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
      <ul style={ulStyle}>
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
      <ul style={ulStyle}>
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

      <h2>§ 10 Jakich cookies używamy na tuusimago.com?</h2>
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
              Rodzaj cookies
            </th>
            <th
              style={{
                border: "1px solid #e5e7eb",
                padding: "8px",
                textAlign: "left",
                backgroundColor: "#f9fafb",
              }}
            >
              Nazwa (przykładowa)
            </th>
            <th
              style={{
                border: "1px solid #e5e7eb",
                padding: "8px",
                textAlign: "left",
                backgroundColor: "#f9fafb",
              }}
            >
              Cel
            </th>
            <th
              style={{
                border: "1px solid #e5e7eb",
                padding: "8px",
                textAlign: "left",
                backgroundColor: "#f9fafb",
              }}
            >
              Czas działania
            </th>
            <th
              style={{
                border: "1px solid #e5e7eb",
                padding: "8px",
                textAlign: "left",
                backgroundColor: "#f9fafb",
              }}
            >
              Konieczność
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: "1px solid #e5e7eb", padding: "8px" }}>
              Niezbędne (wymagane)
            </td>
            <td style={{ border: "1px solid #e5e7eb", padding: "8px" }}>
              session_id, cart_token
            </td>
            <td style={{ border: "1px solid #e5e7eb", padding: "8px" }}>
              Działanie koszyka, edytora zdjęć, logowanie
            </td>
            <td style={{ border: "1px solid #e5e7eb", padding: "8px" }}>
              Do zamknięcia przeglądarki lub max 30 dni
            </td>
            <td style={{ border: "1px solid #e5e7eb", padding: "8px" }}>
              Tak – bez nich strona nie działa
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #e5e7eb", padding: "8px" }}>
              Funkcjonalne
            </td>
            <td style={{ border: "1px solid #e5e7eb", padding: "8px" }}>
              preview_settings
            </td>
            <td style={{ border: "1px solid #e5e7eb", padding: "8px" }}>
              Zapamiętanie wybranych ustawień podglądu i edycji
            </td>
            <td style={{ border: "1px solid #e5e7eb", padding: "8px" }}>
              30 dni
            </td>
            <td style={{ border: "1px solid #e5e7eb", padding: "8px" }}>Tak</td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #e5e7eb", padding: "8px" }}>
              Analityczne (opcjonalne)
            </td>
            <td style={{ border: "1px solid #e5e7eb", padding: "8px" }}>
              _ga, _gid, _gat (Google Analytics)
            </td>
            <td style={{ border: "1px solid #e5e7eb", padding: "8px" }}>
              Statystyki odwiedzin (ile osób wchodzi, skąd, co klika) –
              anonimowe
            </td>
            <td style={{ border: "1px solid #e5e7eb", padding: "8px" }}>
              1 minuta – 2 lata
            </td>
            <td style={{ border: "1px solid #e5e7eb", padding: "8px" }}>
              Nie – możesz wyłączyć
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #e5e7eb", padding: "8px" }}>
              Marketingowe/reklamowe
            </td>
            <td style={{ border: "1px solid #e5e7eb", padding: "8px" }}>
              _fbp, _gcl_au (Meta Pixel, Google Ads)
            </td>
            <td style={{ border: "1px solid #e5e7eb", padding: "8px" }}>
              Pokazywanie reklam naszym poprzednim gościom
            </td>
            <td style={{ border: "1px solid #e5e7eb", padding: "8px" }}>
              90 dni
            </td>
            <td style={{ border: "1px solid #e5e7eb", padding: "8px" }}>
              Nie – możesz wyłączyć
            </td>
          </tr>
        </tbody>
      </table>

      <h2>§ 11 Czy mogę wyłączyć cookies?</h2>
      <p style={pStyle}>Tak – w każdej chwili:</p>
      <ul style={ulStyle}>
        <li>
          Niezbędne cookies – nie da się ich wyłączyć (bez nich edytor i koszyk
          nie będą działać).
        </li>
        <li>
          Analityczne i marketingowe – możesz je zablokować w belce cookies
          (przy pierwszej wizycie) lub w ustawieniach przeglądarki.
        </li>
      </ul>

      <h2>§ 12 Jak zarządzać cookies w przeglądarce?</h2>
      <ul style={ulStyle}>
        <li>
          Chrome → Ustawienia → Prywatność i bezpieczeństwo → Pliki cookie
        </li>
        <li>
          Firefox → Opcje → Prywatność i ochrona → Ciasteczka i dane stron
        </li>
        <li>Safari → Preferencje → Prywatność</li>
        <li>Edge/Opera – analogicznie</li>
      </ul>
      <p style={pStyle}>
        Możesz też użyć trybu prywatnego/incognito – wtedy cookies sesyjne są
        automatycznie usuwane po zamknięciu okna.
      </p>

      <h2>§ 13 Piksel Facebooka / Meta Pixel i Google Analytics</h2>
      <p style={pStyle}>
        Jeżeli wyrazisz zgodę na cookies marketingowe i analityczne: dane są
        anonimizowane (nie znamy Twojego imienia ani adresu), nie łączymy ich z
        danymi zamówienia, możesz w każdej chwili wycofać zgodę – klikając w
        ikonę tarczy/klucza w lewym dolnym rogu strony.
      </p>

      <h2>§ 14 Gdzie są przechowywane dane z cookies?</h2>
      <p style={pStyle}>
        Serwery w Polsce i UE (Google Ireland Limited, Meta Platforms Ireland
        Limited). Nie przekazujemy ich poza Europejski Obszar Gospodarczy.
      </p>

      <h2>§ 15 Kontakt i zmiana ustawień</h2>
      <p style={pStyle}>
        Masz pytania lub chcesz całkowicie wyczyścić cookies? Napisz:
        kontakt@tuusimago.com lub kliknij „Ustawienia cookies” w belce na dole
        strony.
      </p>

      <h2>§ 16 Aktualizacje polityki</h2>
      <p style={pStyle}>
        W razie zmian poinformujemy Cię w belce cookies i na tej stronie.
        Dziękujemy, że jesteś z nami! Zespół Tuus Imago 🎨
      </p>
    </>
  );
}
