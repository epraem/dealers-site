import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      {/* Header */}
      <header class="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div class="container">
          <nav class="flex items-center justify-between py-4">
            <a href="/" class="logo">
              TOP SHELF
              <div style="font-size: 0.75rem; font-weight: 500; letter-spacing: 2px; margin-top: -4px;">
                ADVERTISING
              </div>
            </a>
            
            <div class="hidden md:flex items-center gap-8">
              <a href="#home" class="nav-link">Home</a>
              <div class="relative group">
                <a href="#services" class="nav-link flex items-center gap-1">
                  Indoor Billboards
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                    <path d="M6 8.5L2.5 5h7L6 8.5z"/>
                  </svg>
                </a>
              </div>
              <div class="relative group">
                <a href="#solutions" class="nav-link flex items-center gap-1">
                  Solutions
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                    <path d="M6 8.5L2.5 5h7L6 8.5z"/>
                  </svg>
                </a>
              </div>
              <a href="#about" class="nav-link">About Us</a>
              <a href="#contact" class="btn btn-primary">Contact Us</a>
            </div>

            {/* Mobile menu button */}
            <button class="md:hidden flex flex-col gap-1 p-2" aria-label="Menu">
              <span class="w-6 h-0.5 bg-gray-800"></span>
              <span class="w-6 h-0.5 bg-gray-800"></span>
              <span class="w-6 h-0.5 bg-gray-800"></span>
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" class="section" style="padding-top: 2rem;">
        <div class="container">
          <div class="grid-2" style="gap: 4rem;">
            <div class="animate-fade-in">
              <div class="badge">
                🏆 Premium Marketing Solutions
              </div>
              <h1>
                Local Advertising and Digital Marketing Pros in <span class="text-highlight">Denver</span>
              </h1>
              <p style="font-size: 1.125rem; color: var(--text-light); margin-bottom: 2rem;">
                Helping Businesses Get Noticed —On Screens and Online
              </p>
              <a href="#contact" class="btn btn-primary">
                Contact Our Advertising Experts
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8.5 3.5L13 8l-4.5 4.5M13 8H3"/>
                </svg>
              </a>
            </div>
            
            <div class="hero-image">
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; width: 100%; height: 100%; padding: 1rem;">
                <div style="background: linear-gradient(135deg, #1e40af, #3b82f6); border-radius: 12px; position: relative; overflow: hidden;">
                  <div style="position: absolute; top: 20%; left: 20%; width: 60%; height: 60%; background: rgba(255,255,255,0.2); border-radius: 4px;"></div>
                  <div style="position: absolute; bottom: 20%; right: 20%; width: 40%; height: 20%; background: rgba(255,255,255,0.3); border-radius: 2px;"></div>
                </div>
                <div style="background: linear-gradient(135deg, #1e293b, #475569); border-radius: 12px; position: relative; overflow: hidden;">
                  <div style="position: absolute; top: 10%; left: 10%; width: 30%; height: 80%; background: rgba(255,255,255,0.1); border-radius: 2px;"></div>
                  <div style="position: absolute; top: 15%; right: 15%; width: 25%; height: 70%; background: rgba(255,255,255,0.15); border-radius: 2px;"></div>
                  <div style="position: absolute; bottom: 20%; left: 50%; width: 35%; height: 60%; background: rgba(255,255,255,0.2); border-radius: 2px;"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" class="section section-blue">
        <div class="container">
          <div class="section-title">
            <h2>Reach Customers with Indoor Digital Signage Across Denver</h2>
            <p>Our DTN's targeted indoor advertising network puts your brand in front of your target audience with high-impact visuals. Captivate customers and drive results with advertising solutions that can't be turned off, tuned out, skipped, or ignored. High-frequency exposure means a million touchpoints.</p>
          </div>
          
          <div class="grid-4">
            <div class="card">
              <div class="card-icon">
                <div style="width: 20px; height: 20px; background: currentColor; border-radius: 2px; position: relative;">
                  <div style="position: absolute; bottom: 0; left: 2px; width: 3px; height: 12px; background: var(--white); border-radius: 1px;"></div>
                  <div style="position: absolute; bottom: 0; left: 7px; width: 3px; height: 8px; background: var(--white); border-radius: 1px;"></div>
                  <div style="position: absolute; bottom: 0; left: 12px; width: 3px; height: 15px; background: var(--white); border-radius: 1px;"></div>
                </div>
              </div>
              <h3>Targeted Marketing Analytics</h3>
              <p>Real-time data and insights to optimize your campaigns and maximize ROI.</p>
            </div>
            
            <div class="card">
              <div class="card-icon">
                <div style="width: 20px; height: 16px; background: currentColor; border-radius: 2px; position: relative;">
                  <div style="position: absolute; top: 2px; left: 2px; right: 2px; height: 2px; background: var(--white); border-radius: 1px;"></div>
                  <div style="position: absolute; bottom: 2px; left: 2px; right: 2px; height: 8px; background: var(--white); border-radius: 1px;"></div>
                </div>
              </div>
              <h3>Indoor Billboard Network</h3>
              <p>Premium locations across Denver with high foot traffic and engaged audiences.</p>
            </div>

            <div class="card">
              <div class="card-icon">
                <div style="width: 18px; height: 20px; background: currentColor; border-radius: 2px; position: relative;">
                  <div style="position: absolute; top: 3px; left: 3px; right: 3px; height: 1px; background: var(--white);"></div>
                  <div style="position: absolute; top: 6px; left: 3px; right: 3px; height: 1px; background: var(--white);"></div>
                  <div style="position: absolute; top: 9px; left: 3px; right: 3px; height: 1px; background: var(--white);"></div>
                  <div style="position: absolute; top: 12px; left: 3px; right: 3px; height: 1px; background: var(--white);"></div>
                </div>
              </div>
              <h3>Campaign Scheduling</h3>
              <p>Flexible scheduling options to reach your audience at the perfect time.</p>
            </div>

            <div class="card">
              <div class="card-icon">
                <div style="width: 20px; height: 20px; border-radius: 50%; background: currentColor; position: relative;">
                  <div style="position: absolute; top: 50%; left: 50%; width: 6px; height: 6px; background: var(--white); border-radius: 50%; transform: translate(-50%, -50%);"></div>
                  <div style="position: absolute; top: 30%; left: 70%; width: 4px; height: 4px; background: var(--white); border-radius: 50%;"></div>
                </div>
              </div>
              <h3>Creative Design Support</h3>
              <p>Professional design services to create compelling ads that convert.</p>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 3rem;">
            <a href="#contact" class="btn btn-secondary">
              Learn More About Our Network
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8.5 3.5L13 8l-4.5 4.5M13 8H3"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Partner Network Section */}
      <section class="section section-alt">
        <div class="container">
          <div class="grid-2" style="gap: 4rem;">
            <div class="hero-image" style="aspect-ratio: 16/10;">
              <div style="display: flex; align-items: center; justify-content: center; color: white; font-size: 4rem;">
                🤝
              </div>
            </div>
            
            <div>
              <h2>Venue Partner Network</h2>
              <p>Our network is how local businesses like yours work their audience. Every month millions of people engage with our content, making our digital advertising network one of the most powerful in the region.</p>
              <p>Join the network of businesses that trust our advertising solutions for maximum impact and reach.</p>
              <a href="#contact" class="btn btn-primary">
                Become a Venue Partner
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8.5 3.5L13 8l-4.5 4.5M13 8H3"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Solutions Section */}
      <section class="section">
        <div class="container">
          <div class="section-title">
            <h2>Boost Visibility with Our Full-Service Digital Marketing Solutions</h2>
            <p>From strategy to execution, we deliver comprehensive marketing solutions that drive results. Whether you're just getting started or ready to level up your success, we've got the tools and tips and teams to support you.</p>
          </div>
          
          <div class="grid-3">
            <div class="card">
              <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem;">
                <div style="width: 60px; height: 60px; background: #fee2e2; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 24px; color: #dc2626;">
                  👥
                </div>
                <div>
                  <h3 style="margin-bottom: 0;">Team Collaboration</h3>
                  <p style="margin-bottom: 0; font-size: 0.875rem;">Expert teams working together</p>
                </div>
              </div>
            </div>
            
            <div class="card">
              <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem;">
                <div style="width: 60px; height: 60px; background: #dbeafe; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 24px; color: #2563eb;">
                  📈
                </div>
                <div>
                  <h3 style="margin-bottom: 0;">Google Business Profile Optimization</h3>
                  <p style="margin-bottom: 0; font-size: 0.875rem;">Maximize your local presence</p>
                </div>
              </div>
            </div>
            
            <div class="card">
              <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem;">
                <div style="width: 60px; height: 60px; background: #f3e8ff; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 24px; color: #7c3aed;">
                  🎨
                </div>
                <div>
                  <h3 style="margin-bottom: 0;">Website Design & SEO</h3>
                  <p style="margin-bottom: 0; font-size: 0.875rem;">Beautiful, optimized websites</p>
                </div>
              </div>
            </div>
            
            <div class="card">
              <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem;">
                <div style="width: 60px; height: 60px; background: #ecfdf5; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 24px; color: #059669;">
                  #
                </div>
                <div>
                  <h3 style="margin-bottom: 0;">Social Media Content</h3>
                  <p style="margin-bottom: 0; font-size: 0.875rem;">Engaging social media presence</p>
                </div>
              </div>
            </div>
            
            <div class="card">
              <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem;">
                <div style="width: 60px; height: 60px; background: #fef3c7; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 24px; color: #d97706;">
                  💰
                </div>
                <div>
                  <h3 style="margin-bottom: 0;">Pay-Per-Click Advertising</h3>
                  <p style="margin-bottom: 0; font-size: 0.875rem;">Targeted online advertising</p>
                </div>
              </div>
            </div>
            
            <div class="card">
              <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem;">
                <div style="width: 60px; height: 60px; background: #fee2e2; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 24px; color: #dc2626;">
                  ✅
                </div>
                <div>
                  <h3 style="margin-bottom: 0;">Check out all our Solutions</h3>
                  <p style="margin-bottom: 0; font-size: 0.875rem;">Discover our full range of services</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section class="section section-alt">
        <div class="container">
          <div class="grid-2" style="gap: 4rem;">
            <div>
              <h2>Why Denver Businesses Choose Us</h2>
              <p>We're not just another agency. We're your local advertising experts with years of expertise, helping businesses just like yours grow and connect to diverse communities across the city.</p>
              <p>From high-traffic commercial areas to residential neighborhoods, we help you capitalize on the visibility and engagement that makes advertising work.</p>
              <a href="#contact" class="btn btn-primary">
                Get Started Today
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8.5 3.5L13 8l-4.5 4.5M13 8H3"/>
                </svg>
              </a>
            </div>
            
            <div class="hero-image">
              <div style="display: flex; align-items: center; justify-content: center; color: white; font-size: 4rem;">
                🏆
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="section section-blue">
        <div class="container" style="text-align: center;">
          <h2>Let's Put Your Brand Where People Can't Miss It</h2>
          <p style="font-size: 1.125rem; margin-bottom: 2rem; max-width: 600px; margin-left: auto; margin-right: auto;">
            Ready to elevate your business with effective advertising solutions? Let's work together to help you increase brand awareness and drive sales.
          </p>
          <a href="#contact" class="btn btn-secondary">
            Contact Our Marketing Experts
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8.5 3.5L13 8l-4.5 4.5M13 8H3"/>
            </svg>
          </a>
        </div>
      </section>

      {/* FAQ Section */}
      <section class="section">
        <div class="container">
          <div class="section-title">
            <h2>FAQS</h2>
          </div>
          
          <div style="max-width: 800px; margin: 0 auto;">
            <div class="faq-item">
              <button class="faq-question">
                Is this placement of our ads in The indoor billboard business main page offerings bringing unmatched visibility across outdoor markets with your marketing?
              </button>
              <div class="faq-answer">
                Our indoor billboard network provides premium placement in high-traffic locations across Denver, ensuring maximum visibility for your brand with targeted audience engagement.
              </div>
            </div>
            
            <div class="faq-item">
              <button class="faq-question">
                Can you help our business using our campaign?
              </button>
              <div class="faq-answer">
                Absolutely! We provide full-service campaign management, from strategy development to creative design and performance optimization, ensuring your marketing goals are achieved.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section class="map-section">
        <div class="container-lg">
          <div class="grid-2" style="gap: 4rem; align-items: center; min-height: 400px;">
            <div style="background: rgba(255,255,255,0.1); border-radius: 12px; padding: 2rem; backdrop-blur-sm;">
              <h2 style="color: white; margin-bottom: 2rem;">We Put Local Brands on the Map</h2>
              <p style="color: rgba(255,255,255,0.9); margin-bottom: 2rem;">
                Targeted advertising for Denver-area businesses helps to attract and guide consumers. Navigate to success.
              </p>
              
              <div style="display: flex; flex-direction: column; gap: 1rem; margin-bottom: 2rem;">
                <div style="display: flex; align-items: center; gap: 0.5rem; color: white;">
                  <span style="color: #22c55e;">✓</span> Downtown
                </div>
                <div style="display: flex; align-items: center; gap: 0.5rem; color: white;">
                  <span style="color: #22c55e;">✓</span> Lakewood
                </div>
                <div style="display: flex; align-items: center; gap: 0.5rem; color: white;">
                  <span style="color: #22c55e;">✓</span> Arvada
                </div>
                <div style="display: flex; align-items: center; gap: 0.5rem; color: white;">
                  <span style="color: #22c55e;">✓</span> Centennial
                </div>
              </div>
            </div>
            
            <div style="background: rgba(255,255,255,0.2); border-radius: 12px; height: 300px; display: flex; align-items: center; justify-content: center; backdrop-blur-sm;">
              <div style="color: white; font-size: 3rem;">🗺️</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section class="section">
        <div class="container" style="text-align: center;">
          <h2>Ready to Elevate Your Brand?</h2>
          <p style="font-size: 1.125rem; margin-bottom: 2rem; max-width: 600px; margin-left: auto; margin-right: auto;">
            Join hundreds of successful businesses that have transformed their marketing with Top Shelf Advertising.
          </p>
          
          <div style="display: flex; gap: 1rem; justify-content: center; align-items: center; flex-wrap: wrap; margin-bottom: 2rem;">
            <input 
              type="email" 
              placeholder="Enter your email" 
              style="padding: 12px 16px; border: 2px solid var(--border-color); border-radius: 8px; font-size: 16px; min-width: 280px;"
            />
            <button class="btn btn-primary">
              Request Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer class="section section-blue" style="padding-top: 3rem; padding-bottom: 2rem;">
        <div class="container">
          <div class="grid-4" style="margin-bottom: 3rem;">
            <div>
              <div class="logo" style="color: white; margin-bottom: 1rem;">
                TOP SHELF
                <div style="font-size: 0.75rem; font-weight: 500; letter-spacing: 2px; margin-top: -4px;">
                  ADVERTISING
                </div>
              </div>
              <p style="color: rgba(255,255,255,0.8); font-size: 0.95rem;">
                Denver's premier digital marketing and indoor advertising network, helping businesses grow through strategic marketing solutions.
              </p>
            </div>
            
            <div>
              <h4 style="color: white; margin-bottom: 1rem;">Contact</h4>
              <div style="color: rgba(255,255,255,0.8); font-size: 0.95rem;">
                <p>📧 hello@topshelfadvertising.com</p>
                <p>📞 (303) 555-0123</p>
                <p>📍 Denver, Colorado</p>
              </div>
            </div>
            
            <div>
              <h4 style="color: white; margin-bottom: 1rem;">Navigation Menu</h4>
              <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                <a href="#home" style="color: rgba(255,255,255,0.8); text-decoration: none; font-size: 0.95rem;">Home</a>
                <a href="#services" style="color: rgba(255,255,255,0.8); text-decoration: none; font-size: 0.95rem;">Indoor Billboards</a>
                <a href="#solutions" style="color: rgba(255,255,255,0.8); text-decoration: none; font-size: 0.95rem;">Solutions</a>
                <a href="#about" style="color: rgba(255,255,255,0.8); text-decoration: none; font-size: 0.95rem;">About</a>
                <a href="#contact" style="color: rgba(255,255,255,0.8); text-decoration: none; font-size: 0.95rem;">Contact</a>
              </div>
            </div>
            
            <div>
              <h4 style="color: white; margin-bottom: 1rem;">Connect With Us</h4>
              <p style="color: rgba(255,255,255,0.8); font-size: 0.95rem; margin-bottom: 1rem;">
                Over 75% of small- to medium-sized businesses advertise using programmatic advertising. We can help you find your audience and grow your business.
              </p>
              <div style="display: flex; gap: 1rem;">
                <a href="#" style="color: rgba(255,255,255,0.8); font-size: 1.5rem;">📘</a>
                <a href="#" style="color: rgba(255,255,255,0.8); font-size: 1.5rem;">📸</a>
                <a href="#" style="color: rgba(255,255,255,0.8); font-size: 1.5rem;">🐦</a>
              </div>
            </div>
          </div>
          
          <div style="border-top: 1px solid rgba(255,255,255,0.2); padding-top: 2rem; text-align: center;">
            <p style="color: rgba(255,255,255,0.8); font-size: 0.875rem;">
              © 2024 Top Shelf Advertising. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
});

