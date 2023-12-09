import './catFinder.css'
import CustomTable from '../../components/Tables'
import Details from '../../components/Details'
import useCatFinderController from './controller/useCatFinderController'

const CatFinderPage = () => {
    const { tableHeadings, catDetail, catsData } = useCatFinderController()

    return (
        <>
            <div className='d-column-center'>
                <h1>CatFinder</h1>
                <h4>Find your Cats History</h4>
            </div>
            <br /><br />
            <div className='row'>
                <div className='col-6'>
                    <CustomTable
                        heading={tableHeadings}
                        tableData={catsData}
                    />
                </div>
                <div className='col-6'>
                    <Details catDetail={catDetail} />
                </div>
            </div>
        </>
    )
}

export default CatFinderPage