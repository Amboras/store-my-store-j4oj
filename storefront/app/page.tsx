'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import {
  ArrowRight,
  Sparkles,
  Leaf,
  Award,
  ShieldCheck,
  Truck,
  Gift,
  Star,
  Quote,
} from 'lucide-react'
import CollectionSection from '@/components/marketing/collection-section'
import { useCollections } from '@/hooks/use-collections'
import { trackMetaEvent } from '@/lib/meta-pixel'

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1541643600914-78b084683601?w=1600&q=80'
const ATELIER_IMAGE =
  'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=1600&q=80'
const RITUAL_IMAGE =
  'https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=1600&q=80'

export default function HomePage() {
  const { data: collections, isLoading } = useCollections()
  const [newsletterEmail, setNewsletterEmail] = useState('')

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newsletterEmail.trim()) return
    trackMetaEvent('Lead', {
      content_name: 'newsletter_signup',
      status: 'submitted',
    })
  }

  return (
    <>
      {/* ───────────── HERO ───────────── */}
      <section className="relative overflow-hidden bg-[#1a1613] text-[#f5ede0]">
        {/* Background image with dark overlay */}
        <div className="absolute inset-0">
          <Image
            src={HERO_IMAGE}
            alt="Maison Lumière — Noir Oud"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1613] via-[#1a1613]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1613] via-transparent to-transparent" />
        </div>

        <div className="container-custom relative py-28 lg:py-40">
          <div className="max-w-2xl animate-fade-in-up">
            <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.35em] text-[#d4b27a] mb-6">
              <span className="h-px w-8 bg-[#d4b27a]" />
              Atelier Grasse · Est. 2019
            </div>

            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
              Fragrance, <span className="italic font-light">distilled</span>
              <br />
              to its rarest form.
            </h1>

            <p className="mt-7 text-base sm:text-lg text-[#d9cfbf]/90 leading-relaxed max-w-xl font-light">
              Hand-blended niche perfumes crafted from Cambodian oud, Bulgarian rose,
              and aged vanilla. Small batches. Uncompromising ingredients. A scent that
              is, and only is, yours.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/products"
                prefetch
                className="group inline-flex items-center gap-2 bg-[#d4b27a] text-[#1a1613] px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] hover:bg-[#e6c48c] transition-colors"
              >
                Shop the Collection
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/products/the-discovery-set-three-miniatures"
                prefetch
                className="inline-flex items-center gap-2 border border-[#d4b27a]/40 text-[#f5ede0] px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] hover:bg-[#d4b27a]/10 transition-colors"
              >
                Try the Discovery Set
              </Link>
            </div>

            {/* Star rating row */}
            <div className="mt-10 flex items-center gap-3 text-[#d9cfbf]/80">
              <div className="flex gap-0.5">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-[#d4b27a] text-[#d4b27a]" strokeWidth={0} />
                ))}
              </div>
              <span className="text-xs tracking-wide">
                <span className="font-semibold text-[#f5ede0]">4.9</span> · Loved by 12,400+ collectors worldwide
              </span>
            </div>
          </div>
        </div>

        {/* Scrolling ingredient strip */}
        <div className="relative border-t border-[#d4b27a]/15 bg-[#13100d]/60 py-4 overflow-hidden">
          <div className="animate-marquee flex gap-12 whitespace-nowrap text-[11px] uppercase tracking-[0.3em] text-[#d4b27a]/80">
            {Array.from({ length: 2 }).map((_, k) => (
              <div key={k} className="flex gap-12">
                <span>Cambodian Oud</span>
                <span>·</span>
                <span>Bulgarian Rose</span>
                <span>·</span>
                <span>Madagascan Vanilla</span>
                <span>·</span>
                <span>Aged Sandalwood</span>
                <span>·</span>
                <span>Saffron</span>
                <span>·</span>
                <span>Amber</span>
                <span>·</span>
                <span>Tonka Bean</span>
                <span>·</span>
                <span>Iris</span>
                <span>·</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── VALUE PROPS ───────────── */}
      <section className="border-b py-10">
        <div className="container-custom grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
          {[
            { icon: Leaf, label: 'Natural Essences', sub: 'No synthetic fillers' },
            { icon: Award, label: 'Made in France', sub: 'Grasse atelier' },
            { icon: Sparkles, label: '18% Concentration', sub: '12+ hour wear' },
            { icon: ShieldCheck, label: '100-Day Promise', sub: 'Love it or return it' },
          ].map(({ icon: Icon, label, sub }) => (
            <div key={label} className="flex items-center gap-3 justify-center md:justify-start">
              <Icon className="h-5 w-5 text-[hsl(var(--accent))]" strokeWidth={1.5} />
              <div>
                <p className="text-xs font-semibold tracking-wide">{label}</p>
                <p className="text-[11px] text-muted-foreground">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ───────────── COLLECTIONS ───────────── */}
      {isLoading ? (
        <section className="py-section">
          <div className="container-custom">
            <div className="animate-pulse space-y-4 text-center">
              <div className="h-3 w-20 bg-muted rounded mx-auto" />
              <div className="h-8 w-64 bg-muted rounded mx-auto" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {[1, 2, 3].map((i) => (
                <div key={i} className="aspect-[3/4] bg-muted rounded animate-pulse" />
              ))}
            </div>
          </div>
        </section>
      ) : collections && collections.length > 0 ? (
        <>
          {collections.map(
            (
              collection: {
                id: string
                handle: string
                title: string
                metadata?: Record<string, unknown>
              },
              index: number,
            ) => (
              <CollectionSection
                key={collection.id}
                collection={collection}
                alternate={index % 2 === 1}
              />
            ),
          )}
        </>
      ) : null}

      {/* ───────────── EDITORIAL — ATELIER ───────────── */}
      <section className="py-section bg-[hsl(var(--muted))]/50 bg-noise">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <Image
                src={ATELIER_IMAGE}
                alt="Inside the Maison Lumière atelier"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute bottom-6 left-6 bg-background/95 backdrop-blur-sm px-4 py-2.5">
                <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  The Atelier
                </p>
                <p className="text-sm font-heading">Grasse, France</p>
              </div>
            </div>

            <div className="space-y-7 lg:max-w-md">
              <p className="text-xs uppercase tracking-[0.3em] text-[hsl(var(--accent))]">
                Our Philosophy
              </p>
              <h2 className="font-heading text-4xl lg:text-5xl leading-[1.1]">
                A fragrance should feel <span className="italic">inevitable.</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We blend in small batches of 200 bottles at a time, aging each composition
                for a minimum of six weeks before release. The result is a scent that
                breathes — one that changes with your skin, your mood, the hour of the day.
              </p>
              <div className="grid grid-cols-3 gap-6 pt-4 border-t">
                <div>
                  <p className="font-heading text-3xl text-[hsl(var(--accent))]">18%</p>
                  <p className="text-[11px] uppercase tracking-wider text-muted-foreground mt-1">
                    Parfum Concentration
                  </p>
                </div>
                <div>
                  <p className="font-heading text-3xl text-[hsl(var(--accent))]">6wk</p>
                  <p className="text-[11px] uppercase tracking-wider text-muted-foreground mt-1">
                    Minimum Aging
                  </p>
                </div>
                <div>
                  <p className="font-heading text-3xl text-[hsl(var(--accent))]">200</p>
                  <p className="text-[11px] uppercase tracking-wider text-muted-foreground mt-1">
                    Bottles per Batch
                  </p>
                </div>
              </div>
              <Link
                href="/about"
                prefetch
                className="inline-flex items-center gap-2 text-sm font-medium tracking-wide link-underline pb-0.5"
              >
                Discover Our Story
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── THE RITUAL — 3 STEPS ───────────── */}
      <section className="py-section">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-[hsl(var(--accent))]">
              How It Works
            </p>
            <h2 className="font-heading text-4xl lg:text-5xl mt-3">
              Find your signature in three steps.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                n: '01',
                title: 'Begin with Discovery',
                desc: 'Order the three-miniature Discovery Set for 77 USD and explore the house on your own skin.',
              },
              {
                n: '02',
                title: 'Live with the Scent',
                desc: 'Wear each fragrance for a full day. Notice how it evolves — the opening, the heart, the dry-down.',
              },
              {
                n: '03',
                title: 'Redeem Toward a Full Bottle',
                desc: 'We refund the full 77 USD toward any 50ml or 100ml bottle. Every Discovery Set comes with a redemption card.',
              },
            ].map((step) => (
              <div key={step.n} className="relative">
                <p className="font-heading text-5xl italic text-[hsl(var(--accent))]/50">
                  {step.n}
                </p>
                <h3 className="font-heading text-2xl mt-3">{step.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── PRESS / TESTIMONIALS ───────────── */}
      <section className="py-section bg-[#1a1613] text-[#f5ede0]">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs uppercase tracking-[0.3em] text-[#d4b27a]">In Their Words</p>
            <h2 className="font-heading text-4xl lg:text-5xl mt-3">
              Worn by those with taste.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                quote:
                  'Noir Oud is the most refined oud I have encountered outside of a bespoke house. Exceptional.',
                author: 'Fragrance Quarterly',
              },
              {
                quote:
                  'A rare find — genuine craft in a category crowded with imitations. The dry-down alone is worth it.',
                author: 'Vogue Arabia',
              },
              {
                quote:
                  'I bought it on a whim and now I cannot wear anything else. Compliments every single day.',
                author: 'Laila H. — Verified Buyer',
              },
            ].map((t) => (
              <div
                key={t.author}
                className="border border-[#d4b27a]/20 p-7 bg-[#13100d]/40 backdrop-blur-sm"
              >
                <Quote className="h-5 w-5 text-[#d4b27a]" strokeWidth={1.5} />
                <p className="mt-4 text-[#d9cfbf] leading-relaxed font-light italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="mt-5 text-[11px] uppercase tracking-[0.25em] text-[#d4b27a]">
                  — {t.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── GIFTING RITUAL ───────────── */}
      <section className="py-section">
        <div className="container-custom grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1 space-y-7 lg:max-w-md">
            <p className="text-xs uppercase tracking-[0.3em] text-[hsl(var(--accent))] inline-flex items-center gap-2">
              <Gift className="h-4 w-4" /> The Gift of Scent
            </p>
            <h2 className="font-heading text-4xl lg:text-5xl leading-[1.1]">
              Wrapped by hand, <span className="italic">sealed with ceremony.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Every order arrives in a linen-lined box, sealed with gold wax and a handwritten
              note from our perfumer. Add a personalised message at checkout — at no extra cost.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <Truck className="h-5 w-5 text-[hsl(var(--accent))]" strokeWidth={1.5} />
              <p className="text-sm">
                <span className="font-semibold">Complimentary shipping</span> on all orders over
                &nbsp;$150.
              </p>
            </div>
            <Link
              href="/products"
              prefetch
              className="inline-flex items-center gap-2 bg-foreground text-background px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[0.2em] hover:opacity-90 transition-opacity"
            >
              Shop Gifts
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="order-1 lg:order-2 relative aspect-[4/5] overflow-hidden rounded-sm">
            <Image
              src={RITUAL_IMAGE}
              alt="Hand-wrapped Maison Lumière gift"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ───────────── NEWSLETTER ───────────── */}
      <section className="py-section bg-[hsl(var(--muted))]/50">
        <div className="container-custom max-w-xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-[hsl(var(--accent))]">
            Join the Maison
          </p>
          <h2 className="font-heading text-4xl lg:text-5xl mt-3">
            Early access. Private releases.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Be the first to know when new batches are released. Subscribers receive 10% off their
            first bottle.
          </p>
          <form className="mt-8 flex gap-2" onSubmit={handleNewsletterSubmit}>
            <input
              type="email"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 border-b border-foreground/30 bg-transparent px-1 py-3 text-sm placeholder:text-muted-foreground focus:border-foreground focus:outline-none transition-colors"
            />
            <button
              type="submit"
              className="bg-foreground text-background px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
          <p className="mt-4 text-[11px] text-muted-foreground">
            No spam — one quiet letter per month. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </>
  )
}
