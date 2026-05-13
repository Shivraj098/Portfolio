import Link from "next/link";

import { GlassCard } from "@/components/shared/glass-card";

import {
  Section,
  SectionContainer,
} from "@/components/layout/section";

import { getFeaturedPosts } from "@/lib/posts";

export function FeaturedPosts() {
  const posts = getFeaturedPosts();

  return (
    <Section id="blog">
      <SectionContainer>
        <div className="max-w-3xl">
          <p className="mb-5 text-sm uppercase tracking-[0.2em] text-white/40">
            Engineering Writing
          </p>

          <h2 className="text-5xl font-semibold tracking-tight md:text-7xl">
            Systems thinking, architecture, and engineering decisions.
          </h2>
        </div>

        <div className="mt-20 grid gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
            >
              <GlassCard className="rounded-[2rem] p-8">
                <p className="text-sm text-white/40">
                  {post.category}
                </p>

                <h3 className="mt-4 text-3xl font-semibold">
                  {post.title}
                </h3>

                <p className="mt-5 max-w-2xl text-white/50">
                  {post.description}
                </p>
              </GlassCard>
            </Link>
          ))}
        </div>
      </SectionContainer>
    </Section>
  );
}