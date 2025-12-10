import React from "react";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-neutral-800 font-serif scroll-smooth">
      {/* Top logo */}
      <div className="flex flex-col items-center py-8">
        <img src="/lamp-icon.png" alt="Lamp icon" className="h-12 mb-2" />
        <h1 className="text-xl tracking-widest">MY WEBSITE</h1>
      </div>

      {/* Navigation */}
      <nav className="text-center border-t border-b py-2 text-sm text-neutral-500">
        <ul className="flex justify-center space-x-4">
          <li><a href="#info" className="hover:underline">Info</a></li>
          <li><a href="#news" className="hover:underline">News</a></li>
          <li><a href="#research" className="hover:underline">Research</a></li>
          <li><a href="#opensource" className="hover:underline">Opensource</a></li>
          <li><a href="#service" className="hover:underline">Service</a></li>
          <li><a href="#students" className="hover:underline">Students</a></li>
        </ul>
      </nav>

      <div className="flex max-w-5xl mx-auto mt-8 px-4">
        {/* Sidebar */}
        <aside className="w-1/4 pr-6 text-sm">
          <div className="mb-4">
            <img src="/profile.jpg" alt="Profile" className="w-24 h-24 rounded-full mb-2 border border-neutral-300" />
            <h2 className="font-semibold">Senuri De Silva</h2>
            <p className="text-neutral-600">Researcher · Writer · Quiet Thinker</p>
          </div>
          <div className="border-t pt-2">
            <h3 className="text-orange-500 mb-2">Category</h3>
            <ul className="space-y-1">
              <li><a href="#info" className="hover:underline">▪ Info</a></li>
              <li><a href="#news" className="hover:underline">▪ News</a></li>
              <li><a href="#research" className="hover:underline">▪ Research</a></li>
              <li><a href="#opensource" className="hover:underline">▪ Open Source</a></li>
              <li><a href="#service" className="hover:underline">▪ Service</a></li>
              <li><a href="#students" className="hover:underline">▪ Students Mentored</a></li>
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <section className="w-3/4 space-y-6 text-sm">
          <div id="info">
            <h2 className="font-semibold text-neutral-700 mb-1">Info</h2>
            <p>A quiet place to share thoughts, ideas, and updates about my academic and personal journey.</p>
          </div>
          <div id="news">
            <h2 className="font-semibold text-neutral-700 mb-1">News</h2>
            <ul className="list-disc ml-5">
              <li>June 2025 – Launched this minimal website</li>
            </ul>
          </div>
          <div id="research">
            <h2 className="font-semibold text-neutral-700 mb-1">Research</h2>
            <p>Research notes, quiet reflections, and selected links to publications or works in progress.</p>
          </div>
          <div id="opensource">
            <h2 className="font-semibold text-neutral-700 mb-1">Open Source</h2>
            <p>Sharing some small tools and libraries I've enjoyed contributing to. No fanfare, just links.</p>
          </div>
          <div id="service">
            <h2 className="font-semibold text-neutral-700 mb-1">Service</h2>
            <p>Grateful to serve as reviewer, committee member, or occasional contributor in scientific circles.</p>
          </div>
          <div id="students">
            <h2 className="font-semibold text-neutral-700 mb-1">Students Mentored</h2>
            <p>A quiet appreciation of those I've guided. Their growth and curiosity inspire me.</p>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="text-center text-neutral-400 text-xs py-8">
        © 2025 — Handcrafted with minimalism.
      </footer>
    </main>
  );
}
