import { useState } from 'react';
import { Title } from './components/title.component';
import { NameLength } from './components/name-length.component';
import { NameReverse } from './components/name-reverse.component';

import './styles.css';

export default function App() {
  const [name, setName] = useState('Nicolas');

  return (
    <div className="app">
      <Title name={name} />
      <NameLength name={name} />
      <NameReverse name={name} />
    </div>
  );
}
