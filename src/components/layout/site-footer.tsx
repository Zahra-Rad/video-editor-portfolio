import { GithubOutlined, InstagramOutlined, LinkedinOutlined, YoutubeOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";

import { Text } from "@/lib/antd-typography";

const year = new Date().getFullYear();

const social = [
  { icon: <InstagramOutlined />, href: "#", label: "Instagram" },
  { icon: <YoutubeOutlined />, href: "#", label: "YouTube" },
  { icon: <LinkedinOutlined />, href: "#", label: "LinkedIn" },
  { icon: <GithubOutlined />, href: "#", label: "GitHub" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-200 bg-white px-6 py-12">
      <div className="mx-auto w-full max-w-6xl">
        <Row gutter={[32, 32]}>
          <Col xs={24} md={10}>
            <div className="mb-3 text-lg font-semibold text-zinc-900">Arman Edit</div>
            <Text type="secondary" className="block max-w-sm">
              Freelance video editor — narrative pacing, color, and delivery-ready masters for creators and brands.
            </Text>
          </Col>
          <Col xs={12} md={7}>
            <div className="mb-3 text-sm font-semibold text-zinc-900">Navigate</div>
            <ul className="m-0! list-none space-y-2 p-0! text-sm text-zinc-600">
              <li>
                <a href="#work" className="hover:text-violet-600">
                  Work
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-violet-600">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-violet-600">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-violet-600">
                  Contact
                </a>
              </li>
            </ul>
          </Col>
          <Col xs={12} md={7}>
            <div className="mb-3 text-sm font-semibold text-zinc-900">Social</div>
            <div className="flex flex-wrap gap-3 text-lg text-zinc-600">
              {social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="transition hover:text-violet-600"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </Col>
        </Row>
        <div className="mt-10 border-t border-zinc-100 pt-6 text-sm text-zinc-500">
          © {year} Arman Edit. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
