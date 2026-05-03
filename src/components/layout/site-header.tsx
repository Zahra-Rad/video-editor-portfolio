import { CameraOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-zinc-200/70 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="inline-flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-violet-600 text-white">
            <CameraOutlined />
          </span>
          <span className="text-lg font-semibold text-zinc-900">Arman Edit</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-zinc-600 md:flex">
          <a href="#work" className="transition hover:text-zinc-900">
            Work
          </a>
          <a href="#services" className="transition hover:text-zinc-900">
            Services
          </a>
          <a href="#about" className="transition hover:text-zinc-900">
            About
          </a>
          <a href="#contact" className="transition hover:text-zinc-900">
            Contact
          </a>
        </nav>
        <Button type="primary" href="#contact">
          Book a Project
        </Button>
      </div>
    </header>
  );
}
