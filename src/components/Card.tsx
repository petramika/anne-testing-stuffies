import { Box, Card as MUICard } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

interface CardProps {
    title: string;
    description: React.ReactNode;
}

export const Card = ({
    title,
    description
}: CardProps) => {
  return (
    <MUICard sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/images/sunny-weather.png"
          alt="sunny weather"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Box>
            {description}
          </Box>
        </CardContent>
      </CardActionArea>
    </MUICard>
  );
}