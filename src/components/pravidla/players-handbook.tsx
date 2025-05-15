import Title, { TitleLevel } from '../shared/title'

const PlayersHandbook = () => {
    return (
        <div className='flex flex-col px-4 sm:px-0 w-full sm:w-11/12'>
                <Title level={TitleLevel.H2} className='text-center'>Příručka hráče</Title>
        </div>
    )
}

export default PlayersHandbook
