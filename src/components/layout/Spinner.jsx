import spinner from './assets/react-github-finder-spinner.gif'

function Spinner() {

    return (
        <div className='w-100 mt-20'>   
        <img src={spinner} width={180} className='text-center mx-auto' alt="Loading" />
        </div>
    )

}

export default Spinner