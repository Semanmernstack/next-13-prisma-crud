import Link from "next/link";

export default function Home() {  
  return (    


    <main className= " flex items-center justify-center h-screen">


      <Link href={'/product'}> 
        

      <h1 className="text-4xl rounded-lg bg-zinc-900 text-white p-2 animate-pulse">Trizza cakes</h1>

      </Link>
      
      
    </main>
  )
}
