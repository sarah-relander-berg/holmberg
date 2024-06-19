import { HeroProps } from './Hero';
import { PageSection } from '../PageSection/PageSection';
import { Typography } from '../Typography/Typography';

export const HeroDefault: React.FC<HeroProps> = ({ bgImage, primaryText }) => {
  return (
    <PageSection
      className="-mb-20 bg-matisse-500 bg-center pb-0 pt-96"
      backgroundImage={bgImage}
    >
      {primaryText && (
        <div className="flex flex-row">
          <div className="basis-full sm:basis-1/2">
            <Typography asChild>
              <h1>{primaryText}</h1>
            </Typography>
          </div>
        </div>
      )}
    </PageSection>
  );
};
