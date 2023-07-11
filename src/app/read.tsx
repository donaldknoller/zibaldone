import React from 'react';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkReact from 'remark-react';

// Specify the path to your Markdown file
const markdownContent = readFileSync('./stuff/example.md', 'utf-8');

export default function Page() = () => {

    const processor = unified().use(remarkParse).use(remarkReact);
  
    return <div>{processor.processSync(markdownContent).result}</div>;
  };
  