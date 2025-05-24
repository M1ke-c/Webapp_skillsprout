"use client";
import { useAccount } from "@starknet-react/core";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight, Award, Briefcase, Code, GraduationCap,
  Search, Shield, Star, Users, Wallet
} from "lucide-react";
import { usePrivy } from '@privy-io/react-auth';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

function MainContent() {
  console.log("MainContent rendering");
  const { address } = useAccount();
  const { login, ready, authenticated } = usePrivy();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (ready) {
      setIsLoading(false);
      if (authenticated) {
        router.push('/dashboard');
      }
    }
  }, [ready, authenticated, router]);

  if (!ready || isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0c0c15]">
        <div className="text-white text-xl font-bold">Loading...</div>
      </div>
    );
  }

  const handleLogin = () => {
    login();
  };

  const handleSignup = () => {
    login();
  };

  return (
    <div className="flex min-h-screen flex-col">
      {/* Background with animated gradient */}
      <div className="fixed inset-0 -z-10 bg-[#0c0c15]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0c0c15] via-[#0f172a] to-[#0c0c15]"></div>
        <div className="absolute inset-0 bg-[url('/grid.png')] bg-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[100px]"></div>
        <div className="absolute top-1/2 left-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-500/10 blur-[100px]"></div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/20 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative w-8 h-8">
              <Image
                src="/logo.png"
                alt="Skill Sprout Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-xl font-bold text-white">
              <span className="font-bold">Skill</span>{" "}
              <span className="font-light">Sprout</span>
            </span>
          </div>

          <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center gap-6">
              <Link href="#" className="text-sm font-medium text-white/70 hover:text-teal-400 transition-colors">
                Home
              </Link>
              <Link href="#" className="text-sm font-medium text-white/70 hover:text-teal-400 transition-colors">
                Certifications
              </Link>
              <Link href="#" className="text-sm font-medium text-white/70 hover:text-teal-400 transition-colors">
                Jobs
              </Link>
              <Link href="#" className="text-sm font-medium text-white/70 hover:text-teal-400 transition-colors">
                Talent
              </Link>
              <Link href="#" className="text-sm font-medium text-white/70 hover:text-teal-400 transition-colors">
                About
              </Link>
            </nav>
            {!authenticated && (
              <div className="flex items-center gap-2">
                <button
                  onClick={handleLogin}
                  className="px-4 py-2 border border-white/20 hover:bg-white/10 rounded-lg text-white text-sm transition-colors"
                >
                  Log In
                </button>
                <button
                  onClick={handleSignup}
                  className="px-4 py-2 bg-teal-600 hover:bg-teal-700 rounded-lg text-white text-sm transition-colors"
                >
                  Sign Up
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      <main className="flex-1 text-white">
        {/* Hero Section */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="flex flex-col items-center lg:items-start">
              <div className="flex flex-col justify-center space-y-4 text-center lg:text-left w-full">
                <div className="space-y-2 max-w-5xl mx-auto lg:mx-0">
                  <div className="flex items-center justify-center lg:justify-start mb-8">
                    <div className="relative w-32 h-32">
                      <Image
                        src="/logo.png"
                        alt="Skill Sprout Logo"
                        fill
                        className="object-contain"
                        priority
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl xl:text-7xl/none">
                      Looking for your certifications? Grow Your profile with{" "}
                      <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
                        Verified Skills
                      </span>
                    </h1>
                    <p className="text-white/70 md:text-xl max-w-3xl mx-auto lg:mx-0">
                    Build a decentralized credentialing and project-validation system powered by Starknet smart contracts. Earn micro-certifications, prove your technical achievements on-chain, and showcase your verified Web3 expertise to top companies. Each candidate’s interaction—whether completing a challenge, submitting code, or deploying an app—is immutably recorded via Starknet smart contracts, enabling transparent, trustless hiring pipelines across all your applications
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center lg:justify-start">
                    <button 
                      onClick={handleSignup}
                      className="px-6 py-3 bg-teal-600 hover:bg-teal-700 rounded-lg text-white flex items-center gap-2 transition-colors"
                    >
                      Get Started
                      <span>→</span>
                    </button>
                    <button className="px-6 py-3 border border-white/20 hover:bg-white/10 rounded-lg text-white transition-colors">
                      Explore Certifications
                    </button>
                  </div>
                  <div className="flex items-center gap-6 text-sm text-white/70 justify-center lg:justify-start">
                    <div className="flex items-center gap-2">
                      <span className="text-teal-400">🛡️</span>
                      <span>Blockchain Verified</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-teal-400">👥</span>
                      <span>10,000+ Professionals</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">How Skill Sprout Works</h2>
              <p className="text-white/70 text-lg max-w-3xl mx-auto">
                Our platform connects the best talent with opportunities through verified micro-certifications
                and a specialized blockchain talent marketplace which is powered by Starknet smart contacts.  
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-black/20 border border-white/10 backdrop-blur-sm rounded-xl p-8">
                <div className="w-14 h-14 rounded-full bg-teal-900/50 flex items-center justify-center mb-6">
                  <Award className="h-7 w-7 text-teal-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Earn Micro-Certifications</h3>
                <p className="text-white/70 text-lg">
                  Complete courses and assessments to earn blockchain-verified micro-certifications from leading Web3
                  companies.
                </p>
              </div>

              <div className="bg-black/20 border border-white/10 backdrop-blur-sm rounded-xl p-8">
                <div className="w-14 h-14 rounded-full bg-teal-900/50 flex items-center justify-center mb-6">
                  <Code className="h-7 w-7 text-teal-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Showcase Your Skills</h3>
                <p className="text-white/70 text-lg">
                  Build your Web3 profile with verified credentials and project experience.
                </p>
              </div>

              <div className="bg-black/20 border border-white/10 backdrop-blur-sm rounded-xl p-8">
                <div className="w-14 h-14 rounded-full bg-teal-900/50 flex items-center justify-center mb-6">
                  <Briefcase className="h-7 w-7 text-teal-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Connect with Opportunities</h3>
                <p className="text-white/70 text-lg">
                  Apply for specialized blockchain roles or get discovered by companies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-black/20 border-y border-white/10">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-teal-400 mb-2">10K+</div>
                <div className="text-white/70">Active Users</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-teal-400 mb-2">500+</div>
                <div className="text-white/70">Certifications</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-teal-400 mb-2">200+</div>
                <div className="text-white/70">Partner Companies</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-teal-400 mb-2">95%</div>
                <div className="text-white/70">Success Rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Certifications */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Featured Certifications</h2>
              <p className="text-white/70 text-lg max-w-3xl mx-auto">
                Explore our most popular certification paths and start your Web3 journey today
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-black/20 border border-white/10 rounded-xl p-8 hover:border-teal-400/50 transition-colors">
                <div className="w-14 h-14 rounded-full bg-teal-900/50 flex items-center justify-center mb-6">
                  <Shield className="h-7 w-7 text-teal-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Smart Contract Security</h3>
                <p className="text-white/70 mb-4">Master the fundamentals of smart contract security and auditing.</p>
                <div className="flex items-center gap-2 text-teal-400">
                  Learn More <ArrowRight className="h-4 w-4" />
                </div>
              </div>
              <div className="bg-black/20 border border-white/10 rounded-xl p-8 hover:border-teal-400/50 transition-colors">
                <div className="w-14 h-14 rounded-full bg-teal-900/50 flex items-center justify-center mb-6">
                  <Wallet className="h-7 w-7 text-teal-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">DeFi Development</h3>
                <p className="text-white/70 mb-4">Learn to build decentralized finance applications on Starknet.</p>
                <div className="flex items-center gap-2 text-teal-400">
                  Learn More <ArrowRight className="h-4 w-4" />
                </div>
              </div>
              <div className="bg-black/20 border border-white/10 rounded-xl p-8 hover:border-teal-400/50 transition-colors">
                <div className="w-14 h-14 rounded-full bg-teal-900/50 flex items-center justify-center mb-6">
                  <Star className="h-7 w-7 text-teal-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Zero Knowledge Proofs</h3>
                <p className="text-white/70 mb-4">Dive deep into ZK-proofs and their applications.</p>
                <div className="flex items-center gap-2 text-teal-400">
                  Learn More <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-black/20 border-y border-white/10">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">What Our Users Say</h2>
              <p className="text-white/70 text-lg max-w-3xl mx-auto">
                Hear from professionals who have advanced their careers through Skill Sprout
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8">
                <p className="text-white/70 mb-6">"The micro-certifications helped me land my dream job in Web3. The practical assignments and real-world projects made all the difference."</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-teal-900/50 flex items-center justify-center">
                    <Users className="h-6 w-6 text-teal-400" />
                  </div>
                  <div>
                    <div className="font-bold">Alex Thompson</div>
                    <div className="text-white/70 text-sm">Smart Contract Developer</div>
                  </div>
                </div>
              </div>
              <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8">
                <p className="text-white/70 mb-6">"The quality of content and the blockchain verification of skills make Skill Sprout stand out. It's the future of tech education."</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-teal-900/50 flex items-center justify-center">
                    <Users className="h-6 w-6 text-teal-400" />
                  </div>
                  <div>
                    <div className="font-bold">Sarah Chen</div>
                    <div className="text-white/70 text-sm">DeFi Protocol Engineer</div>
                  </div>
                </div>
              </div>
              <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8">
                <p className="text-white/70 mb-6">"As a hiring manager, I trust Skill Sprout certifications because they represent real, verified skills. It's our go-to platform for talent."</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-teal-900/50 flex items-center justify-center">
                    <Users className="h-6 w-6 text-teal-400" />
                  </div>
                  <div>
                    <div className="font-bold">Michael Rodriguez</div>
                    <div className="text-white/70 text-sm">Tech Lead at BlockChain Co</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="bg-gradient-to-r from-teal-900/50 to-blue-900/50 rounded-2xl p-8 md:p-12">
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
                <p className="text-white/70 mb-8">
                  Get the latest updates on new certifications, job opportunities, and Web3 insights.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-black/40 border border-white/10 rounded-lg focus:outline-none focus:border-teal-400"
                  />
                  <button className="px-6 py-3 bg-teal-600 hover:bg-teal-700 rounded-lg text-white transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/40 backdrop-blur-sm py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="relative w-6 h-6">
                <Image
                  src="/logo.png"
                  alt="Skill Sprout Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-white">
                <span className="font-bold">Skill</span>{" "}
                <span className="font-light">Sprout</span>
              </span>
            </div>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link
                href="#"
                className="text-white/70 hover:text-teal-400 transition-colors"
                target="_blank"
              >
                Twitter
              </Link>
              <Link
                href="#"
                className="text-white/70 hover:text-teal-400 transition-colors"
                target="_blank"
              >
                Telegram
              </Link>
              <Link
                href="#"
                className="text-white/70 hover:text-teal-400 transition-colors"
                target="_blank"
              >
                GitHub
              </Link>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-white/50">
            © {new Date().getFullYear()} Skill Sprout. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function Home() {
  console.log("Home component rendering");
  return <MainContent />;
}
