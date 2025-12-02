import { Video, Linkedin, Twitter, Facebook } from "lucide-react";

const footerLinks = {
  Product: ["Features", "Pricing", "Integrations", "Changelog", "API"],
  Resources: ["Documentation", "Guides", "Blog", "Help Center", "Community"],
  Company: ["About Us", "Careers", "Contact", "Partners", "Press Kit"],
  Legal: ["Terms of Service", "Privacy Policy", "Data Deletion", "Cookie Policy", "GDPR"],
};

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-12 grid grid-cols-2 gap-8 md:grid-cols-6">
          <div className="col-span-2">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#A78BFA]">
                <Video className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl text-white">AgentInc</span>
            </div>
            <p className="mb-6 max-w-xs text-sm text-gray-400">
              Automate your social media and grow your audience effortlessly with AI-powered scheduling and analytics.
            </p>
            <div className="flex items-center gap-3">
              {[Linkedin, Twitter, Facebook].map((Icon) => (
                <a
                  key={Icon.displayName ?? Icon.name}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800 transition hover:bg-[#7C3AED]"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="mb-4 text-white">{category}</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="transition hover:text-white">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-800 pt-8 text-sm text-gray-500">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p>© 2025 AgentInc. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="transition hover:text-white">
                Terms
              </a>
              <a href="#" className="transition hover:text-white">
                Privacy
              </a>
              <a href="#" className="transition hover:text-white">
                Data Deletion
              </a>
              <a href="#" className="transition hover:text-white">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
