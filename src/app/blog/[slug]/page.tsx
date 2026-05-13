import { notFound } from "next/navigation";
import { posts } from "../../../../.velite";

import { AppShell } from "@/components/layout/app-shell";
import {
  Section,
  SectionContainer,
} from "@/components/layout/section";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function BlogPostPage({
  params,
}: BlogPostPageProps) {
  const { slug } = await params;

  const post = posts.find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <AppShell>
      <Section className="pt-40">
        <SectionContainer>
          <article className="mx-auto max-w-4xl">
            <p className="text-sm uppercase tracking-[0.2em] text-white/40">
              {post.category}
            </p>

            <h1 className="mt-6 text-5xl font-semibold tracking-tight md:text-7xl">
              {post.title}
            </h1>

            <p className="mt-8 text-xl leading-relaxed text-white/50">
              {post.description}
            </p>

            <div className="prose prose-invert mt-20 max-w-none">
              {post.content}
            </div>
          </article>
        </SectionContainer>
      </Section>
    </AppShell>
  );
}