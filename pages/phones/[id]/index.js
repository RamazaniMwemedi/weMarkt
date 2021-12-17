import {useRouter} from 'next/router'
import { server } from '../../../config'
function index() {
    const router= useRouter();
    const { item_name} = router.query

    return (
        <div>
    <h1>{item_name}</h1>
        </div>
    )
}

export default index

// export const getStaticPaths = async () => {
//     const res = await fetch(`${server}/api/phones`)
  
//     const phones = await res.json()
  
//     const ids = phones.map((phone) => phone.id)
//     const paths = ids.map((id) => ({ params: { id: id.toString() } }))
  
//     return {
//       paths,
//       fallback: false,
//     }
//   }