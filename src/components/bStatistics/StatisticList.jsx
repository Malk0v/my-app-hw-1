import Statistic from './Statistic';

export default function StatisticList({ items, title }) {
    return (
        <div>
            {title && <h2>{title}</h2>}
            <ul className="stat-list">
                {items.map(item => (
                    <li key={item.id}>
                        <Statistic
                            label={item.label}
                            percentage={item.percentage}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}
