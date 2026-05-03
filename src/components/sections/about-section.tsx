import {
  CheckCircleFilled,
  ThunderboltOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Card, Col, Row, Space, Tag } from "antd";

import { Paragraph, Text, Title } from "@/lib/antd-typography";

const tools = [
  "Premiere Pro",
  "DaVinci Resolve",
  "After Effects",
  "Audition",
];

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 px-6 py-16 md:py-20">
      <div className="mx-auto w-full max-w-6xl">
        <Row gutter={[32, 32]} align="stretch">
          <Col xs={24} lg={14}>
            <Space orientation="vertical" size={16} className="w-full">
              <Title level={2} className="mb-0! text-3xl! md:text-4xl!">
                Story-first editing, built for retention
              </Title>
              <Paragraph className="mb-0! max-w-xl text-base! text-zinc-600!">
                I collaborate closely with directors and marketing teams to shape
                pacing, tone, and clarity — whether it&apos;s a 15-second hook or a
                full documentary episode.
              </Paragraph>
              <ul className="m-0! list-none space-y-3 p-0!">
                {[
                  "Clear timelines and revision rounds",
                  "Mix-ready stems and delivery specs",
                  "Remote-friendly async + live review",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-zinc-700">
                    <CheckCircleFilled className="mt-0.5 shrink-0 text-violet-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Space>
          </Col>
          <Col xs={24} lg={10}>
            <Card className="h-full border-zinc-200/80 shadow-sm">
              <div className="mb-4 flex items-center gap-2 text-violet-600">
                <VideoCameraOutlined className="text-xl" />
                <Text strong>Stack & workflow</Text>
              </div>
              <div className="mb-4 flex flex-wrap gap-2">
                {tools.map((t) => (
                  <Tag key={t} color="purple" className="m-0! rounded-md px-2 py-0.5">
                    {t}
                  </Tag>
                ))}
              </div>
              <div className="rounded-xl bg-zinc-50 p-4">
                <div className="flex items-center gap-2 text-zinc-800">
                  <ThunderboltOutlined />
                  <Text strong>Typical turnaround</Text>
                </div>
                <Paragraph className="mb-0! mt-2! text-sm! text-zinc-600!">
                  Short-form packages often ship in 3–5 business days depending on
                  asset volume. Long-form and commercial work is scoped per
                  milestone.
                </Paragraph>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  );
}
