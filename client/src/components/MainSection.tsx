import React, { SetStateAction, useState } from "react";
import ProjectCard from "./ProjectCard";
import { div } from "framer-motion/client";
import FreelancerContact from "./Contact";

interface IProject {
  title: string;
  description: string;
  href: string;
  icon: string;
  tags: string[];
}

const MainSection = ({
  setSelectedItem,
}: {
  setSelectedItem: React.Dispatch<SetStateAction<string>>;
}) => {
  const [blogs, setBlogs] = useState<string[]>([
    "This is first blog",
    "This is second blog",
  ]);

  const [projects, setProjects] = useState<IProject[]>([
    {
      title: "Metaverse App",
      description: "Create virtual spaces",
      tags: ["typescript", "phaser", "trpc", "webrtc", "socket.io"],
      href: "",
      icon: "",
    },
    {
      title: "Metaverse App",
      description: "Create virtual spaces",
      tags: ["typescript", "phaser", "trpc", "webrtc", "socket.io"],
      href: "",
      icon: "",
    },
  ]);

  return (
    <div>
      <p className="text-2xl">Recent Blogs</p>
      {blogs.map((blog) => (
        <div className="bg-[#27272A] mx-auto cursor-pointer px-2 w-[93%] py-4 rounded-md my-4">
          {blog}
        </div>
      ))}
      <p
        className="text-center cursor-pointer"
        onClick={() => {
          setSelectedItem("Blogs");
        }}
      >
        {" "}
        Check Out All Blogs{" "}
      </p>

      <p className="text-2xl my-4">Recent Projects</p>
      <div className="flex flex-wrap my-4">
        {projects.map((project) => (
          <ProjectCard
            title={project.title}
            description={project.description}
            href={project.href}
            icon={project.icon}
            tags={project.tags}
          />
        ))}
      </div>
      <p
        className="text-center cursor-pointer"
        onClick={() => {
          setSelectedItem("Projects");
        }}
      >
        {" "}
        Check Out All Projects{" "}
      </p>

      <div className="mt-8" >
        <p className="text-2xl" >Contact</p>
        <FreelancerContact />
      </div>
    </div>
  );
};

export default MainSection;