export const head: DocumentHead = {
  title: "Top Shelf Advertising - Denver's Premier Digital Marketing & Indoor Billboard Network",
  meta: [
    {
      name: "description",
      content: "Local advertising and digital marketing pros in Denver. Helping businesses get noticed on screens and online with our premium indoor billboard network and full-service marketing solutions.",
    },
    {
      name: "keywords",
      content: "Denver digital marketing, indoor billboards, local advertising, digital signage, marketing agency Denver, advertising network, business marketing solutions",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0",
    },
    {
      property: "og:title",
      content: "Top Shelf Advertising - Denver's Premier Digital Marketing Agency",
    },
    {
      property: "og:description",
      content: "Helping Denver businesses get noticed with premium indoor advertising and comprehensive digital marketing solutions.",
    },
    {
      property: "og:type",
      content: "website",
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
      content: "Premium indoor billboard network and digital marketing solutions for Denver businesses.",
    },
  ],
  links: [
    {
      rel: "canonical",
      href: "https://your-domain.com/",
    },
  ],
  scripts: [
    {
      props: {
        type: "application/ld+json",
      },
      script: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Top Shelf Advertising",
        "description": "Denver's premier digital marketing and indoor advertising network",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Denver",
          "addressRegion": "Colorado",
          "addressCountry": "US"
        },
        "telephone": "(303) 555-0123",
        "email": "hello@topshelfadvertising.com",
        "url": "https://your-domain.com",
        "serviceArea": {
          "@type": "City",
          "name": "Denver"
        },
        "services": [
          "Digital Marketing",
          "Indoor Billboard Advertising",
          "Social Media Marketing",
          "SEO Services",
          "Pay-Per-Click Advertising"
        ]
      })
    }
  ]
};
