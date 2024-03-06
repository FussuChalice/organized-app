import Accordion from '@components/accordion';
import { Stack } from '@mui/material';
import Typography from '@components/typography';
import { IconPersonSearch } from '@icons/index';
import { PublicWitnessingViewProps } from '../public_witnessing_card.types';

const variantColors = {
  orange: 'var(--orange-dark)',
  dashed: 'var(--accent-400)',
  silver: 'var(--grey-300)',
  accent: 'var(--accent-dark)',
  disabled: 'var(--grey-300)',
};

const PublicWitnessingDefaultView = (props: PublicWitnessingViewProps) => {
  const { variant, witnesses, needWitnesses, isContent, ...rest } = props;

  return (
    <Accordion {...rest} variant={variant}>
      {witnesses ? (
        <Stack direction={'column'}>
          {witnesses
            ? witnesses.map((x, index) => (
                <Typography key={index} className={'body-small-semibold'} color={variantColors[variant]}>
                  {x}
                </Typography>
              ))
            : null}
          {isContent && witnesses.length < needWitnesses ? (
            <Stack direction={'row'} alignItems={'center'}>
              <IconPersonSearch color={'var(--orange-dark)'} width={20} height={20} />
              <Typography className={'label-small-medium'} color="var(--orange-dark)">
                Partner needed
              </Typography>
            </Stack>
          ) : null}
        </Stack>
      ) : null}
    </Accordion>
  );
};

export default PublicWitnessingDefaultView;
