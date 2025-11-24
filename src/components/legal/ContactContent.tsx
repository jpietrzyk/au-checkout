import contactHtml from "../../assets/legal/contact.html?raw";

export function ContactContent() {
  return <div dangerouslySetInnerHTML={{ __html: contactHtml }} />;
}
