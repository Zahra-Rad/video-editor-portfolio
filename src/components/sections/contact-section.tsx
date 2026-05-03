"use client";

import { MailOutlined, SendOutlined } from "@ant-design/icons";
import {
  Button,
  Card,
  Col,
  Form,
  Input,
  Modal,
  Row,
  Space,
  message,
} from "antd";

import { Paragraph, Text, Title } from "@/lib/antd-typography";
import { useUiStore } from "@/store/ui-store";

type ContactFormValues = {
  name: string;
  email: string;
  project: string;
  message: string;
};

export function ContactSection() {
  const contactModalOpen = useUiStore((s) => s.contactModalOpen);
  const setContactModalOpen = useUiStore((s) => s.setContactModalOpen);
  const [form] = Form.useForm<ContactFormValues>();

  const handleSubmit = async () => {
    try {
      await form.validateFields();
      message.success("Thanks — I’ll get back to you within 1–2 business days.");
      form.resetFields();
      setContactModalOpen(false);
    } catch {
      // validation errors only
    }
  };

  return (
    <section id="contact" className="scroll-mt-24 px-6 pb-20 pt-8 md:pb-24">
      <div className="mx-auto w-full max-w-6xl">
        <Card className="overflow-hidden border-0 bg-linear-to-br from-zinc-900 via-zinc-900 to-violet-950 p-0! shadow-xl">
          <Row gutter={0}>
            <Col xs={24} lg={14}>
              <div className="p-8 text-white md:p-12">
                <MailOutlined className="mb-4! text-3xl text-violet-300" />
                <Title level={2} className="mb-3! text-white!">
                  Ready for the next cut?
                </Title>
                <Paragraph className="mb-6! max-w-md text-base! text-zinc-300!">
                  Share your timeline, references, and where this piece will live — I&apos;ll reply with availability and a clear quote.
                </Paragraph>
                <Space wrap>
                  <Button
                    type="primary"
                    size="large"
                    icon={<SendOutlined />}
                    onClick={() => setContactModalOpen(true)}
                  >
                    Start a project
                  </Button>
                  <Button size="large" ghost href="mailto:hello@example.com">
                    hello@example.com
                  </Button>
                </Space>
              </div>
            </Col>
            <Col xs={24} lg={10}>
              <div className="flex h-full flex-col justify-center border-t border-white/10 bg-black/20 p-8 md:border-l md:border-t-0 md:p-10">
                <Text className="mb-2! block text-xs font-semibold uppercase tracking-wider text-violet-200">
                  Response time
                </Text>
                <Title level={4} className="mb-2! mt-0! text-white!">
                  Usually same week
                </Title>
                <Paragraph className="mb-0! text-sm! text-zinc-400!">
                  For rush work, mention your air date in the form so we can prioritize.
                </Paragraph>
              </div>
            </Col>
          </Row>
        </Card>
      </div>

      <Modal
        title="Project inquiry"
        open={contactModalOpen}
        onCancel={() => setContactModalOpen(false)}
        footer={null}
        destroyOnHidden
        width={520}
      >
        <Form form={form} layout="vertical" requiredMark="optional">
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please enter your name" }]}
          >
            <Input placeholder="Your name" />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please enter your email" },
              { type: "email", message: "Enter a valid email" },
            ]}
          >
            <Input placeholder="you@company.com" />
          </Form.Item>
          <Form.Item label="Project type" name="project">
            <Input placeholder="e.g. YouTube series, ad cut, music video" />
          </Form.Item>
          <Form.Item label="Message" name="message">
            <Input.TextArea rows={4} placeholder="Timeline, budget range, links to refs…" />
          </Form.Item>
          <Button type="primary" block size="large" onClick={handleSubmit}>
            Send message
          </Button>
        </Form>
      </Modal>
    </section>
  );
}
