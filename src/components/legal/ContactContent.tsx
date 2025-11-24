import ReactMarkdown from "react-markdown";
import contactMd from "../../assets/legal/contact.md?raw";

export function ContactContent() {
  return <ReactMarkdown>{contactMd}</ReactMarkdown>;
}
