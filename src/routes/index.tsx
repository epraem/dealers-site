import { component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Logo } from "../components/ui/Logo";
import {
  Heading1,
  Heading2,
  BodyText,
  Typography,
} from "../components/ui/Typography";

export default component$(() => {
  const isMenuOpen = useSignal(false);
  const openFaqIndex = useSignal<number | null>(null);

  return (
    <>
      {/* Header */}
      <header class="fixed top-0 right-0 left-0 z-50 border-b border-gray-200 bg-white shadow-sm" role="banner">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav class="flex h-16 items-center justify-between" role="navigation" aria-label="Main navigation">
            {/* Logo */}
            <Logo />

            {/* Desktop Navigation */}
            <div class="hidden items-center space-x-6 md:flex">
              <a
                href="#home"
                class="text-sm font-medium text-[#4A5568] transition-colors hover:text-[#3182CE]"
              >
                Home
              </a>
              <a
                href="#about"
                class="text-sm font-medium text-[#4A5568] transition-colors hover:text-[#3182CE]"
              >
                About
              </a>
              <a
                href="#services"
                class="text-sm font-medium text-[#4A5568] transition-colors hover:text-[#3182CE]"
              >
                Services
              </a>
              <a
                href="#portfolio"
                class="text-sm font-medium text-[#4A5568] transition-colors hover:text-[#3182CE]"
              >
                Portfolio
              </a>
              <a
                href="#testimonials"
                class="text-sm font-medium text-[#4A5568] transition-colors hover:text-[#3182CE]"
              >
                Testimonials
              </a>
              <a
                href="#contact"
                class="rounded-lg bg-[#3182CE] px-5 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-[#2C5282]"
              >
                Contact Us
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              class="rounded-lg p-2 text-[#2D3748] transition-colors hover:bg-gray-100 hover:text-[#3182CE] md:hidden"
              onClick$={() => (isMenuOpen.value = !isMenuOpen.value)}
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen.value}
              aria-controls="mobile-menu"
              type="button"
            >
              <svg
                class="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </nav>

          {/* Mobile Navigation */}
          {isMenuOpen.value && (
            <div class="border-t border-gray-200 py-4 md:hidden" id="mobile-menu" role="menu">
              <div class="flex flex-col space-y-3">
                <a
                  href="#home"
                  class="py-2 text-sm font-medium text-[#4A5568] hover:text-[#3182CE]"
                >
                  Home
                </a>
                <a
                  href="#about"
                  class="py-2 text-sm font-medium text-[#4A5568] hover:text-[#3182CE]"
                >
                  About
                </a>
                <a
                  href="#services"
                  class="py-2 text-sm font-medium text-[#4A5568] hover:text-[#3182CE]"
                >
                  Services
                </a>
                <a
                  href="#portfolio"
                  class="py-2 text-sm font-medium text-[#4A5568] hover:text-[#3182CE]"
                >
                  Portfolio
                </a>
                <a
                  href="#testimonials"
                  class="py-2 text-sm font-medium text-[#4A5568] hover:text-[#3182CE]"
                >
                  Testimonials
                </a>
                <a
                  href="#contact"
                  class="mt-4 rounded-lg bg-[#3182CE] px-5 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-[#2C5282]"
                >
                  Contact Us
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <main>
        <section id="home" class="relative overflow-hidden bg-white pt-24 pb-20" role="banner" aria-label="Hero section">
        {/* Background Pattern */}
        <div class="absolute inset-0 opacity-5">
          <div class="absolute top-0 left-0 h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzMTgyQ0UiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')]" />
        </div>

        {/* Gradient Overlays */}
        <div class="absolute top-0 left-0 h-96 w-96 rounded-full bg-gradient-to-br from-[#3182CE]/10 to-transparent blur-3xl" />
        <div class="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-gradient-to-tl from-[#63B3ED]/10 to-transparent blur-3xl" />

        <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="text-center">
            <div class="mb-8 inline-flex items-center rounded-full border border-[#2C5282]/30 bg-gradient-to-r from-[#2C5282]/10 to-[#63B3ED]/10 px-6 py-3 text-sm font-semibold text-[#2C5282] shadow-lg">
              <svg class="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                />
              </svg>
              Denver's #1 Digital Marketing & Indoor Advertising Network
            </div>

            <Heading1 class="mx-auto mb-8 max-w-5xl text-gray-800">
              Dominate Your Market with{" "}
              <span class="bg-gradient-to-r from-[#3182CE] to-[#63B3ED] bg-clip-text text-transparent">
                Premium Digital Marketing
              </span>{" "}
              & Indoor Billboard Solutions
            </Heading1>

            <BodyText
              color="muted"
              class="mx-auto mb-12 max-w-3xl text-gray-600"
            >
              We don't just run ads — we build marketing empires. From
              high-impact indoor billboards to conversion-focused digital
              campaigns, we turn your business into the talk of Denver.
            </BodyText>

            <div class="mb-16 flex flex-col items-center justify-center gap-6 sm:flex-row">
              <a
                href="#contact"
                class="group inline-flex transform items-center justify-center rounded-xl bg-gradient-to-r from-[#3182CE] to-[#2C5282] px-8 py-4 text-lg font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:from-[#2C5282] hover:to-[#2A4365] hover:shadow-2xl"
              >
                Get Your Free Strategy Session
                <svg
                  class="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
              <a
                href="tel:(303) 555-0123"
                class="group inline-flex items-center justify-center rounded-xl border-2 border-[#2C5282] px-8 py-4 text-lg font-semibold text-[#2C5282] shadow-lg transition-all duration-300 hover:bg-[#2C5282] hover:text-white hover:shadow-xl"
              >
                <svg
                  class="mr-3 h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Call (303) 555-0123
              </a>
            </div>

            {/* Stats Section */}
            <div class="mx-auto grid max-w-4xl grid-cols-2 gap-8 md:grid-cols-4">
              <div class="text-center">
                <div class="mb-2 text-3xl font-bold text-[#63B3ED] lg:text-4xl">
                  500+
                </div>
                <div class="text-sm font-medium text-slate-800">
                  Businesses Served
                </div>
              </div>
              <div class="text-center">
                <div class="mb-2 text-3xl font-bold text-[#63B3ED] lg:text-4xl">
                  150%
                </div>
                <div class="text-sm font-medium text-slate-800">
                  Avg. ROI Increase
                </div>
              </div>
              <div class="text-center">
                <div class="mb-2 text-3xl font-bold text-[#63B3ED] lg:text-4xl">
                  50+
                </div>
                <div class="text-sm font-medium text-slate-800">
                  Billboard Locations
                </div>
              </div>
              <div class="text-center">
                <div class="mb-2 text-3xl font-bold text-[#63B3ED] lg:text-4xl">
                  24/7
                </div>
                <div class="text-sm font-medium text-slate-800">
                  Campaign Monitoring
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>
      </main>

      {/* About Us Section */}
      <section id="about" class="bg-white py-16" aria-label="About us">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <Heading2 class="mb-6">
                About <span class="text-[#2C5282]">Top Shelf</span>
              </Heading2>
              <BodyText class="mb-6">
                We are Denver's premier advertising and digital marketing
                agency, specializing in helping local businesses reach their
                target audience through innovative marketing strategies and
                cutting-edge technology.
              </BodyText>
              <BodyText class="mb-8">
                With over 10 years of experience in the industry, our team of
                experts has helped hundreds of businesses grow their online
                presence and increase their revenue through strategic marketing
                campaigns.
              </BodyText>
              <div class="grid grid-cols-2 gap-6">
                <div class="text-center">
                  <Typography variant="h3" color="accent" class="mb-2">
                    500+
                  </Typography>
                  <Typography variant="small" color="accent">
                    Happy Clients
                  </Typography>
                </div>
                <div class="text-center">
                  <Typography variant="h3" color="accent" class="mb-2">
                    10+
                  </Typography>
                  <Typography variant="small" color="accent">
                    Years Experience
                  </Typography>
                </div>
              </div>
            </div>
            <div class="relative">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                srcset="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80 400w, https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80 800w"
                sizes="(max-width: 768px) 100vw, 400px"
                alt="Professional team collaborating on digital marketing strategies in modern office environment"
                class="h-auto w-full rounded-2xl shadow-xl"
                loading="lazy"
                width="400"
                height="267"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Indoor Digital Signage Section */}
      <section class="bg-gradient-to-br from-[#3182CE] to-[#2C5282] py-16">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="grid items-center gap-12 lg:grid-cols-2">
            <div class="grid grid-cols-2 gap-4">
              <div class="rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
                <div class="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-white/20">
                  <span class="text-sm font-medium text-white">Ad</span>
                </div>
                <Typography variant="small" color="white" class="text-white/90">
                  Ads displayed on indoor digital screens in high-traffic
                  venues.
                </Typography>
              </div>

              <div class="rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
                <div class="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-white/20">
                  <svg
                    class="h-5 w-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h4a1 1 0 011 1v5m-6 0V9a1 1 0 011-1h4a1 1 0 011 1v2"
                    />
                  </svg>
                </div>
                <Typography variant="small" color="white" class="text-white/90">
                  Targeted placements by neighborhood, audience, or venue type.
                </Typography>
              </div>

              <div class="rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
                <div class="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-white/20">
                  <svg
                    class="h-5 w-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <Typography variant="small" color="white" class="text-white/90">
                  Flexible content scheduling and campaign reporting.
                </Typography>
              </div>

              <div class="rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
                <div class="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-white/20">
                  <svg
                    class="h-5 w-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <Typography variant="small" color="white" class="text-white/90">
                  Custom motion graphic designs.
                </Typography>
              </div>
            </div>

            <div>
              <Heading2 color="white" class="mb-6">
                Reach Customers with{" "}
                <span class="text-[#90CDF4]">Indoor Digital Signage</span>{" "}
                Across Denver
              </Heading2>
              <BodyText color="white" class="mb-8 text-white/90">
                Our Denver-based indoor advertising network puts your brand in
                front of real people, in real venues—restaurants, gyms, salons,
                retail spaces, and more. Whether you're promoting daily specials
                or building brand awareness, our digital signage network
                delivers impactful, high-frequency exposure where it matters
                most.
              </BodyText>
              <button class="rounded-lg bg-[#2C5282] px-6 py-3 text-base font-medium text-white shadow-lg transition-all duration-300 hover:bg-[#2A4365] hover:shadow-xl">
                Explore Our Digital Ad Services →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" class="bg-white py-16" aria-label="Our services">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="mb-12 text-center">
            <Heading2 class="mb-6">
              Our <span class="text-[#2C5282]">Services</span>
            </Heading2>
            <BodyText color="secondary" class="mx-auto max-w-3xl">
              Comprehensive digital marketing solutions designed to grow your
              business.
            </BodyText>
          </div>

          <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div class="rounded-xl border border-gray-100 bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl">
              <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#2C5282]/10">
                  <svg
                    class="h-6 w-6 text-[#2C5282]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <Typography variant="h3" class="mb-3">
                Indoor Digital Signage
              </Typography>
              <Typography variant="small" color="primary" class="mb-4">
                Strategic placement of your ads on digital screens in
                high-traffic venues across Denver.
              </Typography>
              <ul class="space-y-1">
                <li>
                  <Typography variant="small" color="primary">
                    • Targeted venue placement
                  </Typography>
                </li>
                <li>
                  <Typography variant="small" color="primary">
                    • Custom motion graphics
                  </Typography>
                </li>
                <li>
                  <Typography variant="small" color="primary">
                    • Real-time campaign reporting
                  </Typography>
                </li>
              </ul>
            </div>

            <div class="rounded-xl border border-gray-100 bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl">
              <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#2C5282]/10">
                  <svg
                    class="h-6 w-6 text-[#2C5282]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <Typography variant="h4" class="mb-3">
                Search Engine Optimization
              </Typography>
              <Typography variant="small" color="primary" class="mb-4">
                Improve your online visibility and rank higher in local search
                results.
              </Typography>
              <ul class="space-y-1">
                <li>
                  <Typography variant="small" color="primary">
                    • Local SEO optimization
                  </Typography>
                </li>
                <li>
                  <Typography variant="small" color="primary">
                    • Keyword research & strategy
                  </Typography>
                </li>
                <li>
                  <Typography variant="small" color="primary">
                    • Technical SEO audits
                  </Typography>
                </li>
              </ul>
            </div>

            <div class="rounded-xl border border-gray-100 bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl">
              <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#2C5282]/10">
                  <svg
                    class="h-6 w-6 text-[#2C5282]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 4v10a2 2 0 002 2h8a2 2 0 002-2V8M7 8h10"
                  />
                </svg>
              </div>
              <Typography variant="h4" class="mb-3">
                Social Media Marketing
              </Typography>
              <Typography variant="small" color="primary" class="mb-4">
                Build your brand presence and engage with customers across
                social platforms.
              </Typography>
              <ul class="space-y-1">
                <li>
                  <Typography variant="small" color="primary">
                    • Content creation & scheduling
                  </Typography>
                </li>
                <li>
                  <Typography variant="small" color="primary">
                    • Community management
                  </Typography>
                </li>
                <li>
                  <Typography variant="small" color="primary">
                    • Paid social advertising
                  </Typography>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Boost Visibility Section */}
      <section class="bg-white py-16">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="mb-12 text-center">
            <Heading2 class="mb-6">
              Boost Visibility with Our{" "}
              <span class="text-[#2C5282]">
                Full-Service Digital Marketing Solutions
              </span>
            </Heading2>
            <BodyText color="secondary" class="mx-auto max-w-3xl">
              Beyond in-venue ads, we provide full-scale digital marketing to
              help your business show up, stand out, and grow. Whether you're
              just getting started or need help scaling your outreach, we've got
              the tools and the team to support you.
            </BodyText>
          </div>

          <div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            {/* Image */}
            <div class="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Professional team collaborating on digital marketing strategies and business growth planning"
                class="h-auto w-full rounded-lg shadow-lg"
                loading="lazy"
                width="800"
                height="533"
                decoding="async"
              />
            </div>

            {/* Services Grid */}
            <div class="order-1 lg:order-2">
              <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {/* Google Business Profile Optimization */}
                <div class="rounded-xl border border-gray-100 bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl">
                  <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#2C5282]/10">
                    <svg
                      class="h-6 w-6 text-[#2C5282]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <Typography variant="h3" class="mb-3">
                    Google Business Profile Optimization
                  </Typography>
                  <Typography variant="small" color="primary">
                    Get found on Google Maps and local search.
                  </Typography>
                </div>

                {/* Website Design & SEO */}
                <div class="rounded-xl border border-gray-100 bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl">
                  <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#2C5282]/10">
                    <svg
                      class="h-6 w-6 text-[#2C5282]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <Typography variant="h4" class="mb-3">
                    Website Design & SEO
                  </Typography>
                  <Typography variant="small" color="primary">
                    Fast, mobile-ready websites built for performance.
                  </Typography>
                </div>

                {/* Social Media Content */}
                <div class="rounded-xl border border-gray-100 bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl">
                  <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#2C5282]/10">
                    <svg
                      class="h-6 w-6 text-[#2C5282]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 4V2a1 1 0 011-1h4a1 1 0 011 1v2m3 0V2a1 1 0 011-1h4a1 1 0 011 1v2m-3 4h.01M8 8h.01M12 8h.01M16 8h.01M7 12h.01M12 12h.01M16 12h.01M7 16h.01M12 16h.01M16 16h.01"
                      />
                    </svg>
                  </div>
                  <Typography variant="h4" class="mb-3">
                    Social Media Content
                  </Typography>
                  <Typography variant="small" color="primary">
                    Consistent posting and creative to grow your presence.
                  </Typography>
                </div>

                {/* Pay-Per-Click Advertising */}
                <div class="rounded-xl border border-gray-100 bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl">
                  <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#3182CE]/10">
                    <svg
                      class="h-6 w-6 text-[#2C5282]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                      />
                    </svg>
                  </div>
                  <Typography variant="h4" class="mb-3">
                    Pay-Per-Click Advertising
                  </Typography>
                  <Typography variant="small" color="primary">
                    Targeted ads that drive calls, clicks, and leads.
                  </Typography>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div class="mt-12 text-center">
            <div class="rounded-xl border border-gray-100 bg-gray-50 p-8">
              <Typography variant="h4" class="mb-4">
                Check out all our Solutions
              </Typography>
              <Typography variant="small" color="secondary" class="mb-6">
                Explore tailored services designed to boost visibility, drive
                leads, and grow your business. Each solution is crafted to
                deliver real, measurable results.
              </Typography>
              <button class="rounded-lg bg-[#2C5282] px-8 py-3 text-base font-medium text-white shadow-lg transition-all duration-300 hover:bg-[#2A4365] hover:shadow-xl">
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio/Case Studies Section */}
      <section id="portfolio" class="bg-gray-50 py-16" aria-label="Portfolio and case studies">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="mb-12 text-center">
            <Heading2 class="mb-6">
              Our <span class="text-[#2C5282]">Success Stories</span>
            </Heading2>
            <BodyText color="secondary" class="mx-auto max-w-3xl">
              See how we've helped businesses like yours achieve remarkable
              growth through strategic digital marketing.
            </BodyText>
          </div>

          <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div class="overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Successful restaurant marketing case study showing increased foot traffic and customer engagement"
                class="h-40 w-full object-cover"
                loading="lazy"
                width="800"
                height="160"
                decoding="async"
              />
              <div class="p-5">
                <Typography variant="h3" class="mb-2">
                  Local Restaurant Chain
                </Typography>
                <Typography variant="small" color="primary" class="mb-3">
                  Increased foot traffic by 150% through targeted local SEO and
                  social media campaigns.
                </Typography>
                <div class="flex items-center text-sm font-medium text-[#2C5282]">
                  <span>View Case Study</span>
                  <svg
                    class="ml-2 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div class="overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Retail store digital marketing success story with improved online sales and customer acquisition"
                class="h-40 w-full object-cover"
                loading="lazy"
                width="800"
                height="160"
                decoding="async"
              />
              <div class="p-5">
                <Typography variant="h4" class="mb-2">
                  Fashion Retailer
                </Typography>
                <Typography variant="small" color="primary" class="mb-3">
                  Boosted online sales by 200% with comprehensive e-commerce
                  marketing strategy.
                </Typography>
                <div class="flex items-center text-sm font-medium text-[#2C5282]">
                  <span>View Case Study</span>
                  <svg
                    class="ml-2 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div class="overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Healthcare practice digital marketing campaign generating new patient leads through targeted advertising"
                class="h-40 w-full object-cover"
                loading="lazy"
                width="800"
                height="160"
                decoding="async"
              />
              <div class="p-5">
                <Typography variant="h4" class="mb-2">
                  Healthcare Practice
                </Typography>
                <Typography variant="small" color="primary" class="mb-3">
                  Generated 300+ new patient leads through targeted PPC and
                  content marketing.
                </Typography>
                <div class="flex items-center text-sm font-medium text-[#2C5282]">
                  <span>View Case Study</span>
                  <svg
                    class="ml-2 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" class="bg-white py-16" aria-label="Client testimonials">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="mb-12 text-center">
            <h2 class="mb-6 text-2xl font-bold text-[#2D3748] lg:text-3xl">
              What Our <span class="text-[#2C5282]">Clients Say</span>
            </h2>
            <p class="mx-auto max-w-3xl text-base text-[#4A5568]">
              Don't just take our word for it. Here's what our satisfied clients
              have to say about our services.
            </p>
          </div>

          <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div class="rounded-xl bg-gray-50 p-6 transition-all duration-300 hover:shadow-lg">
              <div class="mb-4 flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
                  alt="Mike Johnson, satisfied restaurant owner client testimonial photo"
                  class="mr-3 h-10 w-10 rounded-full object-cover"
                  loading="lazy"
                  width="40"
                  height="40"
                  decoding="async"
                />
                <div>
                  <h3 class="text-sm font-semibold text-[#2D3748]">
                    Mike Johnson
                  </h3>
                  <p class="text-xs text-[#4A5568]">Restaurant Owner</p>
                </div>
              </div>
              <p class="mb-3 text-sm text-[#4A5568] italic">
                "Top Shelf transformed our online presence completely. Our
                reservations increased by 180% in just 3 months!"
              </p>
              <div class="flex text-yellow-400">
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>

            <div class="rounded-xl bg-gray-50 p-6 transition-all duration-300 hover:shadow-lg">
              <div class="mb-4 flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
                  alt="Sarah Chen, e-commerce director client testimonial photo"
                  class="mr-3 h-10 w-10 rounded-full object-cover"
                  loading="lazy"
                  width="40"
                  height="40"
                  decoding="async"
                />
                <div>
                  <h3 class="text-sm font-semibold text-[#2D3748]">
                    Sarah Chen
                  </h3>
                  <p class="text-xs text-[#4A5568]">E-commerce Director</p>
                </div>
              </div>
              <p class="mb-3 text-sm text-[#4A5568] italic">
                "The ROI we've seen from their campaigns is incredible. Our
                online sales doubled within 6 months!"
              </p>
              <div class="flex text-yellow-400">
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>

            <div class="rounded-xl bg-gray-50 p-6 transition-all duration-300 hover:shadow-lg">
              <div class="mb-4 flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
                  alt="Dr. Robert Martinez, medical practice owner client testimonial photo"
                  class="mr-3 h-10 w-10 rounded-full object-cover"
                  loading="lazy"
                  width="40"
                  height="40"
                  decoding="async"
                />
                <div>
                  <h3 class="text-sm font-semibold text-[#2D3748]">
                    Dr. Robert Martinez
                  </h3>
                  <p class="text-xs text-[#4A5568]">Medical Practice Owner</p>
                </div>
              </div>
              <p class="mb-3 font-['Figtree'] text-sm text-[#4A5568] italic">
                "Professional, results-driven, and always available. They've
                helped us reach more patients than ever before."
              </p>
              <div class="flex text-yellow-400">
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" class="bg-gray-50 py-16" aria-label="Frequently asked questions">
        <div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div class="mb-12 text-center">
            <h2 class="mb-6 text-2xl font-bold text-[#2D3748] lg:text-3xl">
              Frequently Asked <span class="text-[#2C5282]">Questions</span>
            </h2>
            <p class="text-base text-[#4A5568]">
              Get answers to the most common questions about our digital
              marketing services.
            </p>
          </div>

          <div class="space-y-3">
            {[
              {
                question:
                  "How long does it take to see results from digital marketing?",
                answer:
                  "Results vary depending on the strategy, but most clients see initial improvements within 30-60 days. SEO typically takes 3-6 months for significant results, while PPC campaigns can show immediate traffic increases.",
              },
              {
                question: "What makes your agency different from others?",
                answer:
                  "We focus exclusively on local Denver businesses and combine traditional advertising expertise with cutting-edge digital strategies. Our team provides personalized service and transparent reporting on all campaigns.",
              },
              {
                question: "Do you work with small businesses?",
                answer:
                  "Absolutely! We work with businesses of all sizes, from startups to established enterprises. We tailor our strategies and pricing to fit your budget and goals.",
              },
              {
                question: "What's included in your digital marketing packages?",
                answer:
                  "Our packages typically include strategy development, campaign setup and management, content creation, performance tracking, and monthly reporting. Specific services vary based on your chosen package.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                class="rounded-xl bg-white shadow-sm transition-all duration-300 hover:shadow-md"
              >
                <button
                  class="focus:ring-opacity-50 w-full rounded-xl p-5 text-left focus:ring-2 focus:ring-[#3182CE] focus:outline-none"
                  onClick$={() => {
                    openFaqIndex.value =
                      openFaqIndex.value === index ? null : index;
                  }}
                >
                  <div class="flex items-center justify-between">
                    <h3 class="pr-4 text-lg font-semibold text-[#2D3748]">
                      {faq.question}
                    </h3>
                    <svg
                      class={`h-5 w-5 flex-shrink-0 text-[#4A5568] transition-transform duration-200 ${
                        openFaqIndex.value === index
                          ? "rotate-180 transform"
                          : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>
                {openFaqIndex.value === index && (
                  <div class="px-5 pb-5">
                    <p class="text-sm leading-relaxed text-[#4A5568]">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="contact"
        class="bg-gradient-to-r from-[#3182CE] to-[#2B6CB0] py-16"
        aria-label="Contact us"
      >
        <div class="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 class="mb-6 text-2xl font-bold text-white lg:text-3xl">
            Ready to Elevate Your Brand?
          </h2>
          <p class="mb-8 text-base leading-relaxed text-gray-200">
            Let's discuss how our premium advertising solutions can help your
            business reach new heights in Denver.
          </p>
          <div class="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="mailto:hello@topshelfadvertising.com"
              class="btn-hover-effect inline-flex items-center justify-center rounded-lg bg-[#2C5282] px-6 py-3 text-base font-semibold text-white transition-all duration-300 hover:bg-[#2A4365]"
            >
              Get Started Today
              <svg
                class="ml-2 h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </a>
            <a
              href="tel:+13035550123"
              class="inline-flex items-center justify-center rounded-lg border-2 border-white px-6 py-3 text-base font-semibold text-white transition-all duration-300 hover:bg-white hover:text-[#3182CE]"
            >
              Call (303) 555-0123
              <svg
                class="ml-2 h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer class="bg-[#2D3748] py-10 text-white" role="contentinfo" aria-label="Site footer">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="grid gap-6 md:grid-cols-4">
            <div class="col-span-2">
              <div class="mb-5 flex flex-col">
                <span class="text-xl font-bold">TOP SHELF</span>
                <span class="-mt-1 text-xs font-medium tracking-[0.2em] text-[#A0AEC0]">
                  ADVERTISING
                </span>
              </div>
              <p class="mb-5 max-w-md text-sm text-[#A0AEC0]">
                Denver's premier digital marketing and indoor advertising
                network, helping businesses get noticed with premium solutions.
              </p>
              <div class="flex space-x-3">
                <a
                  href="https://twitter.com/topshelfads"
                  class="flex h-8 w-8 items-center justify-center rounded-lg bg-[#2C5282] transition-colors hover:bg-[#2B6CB0]"
                  aria-label="Follow us on Twitter"
                >
                  <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/topshelfadvertising"
                  class="flex h-8 w-8 items-center justify-center rounded-lg bg-[#2C5282] transition-colors hover:bg-[#2B6CB0]"
                  aria-label="Follow us on Facebook"
                >
                  <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/topshelfadvertising"
                  class="flex h-8 w-8 items-center justify-center rounded-lg bg-[#2C5282] transition-colors hover:bg-[#2B6CB0]"
                  aria-label="Connect with us on LinkedIn"
                >
                  <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 class="mb-3 text-base font-semibold">Services</h3>
              <ul class="space-y-2 text-sm text-[#A0AEC0]">
                <li>
                  <a href="#" class="transition-colors hover:text-white">
                    Digital Marketing
                  </a>
                </li>
                <li>
                  <a href="#" class="transition-colors hover:text-white">
                    Indoor Billboards
                  </a>
                </li>
                <li>
                  <a href="#" class="transition-colors hover:text-white">
                    SEO Services
                  </a>
                </li>
                <li>
                  <a href="#" class="transition-colors hover:text-white">
                    Social Media
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 class="mb-3 text-base font-semibold">Contact</h3>
              <ul class="space-y-2 text-sm text-[#A0AEC0]">
                <li>Denver, Colorado</li>
                <li>
                  <a
                    href="tel:+13035550123"
                    class="transition-colors hover:text-white"
                  >
                    (303) 555-0123
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:hello@topshelfadvertising.com"
                    class="transition-colors hover:text-white"
                  >
                    hello@topshelfadvertising.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="mt-10 border-t border-[#4A5568] pt-6 text-center text-[#A0AEC0]">
            <p class="text-sm">
              &copy; 2024 Top Shelf Advertising. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
});

export const head: DocumentHead = {
  title:
    "Top Shelf Advertising - Denver's Premier Digital Marketing & Indoor Billboard Network",
  meta: [
    {
      name: "description",
      content:
        "Local advertising and digital marketing pros in Denver. Helping businesses get noticed on screens and online with our premium indoor billboard network and full-service marketing solutions.",
    },
    {
      name: "keywords",
      content:
        "Denver digital marketing, indoor billboards, local advertising, digital signage, marketing agency Denver, advertising network, business marketing solutions, SEO services, PPC advertising, social media marketing, web design Denver, Google Business Profile optimization",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0",
    },
    {
      name: "robots",
      content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    },
    {
      name: "author",
      content: "Top Shelf Advertising",
    },
    {
      name: "theme-color",
      content: "#3182CE",
    },
    {
      name: "msapplication-TileColor",
      content: "#3182CE",
    },
    {
      name: "apple-mobile-web-app-capable",
      content: "yes",
    },
    {
      name: "apple-mobile-web-app-status-bar-style",
      content: "default",
    },
    {
      name: "format-detection",
      content: "telephone=no",
    },
    {
      property: "og:title",
      content:
        "Top Shelf Advertising - Denver's Premier Digital Marketing Agency",
    },
    {
      property: "og:description",
      content:
        "Helping Denver businesses get noticed with premium indoor advertising and comprehensive digital marketing solutions.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://dealers-site.vercel.app/",
    },
    {
      property: "og:site_name",
      content: "Top Shelf Advertising",
    },
    {
      property: "og:locale",
      content: "en_US",
    },
    {
      property: "og:image",
      content: "https://dealers-site.vercel.app/og-image.jpg",
    },
    {
      property: "og:image:width",
      content: "1200",
    },
    {
      property: "og:image:height",
      content: "630",
    },
    {
      property: "og:image:alt",
      content: "Top Shelf Advertising - Denver Digital Marketing Agency",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "Top Shelf Advertising - Denver Digital Marketing",
    },
    {
      name: "twitter:description",
      content:
        "Premium indoor billboard network and digital marketing solutions for Denver businesses.",
    },
    {
      name: "twitter:image",
      content: "https://dealers-site.vercel.app/og-image.jpg",
    },
    {
      name: "twitter:image:alt",
      content: "Top Shelf Advertising - Denver Digital Marketing Agency",
    },
  ],
  links: [
    {
      rel: "canonical",
      href: "https://dealers-site.vercel.app/",
    },
    {
      rel: "preload",
      href: "/fonts/Figtree-VariableFont_wght.ttf",
      as: "font",
      type: "font/ttf",
      crossorigin: "anonymous",
    },
    {
      rel: "dns-prefetch",
      href: "https://images.unsplash.com",
    },
  ],
  scripts: [
    {
      props: {
        type: "application/ld+json",
      },
      script: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "LocalBusiness",
            "@id": "https://dealers-site.vercel.app/#business",
            name: "Top Shelf Advertising",
            alternateName: "Top Shelf Advertising Denver",
            description:
              "Denver's premier digital marketing and indoor advertising network",
            url: "https://dealers-site.vercel.app",
            telephone: "(303) 555-0123",
            email: "hello@topshelfadvertising.com",
            foundingDate: "2020",
            address: {
              "@type": "PostalAddress",
              streetAddress: "123 Main Street",
              addressLocality: "Denver",
              addressRegion: "Colorado",
              postalCode: "80202",
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "39.7392",
              longitude: "-104.9903",
            },
            areaServed: [
              {
                "@type": "City",
                name: "Denver",
              },
              {
                "@type": "State",
                name: "Colorado",
              },
            ],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Digital Marketing Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Digital Marketing",
                    description: "Comprehensive digital marketing solutions",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Indoor Billboard Advertising",
                    description: "Premium indoor advertising network",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "SEO Services",
                    description: "Search engine optimization services",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Pay-Per-Click Advertising",
                    description: "PPC and Google Ads management",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Social Media Marketing",
                    description: "Social media content and management",
                  },
                },
              ],
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                ],
                opens: "09:00",
                closes: "17:00",
              },
            ],
            sameAs: [
              "https://www.facebook.com/topshelfadvertising",
              "https://www.linkedin.com/company/topshelfadvertising",
              "https://twitter.com/topshelfads",
            ],
          },
          {
            "@type": "WebSite",
            "@id": "https://dealers-site.vercel.app/#website",
            url: "https://dealers-site.vercel.app",
            name: "Top Shelf Advertising",
            description:
              "Denver's premier digital marketing and indoor advertising network",
            publisher: {
              "@id": "https://dealers-site.vercel.app/#business",
            },
            potentialAction: [
              {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "https://dealers-site.vercel.app/?s={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
            ],
          },
          {
            "@type": "WebPage",
            "@id": "https://dealers-site.vercel.app/#webpage",
            url: "https://dealers-site.vercel.app",
            name: "Top Shelf Advertising - Denver's Premier Digital Marketing & Indoor Billboard Network",
            isPartOf: {
              "@id": "https://dealers-site.vercel.app/#website",
            },
            about: {
              "@id": "https://dealers-site.vercel.app/#business",
            },
            description:
              "Local advertising and digital marketing pros in Denver. Helping businesses get noticed on screens and online with our premium indoor billboard network and full-service marketing solutions.",
            breadcrumb: {
              "@id": "https://dealers-site.vercel.app/#breadcrumb",
            },
            inLanguage: "en-US",
            potentialAction: [
              {
                "@type": "ReadAction",
                target: ["https://dealers-site.vercel.app"],
              },
            ],
          },
          {
            "@type": "BreadcrumbList",
            "@id": "https://dealers-site.vercel.app/#breadcrumb",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://dealers-site.vercel.app",
              },
            ],
          },
        ],
      }),
    },
  ],
};
