import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import yaml from "js-yaml";
import { unified } from "unified";
import parse from "remark-parse";
import frontmatter from "remark-frontmatter";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadPosts = async () => {
      // Load raw content from all MDX files
      const modules = import.meta.glob("../content/*.mdx", {
        query: "?raw",
        import: "default",
      });
      const loadedPosts = [];

      for (const path in modules) {
        const slug = path.split("/").pop()?.replace(".mdx", "") || "";
        const fileContent = await modules[path]();
        const { data, content } = parseFrontmatter(fileContent);

        loadedPosts.push({
          slug,
          title: data.title,
          description: data.description,
          author: data.author,
          date: data.date,
          category: data.category,
          tags: data.tags || [],
          coverImage: data.coverImage,
          content,
        });
      }

      setPosts(loadedPosts);
    };

    loadPosts();
  }, []);

  /**
   * Parses front matter using remark-frontmatter + js-yaml
   */
  const parseFrontmatter = (fileContent) => {
    const processor = unified().use(parse).use(frontmatter, ["yaml"]);
    const tree = processor.parse(fileContent);

    let data = {};
    let content = fileContent;

    const yamlNode = tree.children.find((node) => node.type === "yaml");
    if (yamlNode) {
      try {
        data = yaml.load(yamlNode.value);
        // Strip out the front matter text from the MDX content
        content = fileContent.replace(/^---[\s\S]*?---/, "").trim();
      } catch (error) {
        console.error("Error parsing front matter:", error);
      }
    }

    return { data, content };
  };

  return (
    <div className="w-full min-h-screen bg-white dark:bg-gray-900 px-6 py-12 md:px-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-center text-3xl font-semibold text-gray-900 dark:text-white mb-10">
          My Blog Posts
        </h1>

        {/* Bento-style grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {posts.map((post) => (
            <Link
              to={`/blog/${post.slug}`}
              key={post.slug}
              className="group relative flex flex-col overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow ring-1 ring-gray-300 dark:ring-gray-700 hover:shadow-md transition"
            >
              {/* Cover Image */}
              {post.coverImage && (
                <div className="w-full h-48 overflow-hidden">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              )}

              {/* Card Content */}
              <div className="p-5 flex flex-col flex-grow">
                {/* Category & Tags */}
                <div className="flex items-center space-x-2 text-xs mb-2">
                  {/* Single Category */}
                  {post.category && (
                    <span className="inline-flex items-center px-2 py-1 bg-indigo-50 dark:bg-indigo-900/25 text-indigo-600 dark:text-indigo-300 font-medium rounded-full">
                      {post.category}
                    </span>
                  )}

                  {/* Multiple Tags */}
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-200 font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white leading-snug group-hover:text-indigo-600">
                  {post.title}
                </h2>

                {/* Description */}
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-300 line-clamp-3 flex-grow">
                  {post.description}
                </p>

                {/* Author & Date */}
                <div className="mt-4 flex items-center space-x-2 text-xs text-gray-400 dark:text-gray-500">
                  {post.author && <span>{post.author}</span>}
                  {post.date && post.author && <span>•</span>}
                  {post.date && (
                    <time dateTime={post.date}>
                      {post.date}
                    </time>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
