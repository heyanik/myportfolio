# How to Use Markdown in ReactJS

Markdown is a lightweight markup language that allows you to format text easily and quickly. It is widely used in various applications, including blogging platforms, documentation systems, and note-taking tools. If you are working with ReactJS, integrating markdown support into your project can enhance the flexibility and user-friendliness of your application. In this blog post, we will explore how to use markdown in ReactJS and leverage its power to create dynamic and interactive content.

## Step 1: Installing Dependencies

To start using markdown in ReactJS, you will need to install a markdown parser library. One popular choice is `react-markdown`, which provides a React component to render markdown content. Install it by running the following command in your project directory:

<br>

```
 npm install react-markdown
```

<br>

## Step 2: Importing the Markdown Component

Once you have installed the necessary dependencies, you can import the `react-markdown` component into your ReactJS application. Open the file where you want to use markdown and add the following import statement:

```jsx
import ReactMarkdown from "react-markdown";
```

## Step 3: Rendering Markdown Content

With the `react-markdown` component imported, you can now render markdown content within your React components. Simply pass the markdown text as a prop to the `ReactMarkdown` component, like this:

```jsx
<ReactMarkdown>
  # Hello, Markdown! This is a *bold* and _italic_ text. - Item 1 - Item 2 -
  Item 3
</ReactMarkdown>
```

<br>

The `ReactMarkdown` component will parse the markdown and render it as HTML elements in your React application. You can use all the standard markdown syntax, such as headings, emphasis, lists, links, and more.

## Step 4: Advanced Customization

The `react-markdown` library provides various options to customize the rendering of markdown content. You can pass additional props to the `ReactMarkdown` component to control its behavior. For example, you can add syntax highlighting for code blocks using the `remark-gfm `and `rehype-highlight` libraries:

```jsx
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vs } from "react-syntax-highlighter/dist/esm/styles/prism";

<ReactMarkdown
  components={{
    code: ({ node, inline, className, children, ...props }) => {
      const match = /language-(\w+)/.exec(className || "");
      return !inline && match ? (
        <SyntaxHighlighter
          style={vs}
          language={match[1]}
          PreTag="div"
          children={String(children).replace(/\n$/, "")}
          {...props}
        />
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      );
    },
  }}
>
```

This example demonstrates how to use the `SyntaxHighlighter` component from the `react-syntax-highlighter` library to highlight code blocks with the VS Code theme (`vs`).
<br>

## Step 5: Styling Markdown Content

By default, the `react-markdown` component renders markdown content with basic styling. You can apply your own styles by targeting the generated HTML elements using CSS. Each markdown element corresponds to an HTML tag, making it easy to customize the appearance of your markdown content.
<br>

## Conclusion

Using markdown in your ReactJS applications can provide a convenient and flexible way to create and manage formatted

<br>
<a className="cd-style" href="./">cd ..</a>
<br>
<br>
<br>
<span className="copyright-txt">2022-PRESENT © Anik Das Partha</span>
