
'use client';

import { ChangeEvent, useState } from 'react';
import * as Wanakana from 'wanakana';



export default function Home() {

  const [hiragana, setHiragana] = useState<string>('');
  const [katakana, setKatakana] = useState<string>('');
  const [romaji, setRomaji] = useState<string>('');
  const [variado, setVariado] = useState<string>('');

  const handleHiraganaChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputText = event.target.value;
    setHiragana(Wanakana.toHiragana(inputText));
  };

  const handleKatakanaChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputText = event.target.value;
    setKatakana(Wanakana.toKatakana(inputText));
  };

  const handleRomajiChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputText = event.target.value;
    setRomaji(Wanakana.toRomaji(inputText));
  };

  const handleVariado= (event: ChangeEvent<HTMLInputElement>) => {
    const inputText = event.target.value;
    setVariado(inputText);
  };


  return (
    <div>
      <h3>Conversão de Texto Japonês (Next.js)</h3>

      <label htmlFor="hiragana-input"  className='ml-2'>Hiragana: </label>
      <input
        className='text-black ml-2'
        type="text"
        id="hiragana-input"
        value={hiragana}
        onChange={handleHiraganaChange}
      />

      <label htmlFor="katakana-input"  className='ml-2'>Katakana: </label>
      <input
        className='text-black ml-2'
        type="text"
        id="katakana-input"
        value={katakana}
        onChange={handleKatakanaChange}
      />

      <label htmlFor="romaji-input" className='ml-2'>
        Romaji: 
      </label>
      <input
        className=' text-black ml-2'
        type="text"
        id="romaji-input"
        value={romaji}
        onChange={handleRomajiChange}
      />

      <label htmlFor="variados-input" className='ml-2'>
        Variado: 
      </label>
      <input
        className=' text-black ml-2'
        type="text"
        lang="ja"
        id="variados-input"
        value={variado}
        onChange={handleVariado}
      />
  </div>
    
  )
}
