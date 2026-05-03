import {
  BgColorsOutlined,
  ScissorOutlined,
  SoundOutlined,
} from "@ant-design/icons";
import { Card, Col, Row } from "antd";

import { Paragraph, Text, Title } from "@/lib/antd-typography";

const services = [
  {
    title: "Edit & structure",
    description:
      "Assembly through fine cut: pacing, selects, music beds, and narrative clarity.",
    icon: <ScissorOutlined className="text-2xl text-violet-600" />,
  },
  {
    title: "Color & finish",
    description:
      "Consistent looks across campaigns, basic cleanup, and grade passes in Resolve.",
    icon: <BgColorsOutlined className="text-2xl text-violet-600" />,
  },
  {
    title: "Sound polish",
    description:
      "Leveling, ambience, simple SFX sweetening, and prep for mix if you have an engineer.",
    icon: <SoundOutlined className="text-2xl text-violet-600" />,
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-24 px-6 py-16 md:py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
        <div className="max-w-2xl">
          <Text type="secondary" className="mb-2! block text-xs font-semibold uppercase tracking-wider">
            Services
          </Text>
          <Title level={2} className="mb-3! text-3xl! md:text-4xl!">
            From rough cut to delivery-ready masters
          </Title>
          <Paragraph className="mb-0! text-zinc-600!">
            Packages are tailored to your pipeline — remote uploads, frame.io
            notes, and versioned exports so your team stays unblocked.
          </Paragraph>
        </div>
        <Row gutter={[20, 20]}>
          {services.map((service) => (
            <Col key={service.title} xs={24} md={8}>
              <Card className="h-full border-zinc-200/80 shadow-sm transition-shadow hover:shadow-md">
                <div className="mb-4 inline-flex rounded-xl bg-violet-50 p-3">
                  {service.icon}
                </div>
                <Title level={4} className="mb-2!">
                  {service.title}
                </Title>
                <Paragraph className="mb-0! text-zinc-600!">
                  {service.description}
                </Paragraph>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
}
