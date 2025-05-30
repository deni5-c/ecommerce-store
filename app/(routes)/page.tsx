import Container from "@/components/ui/container";
import Billboard from "@/components/billboard";
import getBillboard from "@/actions/get-billboard";

export const revalidate = 0;

const HomePage = async () => {
    const billboard = await getBillboard("2f20f450-556f-40f5-af1d-ebba8b03be79");
    
    return (
        <div className="font-bold">
            <Container>
                <div className="space-y-10 pb-10">
                    <Billboard data={billboard}/>
                </div>
            </Container>
        </div>
    );
}

export default HomePage;