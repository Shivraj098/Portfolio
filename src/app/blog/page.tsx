import Link from "next/link";

import { AppShell } from "@/components/layout/app-shell";
import {
  Section,
  SectionContainer,
} from "@/components/layout/section";

import { getAllPosts } from "@/lib/posts";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <AppShell>
      <Section className="pt-40">
        <SectionContainer>
          <div className="max-w-3xl">
            <p className="mb-5 text-sm uppercase tracking-[0.2em] text-white/40">
              Engineering Writing
            </p>

            <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">
              Thoughts on systems, architecture, and engineering.
            </h1>
          </div>

          <div className="mt-24 grid gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="glass-surface rounded-[2rem] p-8 transition-transform duration-300 hover:-translate-y-1"
              >
                <p className="text-sm text-white/40">
                  {post.category}
                </p>

                <h2 className="mt-4 text-3xl font-semibold">
                  {post.title}
                </h2>

                <p className="mt-5 max-w-2xl text-white/50">
                  {post.description}
                </p>
              </Link>
            ))}
          </div>
        </SectionContainer>
      </Section>
    </AppShell>
  );
}