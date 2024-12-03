import Container from "@/components/ui/container"

const Cookie = () =>{
    return(
        <>
        <Container>
           <div className=" bg-softWhiteCpx-48 py-12">
            <div className="relative text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-medium text-blackC">Cookie-Einstellungen</h1>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 pt-4">
            <div className="md:w-1/2 pt-2">left half</div>
            <div className="md:w-1/2 pt-2">right half</div>
          </div>
           </div>


        </Container>
        </>
    )
}
export default Cookie