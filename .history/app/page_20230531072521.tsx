import Link from "next/link"
import AddPrisma from "./components/AddPrisma"


export default function Home() {
  return (
    <main className="bg-gray-100">


      <Link href={'/product'}>
        <AddPrisma/>

      <table className="table w-full items-center">
        <thead>
          <tr className="items-center">
            <th>*</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Brand</th>
          </tr>
        </thead>
        <tbody>
          
          <tr>
            <td>Shining Star</td>
            <td>Earth, Wind, and Fire</td>
            <td>1975</td>
            <td>777</td>
          </tr>
        </tbody>
      </table>

      </Link>
      
      
    </main>
  )
}
