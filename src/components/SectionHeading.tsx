export function SectionHeading({ num, id, title }: { num: string; id: string; title: string }) {
  return (
    <div>
      <p className="section-num">{num}</p>
      <h2 id={id} className="section-title">
        {title}
      </h2>
    </div>
  )
}
