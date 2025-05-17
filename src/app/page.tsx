import Image from "next/image";
import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaStackOverflow,
  FaReddit,
  FaDiscord,
} from "react-icons/fa";
import type { IconType } from "react-icons";
import Icon from "../components/Icon";

interface SocialLink {
  href: string;
  label: string;
  icon: IconType;
}

const socialLinks: SocialLink[] = [
  { icon: FaGithub, href: "https://github.com/o-gkmn", label: "GitHub" },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com/in/ozgurgokmen",
    label: "LinkedIn",
  },
  { icon: FaTwitter, href: "https://twitter.com/o_gkmn", label: "Twitter" },
  {
    icon: FaInstagram,
    href: "https://instagram.com/o_gkmn",
    label: "Instagram",
  },
  { icon: FaYoutube, href: "https://youtube.com/@o_gkmn", label: "YouTube" },
  {
    icon: FaStackOverflow,
    href: "https://stackoverflow.com/users/13489994/Özgür",
    label: "Stack Overflow",
  },
  { icon: FaReddit, href: "https://reddit.com/u/o_gkmn", label: "Reddit" },
  {
    icon: FaDiscord,
    href: "https://discord.com/users/o_gkmn",
    label: "Discord",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 w-full max-w-xl">
        {/* Profile Card */}
        <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl overflow-hidden h-[800px]">
          {/* Profile Image Background */}
          <div className="absolute inset-0">
            <Image
              src="/profile.jpg"
              alt="Özgür Gökmen"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center"
              priority
              quality={100}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>
          </div>

          {/* Content Overlay */}
          <div className="absolute inset-0 p-8 flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <h1 className="text-5xl font-bold mb-4">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
                    Özgür Gökmen
                  </span>
                </h1>
                <p className="text-xl text-white/80">Yazılım Geliştirici</p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="grid grid-cols-4 gap-6 max-w-md mx-auto">
              {socialLinks.map((social) => (
                <Icon
                  key={social.label}
                  icon={social.icon}
                  label={social.label}
                  href={social.href}
                />
              ))}
            </div>

            <div className="text-center text-white/60 text-sm mt-8">
              <p>© {new Date().getFullYear()} Özgür Gökmen</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
