import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeAutoLinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";

export const Doc = defineDocumentType(() => ({
  name: "Doc",
  filePathPattern: `reviews/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    publishedDate: {
      type: "string",
      required: true,
    },
    published: {
      type: "boolean",
      default: false,
    },
    categories: {
      type: "list",
      of: {
        type: "string",
      },
      required: true,
    },
    tags: {
      type: "list",
      of: {
        type: "string",
      },
      required: true,
    },
    new: {
      type: "boolean",
      default: false,
    },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => `/${doc._raw.flattenedPath}`,
    },
    slugAsParams: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
    },
  },
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Doc],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: "dark-plus",
          onVisitLine(node: any) {
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }];
            }
          },
          onVisitHighlightedLine(node: any) {
            node.properties.className.push("line--highlighted");
          },
          onVisitHighlightedWord(node: any) {
            node.properties.className.push("word--highlighted");
          },
        },
      ],
      [
        rehypeAutoLinkHeadings,
        {
          properties: {
            className: ["subheading-anchor"],
            arialabel: "Link to Section",
          },
        },
      ],
    ],
  },
});
