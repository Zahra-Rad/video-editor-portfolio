import { StepForwardOutlined } from "@ant-design/icons";
import { Card, Col, Row } from "antd";

import { Paragraph, Text, Title } from "@/lib/antd-typography";

const steps = [
  {
    n: "01",
    title: "Brief & references",
    body: "Goals, audience, pacing refs, and technical specs locked before the first cut.",
  },
  {
    n: "02",
    title: "First cut",
    body: "Structured timeline with music and temp grade so you can react quickly.",
  },
  {
    n: "03",
    title: "Refine",
    body: "Tight notes rounds with clear versioning — no mystery filenames.",
  },
  {
    n: "04",
    title: "Deliver",
    body: "Masters, stems, and platform-specific exports with a simple delivery sheet.",
  },
];

export function WorkflowSection() {
  return (
    <section className="px-6 py-16 md:py-20">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-10 max-w-2xl">
          <Text type="secondary" className="mb-2! block text-xs font-semibold uppercase tracking-wider">
            Process
          </Text>
          <Title level={2} className="mb-3! text-3xl! md:text-4xl!">
            A calm workflow from kickoff to handoff
          </Title>
          <Paragraph className="mb-0! text-zinc-600!">
            Predictable milestones so producers always know what&apos;s next.
          </Paragraph>
        </div>
        <Row gutter={[16, 16]}>
          {steps.map((step) => (
            <Col key={step.n} xs={24} sm={12} lg={6}>
              <Card className="h-full border-zinc-200/80 bg-zinc-50/50 shadow-none">
                <div className="mb-3 flex items-center justify-between">
                  <span className="font-mono text-sm font-bold text-violet-600">
                    {step.n}
                  </span>
                  <StepForwardOutlined className="text-zinc-400" />
                </div>
                <Title level={5} className="mb-2! mt-0!">
                  {step.title}
                </Title>
                <Paragraph className="mb-0! text-sm! text-zinc-600!">{step.body}</Paragraph>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
}
