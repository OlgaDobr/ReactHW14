import React, { useState } from 'react';

const translitMap = {
  А: 'A', а: 'a',
  Б: 'B', б: 'b',
  В: 'V', в: 'v',
  Г: 'G', г: 'g',
  Д: 'D', д: 'd',
  Е: 'E', е: 'e',
  Ё: 'Yo', ё: 'yo',
  Ж: 'Zh', ж: 'zh',
  З: 'Z', з: 'z',
  И: 'I', и: 'i',
  Й: 'Y', й: 'y',
  К: 'K', к: 'k',
  Л: 'L', л: 'l',
  М: 'M', м: 'm',
  Н: 'N', н: 'n',
  О: 'O', о: 'o',
  П: 'P', п: 'p',
  Р: 'R', р: 'r',
  С: 'S', с: 's',
  Т: 'T', т: 't',
  У: "U", у: "u",
  Ф: "F", ф: "f",
  Х: "Kh", х:"kh",
  Ц:"Ts", ц:"ts",
  Ч:"Ch", ч:"ch",
  Ш:"Sh", ш:"sh",
  Щ:"Shch", щ:"shch",
  Ы:"Y", ы:"y",
  Э:"E", э:"e",
  Ю:"Yu", ю:"yu",
  Я:"Ya", я:"ya",
};

function Transliterate(text) {
  return text.split('').map(char => translitMap[char] || char).join('');
}

function App() {
  const [inputText, setInputText] = useState('');
  
  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const transliteratedText = Transliterateransliterate(inputText);

  return (
    <div style={{ padding:'20px' }}>
      <h2>Транслитерация текста</h2>
      <div style={{ display:'flex', flexDirection:'column', maxWidth:'400px' }}>
        <label>Введите текст:</label>
        <textarea
          rows={4}
          value={inputText}
          onChange={handleInputChange}
          style={{ marginBottom:'20px' }}
        />
        <label>Транслитерированный текст:</label>
        <textarea
          rows={4}
          value={transliteratedText}
          readOnly
        />
      </div>
    </div>
  );
}

export default App;
