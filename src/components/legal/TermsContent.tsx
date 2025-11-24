import termsHtml from "../../assets/legal/terms.html?raw";

export function TermsContent() {
  return <div dangerouslySetInnerHTML={{ __html: termsHtml }} />;
}
