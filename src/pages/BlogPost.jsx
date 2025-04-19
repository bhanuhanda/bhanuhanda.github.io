import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { compile } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";
import { MDXProvider } from "@mdx-js/react";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

const parseFrontmatter = (raw) => {
    const match = raw.match(/^---\n([\s\S]*?)\n---\n/);
    let frontmatter = {};
    let content = raw;

    if (match) {
        const yaml = match[1];
        content = raw.slice(match[0].length);

        yaml.split("\n").forEach((line) => {
            const [key, ...rest] = line.split(":");
            if (key && rest.length) {
                const value = rest.join(":").trim();
                frontmatter[key.trim()] = value
                    .replace(/^"(.*)"$/, "$1")
                    .replace(/^'(.*)'$/, "$1");
            }
        });
    }

    return { content, data: frontmatter };
};

const BlogPost = () => {
    const { slug } = useParams();
    const [MdxModule, setMdxModule] = useState(null);
    const [frontmatter, setFrontmatter] = useState(null);

    useEffect(() => {
        const loadPost = async () => {
            const file = await import(`../content/${slug}.mdx?raw`);
            const { content, data } = parseFrontmatter(file.default);

            setFrontmatter(data);

            const compiled = await compile(content, {
                outputFormat: "function-body",
                remarkPlugins: [remarkFrontmatter, remarkGfm],
                rehypePlugins: [rehypeHighlight],
                useDynamicImport: false,
            });

            const fn = new Function(String(compiled));
            const mod = fn({ ...runtime });

            setMdxModule(() => mod.default);
        };

        loadPost();
    }, [slug]);

    if (!MdxModule || !frontmatter)
        return <div className="text-center mt-20">Loading...</div>;

    const { title, description, date, author, coverImage } = frontmatter;

    return (
        <div className="bg-white dark:bg-gray-800 w-full">
            <article className="max-w-3xl px-4 lg:px-0 mx-auto pt-16 pb-32 text-base text-zinc-800 dark:text-zinc-100 ">
                <header className="mb-12 text-center">
                    <div className="text-sm uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                        {date} · {author}
                    </div>
                    <h1 className="text-4xl font-semibold mt-2 text-zinc-900 dark:text-white">
                        {title}
                    </h1>
                    <p className="mt-4 text-zinc-600 dark:text-zinc-300">
                        {description}
                    </p>
                    {coverImage && (
                        <img
                            src={coverImage}
                            alt={title}
                            className="rounded-2xl mt-8 mx-auto max-h-[400px] object-cover w-full"
                        />
                    )}
                </header>

                <section className="prose dark:prose-invert prose-zinc max-w-none prose-pre:bg-gray-100 dark:prose-pre:bg-gray-900 prose-pre:p-4 prose-pre:rounded-lg">
                    <MDXProvider>{MdxModule && <MdxModule />}</MDXProvider>
                </section>
            </article>
        </div>
    );
};

export default BlogPost;
