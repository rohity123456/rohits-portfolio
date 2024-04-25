import React, { ReactNode } from 'react';

interface RichTextParserProps {
  text: string;
}

const RichTextParser: React.FC<RichTextParserProps> = ({ text }) => {
  const regex = /<(\w+)(?: value="([^"]*)")?>(.*?)<\/\1>/g;
  let match;
  let lastIndex = 0;
  const parts: ReactNode[] = [];

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(
        <span key={lastIndex}>{text.slice(lastIndex, match.index)}</span>
      );
    }

    const [, tag, value, content] = match;
    switch (tag) {
      case 'fontStyle':
        const styles = value?.split(',').reduce((styles, style) => {
          if (style === 'italics') styles.fontStyle = 'italic';
          if (style === 'bold') styles.fontWeight = 'bold';
          return styles;
        }, {} as React.CSSProperties);
        parts.push(
          <span style={styles} key={match.index}>
            {content}
          </span>
        );
        break;
      case 'color':
        parts.push(
          <span style={{ color: value }} key={match.index}>
            {content}
          </span>
        );
        break;
      default:
        parts.push(<span key={match.index}>{content}</span>);
        break;
    }

    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(<span key={lastIndex}>{text.slice(lastIndex)}</span>);
  }

  return <>{parts}</>;
};

export default RichTextParser;
