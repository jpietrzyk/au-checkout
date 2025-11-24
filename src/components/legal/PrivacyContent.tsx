import privacyHtml from "../../assets/legal/privacy.html?raw";

export function PrivacyContent() {
  return <div dangerouslySetInnerHTML={{ __html: privacyHtml }} />;
}
