import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';

const MarkdownComponent = ({ markdownFile }) => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    axios.get(markdownFile)
      .then((response) => {
        setMarkdown(response.data);
      });
  }, [markdownFile]);

  return <ReactMarkdown>{markdown}</ReactMarkdown>;
};

export default MarkdownComponent;
