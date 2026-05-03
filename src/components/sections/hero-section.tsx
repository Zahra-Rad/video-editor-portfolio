import {
  PlayCircleFilled,
  RocketOutlined,
  TrophyOutlined,
} from "@ant-design/icons";
import { Button, Card, Col, Row, Space, Statistic } from "antd";

import { Paragraph, Title } from "@/lib/antd-typography";

export function HeroSection() {
  return (
    <section className="px-6 pb-14 pt-16 md:pt-20">
      <div className="mx-auto w-full max-w-6xl">
        <Row gutter={[24, 24]} align="middle">
          <Col xs={24} lg={14}>
            <Space orientation="vertical" size={18}>
              <span className="inline-block rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-violet-700">
                Freelance Video Editor
              </span>
              <Title level={1} className="mb-0! text-4xl! leading-tight! md:text-6xl!">
                Edits that make people stop scrolling
              </Title>
              <Paragraph className="mb-0! max-w-xl text-base! text-zinc-600! md:text-lg!">
                I help creators and brands turn raw footage into cinematic,
                conversion-focused stories for YouTube, Instagram, and ads.
              </Paragraph>
              <Space size="middle" wrap>
                <Button type="primary" size="large" icon={<PlayCircleFilled />} href="#work">
                  Watch Showreel
                </Button>
                <Button size="large" href="#contact">
                  Let&apos;s Work Together
                </Button>
              </Space>
            </Space>
          </Col>
          <Col xs={24} lg={10}>
            <Card className="overflow-hidden border-0 bg-linear-to-br from-zinc-900 to-violet-900 text-white shadow-xl">
              <Space orientation="vertical" size={18} className="w-full">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/80">Latest Milestone</span>
                  <TrophyOutlined />
                </div>
                <Title level={3} className="mb-0! text-white!">
                  48M+ total views
                </Title>
                <Paragraph className="mb-0! text-white/80!">
                  Generated across social campaigns and creator channels in the
                  last 12 months.
                </Paragraph>
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-white/10 p-3">
                    <Statistic
                      title="Projects"
                      value={120}
                      styles={{
                        title: { color: "rgba(255,255,255,0.65)" },
                        content: { color: "#fff" },
                      }}
                    />
                  </div>
                  <div className="rounded-xl bg-white/10 p-3">
                    <Statistic
                      title="Avg CTR Lift"
                      value={31}
                      suffix="%"
                      styles={{
                        title: { color: "rgba(255,255,255,0.65)" },
                        content: { color: "#fff" },
                      }}
                    />
                  </div>
                </div>
                <Button ghost icon={<RocketOutlined />} href="#services">
                  Explore Services
                </Button>
              </Space>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  );
}
