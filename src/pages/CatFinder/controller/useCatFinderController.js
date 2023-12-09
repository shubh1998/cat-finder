import { useEffect, useState } from "react"
import { fetchCatsListService } from "../../../networks/services/cats.service"

const useCatFinderController = () => {
  const [catsData, setCatsData] = useState([])
  const [catDetail, setCatDetail] = useState(null)

  const handleViewCatDetail = (details) => {
    setCatDetail(details)
  }

  const handleFetchCatsData = async () => {
    const res = await fetchCatsListService({ limit: 10, page: 0 })
    setCatsData(res)
  }

  useEffect(() => {
    handleFetchCatsData()
  }, [])

  const tableHeadings = [
    {
      name: "Breed Name",
      value: 'name',
      type: 'text'
    },
    {
      name: "Breed Origin",
      value: 'origin',
      type: 'text'
    },
    {
      name: "Action",
      value: 'Details',
      type: 'button',
      handleClick: handleViewCatDetail
    }
  ]

  return {
    tableHeadings,
    catDetail,
    catsData
  }
}

export default useCatFinderController