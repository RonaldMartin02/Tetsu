export default function Roster() {
    
    const roster = [
        {
            img : 'https://via.placeholder.com/150',
            name: 'XanderSemiLitt',
        },
        {
            img : 'https://via.placeholder.com/150',
            name: 'XanderUnLitt',
        }
    ]
    return (
        <div>
            <h1>Roster</h1>
            <div>
                <h2>Tetsu Pro Champion</h2>
                <h3>XanderLitt</h3>
            </div>
            {roster.map((wrestler) => () => {
                <div>
                    <img src={wrestler.img} alt="" />
                    <h2>{wrestler.name}</h2>
                    <h3></h3>
                </div>
            })}
        </div>
    )
}