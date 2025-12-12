export default function FilterCafes({value, onChange}) {
    const handleSwap = (e) => {
        onChange(e.target.value)
    }
    return <div className="controls">
        <select name="subway" id="subway" value={value} onChange={handleSwap}>
            <option value="All">Все</option>
            <option value="Arbat">Арбатская</option>
            <option value="Alexanders Garden">Александровский сад</option>
            <option value="Moscow">Московская</option>
            <option value="Culture">Парк Культуры</option>
            <option value="Theater">Театральная</option>
        </select>
    </div>
}