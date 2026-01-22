export function DubaiMap() {
  return (
    <div className="w-full h-[400px] overflow-hidden shadow-md">
      <iframe
        title="Dubai Map"
        src="https://www.google.com/maps?q=Dubai,UAE&z=12&output=embed"
        className="w-full h-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
