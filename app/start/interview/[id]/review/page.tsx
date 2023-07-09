

export default function Review({ params }: { params: { id: string } }){

    return(
        <div className="fixed left-1/2 top-1/2">{params.id}</div>
    );
}