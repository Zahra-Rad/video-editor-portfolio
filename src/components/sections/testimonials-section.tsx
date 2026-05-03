import { Avatar, Card, Col, Rate, Row } from "antd";

import { Paragraph, Text, Title } from "@/lib/antd-typography";

const quotes = [
  {
    name: "Maya Chen",
    role: "Creative Director",
    text: "Turnaround was fast without sacrificing craft. Our launch cut performed above benchmark on paid social.",
  },
  {
    name: "Jordan Ellis",
    role: "YouTube Producer",
    text: "Finally an editor who reads the brief and fixes pacing instead of just trimming silence.",
  },
  {
    name: "Sam Okonkwo",
    role: "Marketing Lead",
    text: "Clear exports and naming — our post house had zero rework on the handoff.",
  },
];

export function TestimonialsSection() {
  return (
    <section className="border-t border-zinc-200/80 bg-white px-6 py-16 md:py-20">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-10 text-center">
          <Text type="secondary" className="mb-2! block text-xs font-semibold uppercase tracking-wider">
            Testimonials
          </Text>
          <Title level={2} className="mb-0! text-3xl! md:text-4xl!">
            Trusted by teams who ship
          </Title>
        </div>
        <Row gutter={[20, 20]}>
          {quotes.map((q) => (
            <Col key={q.name} xs={24} md={8}>
              <Card className="h-full border-zinc-200/80 shadow-sm">
                <Rate disabled defaultValue={5} className="mb-4! text-amber-400!" />
                <Paragraph className="mb-6! text-zinc-700!">&ldquo;{q.text}&rdquo;</Paragraph>
                <div className="flex items-center gap-3">
                  <Avatar className="bg-violet-100 text-violet-700">
                    {q.name.charAt(0)}
                  </Avatar>
                  <div>
                    <Text strong>{q.name}</Text>
                    <div>
                      <Text type="secondary" className="text-sm">
                        {q.role}
                      </Text>
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
}
