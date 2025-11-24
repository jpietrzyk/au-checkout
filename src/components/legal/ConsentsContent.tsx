import { pStyle } from "../../pages/legal/styles";

export function ConsentsContent() {
  return (
    <>
      <h2>Adres e-mail</h2>
      <p style={pStyle}>[pole do wpisania e-maila]</p>

      <h2>Aktualny status Twoich zgód</h2>
      <ul style={{ marginTop: 8, marginBottom: 12, paddingLeft: 20 }}>
        <li>
          Realizacja zamówień i kontakt w tej sprawie → zawsze aktywna (wymagana
          do wykonania usługi)
        </li>
        <li>Newsletter i promocje → [Włączona / Wyłączona] → [Zmień]</li>
        <li>
          Analityczne i reklamowe cookies → [Włączone / Wyłączone] → [Zmień]
        </li>
      </ul>

      <p style={pStyle}>
        <strong>[Zapisz zmiany]</strong>
        <br />
        <strong>[Usuń wszystkie moje dane (prawo do bycia zapomnianym)]</strong>
        <br />
        <strong>[Wycofaj wszystkie zgody i usuń konto]</strong>
      </p>

      <p style={pStyle}>
        Po kliknięciu „Zapisz” dostajesz e-mail z potwierdzeniem.
      </p>
    </>
  );
}
