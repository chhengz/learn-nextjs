export default async function Dmx({ 
  params, 
}: {
  params: Promise<{ slug: string[] }>;
}) {

  const { slug } = await params;

  if (slug?.length === 2) {
    return (
      <h1>Viewing Dynamix for feature {slug[0]} and concept {slug[1]}</h1>
    );
  } else if (slug?.length === 1) {
    return (
      <h1>Viewing Dynamix for feature {slug[0]}</h1>
    );
  }

  return (
    <div>
      <h1>Dynamix Pages</h1>
    </div>
  );
}
