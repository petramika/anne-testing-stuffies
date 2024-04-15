import { Box, Card as MUICard, CardActionArea } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CUSTOM_ELEMENT } from 'utils/constants/testIds';

interface CardProps {
    title: string;
    description: React.ReactNode;
}

const Card = ({
  title,
  description,
}: CardProps) => {
  return (
    <MUICard sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          data-testid={CUSTOM_ELEMENT}
          component="img"
          height="140"
          image="/images/sunny-weather.png"
          alt="sunny weather"
        />
        <CardContent>
          <Typography gutterBottom
            variant="h5"
            component="div"
          >
            {title}
          </Typography>
          <Box>
            {description}
          </Box>
        </CardContent>
      </CardActionArea>
    </MUICard>
  );
};

export default Card;