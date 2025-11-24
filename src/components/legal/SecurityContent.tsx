import securityHtml from "../../assets/legal/security.html?raw";

export function SecurityContent() {
  return <div dangerouslySetInnerHTML={{ __html: securityHtml }} />;
}
