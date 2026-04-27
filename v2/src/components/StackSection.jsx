import { StackCard } from './StackCard';
import { SCHEMES } from '../constants/schemes';
import { STACK } from '../data/stack';

export function StackSection({ scheme }) {
  const s = SCHEMES[scheme] || SCHEMES['purple-pink'];

  return (
    <section className="stack-section" id="stack">
      <div className="section-tag" style={{ color: s.a }}>
        Stack Tecnológico
      </div>
      <h2 className="section-title" style={{ marginBottom: 40 }}>
        Herramientas que
        <br />
        uso a diario
      </h2>

      <div className="stack-carousel-wrap">
        <div className="stack-carousel-track">
          {[...STACK, ...STACK].map((item, i) => (
            <StackCard key={i} item={item} scheme={scheme} />
          ))}
        </div>
      </div>
    </section>
  );
}
