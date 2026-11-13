import { SVG } from "./svgs";

export function HorizontalWords() {
  return (
      <section data-bg-section="light" data-theme-section="light" className="horizontal-words">
        <div className="horizontal-words__content">
          <div className="horizontal-words__relative">
            <h2 className="display horizontal-words__h2" aria-label="We wanna be where the work is">
              We wanna be where the work is
            </h2>
            <div className="horizontal-words__sticker-watch">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 104 134" fill="none" className="horizontal-words__sticker-svg" dangerouslySetInnerHTML={{ __html: SVG.sc3478a }} />
            </div>
            <div className="horizontal-words__sticker-cursor">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 161" fill="none" className="horizontal-words__sticker-svg" dangerouslySetInnerHTML={{ __html: SVG.s630559 }} />
            </div>
            <div className="horizontal-words__sticker-phone">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 146" fill="none" className="horizontal-words__sticker-svg" dangerouslySetInnerHTML={{ __html: SVG.sde7a5b }} />
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 127" fill="none" className="horizontal-words__arrow-end-svg" dangerouslySetInnerHTML={{ __html: SVG.sf37481 }} />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 386 127" fill="none" className="horizontal-words__arrow-svg" dangerouslySetInnerHTML={{ __html: SVG.s2aa57a }} />
          </div>
          <div className="horizontal-words__bottom-text">
            <p className="horizontal-words__bottom-text-l">
              Opportunities are more scattered{" "}
              <em>
                and
              </em>
              {" "}more reachable than ever. Eight AI partners help you find, prove and land the roles of the new mainstream.
            </p>
          </div>
        </div>
      </section>
  );
}
