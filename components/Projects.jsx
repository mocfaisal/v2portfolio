import Image from "next/image";
import {
  nextjs,
  reactjs,
  laravel,
  codeigniter,
  vuejs,
  nuxtjs,
} from "@/public/assets/";
import { FiArrowUpRight } from "react-icons/fi";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const [viewMore, setViewMore] = useState(false);
  return (
    <div className="max-w-containerSmall mx-auto py-6">
      <h3 className="text-sm md:text-base py-5 md:py-10 font-semibold uppercase text-primary tracking-wider">
        Completed Projects
      </h3>
      {/* Projects content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:px-10">
        {/* Next.js */}
        <div className="flex flex-col items-center rounded-lg shadow md:flex-row">
          <div className="flex flex-col justify-between md:p-4 leading-normal md:border md:border-slate-800 md:rounded-lg">
            <div className="md:flex md:items-center">
              <Image
                src={nextjs}
                alt="Next.js"
                className="w-full rounded-md h-auto mb-4 lg:h-20 md:w-44 lg:w-32 border-solid border-2 border-slate-600 lg:hover:border-solid lg:hover:border-2 lg:hover:border-semidark"
              />
              <a
                href="#"
                className="group md:ml-4 mb-2 text-base lg:text-lg font-medium font-title text-primary hover:text-sky"
              >
                My Project Next.js{" "}
                <FiArrowUpRight className="inline-flex group-hover:-translate-y-1 " />
              </a>
            </div>
            <p className="mb-4 mt-2 md:mt-0 text-sm md:text-md text-semidark">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
              officia, animi perspiciatis quidem earum fugiat dolor dignissimos
              quo vero assumenda!
            </p>
            <ul className="text-xs md:text-sm text-dark flex items-center gap-2 flex-wrap">
              <span className="text-xs text-sky font-medium inline-block py-1 px-3 rounded-full bg-slate-800 last:mr-0 mr-0">
                Next.js
              </span>
              <span className="text-xs text-sky font-medium inline-block py-1 px-3 rounded-full bg-slate-800 last:mr-0 mr-0">
                Framer
              </span>
              <span className="text-xs text-sky font-medium inline-block py-1 px-3 rounded-full bg-slate-800 last:mr-0 mr-0">
                Vercel
              </span>
            </ul>
          </div>
        </div>
        {/* React.js */}
        <div className="flex flex-col items-center rounded-lg shadow md:flex-row">
          <div className="flex flex-col justify-between md:p-4 leading-normal md:border md:border-slate-800 md:rounded-lg">
            <div className="md:flex md:items-center">
              <Image
                src={reactjs}
                alt="React.js"
                className="w-full rounded-md h-auto lg:h-20 md:w-44 lg:w-32 mb-4 border-solid border-2 border-slate-600 lg:hover:border-solid lg:hover:border-2 lg:hover:border-semidark"
              />
              <a
                href="#"
                className="group md:ml-4 mb-2 text-base lg:text-lg font-medium font-title text-primary hover:text-sky"
              >
                My Project React.js{" "}
                <FiArrowUpRight className="inline-flex transition group-hover:-translate-y-1" />
              </a>
            </div>
            <p className="mb-4 mt-2 md:mt-0 text-sm md:text-md text-semidark">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum,
              placeat delectus sint ab ipsum corporis asperiores reprehenderit
              molestias nisi dolorem.
            </p>
            <ul className="text-xs md:text-sm text-dark flex items-center gap-2 flex-wrap">
              <span className="text-xs text-sky font-medium inline-block py-1 px-3 rounded-full bg-slate-800 last:mr-0 mr-0">
                React.js
              </span>
              <span className="text-xs text-sky font-medium inline-block py-1 px-3 rounded-full bg-slate-800 last:mr-0 mr-0">
                Framer
              </span>
              <span className="text-xs text-sky font-medium inline-block py-1 px-3 rounded-full bg-slate-800 last:mr-0 mr-0">
                Vercel
              </span>
            </ul>
          </div>
        </div>
        {/* Laravel */}
        <div className="flex flex-col items-center rounded-lg shadow md:flex-row">
          <div className="flex flex-col justify-between md:p-4 leading-normal md:border md:border-slate-800 md:rounded-lg">
            <div className="md:flex md:items-center">
              <Image
                src={laravel}
                alt="Laravel"
                className="w-full rounded-md h-auto lg:h-20 md:w-44 lg:w-32 mb-4 border-solid border-2 border-slate-600 lg:hover:border-solid lg:hover:border-2 lg:hover:border-semidark"
              />
              <a
                href="#"
                className="group md:ml-4 mb-2 text-base lg:text-lg font-medium font-title text-primary hover:text-sky"
              >
                My Project Laravel{" "}
                <FiArrowUpRight className="inline-flex transition group-hover:-translate-y-1" />
              </a>
            </div>
            <p className="mb-4 mt-2 md:mt-0 text-sm md:text-md text-semidark">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum,
              placeat delectus sint ab ipsum corporis asperiores reprehenderit
              molestias nisi dolorem.
            </p>
            <ul className="text-xs md:text-sm text-dark flex items-center gap-2 flex-wrap">
              <span className="text-xs text-sky font-medium inline-block py-1 px-3 rounded-full bg-slate-800 last:mr-0 mr-0">
                Laravel
              </span>
              <span className="text-xs text-sky font-medium inline-block py-1 px-3 rounded-full bg-slate-800 last:mr-0 mr-0">
                Framer
              </span>
              <span className="text-xs text-sky font-medium inline-block py-1 px-3 rounded-full bg-slate-800 last:mr-0 mr-0">
                Vercel
              </span>
            </ul>
          </div>
        </div>
        {/* CodeIgniter */}
        <div className="flex flex-col items-center rounded-lg shadow md:flex-row">
          <div className="flex flex-col justify-between md:p-4 leading-normal md:border md:border-slate-800 md:rounded-lg">
            <div className="md:flex md:items-center">
              <Image
                src={codeigniter}
                alt="CodeIgniter"
                className="w-full rounded-md h-auto lg:h-20 md:w-44 lg:w-32 mb-4 border-solid border-2 border-slate-600 lg:hover:border-solid lg:hover:border-2 lg:hover:border-semidark"
              />
              <a
                href="#"
                className="group md:ml-4 mb-2 text-base lg:text-lg font-medium font-title text-primary hover:text-sky"
              >
                My Project CodeIgniter{" "}
                <FiArrowUpRight className="inline-flex transition group-hover:-translate-y-1" />
              </a>
            </div>
            <p className="mb-4 mt-2 md:mt-0 text-sm md:text-md text-semidark">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum,
              placeat delectus sint ab ipsum corporis asperiores reprehenderit
              molestias nisi dolorem.
            </p>
            <ul className="text-xs md:text-sm text-dark flex items-center gap-2 flex-wrap">
              <span className="text-xs text-sky font-medium inline-block py-1 px-3 rounded-full bg-slate-800 last:mr-0 mr-0">
                CodeIgniter
              </span>
              <span className="text-xs text-sky font-medium inline-block py-1 px-3 rounded-full bg-slate-800 last:mr-0 mr-0">
                Framer
              </span>
              <span className="text-xs text-sky font-medium inline-block py-1 px-3 rounded-full bg-slate-800 last:mr-0 mr-0">
                Vercel
              </span>
            </ul>
          </div>
        </div>

        {/* More Projects */}
        {viewMore && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-center rounded-lg shadow md:flex-row"
            >
              <div className="flex flex-col justify-between md:p-4 leading-normal md:border md:border-slate-800 md:rounded-lg">
                <div className="md:flex md:items-center">
                  <Image
                    src={vuejs}
                    alt="Vue.js"
                    className="w-full rounded-md h-auto lg:h-20 md:w-44 lg:w-32 mb-4 border-solid border-2 border-slate-600 lg:hover:border-solid lg:hover:border-2 lg:hover:border-semidark"
                  />
                  <a
                    href="#"
                    className="group md:ml-4 mb-2 text-base lg:text-lg font-medium font-title text-primary hover:text-sky"
                  >
                    My Project Vue.js{" "}
                    <FiArrowUpRight className="inline-flex transition group-hover:-translate-y-1" />
                  </a>
                </div>
                <p className="mb-4 mt-2 md:mt-0 text-sm md:text-md text-semidark">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Earum, placeat delectus sint ab ipsum corporis asperiores
                  reprehenderit molestias nisi dolorem.
                </p>
                <ul className="text-xs md:text-sm text-dark flex items-center gap-2 flex-wrap">
                  <span className="text-xs text-sky font-medium inline-block py-1 px-3 rounded-full bg-slate-800 last:mr-0 mr-0">
                    Vue.js
                  </span>
                  <span className="text-xs text-sky font-medium inline-block py-1 px-3 rounded-full bg-slate-800 last:mr-0 mr-0">
                    Framer
                  </span>
                  <span className="text-xs text-sky font-medium inline-block py-1 px-3 rounded-full bg-slate-800 last:mr-0 mr-0">
                    Vercel
                  </span>
                </ul>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-center rounded-lg shadow md:flex-row"
            >
              <div className="flex flex-col justify-between md:p-4 leading-normal md:border md:border-slate-800 md:rounded-lg">
                <div className="md:flex md:items-center">
                  <Image
                    src={nuxtjs}
                    alt="Nuxt.js"
                    className="w-full rounded-md h-auto lg:h-20 md:w-44 lg:w-32 mb-4 border-solid border-2 border-slate-600 lg:hover:border-solid lg:hover:border-2 lg:hover:border-semidark"
                  />
                  <a
                    href="#"
                    className="group md:ml-4 mb-2 text-base lg:text-lg font-medium font-title text-primary hover:text-sky"
                  >
                    My Project Nuxt.js{" "}
                    <FiArrowUpRight className="inline-flex transition group-hover:-translate-y-1" />
                  </a>
                </div>
                <p className="mb-4 mt-2 md:mt-0 text-sm md:text-md text-semidark">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Earum, placeat delectus sint ab ipsum corporis asperiores
                  reprehenderit molestias nisi dolorem.
                </p>
                <ul className="text-xs md:text-sm text-dark flex items-center gap-2 flex-wrap">
                  <span className="text-xs text-sky font-medium inline-block py-1 px-3 rounded-full bg-slate-800 last:mr-0 mr-0">
                    Nuxt.js
                  </span>
                  <span className="text-xs text-sky font-medium inline-block py-1 px-3 rounded-full bg-slate-800 last:mr-0 mr-0">
                    Framer
                  </span>
                  <span className="text-xs text-sky font-medium inline-block py-1 px-3 rounded-full bg-slate-800 last:mr-0 mr-0">
                    Vercel
                  </span>
                </ul>
              </div>
            </motion.div>
          </>
        )}
      </div>

      {/* Button More Projects */}
      <div className="mt-6 flex items-center justify-center">
        {viewMore ? (
          <button
            onClick={() => setViewMore(false)}
            className="w-36 h-12 text-semidark text-[14px] font-medium hover:text-sky"
          >
            Less Projects
          </button>
        ) : (
          <button
            onClick={() => setViewMore(true)}
            className="w-36 h-12 text-primary text-[14px] font-medium hover:text-sky"
          >
            More Projects
          </button>
        )}
      </div>
    </div>
  );
};

export default Projects;