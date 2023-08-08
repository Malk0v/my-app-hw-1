import './statistic.css';
export default function Statistic({ label, percentage }) {
    return (
        <div className="item" style={{ backgroundColor: getRandomHexColor() }}>
            <span className="label">{label}</span>
            <span className="percentage">{percentage}</span>
        </div>
    );
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
