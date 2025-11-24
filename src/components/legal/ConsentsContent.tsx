import consentsHtml from "../../assets/legal/consents.html?raw";

export function ConsentsContent() {
  return <div dangerouslySetInnerHTML={{ __html: consentsHtml }} />;
}
