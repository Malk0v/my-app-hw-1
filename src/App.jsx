import logo from './logo.svg';
import './App.css';
import React from 'react';
import PaintingList from './components/paintingList';
import data from './components/data.json';
import Section from './components/section';

export default function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div>
                    <Section title="наш топовый магаз" />
                    <Section title="продукция по предзаказу" />
                    <Section title="готовая продукция" />
                    <PaintingList items={data} />
                </div>

                <img src={logo} className="App-logo" alt="logo" />
            </header>
        </div>
    );
}
