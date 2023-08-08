import React from 'react';
import logo from './logo.svg';
import './App.css';

//Sections
import Section from './components/section';

//Paintings
import PaintingList from './components/paintingList';
import data from './components/data.json';

// social profile
import ProfileList from './components/aProfile/ProfileList';
import userData from './components/aProfile/profile-user.json';

//statistic
import StatisticList from './components/bStatistics/StatisticList';
import statisticData from './components/bStatistics/data.json';

export default function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div>
                    <Section title="Пример из урока" />
                    <PaintingList items={data} />

                    <Section title="Домашка 1/4" />
                    <Section title="Информация о пользователе" />
                    <ProfileList items={userData} />

                    <Section title="Домашка 2/4" />
                    <StatisticList items={statisticData} title="Stats" />

                    <Section title="Домашка 3/4" />
                    <Section title="Пусто" />

                    <Section title="Домашка 4/4" />
                    <Section title="Пусто" />
                </div>

                <img src={logo} className="App-logo" alt="logo" />
            </header>
        </div>
    );
}

// console.log(Statistic);
