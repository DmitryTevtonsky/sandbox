/* eslint-disable react/no-array-index-key */
/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './index.css';

const TestBox = () => {
  const [emojisImagesList, setEmojisImages] = useState([]);
  const [emojis, setEmojis] = useState({});

  useEffect(() => {
    axios
      .get('https://api.github.com/emojis')
      .then(({ data }) => {
        setEmojis(data);

        const imagesURLs = Object.values(data);
        console.log('imagesURLs', imagesURLs);
        setEmojisImages(imagesURLs);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  console.log('emojis', emojis);

  return (
    <div className="test-box">
      {Object.keys(emojis).map((emojiName, index) => {
        if (index < 125) {
          const emojiImg = emojis[emojiName];
          return (
            <div className="emoji-block">
              <div className="emoji-title">{emojiName}</div>
              <img
                width="64"
                height="64"
                alt={`${emojiName}-key-${index}`}
                key={`${emojiName}-key-${index}`}
                src={emojiImg}
              />
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default TestBox;
