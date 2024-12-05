import React, { SetStateAction, useState } from "react";
import ProjectCard from "./ProjectCard";
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
    <div className="w-full">
      {/* Blogs Section */}
      <section className="mb-8">
        <p className="text-xl md:text-2xl mb-4">Recent Blogs</p>
        <div className="space-y-4">
          {blogs.map((blog, index) => (
            <div 
              key={index} 
              className="bg-[#27272A] w-full px-4 py-4 rounded-md hover:bg-[#2C2C30] transition-colors"
            >
              {blog}
            </div>
          ))}
        </div>
        <p
          className="text-center cursor-pointer mt-4 text-sm md:text-base hover:text-blue-500 transition-colors"
          onClick={() => setSelectedItem("Blogs")}
        >
          Check Out All Blogs
        </p>
      </section>

      {/* Projects Section */}
      <section className="mb-8">
        <p className="text-xl md:text-2xl my-4">Recent Projects</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              href={project.href}
              icon={project.icon}
              tags={project.tags}
            />
          ))}
        </div>
        <p
          className="text-center cursor-pointer mt-4 text-sm md:text-base hover:text-blue-500 transition-colors"
          onClick={() => setSelectedItem("Projects")}
        >
          Check Out All Projects
        </p>
      </section>

      {/* Contact Section */}
      <section className="mt-8">
        <p className="text-xl md:text-2xl mb-4">Contact</p>
        <FreelancerContact />
      </section>
    </div>
  );
};

export default MainSection;