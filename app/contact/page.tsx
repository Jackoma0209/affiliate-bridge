import type { Metadata } from "next";

import { LegalPage } from "@/components/legal-page";
import { config } from "@/config";

export const metadata: Metadata = {
  title: `Contact | ${config.siteName}`,
  description: "Contact Get Your First Sale.",
};

export default function ContactPage() {
  return (
    <LegalPage
      title="Contact"
      description="Use this page for questions about the site, affiliate disclosure, or placeholder legal text."
    >
      <p>
        Email:{" "}
        <a
          href={`mailto:${config.contactEmail}`}
          className="font-semibold text-emerald-700 hover:text-emerald-800"
        >
          {config.contactEmail}
        </a>
      </p>
      <p>
        This is a placeholder contact page. Add your preferred support address,
        business details, response expectations, and any required legal contact
        information before publishing.
      </p>
    </LegalPage>
  );
}
