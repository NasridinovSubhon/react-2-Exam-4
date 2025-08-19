import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"


const GetById = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(GetById())
  }, [])

  const { dataById } = useSelector(state => state)

  console.log(dataById);


  return (
    <div>

    </div>
  )
}

export default GetById

