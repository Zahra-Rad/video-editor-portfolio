"use client";

import { ArrowRightOutlined } from "@ant-design/icons";
import { Button, Card, Col, Row, Segmented, Tag } from "antd";

import { Paragraph, Text, Title } from "@/lib/antd-typography";
import { PROJECTS, PROJECT_CATEGORIES } from "@/lib/portfolio-data";
import { useUiStore } from "@/store/ui-store";

export function PortfolioSection() {
  const activeCategory = useUiStore((s) => s.activeCategory);
  const setActiveCategory = useUiStore((s) => s.setActiveCategory);

  const filtered =
    activeCategory === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section
      id="work"
      className="scroll-mt-24 border-y border-zinc-200/80 bg-white px-6 py-16 md:py-20"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Text type="secondary" className="mb-2! block text-xs font-semibold uppercase tracking-wider">
              Selected work
            </Text>
            <Title level={2} className="mb-2! text-3xl! md:text-4xl!">
              Projects that shipped on time
            </Title>
            <Paragraph className="mb-0! max-w-xl text-zinc-600!">
              Filter by category — replace copy and thumbnails with your real
              case studies and embeds.
            </Paragraph>
          </div>
          <Segmented
            options={PROJECT_CATEGORIES.map((c) =>
              c === "all" ? { label: "All", value: "all" } : { label: c, value: c },
            )}
            value={activeCategory}
            onChange={(v) => setActiveCategory(String(v))}
          />
        </div>
        <Row gutter={[20, 20]}>
          {filtered.map((project) => (
            <Col key={project.id} xs={24} md={12} lg={8}>
              <Card
                hoverable
                className="h-full overflow-hidden border-zinc-200/80 p-0! shadow-sm transition-shadow hover:shadow-md"
                styles={{ body: { padding: 0 } }}
              >
                <div
                  className={`relative h-36 bg-linear-to-br ${project.gradient}`}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_55%)]" />
                  <Tag className="absolute left-4 top-4 m-0! border-0 bg-black/30 text-white backdrop-blur-sm">
                    {project.category}
                  </Tag>
                </div>
                <div className="p-5">
                  <Title level={4} className="mb-2! mt-0!">
                    {project.title}
                  </Title>
                  <Text type="secondary" className="mb-3! block text-sm">
                    {project.role}
                  </Text>
                  <Paragraph className="mb-4! text-sm! text-zinc-600!">
                    {project.description}
                  </Paragraph>
                  <Button type="link" className="p-0! h-auto!" icon={<ArrowRightOutlined />}>
                    Case study (soon)
                  </Button>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
}
