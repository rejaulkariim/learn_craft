function SectionHeader({ span, h1, p }) {
  return (
    <div className="flex items-center flex-col text-center py-10 space-y-2">
      <span className="text-md font-bold uppercase tracking-wider">{span}</span>
      <h1 className="text-4xl font-bold">{h1}</h1>
      <p>{p}</p>
    </div>
  );
}

export default SectionHeader;
