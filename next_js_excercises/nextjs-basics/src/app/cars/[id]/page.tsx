export default function Cars({ params }: { params: { id: string } }) {
  return <h1>Car ID: {params.id}</h1>;
}

export async function getStaticPaths(){
	const paths={params: { id: "tesla"}};
	
	return {paths,fallback:false};
}