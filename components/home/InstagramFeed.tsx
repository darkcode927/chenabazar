"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import {
  FaInstagram,
  FaHeart,
  FaCommentDots,
  FaArrowRight,
} from "react-icons/fa";

const posts = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1200&auto=format&fit=crop",
    likes: "12.4k",
    comments: "320",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",
    likes: "8.1k",
    comments: "190",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop",
    likes: "15.8k",
    comments: "510",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1200&auto=format&fit=crop",
    likes: "9.7k",
    comments: "205",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1200&auto=format&fit=crop",
    likes: "18.2k",
    comments: "650",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop",
    likes: "11.3k",
    comments: "287",
  },
];

export default function InstagramFeed() {
  return (
    <section className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-pink-50 via-white to-orange-50 border border-pink-100 shadow-[0_20px_80px_rgba(236,72,153,0.12)] px-5 md:px-10 py-16">

      {/* 🔥 Background Glow */}
      <div className="absolute top-0 left-0 h-72 w-72 bg-pink-200/40 rounded-full blur-3xl" />

      <div className="absolute bottom-0 right-0 h-72 w-72 bg-orange-200/40 rounded-full blur-3xl" />

      <div className="relative z-10">

        {/* 🔥 Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">

          <div>

            {/* Badge */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.4,
              }}
              className="inline-flex items-center gap-2 bg-pink-100 text-pink-600 px-5 py-2 rounded-full text-sm font-bold shadow-sm"
            >
              <FaInstagram />
              Social Showcase
            </motion.div>

            {/* Title */}
            <motion.h2
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
              }}
              className="mt-6 text-4xl md:text-5xl font-black text-gray-900 leading-tight"
            >
              Shop The Look
              <span className="block bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 bg-clip-text text-transparent">
                From Instagram ✨
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
              }}
              className="mt-5 text-lg text-gray-500 max-w-2xl leading-relaxed"
            >
              Discover trending styles, customer looks,
              and fashion inspiration shared by our
              community on Instagram.
            </motion.p>
          </div>

          {/* 🔥 Follow Button */}
          <motion.a
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            whileHover={{
              scale: 1.05,
            }}
            transition={{
              duration: 0.5,
            }}
            href="#"
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 hover:shadow-[0_20px_60px_rgba(236,72,153,0.35)] transition-all duration-300 text-white px-8 py-4 rounded-2xl font-black shadow-xl w-fit"
          >
            <FaInstagram className="text-xl" />

            Follow Us

            <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
          </motion.a>
        </div>

        {/* 🔥 Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">

          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
              }}
              whileHover={{
                y: -8,
              }}
              className="group relative overflow-hidden rounded-[2rem] shadow-xl border border-white/30 bg-white"
            >

              {/* 🔥 Image */}
              <div className="relative aspect-square overflow-hidden">

                <Image
                  src={post.image}
                  alt="instagram"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* 🔥 Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-5">

                  <div className="flex items-center justify-between text-white">

                    <div className="flex items-center gap-2 text-sm font-semibold">
                      <FaHeart className="text-pink-400" />
                      {post.likes}
                    </div>

                    <div className="flex items-center gap-2 text-sm font-semibold">
                      <FaCommentDots className="text-sky-400" />
                      {post.comments}
                    </div>
                  </div>

                  <button className="mt-4 bg-white text-black hover:bg-pink-500 hover:text-white transition-all duration-300 rounded-xl py-3 font-bold text-sm">
                    View Post
                  </button>
                </div>

                {/* 🔥 Instagram Icon */}
                <div className="absolute top-4 right-4 h-11 w-11 rounded-2xl bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white text-lg shadow-lg">
                  <FaInstagram />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 🔥 Bottom CTA */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mt-14 text-center"
        >

          <h3 className="text-2xl md:text-3xl font-black text-gray-900">
            Join Our Fashion Community
          </h3>

          <p className="mt-4 text-gray-500 text-lg max-w-2xl mx-auto">
            Tag your photos with
            <span className="font-bold text-pink-600">
              {" "}
              #ChenaBazar
            </span>{" "}
            to get featured on our homepage.
          </p>

          <button className="mt-8 bg-black hover:bg-gradient-to-r hover:from-pink-500 hover:to-red-500 transition-all duration-300 text-white px-8 py-4 rounded-2xl font-black shadow-xl">
            Explore More Looks
          </button>
        </motion.div>
      </div>
    </section>
  );
}