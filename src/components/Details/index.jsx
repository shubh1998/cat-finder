import './details.css'

const Details = ({ catDetail }) => {
    return (
        <>
            <h1>Cat Details</h1>
            {
                catDetail ? (
                    <div className='detail-box-container'>
                        <img src={catDetail.image.url} alt="cat_image" className='img-container' />
                        <div>
                            <h6>Name: {catDetail.name}</h6>
                            <h6>Origin: {catDetail.origin}</h6>
                            <h6>Weight (in metric): {catDetail.weight.metric}</h6>
                            <h6>Hairless: {catDetail.hairless ? 'Yes' : 'No'}</h6>
                            <a href={catDetail.wikipedia_url} target='_blank'>
                                Know more about cats
                            </a>
                        </div>
                    </div>
                ) : (
                    <h4>Please click on view details to know more about cats.</h4>
                )
            }
        </>
    )
}

export default Details