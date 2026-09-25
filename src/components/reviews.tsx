import { Quote } from 'lucide-react';
import { Button, SectionHeading } from './ui';
const samples = [
  { name: 'Alex M.', project: 'Roof replacement', quote: 'The estimate made the scope easy to understand. We knew which materials were being considered and what the next steps would be.' },
  { name: 'Jamie R.', project: 'Roof repair', quote: 'Having someone explain the roof details in plain language made a stressful leak feel much more manageable.' },
  { name: 'Taylor S.', project: 'New roof planning', quote: 'We appreciated a conversation about the whole home, from the look of the roof to ventilation and drainage.' },
];
export default function Reviews({ full = false }: { full?: boolean }) {
  return <section className="section reviews-section"><div className="container">
    <SectionHeading eyebrow="HOMEOWNER PERSPECTIVES" title="What a thoughtful experience can look like." copy="Sample testimonials demonstrating the review layout. These are fictional examples, not customer endorsements.">
      {!full && <Button href="/reviews" variant="button-outline">Explore reviews</Button>}
    </SectionHeading>
    <div className="review-grid">{samples.map(sample=><article className="review-card" key={sample.name}>
      <Quote size={32} strokeWidth={1}/><span className="review-label">SAMPLE · FICTIONAL REVIEW</span>
      <blockquote>{sample.quote}</blockquote>
      <div className="review-person"><span>{sample.name[0]}</span><div><strong>{sample.name} · Sample persona</strong><small>{sample.project}</small></div></div>
    </article>)}</div>
  </div></section>;
}
